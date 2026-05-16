export default function CTA() {
  return (
    <section className="py-40 text-center px-6">

      <p className="text-sm uppercase tracking-[0.3em] text-zinc-500 mb-6">
        START BUILDING FASTER
      </p>

      <h2 className="text-6xl font-semibold tracking-tight max-w-4xl mx-auto mb-8 leading-tight">
        The future of founder research is AI-native.
      </h2>

      <p className="text-zinc-400 text-xl max-w-2xl mx-auto mb-12 leading-8">
        FounderOS helps startups identify opportunities, monitor markets, and automate research workflows with AI.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">

        <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-b from-white to-zinc-200 text-black font-medium hover:scale-105 hover:shadow-[0_0_28px_rgba(255,255,255,0.28)] transition-all duration-300">
          Get Early Access
        </button>

        <button className="w-full sm:w-auto px-8 py-4 rounded-full border border-zinc-700 text-zinc-300 hover:bg-white/5 hover:border-zinc-500 hover:shadow-[0_0_16px_rgba(255,255,255,0.06)] transition-all duration-300">
          Contact Sales
        </button>

      </div>

    </section>
  );
}
