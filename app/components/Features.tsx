export default function Features() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-32">

      <div className="mb-16">

        <p className="text-sm uppercase tracking-[0.3em] text-zinc-500 mb-4">
          Platform Capabilities
        </p>

        <h2 className="text-5xl font-semibold tracking-tight max-w-3xl leading-tight">
          Everything founders need to understand their market faster.
        </h2>

      </div>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-zinc-900/40 border border-white/[0.06] rounded-3xl p-8 backdrop-blur-sm [box-shadow:inset_0_1px_0_0_rgba(255,255,255,0.05)] hover:bg-zinc-900/60 hover:border-white/[0.1] hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.4),0_0_30px_rgba(120,119,198,0.1)] transition-all duration-300">

          <h3 className="text-2xl font-semibold mb-4">
            Trend Analysis
          </h3>

          <p className="text-zinc-400 leading-7">
            Identify emerging startup opportunities using AI-powered market intelligence.
          </p>

        </div>

        <div className="bg-zinc-900/40 border border-white/[0.06] rounded-3xl p-8 backdrop-blur-sm [box-shadow:inset_0_1px_0_0_rgba(255,255,255,0.05)] hover:bg-zinc-900/60 hover:border-white/[0.1] hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.4),0_0_30px_rgba(120,119,198,0.1)] transition-all duration-300">

          <h3 className="text-2xl font-semibold mb-4">
            Competitor Tracking
          </h3>

          <p className="text-zinc-400 leading-7">
            Monitor market shifts, funding activity, and competitive positioning in real time.
          </p>

        </div>

        <div className="bg-zinc-900/40 border border-white/[0.06] rounded-3xl p-8 backdrop-blur-sm [box-shadow:inset_0_1px_0_0_rgba(255,255,255,0.05)] hover:bg-zinc-900/60 hover:border-white/[0.1] hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.4),0_0_30px_rgba(120,119,198,0.1)] transition-all duration-300">

          <h3 className="text-2xl font-semibold mb-4">
            Research Automation
          </h3>

          <p className="text-zinc-400 leading-7">
            Automate repetitive founder research workflows with intelligent AI agents.
          </p>

        </div>

      </div>

    </section>
  );
}
