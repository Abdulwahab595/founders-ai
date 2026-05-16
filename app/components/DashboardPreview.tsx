export default function DashboardPreview() {
  return (
    <section className="max-w-6xl mx-auto px-6 pb-32">

      <div className="bg-zinc-900/20 border border-white/[0.07] rounded-[32px] p-10 overflow-hidden backdrop-blur-2xl [box-shadow:inset_0_1px_0_0_rgba(255,255,255,0.08),0_0_80px_rgba(120,119,198,0.1)] hover:[box-shadow:inset_0_1px_0_0_rgba(255,255,255,0.08),0_0_120px_rgba(120,119,198,0.18)] hover:border-white/[0.12] transition-all duration-500">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">

          <div>

            <p className="text-zinc-500 text-sm mb-3">
              LIVE MARKET INTELLIGENCE
            </p>

            <h3 className="text-4xl font-semibold tracking-tight">
              AI Research Dashboard
            </h3>

          </div>

          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-400 text-sm border border-emerald-500/20 w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Live Signals Active
          </div>

        </div>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-black/30 border border-white/[0.06] rounded-2xl p-6 backdrop-blur-sm [box-shadow:inset_0_1px_0_0_rgba(255,255,255,0.04)] hover:bg-black/50 hover:border-white/[0.1] hover:-translate-y-0.5 transition-all duration-300">

            <p className="text-zinc-500 text-sm mb-4">
              Trending Markets
            </p>

            <div className="space-y-4">

              <div className="flex items-center justify-between">
                <span>AI Agents</span>
                <span className="text-emerald-400">+24%</span>
              </div>

              <div className="flex items-center justify-between">
                <span>Voice AI</span>
                <span className="text-emerald-400">+18%</span>
              </div>

              <div className="flex items-center justify-between">
                <span>Healthcare AI</span>
                <span className="text-emerald-400">+31%</span>
              </div>

            </div>

          </div>

          <div className="bg-black/30 border border-white/[0.06] rounded-2xl p-6 backdrop-blur-sm [box-shadow:inset_0_1px_0_0_rgba(255,255,255,0.04)] hover:bg-black/50 hover:border-white/[0.1] hover:-translate-y-0.5 transition-all duration-300">

            <p className="text-zinc-500 text-sm mb-4">
              Founder Activity
            </p>

            <div className="space-y-4">

              <div className="flex items-center justify-between">
                <span>Research Sessions</span>
                <span>12.4k</span>
              </div>

              <div className="flex items-center justify-between">
                <span>AI Reports Generated</span>
                <span>4.2k</span>
              </div>

              <div className="flex items-center justify-between">
                <span>Market Alerts</span>
                <span>892</span>
              </div>

            </div>

          </div>

          <div className="bg-black/30 border border-white/[0.06] rounded-2xl p-6 backdrop-blur-sm [box-shadow:inset_0_1px_0_0_rgba(255,255,255,0.04)] hover:bg-black/50 hover:border-white/[0.1] hover:-translate-y-0.5 transition-all duration-300">

            <p className="text-zinc-500 text-sm mb-4">
              Intelligence Score
            </p>

            <div className="flex items-center justify-center h-full">

              <div className="text-center">

                <div className="text-6xl font-bold mb-2">
                  94
                </div>

                <p className="text-zinc-500">
                  Market Confidence
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
