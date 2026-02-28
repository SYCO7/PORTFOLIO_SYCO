import { profile } from "@/lib/portfolio-data";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-border/70 bg-background/70 py-6 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-start justify-between gap-2 px-6 text-xs uppercase tracking-[0.12em] text-slate-400 md:flex-row md:px-10">
        <p>{profile.name}</p>
        <p>Cybersecurity Engineering • Automation</p>
        <a
          href="mailto:tanmoymondaltanmoy94@gmail.com"
          className="normal-case tracking-normal text-slate-400 transition-colors hover:text-cyan-300"
        >
          tanmoymondaltanmoy94@gmail.com
        </a>
      </div>
    </footer>
  );
}
