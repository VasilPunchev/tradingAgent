import { BackgroundGlow } from "@/components/BackgroundGlow";
import { Dashboard } from "@/components/Dashboard";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <>
      <BackgroundGlow />
      <Header />

      <main className="min-h-screen overflow-x-hidden bg-[#05070c] text-white">
        <Dashboard />
      </main>
    </>
  );
}