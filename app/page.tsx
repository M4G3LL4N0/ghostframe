import Link from "next/link";
import { TrustStrip } from "@/components/TrustStrip";
import { MarketingGraphicsStack } from "@/components/MarketingGraphicsStack";
import { ProcessFlowSection } from "@/components/ProcessFlowSection";

export default function Home() {
  return (
        <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
          <TrustStrip />
        </div>
        <MarketingGraphicsStack />
    <div className="flex w-full flex-col gap-10">
      <section className="glass relative overflow-hidden rounded-3xl p-10 md:p-14">
        <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-violet-500/25 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="relative flex flex-col gap-8 md:max-w-3xl">
          <p className="text-xs tracking-[0.3em] text-white/70">PRIVACY-FIRST PHOTO VARIATIONS</p>
          <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
            Publish confidently with cinematic visual privacy.
          </h1>
          <p className="max-w-2xl text-lg text-white/75">
            GhostFrame transforms one image into multiple visually consistent, technically
            distinct variants to reduce reverse-image search exposure, dataset scraping, and
            identity traceability while preserving intent and style.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/demo"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
            >
              Try local demo
            </Link>
            <Link
              href="/pricing"
              className="rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              View pricing
            </Link>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {[
          ["Creator Safety", "Protect profile photos from bulk scraping and stalking workflows."],
          ["Metadata Hygiene", "Strip EXIF fields and normalize output for safer publishing."],
          ["Identity Aware", "Understand face exposure and choose lower-risk posting variants."],
        ].map(([title, copy]) => (
          <article key={title} className="glass rounded-2xl p-6">
            <h2 className="text-lg font-semibold">{title}</h2>
            <p className="mt-2 text-sm text-white/70">{copy}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
