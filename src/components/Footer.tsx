import React from "react";
import "../styles/footer.css"; // Asegúrate de tener este archivo

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo o nombre */}
        <div className="footer-brand">
          <h1 className="footer-title">ERICK SOFTWARE AND TECHNOLOGY</h1>
          <p className="footer-copy">
            &copy; {new Date().getFullYear()} - Todos los derechos reservados
          </p>
        </div>

        {/* Enlaces legales */}
        <div className="footer-links">
          <a href="#">Aviso legal</a>
          <a href="#">Política de privacidad</a>
          <a href="#">Términos de uso</a>
        </div>

        {/* Redes sociales */}
        <div className="footer-socials">
          <a
            href="mailto:erick.hdz9628@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Gmail"
          >
            <svg
              className="icon gmail"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
            >
              <title>Gmail</title>
              <path fill="#EA4335" d="M502.3 190.8v211.1c0 24.6-20 44.6-44.6 44.6H54.3c-24.6 0-44.6-20-44.6-44.6V190.8L256 345.9 502.3 190.8z" />
              <path fill="#34A853" d="M54.3 100.5c-24.6 0-44.6 20-44.6 44.6V190.8L256 345.9 502.3 190.8v-45.7c0-24.6-20-44.6-44.6-44.6H54.3z" />
              <path fill="#FBBC04" d="M256 270.6L9.7 115.5C15.6 102.4 29.3 93.1 44.6 93.1h422.7c15.3 0 29 9.3 34.9 22.4L256 270.6z" />
              <path fill="#4285F4" d="M0 159.2v242.7c0 24.6 20 44.6 44.6 44.6h422.7c24.6 0 44.6-20 44.6-44.6V159.2L256 326.4 0 159.2z" />
            </svg>
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <svg className="icon facebook" viewBox="0 0 24 24">
              <path d="M22 12a10 10 0 1 0-11.6 9.8v-6.9h-2.6v-2.9h2.6v-2.2c0-2.6 1.5-4 3.8-4 1.1 0 2.3.2 2.3.2v2.6h-1.3c-1.3 0-1.7.8-1.7 1.6v1.8h2.9l-.5 2.9h-2.4v6.9A10 10 0 0 0 22 12" />
            </svg>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <svg className="icon twitter" viewBox="0 0 24 24">
              <path d="M22.46 6c-.77.35-1.6.59-2.46.7a4.28 4.28 0 0 0 1.88-2.37 8.56 8.56 0 0 1-2.7 1.04 4.26 4.26 0 0 0-7.3 3.9 12.12 12.12 0 0 1-8.8-4.46 4.26 4.26 0 0 0 1.32 5.7 4.23 4.23 0 0 1-1.93-.53v.05a4.26 4.26 0 0 0 3.42 4.18 4.29 4.29 0 0 1-1.92.07 4.27 4.27 0 0 0 3.98 2.96 8.55 8.55 0 0 1-5.3 1.83A8.7 8.7 0 0 1 2 19.54 12.07 12.07 0 0 0 8.29 21c7.54 0 11.67-6.26 11.67-11.68 0-.18 0-.35-.01-.53A8.35 8.35 0 0 0 22.46 6z" />
            </svg>
          </a>
          <a
            href="https://wa.me/3022016072"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <svg
              className="icon whatsapp"
              viewBox="0 0 32 32"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16.003 0C7.165 0 0 7.165 0 16c0 2.818.736 5.464 2.014 7.778L0 32l8.473-2.22A15.93 15.93 0 0016.003 32C24.837 32 32 24.837 32 16 32 7.165 24.837 0 16.003 0zm0 29.333c-2.778 0-5.365-.778-7.567-2.109l-.545-.333-5.035 1.333 1.368-4.938-.352-.565A13.25 13.25 0 012.667 16c0-7.375 5.961-13.333 13.336-13.333 7.374 0 13.336 5.958 13.336 13.333 0 7.374-5.962 13.333-13.336 13.333zm7.255-9.776c-.4-.2-2.366-1.164-2.733-1.296-.366-.134-.634-.2-.9.2-.267.4-1.034 1.296-1.267 1.562-.234.267-.467.3-.867.1-.4-.2-1.692-.622-3.224-1.982-1.19-1.062-1.992-2.373-2.223-2.774-.233-.4-.024-.616.176-.816.18-.18.4-.467.6-.7.2-.233.267-.4.4-.667.133-.267.067-.5 0-.7-.067-.2-.9-2.167-1.233-2.967-.324-.775-.655-.67-.9-.68-.233-.01-.5-.012-.767-.012-.267 0-.7.1-1.067.5-.367.4-1.4 1.367-1.4 3.334 0 1.967 1.433 3.867 1.633 4.133.2.267 2.824 4.317 6.844 6.053 2.553 1.1 3.545 1.2 4.825 1.1 1.15-.084 2.366-.966 2.7-1.9.334-.934.334-1.733.233-1.9-.1-.167-.367-.267-.767-.467z" />
            </svg>
          </a>
          <a
            href="https://www.tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
          >
            <svg
              className="icon tiktok"
              viewBox="0 0 256 256"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              fill="#25F4EE"
            >
              <title>TikTok</title>
              <path d="M163.5,32.2c-5.6-6.7-9-14.9-9-24.1h-27v136.8c0,19.7-16,35.6-35.6,35.6S56.3,164.6,56.3,144.9c0-19.7,16-35.6,35.6-35.6 4.4,0,8.6,0.8,12.4,2v-36.7c-4-0.7-8-1.1-12-1.1-39.8,0-72,32.2-72,72s32.2,72,72,72s72-32.2,72-72v-75.4c13.7,10.8,30.4,17.2,48,18.4V40C181.4,40,170,37.6,163.5,32.2z" />
            </svg>
          </a>

          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <svg className="icon youtube" viewBox="0 0 576 512" fill="currentColor">
              <path d="M549.7 124.1c-6.3-23.6-24.8-42.1-48.4-48.4C456.4 64 288 64 288 64S119.6 64 74.7 75.7c-23.6 6.3-42.1 24.8-48.4 48.4C14.7 168 14.7 256 14.7 256s0 88 11.6 131.9c6.3 23.6 24.8 42.1 48.4 48.4C119.6 448 288 448 288 448s168.4 0 213.3-11.6c23.6-6.3 42.1-24.8 48.4-48.4C561.3 344 561.3 256 561.3 256s0-88-11.6-131.9zM232 336V176l142 80-142 80z" />
            </svg>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <svg className="icon linkedin" viewBox="0 0 24 24">
              <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM8 9h4v2h.1a4.4 4.4 0 0 1 4-2c4.3 0 5 2.8 5 6.4V21h-4v-6.1c0-1.5 0-3.4-2-3.4s-2 1.4-2 3.3V21H8z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
