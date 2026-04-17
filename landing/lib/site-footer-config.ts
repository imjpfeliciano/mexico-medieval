import { siteNavItems } from "@/lib/site-nav-config";

export type SiteFooterLink = {
  href: string;
  label: string;
};

/** Section routes from primary nav (excludes in-page anchors such as Teaching). */
export const footerExploreLinks: SiteFooterLink[] = siteNavItems.filter(
  (item) => item.href !== "#",
);

export const footerLegalLinks: SiteFooterLink[] = [
  { href: "#", label: "The Archivist's Circle" },
  { href: "#", label: "Manuscript Rights" },
  { href: "#", label: "Scholarly Ethics" },
  { href: "/contacto", label: "Contact the Scribe" },
];
