import { BackgroundGlow } from "@/components/BackgroundGlow";
import { Dashboard } from "@/components/Dashboard";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";

export default function Home() {
  return (
    <>
      <BackgroundGlow />
      <Sidebar />
      <Header />

      <main className="min-h-screen overflow-x-hidden bg-[#05070c] text-white">
        <Dashboard />
      </main>
    </>
  );
}