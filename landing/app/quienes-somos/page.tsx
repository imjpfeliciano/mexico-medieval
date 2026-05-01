"use client";

import { NewsletterSubscribeCard } from "@/components/sections/NewsletterSubscribeCard";
import Image from "next/image";
import Link from "next/link";

/** Decorative manuscript art (same asset family as the home spotlight). */
const SIDEBAR_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAGp5HYsryP3UFArni3bU8iCX9SxPqZNSoC1BYcVk2JQ7Cqrr2SnngL6CevI6QYYVWiMyNjj7TsFdjOrpWp3WrWlIDtzgNG3oYYi9mdqdVcPmY6eXTaZkmqnI0C3Bu6lMZ7DXpwCsSGyUhhCkpFllk4NrfL8ELghpqyBCvsYDX4IrkFM0OlR2qJXIfvX57Bd-q0_4TSpm_t4lcyBQKr-8WDGtxaqHuTjXi_davOcPIdJOIe1ZOHxap1HJASvgpSgVtfYYNoGkJpUkvo";

/**
 * Mock copy grounded in public site metadata and publication themes.
 * Replace or extend with verified affiliations, grants, and biography details.
 */
const PROJECT = {
  lede:
    "México Medieval es un archivo digital dedicado a la historia medieval en diálogo con México y el mundo hispánico: investigación académica, materiales curados y divulgación para lectores dentro y fuera de la universidad.",
  pillars: [
    {
      icon: "menu_book" as const,
      title: "Investigación y publicaciones",
      body: "Libros, artículos dictaminados y papers que exploran nobleza, instituciones y fuentes narrativas en el Mediterráneo medieval y sus resonancias historiográficas.",
    },
    {
      icon: "podcasts" as const,
      title: "Voz pública",
      body: "El podcast y colaboraciones sonidos son parte de un puente entre archivo erudito y conversación amplia sobre mitos, símbolos y memoria medieval.",
    },
    {
      icon: "database" as const,
      title: "Archivo en construcción",
      body: "Este sitio reúne rutas hacia libros, artículos, presentaciones y episodios; otras secciones (por ejemplo video) se irán sumando conforme se publiquen.",
    },
  ],
} as const;

const AUTHOR = {
  name: "Dr. Hervin Fernández Aceves",
  honorific: "FRHistS",
  tagline:
    "Historiador y medievalista; su trabajo conjuga prosopografía, análisis de redes en fuentes narrativas y debates sobre nobleza normanda e italomeridional.",
  bio: [
    "La línea editorial de México Medieval refleja años de investigación sobre sociedad política, condados y fuentes del Mezzogiorno normando, así como estudios historiográficos que problematizan la «conectividad» mediterránea vista desde la periferia y el Sur Global.",
    "Además del trabajo escrito, impulsa la divulgación en audio: la serie México Medieval y participaciones en otros programas académicos y culturales.",
  ],
  /** Illustrative focus areas — align with real CV as needed. */
  themes: [
    "Reinos y nobleza en la Italia medieval",
    "Cerdeña y el Mediterráneo (siglos XI–XII)",
    "Historia política y fuentes narrativas",
    "Historia pública y podcast",
  ],
} as const;

const ARCHIVE_LINKS = [
  { href: "/libros", label: "Libros", hint: "The Digital Scriptorium" },
  { href: "/articulos", label: "Artículos", hint: "Investigación revisada por pares" },
  { href: "/podcast", label: "Podcast", hint: "México Medieval y colaboraciones" },
  { href: "/papers", label: "Papers", hint: "Presentaciones y repositorios" },
] as const;

