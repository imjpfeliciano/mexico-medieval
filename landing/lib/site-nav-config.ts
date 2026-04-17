export type SiteNavItem = {
  href: string;
  label: string;
};

/** Primary navigation — single source of truth for `SiteNavbar`. */
export const siteNavItems: SiteNavItem[] = [
  { href: "/libros", label: "Books" },
  { href: "/articulos", label: "Articles" },
  { href: "/podcast", label: "Podcast" },
  { href: "/videos", label: "Videos" },
  { href: "/papers", label: "Papers" },
  { href: "#", label: "Teaching" },
];

export function isNavItemActive(pathname: string, href: string): boolean {
  if (!href || href === "#") return false;
  const base = href.split("#")[0] ?? "";
  if (!base) return false;
  if (base === "/") return pathname === "/";
  return pathname === base || pathname.startsWith(`${base}/`);
}
