"use client";

import { NewsletterSubscribeCard } from "@/components/sections/NewsletterSubscribeCard";
import Image from "next/image";
import Link from "next/link";

const PRESENTATIONS = [
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAVl4ZCk2_kh1AtOKEpuMV_Rlc4HS_aSv13pPJQvmhZH8YNDSplxbEjXgFy_DIGopB5UxODbLTJUMe-IeuDNuXD_7c4GxOx5mhyhj4zuFRg3o2oxwHnQRrsrrUB39CTmYBkPDosOFmSFpnsseM94bBRcukeE3BdZ9JPhd4qO9o929Pd9JB4KTf_PkHFrBPdltPgdo_o0KBmCpME4FdzUyFHL_S4ZZlMW7fi81l1W6-L_8inUTcOu66KlPzpGhgatRODALFumeHbQsbj",
    alt: "Historic lecture hall with warm lighting on a podium",
    tag: "Symposium 2024",
    location: "Colonial Mexico City",
    title: "Deciphering the Palimpsests of Puebla",
    speaker: "Keynote Speaker: Dr. Mateo Arriaga",
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDRP4_UPkAtVuMTRjvFL0bakl8qXigkj045OGaZ0CmvtxhUATA_cV-jkXxkeAp168P4khIk15VOJrAMxtQQno3zGUHoXtlzIrR9M1iL7oiZsPTt7ACPKfyONebHEVei9vAu2jA0OgAsQTLkbOwOI1W3ySENRjm0WwcZMSMTHvqgrNSBk_B5MBz8wLzlQK8Cn7BD9xrex1IfQI4fK5e2KDZNU4vEuDfxu55M41oOQIsnRgDhj8sF5vmrTLnJgmlQ5a_harHpxnsi8-Ps",
    alt: "Medieval cloister corridor with dramatic sunlight",
    tag: "Medievalia Expo",
    location: "Online Webinar",
    title: "Armor and Heraldry: The Visual Language of Conquest",
    speaker: "Speaker: Isabella Montaño",
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAjxUgeGywjONQlKw8evGI-1sj6FMYgRmblsf0tWterUVfS7h9iffuieN0Ez5by2HNQNkqJkeYgSLIT4dxvqi2Zu5HPHKa_Ub5X2-8nhEZ427aQtsk6j_SdPlPaVztvZaKV9oo2sBAwO8YP5QZAKSeU2L1X3Q4JtRU-j_rHwbnwNJmc45FvrYESK5Qi-uIZhkKU_BkkMkoHevxYChRIqmKc_56D3yD_aDhgeqO7b1RVIU8Zp9wqovZHLyZbF5Wy8C9fSDD23l2WrsWe",
    alt: "Feather pen and inkwell on aged parchment",
    tag: "History Week",
    location: "Guanajuato Forum",
    title: "Mudejar Patterns in Mexican Talavera",
    speaker: "Speaker: Ricardo Lopez",
  },
] as const;

