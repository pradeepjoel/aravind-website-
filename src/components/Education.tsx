"use client";

import { GraduationCap } from "lucide-react";
import { Reveal } from "./motion/Reveal";

export function Education() {
  return (
    <section id="education" className="scroll-mt-[92px] pt-[74px]">
      <div className="mx-auto w-full max-w-[1120px] px-6">
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="text-[color:var(--accent)]">
              <GraduationCap size={16} />
            </span>
            <h2 className="text-[28px] font-semibold tracking-tight text-white">
              Education
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-7 pf-card pf-card-hover px-6 py-5">
            <div className="text-[13px] font-semibold text-white/90">
              Bachelor of Engineering – Electronics & Communication Engineering
            </div>
            <div className="mt-1 text-[12px] font-semibold text-[color:var(--accent)]">
              Ponniah Ramajayam Institute of Science and Technology
            </div>
            <div className="mt-1 text-[11px] text-white/45">
              Chennai, India • GPA: 7.1
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

