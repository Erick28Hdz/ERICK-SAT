export interface Article {
  title: string;
  slug: string;
  desc: string;
  content: string;
  category: "ciberseguridad" | "scripts" | "formación" | "casos";
  image?: string;
  fecha: string;
}

const articles: Article[] = [
  {
    title: "¿Qué es Nmap?",
    slug: "que-es-nmap",
    desc: "Descubre cómo esta poderosa herramienta puede escanear puertos y servicios activos en una red para evaluar su seguridad.",
    content: `
Nmap (Network Mapper) es una herramienta de código abierto para exploración de red y auditoría de seguridad. Su propósito principal es escanear grandes redes rápidamente, aunque también funciona bien contra hosts únicos.

Puedes usar Nmap para:
- Detectar qué hosts están disponibles en la red.
- Identificar qué servicios (nombre de aplicación y versión) esos hosts ofrecen.
- Determinar el sistema operativo que ejecutan.
- Detectar firewalls o filtros de paquetes.

Por ejemplo, el comando:
\`\`\`
nmap -sS 192.168.1.1
\`\`\`
realiza un escaneo SYN para identificar puertos abiertos en la IP especificada.

Nmap es fundamental para tareas de pentesting, reconocimiento y monitoreo de redes empresariales.
    `,
    category: "ciberseguridad",
    image: "/images/nmap.jpg",
    fecha: "2025-07-15",
  },

  {
    title: "Cómo proteger tu red doméstica",
    slug: "que-es-nmap",
    desc: "Guía paso a paso para configurar tu router, cambiar contraseñas por defecto, activar firewalls y asegurar tus dispositivos IoT.",
    content: `
Proteger tu red doméstica es esencial para evitar accesos no autorizados y garantizar tu privacidad.

Pasos clave:
1. **Cambia la contraseña del router**: Nunca uses la que viene por defecto.
2. **Actualiza el firmware**: Asegúrate de que tu router tenga la última versión del sistema.
3. **Activa el firewall interno**.
4. **Desactiva WPS** y oculta el SSID si es posible.
5. **Filtra direcciones MAC** para restringir qué dispositivos se pueden conectar.
6. **Divide tu red**: Crea una red para invitados y otra privada para tus dispositivos.

Además, evita usar contraseñas débiles. Usa una combinación de mayúsculas, números y caracteres especiales.
    `,
    category: "ciberseguridad",
    image: "/images/red-domestica.jpg",
    fecha: "2025-06-28",
  },

  // Puedes continuar con los demás artículos igual.
];

export default articles;
