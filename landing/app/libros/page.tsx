"use client";

import { NewsletterSubscribeCard } from "@/components/sections/NewsletterSubscribeCard";
import Image from "next/image";

const HERO_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCelkrcQ6V5XyJL6F8omWxm6qNTfUY66OqOQleD80Ij7fWT9JyBDH4CbPy788L-vUF80MQKSJdPfJ1mG0cffnFl3ErIXE_I_Z62uBbkLf5Yw0MupV9uVilgP0kJq-Lkcu1LcAQBRZtx4bkIWQVDQH6qxGCPeX1ocvMhtYl8mpEwy7iji6x48lYjLtf2w1-y3qW9DpZq_3H8fLSujaJHITjNFyA4DevF-OB0ykU02H1fG5LkTFXzsho1nFYVmjYhM_gLARE2z6VPWbF7";

const BOOKS = [
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAaMmRj8wmegmaKc0OigsYJEiUaCSzPMWGaTBeJWLtlGQ9evPKRk3Gqk87J81ntJeyTKMArlWhzu59RJqxeLXavnMlvPICxZ55Xx2kE6Lsoj1yMVwePTp6AbX1XeS6NrQNY-8CLjLqZYMvMroBqbLmFoTCK7OzWm0WyiHybz_EQRrIqJXDrCDPo3dwueitEAshwPaxBUKY9RhM1lGPmHJeDHSBFikLoMaPeujxPoipxSbh4A1DJWoWSaBQw2FdD_VAOir9klxt8whNt",
    alt: "Ancient leather book cover on a scholarly desk",
    badge: "Unique",
    year: "Anno 1541",
    title: "Codex Mendoza",
    description:
      "An essential pictorial document of the Aztec Empire, commissioned by the first Viceroy of New Spain for Charles V.",
    offset: false,
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCyYMjg3xc6Z93Kw5ShEV1fb-PiGmwNa6bKVXZB7QDV_-_UmAgyhgi--iD-V1qAidmw09SRg13c3tU1qB9GV24D2Cz88M6oCCt3yYvcJqPlFAB-8uasbkNxhWoUwOrpxJ2ktPaEqmd29yrxrMcHEHaQ1XtqZbg5Pv3-kQYhUbwMbSjMWLziSh3EmOpxX2beucL4fyFuGf8BCOjtp5qXUjFKjbOLldTVIO8zaNO90ZYfQ3kDlJ3WsBAAtvBivwzzTEEL1NmGcJcln8i4",
    alt: "Illuminated manuscript page with gold leaf initials",
    badge: "Sacred",
    year: "Anno 1612",
    title: "Missale Romanum",
    description:
      "An exquisitely gilded liturgical text used in the Metropolitan Cathedral of Mexico City during the early Baroque era.",
    offset: true,
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAsFpaJ2hOauBdo0UnHfW4OAp8h7TJbw-E18UR4jo1ED-7uc80lc_Cm7VyLLJTnaBUzOQiAA_jQm7xiZWRNdqHGdHOdxWoYTN5gTXc1YsCAeKqtzGZl4IAfJogpu1H4koCKIAp4zzoqlK9rTCUKI95aWMk9IyQYDtlf9KA6PB6Foyj-pVtWvzx_B6apmS1WIseFEmguA7CGke0RJR4WongeXyWUxhEykw1xvySkT6_u_nMpZ7lbix2POUFPTz4DKTSfnovvTEBERREx",
    alt: "Vintage leather-bound book with sunbeams",
    badge: "Historical",
    year: "Anno 1784",
    title: "Plano de la Ciudad",
    description:
      "A meticulous copper-plate engraving depicting the urban expansion and hydraulic systems of Enlightenment-era México.",
    offset: false,
  },
] as const;

