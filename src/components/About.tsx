"use client";

import { User } from "lucide-react";
import { Reveal } from "./motion/Reveal";

export function About() {
  return (
    <section id="about" className="scroll-mt-[92px] pt-[74px]">
      <div className="mx-auto w-full max-w-[1120px] px-6">
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="text-[color:var(--accent)]">
              <User size={16} />
            </span>
            <h2 className="text-[28px] font-semibold tracking-tight text-white">
              About Me
            </h2>
          </div>

          <div className="mt-6 max-w-[760px] space-y-4 text-[13px] leading-[1.95] text-white/55">
            <p>
              I am an Information Security professional with over eight years of
              experience in endpoint protection, threat investigation, and
              enterprise security operations. My career has focused on defending
              systems from malware, ransomware, and advanced threats while
              supporting governance, risk management, and compliance initiatives.
            </p>
            <p>
              I have hands-on experience in security monitoring, incident
              investigation, endpoint security management, and security KPI
              reporting. I am currently preparing for the Certified Information
              Systems Auditor (CISA) certification to deepen my expertise in
              security auditing, risk assessment, and compliance management
              aligned with ISO/IEC 27001 frameworks.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

