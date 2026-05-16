export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(120,119,198,0.15),transparent_40%)]" />

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 border-b border-zinc-900/80 backdrop-blur-xl bg-black/40">

        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

          <div className="text-2xl font-semibold tracking-tight">
            FounderOS
          </div>

          <div className="hidden md:flex items-center gap-10 text-sm text-zinc-400">

            <a href="#" className="hover:text-white transition">
              Features
            </a>

            <a href="#" className="hover:text-white transition">
              Dashboard
            </a>

            <a href="#" className="hover:text-white transition">
              Pricing
            </a>

            <a href="#" className="hover:text-white transition">
              Contact
            </a>

          </div>

          <button className="px-5 py-2 rounded-full border border-zinc-700 text-sm hover:bg-zinc-900 transition">
            Join Beta
          </button>

        </div>

      </nav>

      {/* HERO SECTION */}
      <div className="min-h-screen flex items-center justify-center pt-24">

        <div className="text-center px-6">

          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500 mb-6">
            AI Research Operating System
          </p>

          <h1 className="text-7xl md:text-8xl font-semibold tracking-tight mb-6 bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-transparent">
            FounderOS
          </h1>

          <p className="text-zinc-400 text-xl max-w-2xl mx-auto leading-8">
            AI-powered market intelligence for modern startup founders.
          </p>

          <div className="mt-10 flex items-center justify-center gap-4">

            <button className="px-7 py-4 rounded-full bg-white text-black font-medium hover:scale-105 transition duration-300">
              Start Researching
            </button>

            <button className="px-7 py-4 rounded-full border border-zinc-700 text-zinc-300 hover:bg-zinc-900 transition duration-300">
              Watch Demo
            </button>

          </div>

          <div className="mt-16 grid grid-cols-3 gap-10 text-sm text-zinc-500 max-w-2xl mx-auto">

            <div>
              <span className="text-white font-semibold">12k+</span> founder reports
            </div>

            <div>
              <span className="text-white font-semibold">94%</span> trend accuracy
            </div>

            <div>
              <span className="text-white font-semibold">2.4M</span> market signals
            </div>

          </div>

        </div>

      </div>

      {/* FEATURES SECTION */}
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

          <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 hover:border-zinc-700 transition duration-300">

            <h3 className="text-2xl font-semibold mb-4">
              Trend Analysis
            </h3>

            <p className="text-zinc-400 leading-7">
              Identify emerging startup opportunities using AI-powered market intelligence.
            </p>

          </div>

          <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 hover:border-zinc-700 transition duration-300">

            <h3 className="text-2xl font-semibold mb-4">
              Competitor Tracking
            </h3>

            <p className="text-zinc-400 leading-7">
              Monitor market shifts, funding activity, and competitive positioning in real time.
            </p>

          </div>

          <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 hover:border-zinc-700 transition duration-300">

            <h3 className="text-2xl font-semibold mb-4">
              Research Automation
            </h3>

            <p className="text-zinc-400 leading-7">
              Automate repetitive founder research workflows with intelligent AI agents.
            </p>

          </div>

        </div>

        {/* DASHBOARD SECTION */}
        <div className="mt-32 bg-zinc-900/40 border border-zinc-800 rounded-[32px] p-10 overflow-hidden backdrop-blur-xl shadow-[0_0_80px_rgba(120,119,198,0.08)]">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">

            <div>

              <p className="text-zinc-500 text-sm mb-3">
                LIVE MARKET INTELLIGENCE
              </p>

              <h3 className="text-4xl font-semibold tracking-tight">
                AI Research Dashboard
              </h3>

            </div>

            <div className="px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-400 text-sm border border-emerald-500/20 w-fit">
              Live Signals Active
            </div>

          </div>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-black/40 border border-zinc-800 rounded-2xl p-6">

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

            <div className="bg-black/40 border border-zinc-800 rounded-2xl p-6">

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

            <div className="bg-black/40 border border-zinc-800 rounded-2xl p-6">

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

      {/* FINAL CTA SECTION */}
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

        <div className="flex items-center justify-center gap-4">

          <button className="px-8 py-4 rounded-full bg-white text-black font-medium hover:scale-105 transition duration-300">
            Get Early Access
          </button>

          <button className="px-8 py-4 rounded-full border border-zinc-700 text-zinc-300 hover:bg-zinc-900 transition duration-300">
            Contact Sales
          </button>
git status
        </div>

      </section>

    </div>
  );
}