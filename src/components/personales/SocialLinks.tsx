import React from "react";
import { socialLinks, type SocialKey } from "../../data/socialLinks";

interface SocialLinksProps {
  hide?: SocialKey[];
}

const SocialLinks: React.FC<SocialLinksProps> = ({ hide = [] }) => {
  const visibleLinks = socialLinks.filter((item) => !hide.includes(item.key));

  return (
    <div className="flex justify-center flex-wrap gap-2">
      {visibleLinks.map((item) => {
        const Icon = item.icon;

        return (
          <a
            key={item.key}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: item.color }}
            className="
              p-2
              transition-all
              duration-300
              hover:scale-110
              hover:brightness-125
              hover:drop-shadow-[0_0_4px_var(--color-light-blue)]
            "
          >
            <Icon size={28} />
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;