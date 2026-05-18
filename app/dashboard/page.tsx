import { SubpageVisual } from "@/components/SubpageVisual";
const sessions = [
  { id: "GF-2041", date: "May 10", source: "Editorial Portrait", variants: 12, riskDelta: "-31%" },
  { id: "GF-2038", date: "May 09", source: "Conference Speaker", variants: 8, riskDelta: "-24%" },
  { id: "GF-2034", date: "May 08", source: "Street Campaign", variants: 15, riskDelta: "-36%" },
];

export default function DashboardPage() {
  return (
    <>
    <SubpageVisual variant="dashboard" />
      <div className="flex w-full flex-col gap-8">
      <section className="glass rounded-3xl p-8">
        <h1 className="text-3xl font-semibold">Privacy Dashboard</h1>
        <p className="mt-2 text-sm text-white/70">
          Snapshot of recent GhostFrame runs and reporting status.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-4">
        {[
          ["Total protected uploads", "286"],
          ["Average similarity", "90%"],
          ["Avg reverse risk drop", "29%"],
          ["Metadata stripped", "100%"],
        ].map(([label, value]) => (
          <article key={label} className="glass rounded-2xl p-5">
            <p className="text-xs text-white/60">{label}</p>
            <p className="mt-3 text-2xl font-semibold">{value}</p>
          </article>
        ))}
      </section>

      <section className="glass rounded-2xl p-6">
        <h2 className="text-lg font-semibold">Recent Generation Sessions</h2>
        <div className="mt-4 overflow-hidden rounded-xl border border-white/10">
          <table className="w-full text-left text-sm">
            <thead className="bg-white/5 text-white/70">
              <tr>
                <th className="px-3 py-2">Session</th>
                <th className="px-3 py-2">Date</th>
                <th className="px-3 py-2">Source</th>
                <th className="px-3 py-2">Variants</th>
                <th className="px-3 py-2">Risk Delta</th>
              </tr>
            </thead>
            <tbody>
              {sessions.map((session) => (
                <tr key={session.id} className="border-t border-white/10">
                  <td className="px-3 py-2">{session.id}</td>
                  <td className="px-3 py-2">{session.date}</td>
                  <td className="px-3 py-2">{session.source}</td>
                  <td className="px-3 py-2">{session.variants}</td>
                  <td className="px-3 py-2 text-emerald-300">{session.riskDelta}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  </>
  )
}
