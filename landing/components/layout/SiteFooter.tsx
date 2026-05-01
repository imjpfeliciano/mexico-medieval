import Link from "next/link";
import { isNewsletterSubscriptionsEnabled } from "@/lib/feature-flags";
import {
  footerExploreLinks,
  footerLegalLinks,
} from "@/lib/site-footer-config";
import { FooterNewsletterForm } from "./FooterNewsletterForm";

const footerHeadingClass =
  "font-headline mb-4 text-xs font-bold uppercase tracking-[0.2em] text-primary dark:text-tertiary-fixed-dim";

const footerLinkClass =
  "text-sm text-primary-container decoration-tertiary-fixed-dim underline-offset-4 transition-colors hover:text-primary hover:underline dark:text-surface-variant/90 dark:hover:text-tertiary-fixed";

export function SiteFooter() {
  const showNewsletter = isNewsletterSubscriptionsEnabled();

  return (
    <footer
      className="mt-auto w-full border-t-4 border-tertiary-fixed-dim bg-[#f2ede3] dark:bg-[#1d1c16]"
      role="contentinfo"
    >
      <div className="mx-auto max-w-screen-2xl px-6 py-16 md:px-12">
        <div
          className={`grid gap-12 md:grid-cols-2 ${showNewsletter ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}
        >
          <div className="space-y-4">
            <div className="font-headline text-xl text-primary italic dark:text-tertiary-fixed-dim">
              México Medieval
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-primary-container dark:text-surface-variant/80">
              An illuminated scholarly archive: manuscripts, podcasts, and
              research on medieval Hispanic worlds.
            </p>
          </div>

          <nav aria-label="Explore the archive">
            <h2 className={footerHeadingClass}>Explore</h2>
            <ul className="space-y-3">
              {footerExploreLinks.map((item) => (
                <li key={item.href + item.label}>
                  <Link href={item.href} className={footerLinkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Legal and contact">
            <h2 className={footerHeadingClass}>Legal &amp; ethics</h2>
            <ul className="space-y-3">
              {footerLegalLinks.map((item) => (
                <li key={item.href + item.label}>
                  <Link href={item.href} className={footerLinkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {showNewsletter ? (
            <div>
              <h2 className={footerHeadingClass}>Newsletter</h2>
              <p className="mb-4 text-sm text-primary-container/80 dark:text-surface-variant/75">
                Occasional updates on new digitized material and episodes.
              </p>
              <FooterNewsletterForm />
            </div>
          ) : null}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-outline-variant/20 pt-8 md:flex-row dark:border-outline-variant/30">
          <p className="text-center text-xs uppercase tracking-widest text-primary-container/70 md:text-left dark:text-surface-variant/65">
            © MMXXIV México Medieval. An Illuminated Scholarly Archive.
          </p>
          <div className="flex gap-2 text-primary dark:text-tertiary-fixed-dim">
            <button
              type="button"
              className="material-symbols-outlined rounded-full p-2 transition-opacity hover:opacity-70"
              aria-label="Share"
            >
              share
            </button>
            <button
              type="button"
              className="material-symbols-outlined rounded-full p-2 transition-opacity hover:opacity-70"
              aria-label="Library"
            >
              local_library
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