export default function QuienesSomosPage() {
  return (
    <div className="relative min-h-full bg-[#fdf8ef] font-body text-on-background selection:bg-secondary-container selection:text-on-secondary-container">
      <main className="relative z-10 mx-auto max-w-7xl px-6 pt-10 pb-24 md:px-12 md:pt-14">
        <header className="mb-16 text-center">
          <span className="font-label mb-4 inline-block text-xs font-bold tracking-widest text-tertiary-fixed-dim uppercase">
            México Medieval
          </span>
          <h1 className="font-headline mb-6 text-5xl font-bold tracking-tight text-primary md:text-7xl">
            Quiénes somos
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-on-surface-variant">
            Historia, investigación y divulgación desde un archivo que honra el
            oficio del historiador y el alcance del medievalismo contemporáneo.
          </p>
          <div className="mx-auto mt-12 max-w-md">
            <div className="manuscript-divider-fleuron w-full" />
          </div>
        </header>

        <section
          aria-labelledby="proyecto-heading"
          className="mb-20 border border-outline-variant/15 bg-white/90 p-8 shadow-sm md:p-12"
        >
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="font-label text-xs font-bold tracking-widest text-tertiary-fixed-dim uppercase">
                El proyecto
              </span>
              <h2
                id="proyecto-heading"
                className="font-headline mt-2 text-3xl font-bold text-primary md:text-4xl"
              >
                Un archivo iluminado
              </h2>
            </div>
          </div>
          <p className="mb-12 max-w-3xl text-lg leading-relaxed text-on-surface-variant">
            {PROJECT.lede}
          </p>
          <ul className="grid gap-8 md:grid-cols-3">
            {PROJECT.pillars.map((p) => (
              <li
                key={p.title}
                className="border-t border-outline-variant/20 pt-6 md:border-t-0 md:border-l md:border-outline-variant/20 md:pt-0 md:pl-8 first:md:border-l-0 first:md:pl-0"
              >
                <span
                  className="material-symbols-outlined mb-4 block text-3xl text-primary"
                  aria-hidden
                >
                  {p.icon}
                </span>
                <h3 className="font-headline mb-2 text-xl text-primary">
                  {p.title}
                </h3>
                <p className="text-sm leading-relaxed text-on-surface-variant">
                  {p.body}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section
          aria-labelledby="autor-heading"
          className="mb-20 grid gap-12 lg:grid-cols-12 lg:gap-16"
        >
          <div className="relative aspect-4/5 overflow-hidden border border-outline-variant/15 bg-surface-container-lowest shadow-sm lg:col-span-5">
            <Image
              src={SIDEBAR_IMG}
              alt="Detalle de manuscrito iluminado en pergamino"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 380px, 100vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-primary/50 to-transparent" />
            <p className="absolute bottom-6 left-6 right-6 font-label text-xs tracking-widest text-white/90 uppercase">
              The Digital Manuscript
            </p>
          </div>

          <div className="lg:col-span-7">
            <span className="font-label text-xs font-bold tracking-widest text-tertiary-fixed-dim uppercase">
              Sobre el autor
            </span>
            <h2
              id="autor-heading"
              className="font-headline mt-2 mb-2 text-3xl font-bold text-primary md:text-4xl"
            >
              {AUTHOR.name}
            </h2>
            <p className="font-label mb-6 text-sm tracking-widest text-on-surface-variant uppercase">
              {AUTHOR.honorific}
            </p>
            <p className="mb-8 text-lg font-medium leading-relaxed text-primary">
              {AUTHOR.tagline}
            </p>
            <div className="space-y-4 text-on-surface-variant leading-relaxed">
              {AUTHOR.bio.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
            <h3 className="font-headline mt-10 mb-4 text-lg text-primary">
              Líneas de trabajo
            </h3>
            <ul className="flex flex-wrap gap-2">
              {AUTHOR.themes.map((theme) => (
                <li key={theme}>
                  <span className="inline-block border border-outline-variant/25 bg-surface-container-lowest px-3 py-1.5 text-xs text-on-surface">
                    {theme}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section aria-labelledby="explorar-heading" className="mb-8">
          <h2
            id="explorar-heading"
            className="font-headline mb-8 text-center text-2xl font-bold text-primary md:text-3xl"
          >
            Explorar el archivo
          </h2>
          <ul className="grid gap-4 sm:grid-cols-2">
            {ARCHIVE_LINKS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="group flex flex-col border border-outline-variant/20 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                >
                  <span className="font-headline text-lg text-primary group-hover:text-tertiary-fixed-dim">
                    {item.label}
                  </span>
                  <span className="mt-1 text-sm text-on-surface-variant">
                    {item.hint}
                  </span>
                  <span className="mt-4 inline-flex items-center gap-1 font-label text-xs tracking-widest text-tertiary-fixed-dim uppercase">
                    Ir
                    <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-0.5">
                      arrow_forward
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <NewsletterSubscribeCard className="mt-24" />
      </main>
    </div>
  );
}
