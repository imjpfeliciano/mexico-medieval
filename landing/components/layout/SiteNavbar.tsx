"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { isNewsletterSubscriptionsEnabled } from "@/lib/feature-flags";
import { isNavItemActive, siteNavItems } from "@/lib/site-nav-config";

function navLinkClass(active: boolean) {
  return active
    ? "text-primary border-b-2 border-tertiary-fixed-dim pb-1"
    : "text-primary-container hover:text-primary transition-colors duration-300";
}

export function SiteNavbar() {
  const pathname = usePathname() ?? "";
  const showNewsletter = isNewsletterSubscriptionsEnabled();

  return (
    <nav
      className="sticky top-0 z-50 w-full border-b border-outline-variant/20 bg-[#fef9ef]/90 shadow-sm backdrop-blur-md dark:bg-[#1d1c16]/90 dark:shadow-none"
      aria-label="Primary"
    >
      <div className="mx-auto flex max-w-screen-2xl items-center justify-between px-4 py-4 md:px-8">
        <Link
          href="/"
          className="font-headline text-2xl font-bold tracking-widest text-primary dark:text-tertiary-fixed-dim"
        >
          México Medieval
        </Link>

        <details className="relative md:hidden">
          <summary className="cursor-pointer list-none rounded-lg border border-outline-variant/30 px-3 py-2 text-sm font-medium text-primary">
            Menu
          </summary>
          <div className="absolute right-0 mt-2 w-52 rounded-lg border border-outline-variant/20 bg-surface-container-lowest py-2 shadow-lg">
            {siteNavItems.map((item) => (
              <Link
                key={item.href + item.label}
                href={item.href}
                className="block px-4 py-2 text-sm text-primary-container hover:bg-surface-container-high"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </details>

        <div className="hidden items-center space-x-8 font-headline font-bold tracking-tight md:flex">
          {siteNavItems.map((item) => (
            <Link
              key={item.href + item.label}
              href={item.href}
              className={navLinkClass(isNavItemActive(pathname, item.href))}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-6 sm:flex">
          <button
            type="button"
            className="material-symbols-outlined text-primary rounded-full p-2 transition-colors hover:bg-surface-container/50"
            aria-label="Search"
          >
            search
          </button>
          {showNewsletter ? (
            <button
              type="button"
              className="bg-primary px-6 py-2 font-label text-sm uppercase tracking-widest text-on-primary transition-transform hover:opacity-90 active:scale-95"
            >
              Subscribe
            </button>
          ) : null}
        </div>
      </div>
    </nav>
  );
}
