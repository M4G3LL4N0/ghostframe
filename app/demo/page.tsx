"use client";

import { useMemo, useState } from "react";
import { SubpageVisual } from "@/components/SubpageVisual";

type VariationCard = {
  id: string;
  name: string;
  style: string;
  similarity: number;
  reverseRisk: number;
  faceExposure: "Low" | "Medium" | "High";
};

const sampleCards: VariationCard[] = [
  {
    id: "v1",
    name: "Night Veil",
    style: "Film grain + micro-shift",
    similarity: 93,
    reverseRisk: 28,
    faceExposure: "Medium",
  },
  {
    id: "v2",
    name: "Silver Bloom",
    style: "Tone remap + relight",
    similarity: 89,
    reverseRisk: 22,
    faceExposure: "Low",
  },
  {
    id: "v3",
    name: "Shadow Flux",
    style: "Texture remix + edge diffusion",
    similarity: 86,
    reverseRisk: 18,
    faceExposure: "Low",
  },
];

const exposureWeight: Record<VariationCard["faceExposure"], number> = {
  Low: 20,
  Medium: 12,
  High: 3,
};

export default function DemoPage() {
  const [privacyLevel, setPrivacyLevel] = useState(68);
  const [uploaded, setUploaded] = useState(false);
  const [processing, setProcessing] = useState(false);

  const generated = useMemo(() => {
    return sampleCards.map((card) => ({
      ...card,
      similarity: Math.max(80, card.similarity - Math.round((privacyLevel - 50) / 8)),
      reverseRisk: Math.max(8, card.reverseRisk - Math.round((privacyLevel - 45) / 4)),
    }));
  }, [privacyLevel]);

  const recommended = useMemo(() => {
    return [...generated].sort((a, b) => a.reverseRisk - b.reverseRisk)[0];
  }, [generated]);

  const score = useMemo(() => {
    const base = 55 + Math.round(privacyLevel / 4);
    return Math.min(
      99,
      base +
        exposureWeight[recommended.faceExposure] -
        Math.round(recommended.reverseRisk / 5),
    );
  }, [privacyLevel, recommended]);

  const runSimulation = () => {
    setProcessing(true);
    window.setTimeout(() => setProcessing(false), 1800);
  };

  return (
    <>
    <SubpageVisual variant="demo" />
      <div className="flex w-full flex-col gap-8">
      <section className="glass rounded-3xl p-8">
        <h1 className="text-3xl font-semibold">GhostFrame Demo Studio</h1>
        <p className="mt-2 max-w-3xl text-sm text-white/70">
          Local MVP simulation: upload/select a sample, tune privacy intensity,
          and generate variation cards with a mock privacy report.
        </p>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <div className="glass rounded-3xl p-6">
          <h2 className="text-lg font-semibold">Input</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {["Portrait Sample", "Street Editorial"].map((sample) => (
              <button
                key={sample}
                onClick={() => setUploaded(true)}
                className="rounded-2xl border border-white/15 bg-white/5 p-4 text-left hover:bg-white/10"
              >
                <p className="font-medium">{sample}</p>
                <p className="mt-1 text-xs text-white/60">Select sample photo</p>
              </button>
            ))}
          </div>
          <label className="mt-5 flex cursor-pointer items-center justify-center rounded-2xl border border-dashed border-white/30 px-5 py-6 text-sm text-white/70 hover:bg-white/5">
            <input type="file" className="hidden" onChange={() => setUploaded(true)} />
            Upload your own photo (local only)
          </label>

          <div className="mt-6">
            <div className="flex items-center justify-between text-sm">
              <span>Privacy level</span>
              <span className="text-white/70">{privacyLevel}%</span>
            </div>
            <input
              type="range"
              min={35}
              max={95}
              value={privacyLevel}
              onChange={(event) => setPrivacyLevel(Number(event.target.value))}
              className="mt-3 w-full accent-violet-400"
            />
          </div>
          <button
            onClick={runSimulation}
            disabled={!uploaded || processing}
            className="mt-6 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black disabled:cursor-not-allowed disabled:opacity-50"
          >
            {processing ? "Generating secure variations..." : "Generate variation cards"}
          </button>
        </div>

        <div className="glass rounded-3xl p-6">
          <h2 className="text-lg font-semibold">Mock Privacy Report</h2>
          <div className="mt-4 space-y-3 text-sm">
            <MetricRow
              label="Visual similarity score"
              value={`${recommended.similarity}%`}
            />
            <MetricRow label="Metadata removal status" value="EXIF stripped / normalized" />
            <MetricRow
              label="Reverse-search risk estimate"
              value={`${recommended.reverseRisk}%`}
            />
            <MetricRow
              label="Face / identity exposure level"
              value={recommended.faceExposure}
            />
            <MetricRow label="Recommended posting version" value={recommended.name} />
          </div>
          <div className="mt-6 rounded-2xl border border-white/15 bg-white/5 p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-white/60">GhostScore</p>
            <p className="mt-2 text-3xl font-semibold">{score}/100</p>
            <p className="mt-1 text-xs text-white/60">
              Higher means lower scraping and re-identification risk.
            </p>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {generated.map((card) => (
          <article key={card.id} className="glass rounded-2xl p-5">
            <div className="h-36 rounded-xl bg-gradient-to-br from-violet-500/25 via-blue-500/20 to-cyan-500/15" />
            <h3 className="mt-4 font-semibold">{card.name}</h3>
            <p className="mt-1 text-xs text-white/65">{card.style}</p>
            <div className="mt-3 space-y-1 text-xs text-white/70">
              <p>Similarity: {card.similarity}%</p>
              <p>Reverse-search risk: {card.reverseRisk}%</p>
              <p>Identity exposure: {card.faceExposure}</p>
            </div>
          </article>
        ))}
      </section>
    </div>
    </>
  );
}

function MetricRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-3 py-2">
      <span className="text-white/70">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  );
}
