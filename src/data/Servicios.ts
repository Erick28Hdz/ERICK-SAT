export type Service = {
  categoria: string;
  nombre: string;
  descripcion: string;
  dificultad: string;
  tiempo: string;
  precioMin: string;
  precioMax: string;
  entregables: string[];
};


export const servicios: Service[] = [
  // 🔐 Ciberseguridad
  {
    categoria: "Ciberseguridad",
    nombre: "Escaneo Nmap + Informe PDF",
    descripcion: "Descubra el estado de su red con un escaneo profesional de puertos abiertos y servicios en ejecución. Ideal para pymes y profesionales que deseen un diagnóstico inicial de seguridad, incluye un informe detallado en PDF con recomendaciones prácticas.",
    dificultad: "Básico",
    tiempo: "2–3 días",
    precioMin: "150.000",
    precioMax: "250.000",
    entregables: ["Informe PDF", "Contrato y Factura", "Extras"]
  },
  {
    categoria: "Ciberseguridad",
    nombre: "Pentesting básico automatizado",
    descripcion: "Detecte vulnerabilidades en sus sistemas antes que los atacantes lo hagan. Mediante herramientas de pentesting automatizadas, realizamos un análisis controlado de su infraestructura, ideal para validar la exposición real de su empresa y fortalecerla a tiempo.",
    dificultad: "Medio",
    tiempo: "4–6 días",
    precioMin: "250.000",
    precioMax: "600.000",
    entregables: ["Código fuente", "Informe PDF", "Video de uso (opcional)", "Contrato y Factura", "Extras"]
  },
  {
    categoria: "Ciberseguridad",
    nombre: "Auditoría CMS",
    descripcion: "¿Su sitio web está construido con un gestor de contenido? Realizamos una revisión profunda de seguridad en plataformas como WordPress, Joomla o Drupal, detectando plugins vulnerables, malas configuraciones y accesos inseguros. Incluye guía de remediación y mejores prácticas.",
    dificultad: "Medio",
    tiempo: "4–8 días",
    precioMin: "300.000",
    precioMax: "700.000",
    entregables: ["Informe PDF", "Contrato y Factura", "Extras"]
  },
  {
    categoria: "Ciberseguridad",
    nombre: "Monitoreo LAN + Alertas",
    descripcion: "Proteja su red local en tiempo real. Este servicio detecta nuevos dispositivos conectados a su red LAN y envía alertas automáticas a su Telegram cuando hay actividad sospechosa. Ideal para hogares, oficinas o negocios que requieren visibilidad inmediata.",
    dificultad: "Medio",
    tiempo: "3–5 días",
    precioMin: "250.000",
    precioMax: "500.000",
    entregables: ["Código fuente", "Manual PDF", "Contrato y Factura", "Extras"]
  },
  {
    categoria: "Ciberseguridad",
    nombre: "Sistema de Backup automático",
    descripcion: "Automatice el respaldo seguro de sus archivos más importantes. Diseñamos un sistema de copias de seguridad periódicas con envío cifrado a nubes como Google Drive o MEGA. Evite pérdidas irreversibles y mantenga sus datos protegidos ante cualquier incidente.",
    dificultad: "Medio",
    tiempo: "5–7 días",
    precioMin: "280.000",
    precioMax: "650.000",
    entregables: ["Código fuente", "Manual PDF", "Contrato y Factura", "Extras"]
  },
  {
    categoria: "Ciberseguridad",
    nombre: "Alertador de accesos a puertos",
    descripcion: "Detecte intentos sospechosos de conexión antes de que sea tarde. Este sistema registra toda actividad entrante hacia los puertos de su red o servidor, enviando alertas y generando logs detallados para análisis forense. Un escudo proactivo para su entorno digital.",
    dificultad: "Básico",
    tiempo: "2–3 días",
    precioMin: "170.000",
    precioMax: "320.000",
    entregables: ["Código fuente", "Manual PDF", "Reporte de pruebas", "Contrato y Factura", "Extras"]
  },
  {
    categoria: "Ciberseguridad",
    nombre: "Análisis de redes WiFi",
    descripcion: "Mejore la seguridad de su red inalámbrica con un análisis integral. Detectamos accesos no autorizados, debilidades en la configuración del router, y optimizamos su entorno WiFi para mayor seguridad y rendimiento. Ideal para hogares y oficinas pequeñas.",
    dificultad: "Medio",
    tiempo: "3–6 días",
    precioMin: "200.000",
    precioMax: "450.000",
    entregables: ["Informe de auditoría", "Recomendaciones de seguridad", "Manual PDF", "Contrato y Factura", "Extras"]
  },
  {
    categoria: "Ciberseguridad",
    nombre: "Autenticador de doble factor",
    descripcion: "Fortalezca el acceso a sus sistemas con doble capa de seguridad. Implementamos autenticación basada en códigos OTP (One-Time Password), compatibles con aplicaciones como Google Authenticator o Authy. Proteja su negocio contra accesos no autorizados.",
    dificultad: "Intermedio",
    tiempo: "6–8 días",
    precioMin: "350.000",
    precioMax: "750.000",
    entregables: ["Código fuente", "Manual de usuario", "Documentación técnica", "Contrato y Factura", "Extras"]
  },

  {
    categoria: "Ciberseguridad",
    nombre: "Diseño de red local segura",
    descripcion: "Diseñamos un esquema completo de red local con segmentación inteligente y medidas de seguridad efectivas que protegen tu infraestructura ante amenazas internas y externas. Ideal para pequeñas y medianas empresas que buscan mantener sus datos y comunicaciones protegidos sin complicaciones.",
    dificultad: "Medio",
    tiempo: "3–5 días",
    precioMin: "300.000",
    precioMax: "600.000",
    entregables: ["Diagrama de red", "Informe de seguridad", "Manual de configuración", "Contrato y Factura", "Extras"]
  },

  {
    categoria: "Scripts personalizados",
    nombre: "Limpieza de archivos basura",
    descripcion: "Optimiza el rendimiento de tus sistemas Linux, Windows o Android eliminando archivos innecesarios y temporales que ralentizan tu equipo. Aumenta la velocidad y libera espacio con un script personalizado, fácil y seguro para mantener tu equipo siempre rápido y limpio.",
    dificultad: "Básico",
    tiempo: "1–2 días",
    precioMin: "100.000",
    precioMax: "200.000",
    entregables: ["Código script", "Manual de uso", "Contrato y Factura", "Extras"]
  },
  {
    categoria: "Scripts personalizados",
    nombre: "Bloqueador de IPs maliciosas",
    descripcion: "Protege tu red automáticamente contra ataques y accesos no autorizados con un script que utiliza iptables o IPSet para bloquear IPs maliciosas en tiempo real. Ideal para mantener la seguridad sin necesidad de supervisión constante, con alertas y registros de actividad.",
    dificultad: "Medio",
    tiempo: "2–3 días",
    precioMin: "200.000",
    precioMax: "400.000",
    entregables: ["Código script", "Manual de configuración", "Logs de pruebas", "Contrato y Factura", "Extras"]
  },
  {
    categoria: "Scripts personalizados",
    nombre: "Generador de contraseñas seguras",
    descripcion: "Obtén claves fuertes y seguras al instante con una app o script que genera contraseñas robustas y difíciles de vulnerar. Perfecto para mejorar la seguridad de tus cuentas personales o corporativas, con opciones personalizables según tus necesidades.",
    dificultad: "Básico",
    tiempo: "1 día",
    precioMin: "50.000",
    precioMax: "200.000",
    entregables: ["Código fuente", "Manual de usuario", "Contrato y Factura", "Extras"]
  },
  {
    categoria: "Scripts personalizados",
    nombre: "Escáner LAN",
    descripcion: "Detecta y monitorea todos los dispositivos conectados a tu red local con un escáner rápido y confiable. Perfecto para gestionar tu red doméstica o empresarial y detectar posibles intrusos o equipos desconocidos, aumentando tu control y seguridad.",
    dificultad: "Medio",
    tiempo: "2–4 días",
    precioMin: "200.000",
    precioMax: "380.000",
    entregables: ["Código script", "Informe de dispositivos detectados", "Manual de uso", "Contrato y Factura", "Extras"]
  },
  {
    categoria: "Scripts personalizados",
    nombre: "Monitoreo de sitios web",
    descripcion: "Mantente informado al instante sobre la disponibilidad y estado de tus sitios web mediante alertas automáticas. Este sistema de monitoreo te ayuda a detectar caídas o problemas de rendimiento, asegurando la continuidad de tu presencia online sin preocupaciones.",
    dificultad: "Medio",
    tiempo: "2–5 días",
    precioMin: "200.000",
    precioMax: "420.000",
    entregables: ["Código fuente", "Manual de usuario", "Reporte de monitoreo", "Contrato y Factura", "Extras"]
  },

  // 🎨 Plantillas y aplicaciones web
  {
    categoria: "Plantillas y aplicaciones web",
    nombre: "App Android de contraseñas",
    descripcion: "Aplicación móvil para generar y almacenar contraseñas seguras, que te ayuda a gestionar tus credenciales de forma sencilla y protegida. Perfecta para usuarios que desean mejorar su seguridad digital con comodidad y rapidez.",
    dificultad: "Medio",
    tiempo: "4–7 días",
    precioMin: "150.000",
    precioMax: "300.000",
    entregables: ["Código fuente", "APK instalable", "Manual PDF de usuario", "Contrato y Factura", "Soporte post-entrega"]
  },
  {
    categoria: "Plantillas y aplicaciones web",
    nombre: "Login seguro con Captcha",
    descripcion: "Implementamos una página de inicio de sesión con sistema Captcha que evita ataques automatizados y protege el acceso a tus plataformas, aumentando la seguridad contra bots y accesos no autorizados.",
    dificultad: "Básico",
    tiempo: "1–2 días",
    precioMin: "70.000",
    precioMax: "120.000",
    entregables: ["Código fuente", "Manual PDF de instalación", "Contrato y Factura", "Extras"]
  },
  {
    categoria: "Plantillas y aplicaciones web",
    nombre: "Plantilla HTML5 + Tailwind",
    descripcion: "Sitio web moderno y atractivo con diseño responsivo usando HTML5 y Tailwind CSS, ideal para comenzar tu presencia digital con estilo y funcionalidad, adaptable a cualquier dispositivo.",
    dificultad: "Básico",
    tiempo: "2–3 días",
    precioMin: "90.000",
    precioMax: "150.000",
    entregables: ["Código fuente", "Manual PDF de uso", "Contrato y Factura", "Extras"]
  },
  {
    categoria: "Plantillas y aplicaciones web",
    nombre: "Portafolio dinámico personalizable",
    descripcion: "Muestra tus proyectos y servicios en un portafolio web dinámico y totalmente personalizable, con diseño profesional y funcionalidades que harán destacar tu trabajo ante clientes y empleadores.",
    dificultad: "Medio",
    tiempo: "3–5 días",
    precioMin: "120.000",
    precioMax: "200.000",
    entregables: ["Código fuente", "Manual PDF de usuario y personalización", "Contrato y Factura", "Extras"]
  },
  {
    categoria: "Plantillas y aplicaciones web",
    nombre: "Mini tienda en línea (eCommerce)",
    descripcion: "Desarrollamos una tienda online funcional con simulación de ventas y carrito de compras, perfecta para emprendedores que quieren iniciar su negocio digital con una plataforma atractiva y fácil de usar.",
    dificultad: "Medio–Alto",
    tiempo: "4–7 días",
    precioMin: "180.000",
    precioMax: "350.000",
    entregables: ["Código fuente", "Manual PDF de usuario y administración", "Contrato y Factura", "Extras"]
  },

  // 🖥️ Sistemas
  {
    categoria: "Educación y Formación",
    nombre: "Instalación de distros Linux",
    descripcion: "Instalamos y configuramos distribuciones populares como Fedora, Ubuntu y Kali, dejándote un sistema optimizado, seguro y listo para tus proyectos o estudios sin complicaciones técnicas.",
    dificultad: "Medio",
    tiempo: "2–3 días",
    precioMin: "180.000",
    precioMax: "250.000",
    entregables: ["Informe de instalación", "Manual PDF básico", "Contrato y Factura", "Soporte post-instalación"]
  },
  {
    categoria: "Educación y Formación",
    nombre: "Configuración de máquinas virtuales",
    descripcion: "Configuramos entornos virtuales seguros y eficientes con VirtualBox o QEMU para que puedas probar sistemas, aplicaciones o entornos de desarrollo sin afectar tu equipo principal.",
    dificultad: "Medio",
    tiempo: "2–4 días",
    precioMin: "150.000",
    precioMax: "300.000",
    entregables: ["Informe de configuración", "Manual PDF de uso", "Contrato y Factura", "Soporte post-configuración"]
  },

  // 🚀 Optimización
  {
    categoria: "Scripts personalizados",
    nombre: "Optimización de RAM y CPU",
    descripcion: "Realizamos ajustes personalizados en tu sistema operativo para maximizar el rendimiento de RAM y CPU, logrando que tu equipo funcione más rápido y con mayor eficiencia en tareas diarias o profesionales.",
    dificultad: "Básico",
    tiempo: "1–2 días",
    precioMin: "100.000",
    precioMax: "180.000",
    entregables: ["Scripts optimizados", "Manual PDF de ejecución", "Contrato y Factura", "Extras"]
  },

  // 🔄 Automatización
  {
    categoria: "Scripts personalizados",
    nombre: "Automatización de tareas en Linux",
    descripcion: "Creamos scripts en Bash o Python que automatizan tus tareas diarias en Linux, ahorrándote tiempo y esfuerzo para que puedas concentrarte en lo que realmente importa.",
    dificultad: "Medio",
    tiempo: "2–3 días",
    precioMin: "150.000",
    precioMax: "300.000",
    entregables: ["Código fuente de scripts", "Manual PDF de uso", "Contrato y Factura", "Extras"]
  },

  // 📡 Análisis de tráfico
  {
    categoria: "Scripts personalizados",
    nombre: "Análisis de paquetes con Wireshark",
    descripcion: "Capturamos y analizamos el tráfico de red para detectar anomalías y posibles amenazas, ofreciéndote un reporte claro que te ayudará a mantener la seguridad y el rendimiento de tu red bajo control.",
    dificultad: "Medio",
    tiempo: "2–4 días",
    precioMin: "200.000",
    precioMax: "400.000",
    entregables: ["Reporte de análisis", "Manual PDF de interpretación", "Contrato y Factura", "Extras"]
  },

  // 🗂️ Backups
  {
    categoria: "Scripts personalizados",
    nombre: "Script de respaldo incremental",
    descripcion: "Implementamos backups automáticos e incrementales para proteger tus archivos importantes, garantizando que tu información esté siempre segura y disponible en caso de imprevistos.",
    dificultad: "Medio",
    tiempo: "2–5 días",
    precioMin: "200.000",
    precioMax: "500.000",
    entregables: ["Código fuente del script", "Manual PDF de configuración", "Contrato y Factura", "Extras"]
  },

  // 📘 Educación y Formación
  {
    categoria: "Educación y Formación",
    nombre: "Cursos por niveles (básico a avanzado)",
    descripcion: "Ofrecemos cursos estructurados desde nivel básico hasta avanzado para que aprendas a tu ritmo y desarrolles habilidades sólidas en las áreas que más te interesan.",
    dificultad: "Medio–Alto",
    tiempo: "2 a 6 semanas por curso",
    precioMin: "200.000",
    precioMax: "600.000",
    entregables: [
      "Material didáctico digital (PDF, diapositivas, videos)",
      "Acceso a plataforma o portal de aprendizaje",
      "Evaluaciones y ejercicios prácticos",
      "Certificado de finalización",
      "Soporte y seguimiento durante el curso"
    ]
  },
  {
    categoria: "Educación y Formación",
    nombre: "Scripts educativos con documentación",
    descripcion: "Recibe scripts desarrollados con explicación paso a paso para que comprendas cada línea de código y mejores tus conocimientos prácticos y teóricos.",
    dificultad: "Medio",
    tiempo: "3–5 días",
    precioMin: "80.000",
    precioMax: "150.000",
    entregables: [
      "Scripts comentados y documentados",
      "Guía paso a paso explicativa",
      "Ejemplos de uso práctico",
      "Soporte para dudas durante 7 días"
    ]
  },
  {
    categoria: "Educación y Formación",
    nombre: "Asesorías personalizadas",
    descripcion: "Sesiones de capacitación individual o grupal por videollamada, diseñadas para resolver dudas, guiar proyectos y acelerar tu aprendizaje en áreas específicas.",
    dificultad: "Variable",
    tiempo: "Por sesión",
    precioMin: "50.000",
    precioMax: "150.000",
    entregables: [
      "Sesión en vivo por videollamada",
      "Grabación de la sesión (si se solicita)",
      "Material complementario personalizado",
      "Plan de seguimiento y tareas recomendadas"
    ]
  },
  {
    categoria: "Educación y Formación",
    nombre: "Artículos técnicos y tutoriales",
    descripcion: "Publicamos artículos técnicos y tutoriales detallados en blogs o formato PDF, diseñados para enseñar, informar y atraer a tu audiencia con contenido claro y práctico que potencia tu presencia digital y posicionamiento en línea.",
    dificultad: "Básico–Medio",
    tiempo: "1–2 días por artículo",
    precioMin: "50.000",
    precioMax: "120.000",
    entregables: [
      "Artículo técnico o tutorial en formato PDF y/o blog",
      "Imágenes o diagramas explicativos",
      "Optimización SEO básica (si aplica)",
      "Revisión y corrección antes de entrega"
    ]
  },

  // 🌐 Desarrollo Web por Niveles
  {
    categoria: "Desarrollo Web por Niveles",
    nombre: "Tarjetas multimedia interactivas",
    descripcion: "Creamos tarjetas interactivas con contenido multimedia completo: texto descriptivo de eventos, imágenes, audio y video, con diseño responsivo que se adapta perfectamente a cualquier dispositivo, ideal para promocionar eventos o productos de forma atractiva y moderna.",
    dificultad: "Básico",
    tiempo: "3–5 días",
    precioMin: "100.000",
    precioMax: "150.000",
    entregables: [
      "Tarjetas interactivas responsivas en HTML/CSS/JS",
      "Integración de multimedia (imágenes, audio, video)",
      "Pruebas de compatibilidad en dispositivos móviles y escritorio",
      "Documentación breve para su uso y actualización"
    ]
  },
  {
    categoria: "Desarrollo Web por Niveles",
    nombre: "Landing page básica",
    descripcion: "Desarrollamos landing pages efectivas y atractivas, con contenido descriptivo claro, formularios de contacto y elementos multimedia que capturan la atención de tus visitantes, ideal para lanzar productos, servicios o campañas promocionales con resultados inmediatos.",
    dificultad: "Básico",
    tiempo: "1–2 semanas",
    precioMin: "300.000",
    precioMax: "600.000",
    entregables: [
      "Landing page responsiva y optimizada",
      "Formulario de contacto funcional",
      "Elementos multimedia integrados",
      "Optimización SEO básica",
      "Manual básico de uso y edición"
    ]
  },
  {
    categoria: "Desarrollo Web por Niveles",
    nombre: "Página web básica 1",
    descripcion: "Diseñamos páginas web completas que incluyen inicio, contacto y servicios, con estructura intuitiva y diseño amigable para que tus clientes encuentren fácilmente lo que necesitan, creando una presencia sólida y profesional en internet.",
    dificultad: "Básico",
    tiempo: "2–3 semanas",
    precioMin: "500.000",
    precioMax: "900.000",
    entregables: [
      "Sitio web con secciones: inicio, contacto, servicios",
      "Diseño responsivo y amigable",
      "Formulario de contacto funcional",
      "Optimización SEO básica",
      "Manual de administración del sitio"
    ]
  },
  {
    categoria: "Desarrollo Web por Niveles",
    nombre: "Página web básica 2",
    descripcion: "Mejoramos la página web básica incluyendo multimedia moderna y animaciones sutiles para enriquecer la experiencia del usuario, logrando un sitio más dinámico y atractivo que refleje mejor tu identidad de marca y cautive a tus visitantes.",
    dificultad: "Medio",
    tiempo: "3–4 semanas",
    precioMin: "750.000",
    precioMax: "1.200.000",
    entregables: [
      "Página web básica con multimedia integrada",
      "Animaciones CSS/JS sutiles para UX mejorado",
      "Optimización para dispositivos móviles y SEO",
      "Capacitación para actualizar contenido",
      "Soporte técnico inicial"
    ]
  },
  {
    categoria: "Desarrollo Web por Niveles",
    nombre: "Plataforma básica 3",
    descripcion: "Implementamos una plataforma web completa que integra tu sitio con redes sociales, formularios de contacto y elementos de ciberseguridad básica para proteger tu presencia digital, ideal para negocios que quieren empezar a conectar con su audiencia de forma segura y profesional.",
    dificultad: "Medio",
    tiempo: "5–6 semanas",
    precioMin: "1.250.000",
    precioMax: "1.950.000",
    entregables: [
      "Plataforma web responsiva con integración redes sociales",
      "Formularios de contacto y suscripciones",
      "Implementación de medidas básicas de seguridad",
      "Panel de administración básico",
      "Documentación técnica y capacitación",
      "Soporte post-lanzamiento por 30 días"
    ]
  },
 {
  categoria: "Desarrollo Web por Niveles",
  nombre: "Plataforma corporativa 1",
  descripcion: "Desarrollamos un sitio web corporativo completo con blog, galería multimedia y funciones de seguridad básicas, ideal para empresas que buscan proyectar una imagen sólida y confiable, con herramientas para comunicar y mostrar su trabajo de forma profesional.",
  dificultad: "Medio–Alto",
  tiempo: "2.5 meses",
  precioMin: "2.000.000",
  precioMax: "2.950.000",
  entregables: [
    "Sitio web corporativo responsivo con blog y galería multimedia",
    "Funciones básicas de seguridad implementadas",
    "Panel administrativo completo",
    "Optimización SEO avanzada",
    "Capacitación para administración y actualización",
    "Soporte técnico durante 60 días"
  ]
},
{
  categoria: "Desarrollo Web por Niveles",
  nombre: "Plataforma corporativa 2",
  descripcion: "Creamos plataformas escalables con diseño moderno, mayor capacidad de contenido y funcionalidades avanzadas para satisfacer las necesidades crecientes de tu empresa, con foco en usabilidad, rendimiento y seguridad reforzada para proteger tus activos digitales.",
  dificultad: "Alto",
  tiempo: "3 meses",
  precioMin: "3.000.000",
  precioMax: "3.950.000",
  entregables: [
    "Plataforma corporativa escalable con diseño moderno",
    "Funciones avanzadas de seguridad y rendimiento",
    "Integración con sistemas externos (CRM, ERP, etc.)",
    "Panel administrativo avanzado",
    "Capacitación especializada",
    "Soporte y mantenimiento por 90 días"
  ]
},
{
  categoria: "Desarrollo Web por Niveles",
  nombre: "Plataforma corporativa 3",
  descripcion: "Diseñamos plataformas corporativas con funciones avanzadas como comercio electrónico, analítica web detallada y ciberseguridad avanzada, ofreciendo una solución completa para empresas que buscan maximizar su presencia digital y ventas en línea con total tranquilidad.",
  dificultad: "Muy alto",
  tiempo: "4 meses",
  precioMin: "4.000.000",
  precioMax: "6.000.000",
  entregables: [
    "Plataforma corporativa con comercio electrónico integrado",
    "Analítica web avanzada y reportes personalizados",
    "Ciberseguridad avanzada implementada",
    "Panel administrativo con múltiples roles",
    "Capacitación y documentación técnica completa",
    "Soporte técnico y mantenimiento extendido (120 días)"
  ]
},
{
  categoria: "Desarrollo Web por Niveles",
  nombre: "Plataformas personalizadas",
  descripcion: "Creamos plataformas completamente personalizadas desde cero, incorporando multimedia, integración con IA opcional, diseños basados en Figma y planos detallados, además de soporte postventa dedicado para asegurar el éxito y evolución continua de tu proyecto digital.",
  dificultad: "Avanzado",
  tiempo: "Según proyecto",
  precioMin: "7.000.000",
  precioMax: "20.000.000",
  entregables: [
    "Plataforma web totalmente personalizada desde cero",
    "Diseño basado en prototipos Figma y planos detallados",
    "Integración de multimedia avanzada e IA opcional",
    "Documentación completa del desarrollo",
    "Capacitación y soporte postventa dedicado",
    "Planes de evolución y actualizaciones futuras"
  ]
},
  {
    categoria: "Desarrollo Web por Niveles",
    nombre: "Plataforma con I.A.",
    descripcion: "Desarrollamos plataformas de última generación que integran inteligencia artificial para análisis de datos, funcionalidades inteligentes y automatización, con soporte técnico avanzado y ciberseguridad de primer nivel, pensadas para empresas que buscan innovación y liderazgo tecnológico.",
    dificultad: "Premium",
    tiempo: "Según complejidad",
    precioMin: "30.000.000",
    precioMax: "1.000.000.000",
    entregables: [
    "Plataforma avanzada con integración de IA y automatización",
    "Análisis de datos y reportes inteligentes",
    "Ciberseguridad de primer nivel implementada",
    "Soporte técnico avanzado 24/7",
    "Documentación técnica detallada y formación"]
  }
];

