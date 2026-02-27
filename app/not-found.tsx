import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative mx-auto flex min-h-screen w-full max-w-5xl items-center justify-center px-6 py-16 md:px-10">
      <section className="w-full max-w-2xl space-y-5 rounded-lg border border-cyan-400/35 bg-black/55 px-6 py-8 font-mono shadow-lg shadow-cyan-500/10">
        <p className="text-[11px] uppercase tracking-[0.16em] text-cyan-300">Error 404</p>
        <h1 className="text-3xl font-semibold tracking-tight text-slate-100 md:text-4xl">Page not found</h1>
        <p className="text-sm text-slate-300 md:text-base">
          The endpoint you requested does not exist or has moved.
        </p>
        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center rounded-md border border-border/70 bg-black/45 px-4 py-2 text-xs uppercase tracking-[0.12em] text-slate-200 transition-colors hover:text-cyan-300"
          >
            Return to home
          </Link>
        </div>
      </section>
    </main>
  );
}
