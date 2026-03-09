import {
  FaWhatsapp,
  FaTelegramPlane,
  FaGithub,
  FaInstagram,
  FaYoutube,
  FaFacebook,
  FaTiktok,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export type SocialKey =
  | "whatsapp"
  | "telegram"
  | "github"
  | "instagram"
  | "youtube"
  | "facebook"
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
    key: "telegram",
    href: "https://t.me/ErickSAT46",
    icon: FaTelegramPlane,
    color: "#229ED9",
  },
  {
    key: "github",
    href: "https://github.com/Erick28Hdz",
    icon: FaGithub,
    color: "#333",
  },
  {
    key: "instagram",
    href: "https://www.instagram.com/erick.hdz9628",
    icon: FaInstagram,
    color: "#E1306C",
  },
  {
    key: "facebook",
    href: "https://www.facebook.com/tu_usuario",
    icon: FaFacebook,
    color: "#1877F2",
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
    color: "#000",
  },
  {
    key: "gmail",
    href: "mailto:erick.hdz9628@gmail.com",
    icon: MdEmail,
    color: "#D14836",
  },
];