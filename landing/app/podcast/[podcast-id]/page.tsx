import {
  getAllPodcastSlugs,
  getPodcastBySlug,
} from "@/lib/podcast-episodes";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PodcastDetailView } from "./podcast-detail-view";

type PageProps = {
  params: Promise<{ "podcast-id": string }>;
};

export async function generateStaticParams() {
  return getAllPodcastSlugs().map((podcastId) => ({
    "podcast-id": podcastId,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { "podcast-id": podcastId } = await params;
  const episode = getPodcastBySlug(podcastId);
  if (!episode) {
    return { title: "Podcast" };
  }
  return {
    title: episode.metaTitle,
    description: episode.metaDescription,
  };
}

export default async function PodcastDetailPage({ params }: PageProps) {
  const { "podcast-id": podcastId } = await params;
  const episode = getPodcastBySlug(podcastId);
  if (!episode) {
    notFound();
  }
  return <PodcastDetailView episode={episode} />;
}
