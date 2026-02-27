export default function Loading() {
  return (
    <main className="relative mx-auto flex min-h-screen w-full max-w-5xl items-center justify-center px-6 py-16 md:px-10">
      <div className="space-y-4 rounded-lg border border-cyan-400/35 bg-black/55 px-6 py-5 text-center font-mono shadow-lg shadow-cyan-500/10">
        <div className="mx-auto h-7 w-7 animate-spin rounded-full border-2 border-cyan-300/25 border-t-cyan-300" />
        <p className="text-xs uppercase tracking-[0.18em] text-cyan-300">Loading secure interface</p>
      </div>
    </main>
  );
}
