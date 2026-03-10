"use client";

import { Globe2, Heart } from "lucide-react";
import { Reveal } from "./motion/Reveal";

const languages = [
  { name: "English", level: "Full Professional Proficiency" },
  { name: "French", level: "Limited Working Proficiency" },
  { name: "Tamil", level: "Native" },
] as const;

const interests = [
  "Endpoint Security Lab Experimentation",
  "Threat Intelligence",
  "Piano",
  "Singing",
  "Photography",
] as const;

export function LanguagesInterests() {
  return (
    <section className="pt-[56px]">
      <div className="mx-auto w-full max-w-[1120px] px-6">
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="text-[color:var(--accent)]">
              <Globe2 size={16} />
            </span>
            <h2 className="text-[24px] font-semibold tracking-tight text-white">
              Languages
            </h2>
          </div>
        </Reveal>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {languages.map((l, idx) => (
            <Reveal key={l.name} delay={idx * 0.05}>
              <div className="pf-card pf-card-hover flex h-[76px] flex-col items-center justify-center text-center">
                <div className="text-[12px] font-semibold text-white/85">
                  {l.name}
                </div>
                <div className="mt-1 text-[11px] text-white/45">{l.level}</div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.08}>
          <div className="mt-10 flex items-center gap-3">
            <span className="text-[color:var(--accent)]">
              <Heart size={16} />
            </span>
            <h2 className="text-[24px] font-semibold tracking-tight text-white">
              Interests
            </h2>
          </div>
        </Reveal>

        <div className="mt-5 flex flex-wrap gap-3">
          {interests.map((it, idx) => (
            <Reveal key={it} delay={idx * 0.03}>
              <div className="rounded-full border border-white/[0.08] bg-white/[0.02] px-4 py-2 text-[11px] font-medium text-white/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
                {it}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

