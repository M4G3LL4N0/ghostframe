import { SubpageVisual } from "@/components/SubpageVisual";
export default function ContactPage() {
  return (
    <>
    <SubpageVisual variant="contact" />
      <div className="flex w-full flex-col gap-8">
      <section className="glass rounded-3xl p-8">
        <h1 className="text-3xl font-semibold">Contact</h1>
        <p className="mt-3 max-w-2xl text-sm text-white/70">
          Request a pilot, ask product questions, or discuss privacy workflows for
          your team.
        </p>
      </section>

      <section className="glass rounded-2xl p-6">
        <form className="grid gap-4 md:grid-cols-2">
          <input
            placeholder="Name"
            className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm outline-none placeholder:text-white/40 focus:border-white/40"
          />
          <input
            placeholder="Work email"
            className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm outline-none placeholder:text-white/40 focus:border-white/40"
          />
          <input
            placeholder="Company"
            className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm outline-none placeholder:text-white/40 focus:border-white/40 md:col-span-2"
          />
          <textarea
            placeholder="Tell us what you're trying to protect."
            rows={5}
            className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm outline-none placeholder:text-white/40 focus:border-white/40 md:col-span-2"
          />
          <button
            type="button"
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black md:col-span-2 md:w-fit"
          >
            Send request
          </button>
        </form>
      </section>
    </div>
  </>
  )
}
