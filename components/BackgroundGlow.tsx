export function BackgroundGlow() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      <div className="absolute left-1/2 top-[-260px] h-[620px] w-[980px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[140px]" />
      <div className="absolute right-[-240px] top-[220px] h-[620px] w-[620px] rounded-full bg-emerald-500/15 blur-[140px]" />
      <div className="absolute bottom-[-260px] left-[8%] h-[560px] w-[560px] rounded-full bg-violet-500/14 blur-[150px]" />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:88px_88px] [mask-image:radial-gradient(ellipse_at_top,black,transparent_72%)]" />
    </div>
  );
}