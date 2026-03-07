export default function Loading() {
  return (
    <main className="relative mx-auto flex min-h-screen w-full max-w-6xl items-center justify-center px-6 py-16 md:px-10">
      <div className="space-y-4 rounded-2xl border border-cyan-300/30 bg-[#051026]/85 px-8 py-6 text-center font-mono shadow-[0_0_0_1px_rgba(54,243,255,0.2),0_16px_40px_rgba(0,0,0,0.55)]">
        <div className="mx-auto h-10 w-10 rounded-full border border-cyan-300/35 p-1">
          <div className="h-full w-full animate-spin rounded-full border-2 border-emerald-300/25 border-t-emerald-300" />
        </div>
        <p className="text-xs uppercase tracking-[0.18em] text-cyan-300">Booting secure interface...</p>
      </div>
    </main>
  );
}
