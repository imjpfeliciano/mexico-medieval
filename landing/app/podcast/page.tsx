"use client";

import { NewsletterSubscribeCard } from "@/components/sections/NewsletterSubscribeCard";
import Image from "next/image";
import Link from "next/link";

const HERO_TEXTURE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDUH7wOddMA3XCgIuP14AcwEUJOnqb91THh_CKmvG7Tj0LrBdnP8dVdw8MFax_SptBh69rcXgqxlC2RoN5YvnHymeYHQ94kIYYGULXLTVXGmn61UjKFmlXsaqy-br71iba-a62fzujdfCn01Jlhy2jk395C-rRiKLruy4bS6GhnaZwchaxF62EO3zIBQZL2Dh81xZleD2xZIo6OpFhehJ_5Qv1paCRAFXuWvYE5ISfJEyikerKCyOy7_mfa2is2NX6MSSHAUz-2z0oL";

const FEATURED_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAIbz7caxEGDedMumvcfN8Ff10t-3i9cLSgg3kLgq8zLwUyP8Y4bdxiixp_CRyeQE7XmMOJfRDhxnm7V5RVBZUe7LN_sDW4G2mKnUDwqQ6YkvjkqN9Ze3kGU3VSmoER64QDGXrBtYCtLjQe2-IvnrwSPO5OeDQnrA7lkWFOVIbj2GiftrDB1bqP0GGzJXftLKloKE1MM12HA5aD_BzVvArgPhWEJGHU54FqH7LJmPhk-4OVHpFvP6gzO65HyA933fRssZXALFtfBZrC";

const EPISODES = [
  {
    slug: "la-leyenda-de-san-jorge-caballeros-y-dragones",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCvsgoAWQcwvkJI-ciwvnu70ZvoUMBdtqISqpN5I5zDuJOCcOyEQbpmRuqPnh2eLui0y-JXeQ6-XJEnfCvjUrWEZ_t2ices3y4kxWY1rRFkKmvTORZJSmzRQAMUytOsJrpx6nBmQQAI3BHxQyLT8OaF_UidtibpehWBdrmdx0W6xCCPuCexqSZTVRzlch-t3OGsr21p5EI2wSyQDUpuyMSYCRzvPFNqQVv0DEOM9MdPDzW3hHHJ6Ayev2uOS-u6dxc73Mr44USdwix8",
    alt: "Medieval knight armor and sword on velvet",
    title: "La leyenda de San Jorge: Caballeros y Dragones",
    volume: "Vol. 12 — Hagiography",
    date: "Oct 12, 2023",
    duration: "42 min",
    progress: 35,
    current: "14:50",
    total: "42:15",
    playIcon: "play_arrow" as const,
  },
  {
    slug: "derecho-de-conquista-la-escuela-de-salamanca",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBn9KbIcZ1XA8zD1ZT2snQ7Iuz4nUUchwK_0KDAzSV6rrfO-qnM1OTvgRjpqMR-9ln3-c28Lv2JHBpcNtfuqjL_DP4w4iVl-74Mx7IRdHAeOv6awcTsHoCNd_HGYE_nZTAaLvltX-jcdVYekbuXWT0jgpWKCo182JdZTQp6WZ0S2zXZyB5-P8o48uS6yWdXac5XgeiGzY3NdVhKTju1btlY_LUPnNOnddsXYyW6Vjl2hMaJdCsZkLArlMVn4h3npN03kLtr0w0BZdfN",
    alt: "Parchment scroll with wax seal on wooden table",
    title: "Derecho de Conquista: La Escuela de Salamanca",
    volume: "Vol. 11 — Legal History",
    date: "Sep 28, 2023",
    duration: "58 min",
    progress: 0,
    current: "0:00",
    total: "58:30",
    playIcon: "play_arrow" as const,
  },
  {
    slug: "el-archivo-de-indias-laberinto-de-papel",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuANPayenFBMFxeARbEqcH3fSbGUSU4glYaWUGRSggODsrP3sbf-WAytM8CpOPTcEItFesn-yCOqApcu-YRDUj4lwWkJOZomiioFgK3ZAYFJXAdJIyngk34_Q5TvzVBd2nYWLQWLHVXMWtT_Nr57YHrm9OYkjUKNInSP0eXShvIjhvcbgWAYHzilFNEKmDvc_CanHch1YYIYBk4b8FfFBRYioIfV5NaZV7X-QaNCGPQJZ4wD3hXmCFs75KYnoixdfQRAG8mDwRqH73Db",
    alt: "Classical library with leather-bound books",
    title: "El Archivo de Indias: Laberinto de Papel",
    volume: "Vol. 10 — Methodology",
    date: "Aug 15, 2023",
    duration: "51 min",
    progress: 72,
    current: "36:42",
    total: "51:00",
    playIcon: "pause" as const,
  },
] as const;

