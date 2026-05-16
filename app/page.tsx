
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import DashboardPreview from "./components/DashboardPreview";
import CTA from "./components/CTA";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">

      <div className="animate-pulse-glow absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(120,119,198,0.22),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_30%_at_80%_80%,rgba(120,119,198,0.06),transparent)]" />

      <Navbar />
      <Hero />
      <Features />
      <DashboardPreview />
      <CTA />

    </div>
  );
}