export default function LibrosPage() {
  return (
    <div className="min-h-full bg-background font-body text-on-background selection:bg-tertiary-fixed-dim selection:text-tertiary">
      <main>
        <section className="relative flex h-[min(614px,85dvh)] items-center justify-center overflow-hidden bg-primary">
          <div className="absolute inset-0 z-0">
            <Image
              src={HERO_IMG}
              alt="Ancient parchment manuscript with illuminated initials"
              fill
              priority
              className="object-cover opacity-30 mix-blend-luminosity"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-primary via-primary/60 to-transparent" />
            <div className="parchment-grain absolute inset-0" aria-hidden />
          </div>
          <div className="relative z-10 max-w-4xl px-6 text-center">
            <span className="font-label mb-4 block text-sm tracking-[0.3em] text-tertiary-fixed-dim uppercase">
              The Digital Scriptorium
            </span>
            <h1 className="font-headline mb-6 text-5xl leading-tight font-bold text-white md:text-7xl">
              Archive of Books
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed font-light text-on-primary-container md:text-xl">
              Journey through the illuminated annals of México. From sacred
              liturgies to the maps that defined New Spain, explore the ink and
              spirit of five centuries.
            </p>
            <div className="mt-10 flex justify-center">
              <div className="manuscript-divider w-32" />
            </div>
          </div>
        </section>

        <section className="border-y border-outline-variant/10 bg-surface-container px-8 py-8">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex flex-wrap items-center gap-8">
              <div className="group">
                <label className="font-label mb-2 block text-[10px] tracking-widest text-on-surface-variant uppercase transition-colors group-hover:text-tertiary-fixed-dim">
                  Century
                </label>
                <select
                  className="cursor-pointer border-0 border-b border-outline-variant/30 bg-transparent px-0 py-1 font-body text-sm text-on-surface focus:border-tertiary-fixed-dim focus:ring-0"
                  aria-label="Filter by century"
                  defaultValue="all"
                >
                  <option value="all">All Eras</option>
                  <option>XVI Century</option>
                  <option>XVII Century</option>
                  <option>XVIII Century</option>
                </select>
              </div>
              <div className="group">
                <label className="font-label mb-2 block text-[10px] tracking-widest text-on-surface-variant uppercase transition-colors group-hover:text-tertiary-fixed-dim">
                  Subject Matter
                </label>
                <select
                  className="cursor-pointer border-0 border-b border-outline-variant/30 bg-transparent px-0 py-1 font-body text-sm text-on-surface focus:border-tertiary-fixed-dim focus:ring-0"
                  aria-label="Filter by subject"
                  defaultValue="all"
                >
                  <option value="all">All Subjects</option>
                  <option>Cartography</option>
                  <option>Genealogy</option>
                  <option>Liturgical</option>
                  <option>Natural History</option>
                </select>
              </div>
              <div className="group">
                <label className="font-label mb-2 block text-[10px] tracking-widest text-on-surface-variant uppercase transition-colors group-hover:text-tertiary-fixed-dim">
                  Rarity
                </label>
                <div className="mt-1 flex gap-2">
                  <button
                    type="button"
                    className="rounded-sm border border-outline-variant/30 px-3 py-1 text-xs transition-all hover:bg-tertiary-container hover:text-on-tertiary-container"
                  >
                    Common
                  </button>
                  <button
                    type="button"
                    className="rounded-sm border border-transparent bg-tertiary-container px-3 py-1 text-xs text-on-tertiary-container"
                  >
                    Sacred
                  </button>
                  <button
                    type="button"
                    className="rounded-sm border border-outline-variant/30 px-3 py-1 text-xs transition-all hover:bg-tertiary-container hover:text-on-tertiary-container"
                  >
                    Unique
                  </button>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 font-label text-sm tracking-tighter text-on-surface-variant uppercase">
              <span className="opacity-60">Displaying 12 of 142 Volumes</span>
              <button
                type="button"
                className="material-symbols-outlined rounded-full p-2 transition-colors hover:bg-surface-container-high"
                aria-label="Grid view"
              >
                grid_view
              </button>
              <button
                type="button"
                className="material-symbols-outlined rounded-full p-2 transition-colors hover:bg-surface-container-high"
                aria-label="List view"
              >
                view_list
              </button>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-8 py-20">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
            {BOOKS.map((book) => (
              <article
                key={book.title}
                className={`group flex h-full flex-col border-t-2 border-tertiary-fixed/30 bg-surface-container-low p-1 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 ${book.offset ? "md:translate-y-8" : ""}`}
              >
                <div className="relative aspect-3/4 overflow-hidden bg-surface-dim">
                  <Image
                    src={book.image}
                    alt={book.alt}
                    fill
                    className="object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  />
                  <div className="absolute top-4 right-4 bg-primary/90 px-3 py-1 font-label text-[10px] tracking-widest text-tertiary-fixed-dim uppercase">
                    {book.badge}
                  </div>
                </div>
                <div className="flex grow flex-col p-8">
                  <span className="font-label mb-2 text-xs tracking-widest text-tertiary-fixed-dim uppercase">
                    {book.year}
                  </span>
                  <h3 className="font-headline mb-4 text-2xl leading-tight font-bold text-primary">
                    {book.title}
                  </h3>
                  <p className="mb-8 text-sm leading-relaxed font-light text-on-surface-variant">
                    {book.description}
                  </p>
                  <div className="mt-auto border-t border-outline-variant/10 pt-6">
                    <button
                      type="button"
                      className="group/btn flex w-full items-center justify-between border-b border-primary px-1 py-3 transition-all duration-300 hover:border-tertiary-fixed-dim"
                    >
                      <span className="font-label text-xs tracking-widest text-primary uppercase transition-colors group-hover/btn:text-tertiary-fixed-dim">
                        Examine the Volume
                      </span>
                      <span className="material-symbols-outlined text-primary transition-transform group-hover/btn:translate-x-1 group-hover/btn:text-tertiary-fixed-dim">
                        auto_stories
                      </span>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-32 flex flex-col items-center gap-6">
            <div className="manuscript-divider mb-4 w-16" />
            <div className="flex items-center gap-12 font-label text-xs tracking-[0.4em] text-on-surface-variant uppercase">
              <button
                type="button"
                disabled
                className="flex cursor-not-allowed items-center gap-2 opacity-30"
              >
                <span className="material-symbols-outlined text-lg">
                  chevron_left
                </span>
                Prev
              </button>
              <span className="font-bold text-primary">
                Folio{" "}
                <span className="font-headline mx-2 text-lg italic">1</span> of
                12
              </span>
              <button
                type="button"
                className="flex items-center gap-2 transition-colors hover:text-primary"
              >
                Next
                <span className="material-symbols-outlined text-lg">
                  chevron_right
                </span>
              </button>
            </div>
          </div>
        </section>

        <NewsletterSubscribeCard className="mt-20" />
      </main>
    </div>
  );
}