function PodcastEpisodeCard({
  slug,
  image,
  alt,
  title,
  volume,
  date,
  duration,
  progress,
  current,
  total,
  playIcon,
}: (typeof EPISODES)[number]) {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-lg border border-primary/5 bg-surface shadow-sm transition-shadow hover:shadow-md">
      <div className="relative aspect-square overflow-hidden bg-black/5">
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
        />
        <div className="absolute inset-0 bg-primary/20 transition-colors group-hover:bg-transparent" />
        <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-primary/90 to-transparent p-4">
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-tertiary-fixed text-on-tertiary-fixed transition-transform hover:scale-105"
              aria-label={playIcon === "pause" ? "Pause" : "Play"}
            >
              <span
                className="material-symbols-outlined text-[20px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                {playIcon}
              </span>
            </button>
            <div className="min-w-0 grow">
              <div className="h-1 overflow-hidden rounded-full bg-white/30">
                <div
                  className="h-full bg-tertiary-fixed-dim"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="mt-1 flex justify-between font-label text-[8px] font-bold tracking-tighter text-on-primary/70 uppercase">
                <span>{current}</span>
                <span>{total}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex grow flex-col p-6">
        <span className="font-label text-[10px] font-bold tracking-widest text-tertiary-fixed-dim uppercase">
          {volume}
        </span>
        <h3 className="font-headline mt-2 mb-3 text-xl leading-snug font-bold text-primary">
          {title}
        </h3>
        <div className="mb-6 flex flex-wrap items-center gap-4 font-label text-xs font-medium text-on-surface-variant">
          <span className="flex items-center gap-1">
            <span className="material-symbols-outlined text-[16px]">
              calendar_today
            </span>
            {date}
          </span>
          <span className="flex items-center gap-1">
            <span className="material-symbols-outlined text-[16px]">
              schedule
            </span>
            {duration}
          </span>
        </div>
        <div className="mt-auto">
          <Link
            href={`/podcast/${slug}`}
            className="inline-flex items-center gap-2 border-b border-primary/20 pb-1 font-label text-xs font-bold tracking-widest text-primary uppercase transition-all hover:border-primary"
          >
            Ver detalles{" "}
            <span className="material-symbols-outlined text-[14px]">
              arrow_forward
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function PodcastPage() {
  return (
    <div className="relative flex min-h-full flex-col">
      <div
        className="manuscript-grain pointer-events-none fixed inset-0 z-100"
        aria-hidden
      />

      <main className="pb-20 pt-8 md:pt-10">
        <section className="relative overflow-hidden bg-surface-container-low px-8 py-24 md:py-32">
          <div className="absolute inset-0 opacity-10">
            <Image
              src={HERO_TEXTURE}
              alt=""
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </div>
          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <span className="font-label mb-6 block text-xs font-semibold tracking-[0.3em] text-tertiary-fixed-dim uppercase">
              The Oral Archive
            </span>
            <h1 className="font-headline mb-8 text-5xl leading-tight font-bold tracking-tight text-primary md:text-7xl">
              History Reclaimed from the{" "}
              <span className="font-normal italic">Global South</span>
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed font-light text-on-surface-variant md:text-xl">
              Our podcast series explores the profound connections between the
              medieval Mediterranean and the early modern Americas. We translate
              scholarly rigor into narrative journeys through time.
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="#audio-volumes"
                className="group flex items-center gap-3 rounded-md border-b-2 border-tertiary-fixed-dim bg-primary px-8 py-4 font-label font-semibold text-on-primary transition-all hover:bg-primary-container"
              >
                <span
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  play_arrow
                </span>
                START LISTENING
              </a>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-screen-2xl px-8 py-32">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12">
            <div className="group relative lg:col-span-7">
              <div className="absolute -top-6 -left-6 z-0 h-32 w-32 bg-tertiary-fixed/20" />
              <div className="relative z-10 overflow-hidden rounded-lg bg-surface-container-highest shadow-xl shadow-primary/5">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={FEATURED_IMG}
                    alt="Historical mural — navigation and mapmaking"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(min-width: 1024px) 58vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-primary/80 to-transparent" />
                  <div className="absolute bottom-0 p-10 text-on-primary">
                    <span className="mb-4 inline-block bg-tertiary-fixed px-3 py-1 font-label text-[10px] font-bold tracking-widest text-on-tertiary-fixed uppercase">
                      Special Series
                    </span>
                    <h3 className="font-headline mb-2 text-3xl font-bold">
                      Tiempos Imposibles
                    </h3>
                    <p className="max-w-lg font-light text-on-primary/80">
                      A collaboration with Dr. Elena Vargas investigating the
                      synchronicity of Indigenous and Spanish temporalities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5">
              <h2 className="font-headline mb-6 text-4xl leading-tight font-bold text-primary">
                Featured Collaborations
              </h2>
              <p className="mb-8 leading-relaxed text-on-surface-variant">
                We invite historians from across the globe to dissect the
                traditional narratives of the Conquest, offering a multifaceted
                view of medieval continuity in the New World.
              </p>
              <ul className="space-y-6">
                <li className="flex items-start gap-4 rounded-md border-l-4 border-tertiary-fixed-dim bg-surface-container-low p-4">
                  <div className="font-headline text-2xl font-bold text-primary italic opacity-30">
                    01
                  </div>
                  <div>
                    <h4 className="font-headline font-bold text-primary">
                      The Alchemy of Trade
                    </h4>
                    <p className="mt-1 text-sm text-on-surface-variant">
                      Guest: Prof. Julian Thorne — Exploring silk and spice routes
                      from Manila to Mexico.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4 rounded-md border-l-4 border-transparent p-4 transition-colors hover:bg-surface-container-low">
                  <div className="font-headline text-2xl font-bold text-primary italic opacity-30">
                    02
                  </div>
                  <div>
                    <h4 className="font-headline font-bold text-primary">
                      Hidden Glossaries
                    </h4>
                    <p className="mt-1 text-sm text-on-surface-variant">
                      Deciphering the Arabic influences in 16th-century Nahuatl
                      manuscripts.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section
          id="audio-volumes"
          className="bg-surface-container py-32 scroll-mt-24"
        >
          <div className="mx-auto max-w-screen-2xl px-8">
            <div className="mb-16 flex flex-col items-end justify-between gap-6 md:flex-row">
              <div>
                <h2 className="font-headline text-4xl font-bold text-primary">
                  Audio Volumes
                </h2>
                <p className="mt-2 text-on-surface-variant">
                  Chronological recordings from our archive
                </p>
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  className="rounded-md bg-surface-container-highest px-4 py-2 font-label text-xs font-bold tracking-widest text-primary uppercase transition-colors hover:bg-tertiary-fixed-dim"
                >
                  Latest
                </button>
                <button
                  type="button"
                  className="rounded-md bg-surface-container-high px-4 py-2 font-label text-xs font-bold tracking-widest text-primary/60 uppercase transition-colors hover:text-primary"
                >
                  Popular
                </button>
                <button
                  type="button"
                  className="rounded-md bg-surface-container-high px-4 py-2 font-label text-xs font-bold tracking-widest text-primary/60 uppercase transition-colors hover:text-primary"
                >
                  Series
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
              {EPISODES.map((ep) => (
                <PodcastEpisodeCard key={ep.title} {...ep} />
              ))}
            </div>
            <div className="mt-20 text-center">
              <button
                type="button"
                className="border-2 border-primary/20 px-10 py-4 font-label font-bold tracking-widest text-primary uppercase transition-all hover:bg-primary hover:text-on-primary"
              >
                Discover Entire Archive
              </button>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-5xl px-8">
          <NewsletterSubscribeCard />
        </div>
      </main>
    </div>
  );
}
