"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const JERSEYS = [
  { label: "Amarelo / Verde", dot: "#facc15" },
  { label: "Azul / Preto",    dot: "#60a5fa" },
] as const;

const NikeSwoosh = () => (
  <svg
    aria-hidden="true"
    className="relative z-10 h-[1.15rem] w-auto text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.22)]"
    viewBox="135.5 361.38 1000 356.39"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M245.8075 717.62406c-29.79588-1.1837-54.1734-9.3368-73.23459-24.4796-3.63775-2.8928-12.30611-11.5663-15.21427-15.2245-7.72958-9.7193-12.98467-19.1785-16.48977-29.6734-10.7857-32.3061-5.23469-74.6989 15.87753-121.2243 18.0765-39.8316 45.96932-79.3366 94.63252-134.0508 7.16836-8.0511 28.51526-31.5969 28.65302-31.5969.051 0-1.11225 2.0153-2.57652 4.4694-12.65304 21.1938-23.47957 46.158-29.37751 67.7703-9.47448 34.6785-8.33163 64.4387 3.34693 87.5151 8.05611 15.898 21.86731 29.6684 37.3979 37.2806 27.18874 13.3214 66.9948 14.4235 115.60699 3.2245 3.34694-.7755 169.19363-44.801 368.55048-97.8366 199.35686-53.0408 362.49439-96.4029 362.51989-96.3672.056.046-463.16259 198.2599-703.62654 301.0914-38.08158 16.2806-48.26521 20.3928-66.16827 26.6785-45.76525 16.0714-86.76008 23.7398-119.89779 22.4235z"
      fill="currentColor"
    />
  </svg>
);

export default function Home() {
  const [timerSecs, setTimerSecs] = useState(600);
  useEffect(() => {
    const id = setInterval(() => setTimerSecs(s => Math.max(0, s - 1)), 1000);
    return () => clearInterval(id);
  }, []);
  const mm  = String(Math.floor(timerSecs / 60)).padStart(2, "0");
  const ss  = String(timerSecs % 60).padStart(2, "0");
  const expired = timerSecs === 0;

  return (
    <>
      {/* ── Header ── */}
      <header className="fixed inset-x-0 top-0 z-50 flex justify-center bg-gradient-to-b from-black/90 via-black/50 to-transparent px-4 pb-5 pt-3">
        <div className="liquid-pill relative flex h-14 w-full max-w-[22rem] items-center justify-center rounded-full px-6">
          <div className="pointer-events-none absolute inset-y-[1px] left-[12%] right-[12%] rounded-full bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.18),transparent)] opacity-60 blur-sm" />
          <NikeSwoosh />
        </div>
      </header>

      {/* ── Sticky bottom CTA ── */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/[0.07] bg-black/80 px-4 pb-safe-bottom pt-3 pb-5 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[26rem] flex-col gap-2.5">
          {/* Timer */}
          <div
            className="flex items-center justify-center gap-1.5 select-none"
            style={{ fontSize: "0.62rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: expired ? "#f87171" : "#fb923c" }}
          >
            <span>⏱</span>
            <span>{expired ? "ÚLTIMA CHANCE!" : `Oferta expira em `}</span>
            {!expired && (
              <span style={{ fontFamily: "monospace", fontVariantNumeric: "tabular-nums" }}>{mm}:{ss}</span>
            )}
          </div>

          {/* Price row + button */}
          <div className="flex items-center gap-3">
            <div className="flex flex-col leading-none">
              <span className="text-[0.58rem] font-semibold text-white/30 line-through">R$ 449,90</span>
              <span className="font-hero text-[1.5rem] tracking-tight text-[#27c97a] drop-shadow-[0_0_20px_rgba(39,201,122,0.5)]">R$ 69,90</span>
            </div>
            <Link
              href="/mines"
              className="liquid-pill relative flex flex-1 h-[3.2rem] items-center justify-center rounded-full px-4 transition-transform active:scale-[0.97]"
            >
              <div className="pointer-events-none absolute inset-y-[1px] left-[8%] right-[8%] rounded-full bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.16),transparent)] opacity-70 blur-sm" />
              <span className="font-hero relative z-10 text-[0.82rem] tracking-[0.14em] text-white">
                Desbloquear meu bônus
              </span>
            </Link>
          </div>
        </div>
      </div>

      <main className="flex min-h-[100dvh] flex-col items-center bg-black px-4 pb-36 pt-[4.75rem]">
        <div className="flex w-full max-w-[26rem] flex-col items-center gap-4">

          {/* ── Hero panel ── */}
          <div className="liquid-panel w-full px-5 py-6 text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-[0.56rem] font-semibold uppercase tracking-[0.2em] text-emerald-400">
              ✅ Compra confirmada
            </span>
            <p className="mt-3 text-[0.54rem] font-semibold uppercase tracking-[0.3em] text-white/30">
              Oferta exclusiva pós-compra
            </p>
            <h1 className="font-hero mt-2 leading-[0.9] text-white">
              <span className="block text-[clamp(2.2rem,9vw,3.2rem)]">PARABÉNS!</span>
              <span className="block text-[clamp(1.3rem,5.5vw,2rem)] text-white/45">VOCÊ GANHOU UM PRESENTE</span>
            </h1>

            {/* Desconto inline */}
            <div className="mt-4 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2">
              <span className="text-[0.58rem] font-semibold text-white/30 line-through">R$ 449,90</span>
              <span className="h-3 w-px bg-white/15" />
              <span className="font-hero text-[1rem] tracking-tight text-[#27c97a]">R$ 69,90</span>
              <span className="rounded-full border border-[#27c97a]/30 bg-[#27c97a]/10 px-2 py-0.5 text-[0.5rem] font-bold uppercase tracking-[0.1em] text-[#27c97a]">
                80% OFF
              </span>
            </div>

            <p className="mt-4 text-[0.78rem] leading-[1.6] text-white/50">
              Você ganhou <strong className="font-semibold text-white/75">6 tentativas gratuitas</strong>{" "}
              no <strong className="font-semibold text-white/75">Mines da Copa</strong> — vire as casas
              e desbloqueie a Camisa Oficial do Brasil.
            </p>
          </div>

          {/* ── Video 3D ── */}
          <div className="flex w-full justify-center">
            <video
              className="h-auto w-full max-w-[15rem]"
              style={{ filter: "drop-shadow(0 24px 40px rgba(0,0,0,0.95)) drop-shadow(0 0 32px rgba(255,255,255,0.04))" }}
              autoPlay
              muted
              loop
              playsInline
              aria-label="Camisa do Brasil"
            >
              <source src="/hero-jersey-loop.mp4" type="video/mp4" />
            </video>
          </div>

          {/* ── Cores ── */}
          <div className="flex items-center gap-5">
            {JERSEYS.map(({ label, dot }) => (
              <div key={label} className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full ring-1 ring-white/10" style={{ backgroundColor: dot }} />
                <span className="text-[0.5rem] font-semibold uppercase tracking-[0.16em] text-white/35">{label}</span>
              </div>
            ))}
          </div>

        </div>
      </main>
    </>
  );
}
