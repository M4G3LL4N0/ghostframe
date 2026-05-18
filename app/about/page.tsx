import { SubpageVisual } from "@/components/SubpageVisual";
export default function AboutPage() {
  return (
    <>
    <SubpageVisual variant="about" />
      <div className="flex w-full flex-col gap-8">
      <section className="glass rounded-3xl p-8">
        <h1 className="text-3xl font-semibold">About GhostFrame</h1>
        <p className="mt-3 max-w-3xl text-sm text-white/70">
          GhostFrame is a legal, safety-focused visual privacy product. We help
          people share photos with lower tracking, scraping, and re-identification
          risk while preserving meaning, composition, and creative intent.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <article className="glass rounded-2xl p-6">
          <h2 className="text-lg font-semibold">What we stand for</h2>
          <ul className="mt-3 space-y-2 text-sm text-white/75">
            <li>- Creator and journalist safety</li>
            <li>- Privacy-by-design defaults</li>
            <li>- Transparent, interpretable risk scoring</li>
            <li>- Respect for legal and ethical boundaries</li>
          </ul>
        </article>
        <article className="glass rounded-2xl p-6">
          <h2 className="text-lg font-semibold">What we do not do</h2>
          <ul className="mt-3 space-y-2 text-sm text-white/75">
            <li>- No impersonation or fraud tooling</li>
            <li>- No copyright evasion positioning</li>
            <li>- No bypass-detection claims</li>
            <li>- No resale of user image data</li>
          </ul>
        </article>
      </section>
    </div>
  </>
  )
}
