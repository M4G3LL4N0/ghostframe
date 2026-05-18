import { SubpageVisual } from "@/components/SubpageVisual";
const tiers = [
  {
    name: "Starter",
    price: "$19",
    cadence: "/month",
    description: "For creators publishing across a few channels.",
    features: ["150 variations monthly", "Baseline privacy report", "Metadata wipe pipeline"],
  },
  {
    name: "Pro",
    price: "$59",
    cadence: "/month",
    description: "For journalists, founders, and public-facing teams.",
    features: [
      "1,000 variations monthly",
      "Advanced reverse-risk scoring",
      "Priority rendering queue",
    ],
  },
  {
    name: "Studio",
    price: "Custom",
    cadence: "",
    description: "For agencies and high-volume publisher workflows.",
    features: ["Unlimited team seats", "Custom policy presets", "Dedicated privacy strategist"],
  },
];

export default function PricingPage() {
  return (
    <>
    <SubpageVisual variant="pricing" />
      <div className="flex w-full flex-col gap-8">
      <section className="glass rounded-3xl p-8">
        <h1 className="text-3xl font-semibold">Pricing</h1>
        <p className="mt-3 max-w-2xl text-sm text-white/70">
          Transparent plans built for visual privacy and anti-scraping protection.
          No lock-in, no ad-tech data resale.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {tiers.map((tier) => (
          <article key={tier.name} className="glass rounded-2xl p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-white/60">{tier.name}</p>
            <p className="mt-4 text-3xl font-semibold">
              {tier.price}
              <span className="text-base text-white/60">{tier.cadence}</span>
            </p>
            <p className="mt-3 text-sm text-white/70">{tier.description}</p>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              {tier.features.map((feature) => (
                <li key={feature}>- {feature}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </div>
  </>
  )
}
