import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// rate limit simple en memoria
const rateLimit = new Map<string, { count: number; lastRequest: number }>();

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const ip =
    (req.headers["x-forwarded-for"] as string)?.split(",")[0] ||
    req.socket?.remoteAddress ||
    "unknown";

  const now = Date.now();
  const windowTime = 60 * 1000; // 1 minuto
  const maxRequests = 5;

  const record = rateLimit.get(ip);

  if (record) {
    if (now - record.lastRequest < windowTime && record.count >= maxRequests) {
      return res.status(429).json({ error: "Too many requests" });
    }

    if (now - record.lastRequest > windowTime) {
      rateLimit.set(ip, { count: 1, lastRequest: now });
    } else {
      record.count++;
      record.lastRequest = now;
      rateLimit.set(ip, record);
    }
  } else {
    rateLimit.set(ip, { count: 1, lastRequest: now });
  }

  const { name, email, message, company } = req.body as {
    name: string;
    email: string;
    message: string;
    company?: string; // honeypot
  };

  // honeypot
  if (company) {
    return res.status(200).json({ success: true });
  }

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing fields" });
  }

  try {

    await resend.emails.send({
      from: "ERICK-SAT <contacto@ericksat.com>",
      to: process.env.CONTACT_EMAIL as string,
      subject: `Nuevo contacto desde ERICK-SAT`,
      html: `
      <div style="font-family:Arial,Helvetica,sans-serif;background:#f5f5f5;padding:30px">
        <div style="max-width:600px;margin:auto;background:white;border-radius:10px;padding:30px">

          <div style="text-align:center;margin-bottom:20px">
            <img src="https://erick-sat.vercel.app/logo.png" width="80"/>
            <h2 style="margin:10px 0;color:#111">ERICK-SAT</h2>
            <p style="color:#666">Software & Technology</p>
          </div>

          <hr style="border:none;border-top:1px solid #eee;margin:20px 0"/>

          <h3>Nuevo contacto desde el sitio web</h3>

          <p><b>Nombre:</b> ${name}</p>
          <p><b>Email:</b> ${email}</p>

          <p><b>Mensaje:</b></p>
          <div style="background:#f7f7f7;padding:15px;border-radius:6px">
            ${message}
          </div>

          <hr style="border:none;border-top:1px solid #eee;margin:20px 0"/>

          <p style="font-size:13px;color:#777">
            Este mensaje fue enviado desde el formulario de contacto del sitio web de ERICK-SAT.
          </p>

        </div>
      </div>
      `,
    });

    return res.status(200).json({ success: true });

  } catch (error) {
    console.error("Error enviando correo:", error);
    return res.status(500).json({ error: "Error enviando correo" });
  }
}