export default function PapersPage() {
  return (
    <div className="relative min-h-full bg-[#fdf8ef] font-body text-on-background selection:bg-secondary-container selection:text-on-secondary-container">
      <main className="relative z-10 mx-auto max-w-7xl px-6 pt-10 pb-24 md:px-12 md:pt-14">
        <section className="mb-20 text-center">
          <h1 className="font-headline mb-6 text-5xl font-bold tracking-tight text-primary md:text-7xl">
            México Medieval
          </h1>
          <p className="font-body mx-auto max-w-2xl text-lg leading-relaxed text-on-surface-variant">
            A digital repository dedicated to the preservation and dissemination
            of academic research regarding medieval Hispanic influence in the New
            World.
          </p>
          <div className="mx-auto mt-12 max-w-md">
            <div className="manuscript-divider-fleuron w-full" />
          </div>
        </section>

        <section id="academic-papers" className="mb-32 scroll-mt-28">
          <div className="mb-12 flex items-center gap-4">
            <div className="flex items-center justify-center rounded-full bg-primary-container/20 p-3">
              <span className="material-symbols-outlined text-3xl text-primary">
                auto_stories
              </span>
            </div>
            <div>
              <span className="font-label text-xs font-bold tracking-widest text-tertiary-fixed-dim uppercase">
                Research Portal
              </span>
              <h2 className="font-headline text-3xl font-bold text-primary">
                Academic Papers
              </h2>
            </div>
            <div className="ml-8 hidden h-px min-w-0 grow bg-outline-variant/30 md:block" />
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
            <div className="group relative overflow-hidden border border-outline-variant/20 bg-white p-8 shadow-sm transition-shadow hover:shadow-md md:col-span-7">
              <div className="relative z-10">
                <span className="font-label text-xs font-bold text-tertiary-fixed-dim uppercase">
                  May 12, 2024
                </span>
                <h3 className="font-headline mt-3 mb-4 text-2xl leading-snug text-primary">
                  The Gothic Influence in Tlaxcala: A Structural Analysis of 16th
                  Century Archways
                </h3>
                <p className="font-body mb-8 text-sm text-on-surface-variant italic">
                  Dr. Sofia Villalobos, UNAM
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-on-primary transition-colors hover:bg-primary-container"
                >
                  View Paper
                  <span className="material-symbols-outlined text-sm">
                    open_in_new
                  </span>
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-6 md:col-span-5">
              <div className="border border-outline-variant/20 bg-white p-6 shadow-sm transition-colors hover:bg-surface-container-lowest">
                <span className="font-label text-xs font-bold text-on-surface-variant/60 uppercase">
                  March 04, 2024
                </span>
                <h3 className="font-headline mt-2 mb-2 text-xl text-primary">
                  Franciscan Manuscripts in Queretaro
                </h3>
                <p className="font-body mb-6 text-sm text-on-surface-variant">
                  Mtro. Julian de la Cruz
                </p>
                <Link
                  href="#"
                  className="flex items-center gap-1 text-sm font-bold text-primary decoration-tertiary-fixed underline-offset-4 hover:underline"
                >
                  View Paper{" "}
                  <span className="material-symbols-outlined text-xs">
                    arrow_forward
                  </span>
                </Link>
              </div>
              <div className="border border-outline-variant/20 bg-white p-6 shadow-sm transition-colors hover:bg-surface-container-lowest">
                <span className="font-label text-xs font-bold text-on-surface-variant/60 uppercase">
                  January 18, 2024
                </span>
                <h3 className="font-headline mt-2 mb-2 text-xl text-primary">
                  Heraldry and Lineage in New Spain
                </h3>
                <p className="font-body mb-6 text-sm text-on-surface-variant">
                  Dra. Elena Gomez
                </p>
                <Link
                  href="#"
                  className="flex items-center gap-1 text-sm font-bold text-primary decoration-tertiary-fixed underline-offset-4 hover:underline"
                >
                  View Paper{" "}
                  <span className="material-symbols-outlined text-xs">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>

            <div className="border border-outline-variant/20 bg-white/50 p-6 shadow-sm md:col-span-4">
              <span className="font-label text-xs font-bold text-on-surface-variant/60 uppercase">
                Dec 2023
              </span>
              <h3 className="font-headline mt-2 mb-4 text-lg text-primary">
                Liturgical Music of the 1500s
              </h3>
              <Link
                href="#"
                className="text-xs font-medium tracking-tighter text-secondary uppercase transition-colors hover:text-primary"
              >
                View Document
              </Link>
            </div>
            <div className="border border-outline-variant/20 bg-white/50 p-6 shadow-sm md:col-span-4">
              <span className="font-label text-xs font-bold text-on-surface-variant/60 uppercase">
                Nov 2023
              </span>
              <h3 className="font-headline mt-2 mb-4 text-lg text-primary">
                Transatlantic Scriptoria Links
              </h3>
              <Link
                href="#"
                className="text-xs font-medium tracking-tighter text-secondary uppercase transition-colors hover:text-primary"
              >
                View Document
              </Link>
            </div>
            <div className="border border-outline-variant/20 bg-white/50 p-6 shadow-sm md:col-span-4">
              <span className="font-label text-xs font-bold text-on-surface-variant/60 uppercase">
                Oct 2023
              </span>
              <h3 className="font-headline mt-2 mb-4 text-lg text-primary">
                The &apos;Codex Mendoza&apos; Synthesis
              </h3>
              <Link
                href="#"
                className="text-xs font-medium tracking-tighter text-secondary uppercase transition-colors hover:text-primary"
              >
                View Document
              </Link>
            </div>
          </div>
        </section>

        <section id="speaker-presentations" className="scroll-mt-28">
          <div className="mb-12 flex items-center gap-4">
            <div className="flex items-center justify-center rounded-full bg-tertiary-fixed/30 p-3">
              <span className="material-symbols-outlined text-3xl text-primary">
                history_edu
              </span>
            </div>
            <div>
              <span className="font-label text-xs font-bold tracking-widest text-tertiary-fixed-dim uppercase">
                Live Events
              </span>
              <h2 className="font-headline text-3xl font-bold text-primary">
                Speaker Presentations
              </h2>
            </div>
            <div className="ml-8 hidden h-px min-w-0 grow bg-outline-variant/30 md:block" />
          </div>

          <div className="space-y-6">
            {PRESENTATIONS.map((item) => (
              <div
                key={item.title}
                className="group flex flex-col items-center gap-8 border border-outline-variant/20 bg-white p-8 shadow-sm transition-all hover:shadow-md md:flex-row"
              >
                <div className="w-full md:w-1/4">
                  <div className="relative aspect-video overflow-hidden bg-surface-container">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      className="object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                      sizes="(min-width: 768px) 25vw, 100vw"
                    />
                    <span className="material-symbols-outlined absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/30 p-2 text-4xl text-white">
                      play_circle
                    </span>
                  </div>
                </div>
                <div className="min-w-0 grow">
                  <div className="mb-2 flex flex-wrap items-center gap-3">
                    <span className="bg-tertiary-fixed px-3 py-1 text-[10px] font-bold tracking-widest text-on-tertiary-fixed uppercase">
                      {item.tag}
                    </span>
                    <span className="text-xs text-on-surface-variant">
                      {item.location}
                    </span>
                  </div>
                  <h3 className="font-headline mb-1 text-2xl font-bold text-primary">
                    {item.title}
                  </h3>
                  <p className="text-sm text-on-surface-variant">
                    {item.speaker}
                  </p>
                </div>
                <div className="w-full shrink-0 md:w-auto">
                  <button
                    type="button"
                    className="flex w-full items-center justify-center gap-2 border border-primary bg-transparent px-8 py-3 text-sm font-medium text-primary transition-all hover:bg-primary hover:text-on-primary md:w-auto"
                  >
                    View Details
                    <span className="material-symbols-outlined text-sm">
                      visibility
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <NewsletterSubscribeCard className="mt-24" />
      </main>
    </div>
  );
}
