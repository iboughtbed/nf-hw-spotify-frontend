import type { FooterItem, MainNavItem } from "~/types";

const links = {
  instagram: "https://instagram.com",
  github: "https://github.com/iboughtbed",
};

export const siteConfig = {
  name: "Spotify",
  url: "https://iboughtbed-nf-hw-spotify.vercel.app/",
  ogImage: "https://iboughtbed-nf-hw-spotify.vercel.app/og.png",
  description: "A spotify clone",
  links,
  mainNav: [] satisfies MainNavItem[],
  footerNav: [
    {
      title: "Help",
      items: [
        { title: "About", href: "/", external: false },
        { title: "Contact", href: "/", external: false },
        { title: "Terms", href: "/", external: false },
        { title: "Privacy", href: "/", external: false },
      ],
    },
    {
      title: "Social",
      items: [
        {
          title: "Instagram",
          href: links.instagram,
          external: true,
        },
      ],
    },
  ] satisfies FooterItem[],
};

export type SiteConfig = typeof siteConfig;
