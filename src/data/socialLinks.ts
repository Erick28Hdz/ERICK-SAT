import {
  FaWhatsapp,
  FaInstagram,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export type SocialKey =
  | "whatsapp"
  | "instagram"
  | "youtube"
  | "tiktok"
  | "gmail";

export interface SocialItem {
  key: SocialKey;
  href: string;
  icon: React.ComponentType<{ size?: number }>;
  color: string;
}

export const socialLinks: SocialItem[] = [
  {
    key: "whatsapp",
    href: "https://wa.me/573022016072",
    icon: FaWhatsapp,
    color: "#25D366",
  },
  {
    key: "instagram",
    href: "https://www.instagram.com/erick.hdz9628",
    icon: FaInstagram,
    color: "#E1306C",
  },
  {
    key: "youtube",
    href: "https://www.youtube.com/@tu_usuario",
    icon: FaYoutube,
    color: "#FF0000",
  },
  {
    key: "tiktok",
    href: "https://www.tiktok.com/@tu_usuario",
    icon: FaTiktok,
    color: "#fff",
  },
  {
    key: "gmail",
    href: "mailto:erick.hdz9628@gmail.com",
    icon: MdEmail,
    color: "#D14836",
  },
];