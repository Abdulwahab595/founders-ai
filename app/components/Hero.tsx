export default function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-24">

      <div className="text-center px-6">

        <div className="animate-fade-up w-fit mx-auto flex items-center px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs uppercase tracking-[0.25em] text-zinc-400 mb-8">
          AI Research Operating System
        </div>

        <h1 className="animate-fade-up [animation-delay:0.1s] text-7xl md:text-8xl font-semibold tracking-tight mb-6 bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-transparent">
          FounderOS
        </h1>

        <p className="animate-fade-up [animation-delay:0.2s] text-zinc-400 text-xl max-w-2xl mx-auto leading-8">
          AI-powered market intelligence for modern startup founders.
        </p>

        <div className="animate-fade-up [animation-delay:0.3s] mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">

          <button className="w-full sm:w-auto px-7 py-4 rounded-full bg-gradient-to-b from-white to-zinc-200 text-black font-medium hover:scale-105 hover:shadow-[0_0_28px_rgba(255,255,255,0.28)] transition-all duration-300">
            Start Researching
          </button>

          <button className="w-full sm:w-auto px-7 py-4 rounded-full border border-zinc-700 text-zinc-300 hover:bg-white/5 hover:border-zinc-500 hover:shadow-[0_0_16px_rgba(255,255,255,0.06)] transition-all duration-300">
            Watch Demo
          </button>

        </div>

        <div className="animate-fade-up [animation-delay:0.45s] mt-10 pt-10 border-t border-white/[0.06] grid grid-cols-3 gap-10 text-sm text-zinc-500 max-w-2xl mx-auto">

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
  );
}
