export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/[0.06] backdrop-blur-2xl bg-black/60">

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

        <button className="px-5 py-2 rounded-full border border-zinc-700 text-sm text-zinc-300 hover:bg-white/5 hover:border-zinc-500 transition-all duration-300">
          Join Beta
        </button>

      </div>

    </nav>
  );
}