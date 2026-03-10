"use client";

import {
  Activity,
  BarChart3,
  ClipboardList,
  Eye,
  GraduationCap,
  Laptop,
  Search,
  Shield,
  ShieldCheck,
  ShieldOff,
  Users,
  Wrench,
} from "lucide-react";
import { Reveal } from "./motion/Reveal";

const skills = [
  { label: "Information Security Governance", icon: ShieldCheck },
  { label: "Security Incident Investigation", icon: Search },
  { label: "Intrusion Detection & Prevention", icon: Eye },
  { label: "Security Monitoring & Threat Analysis", icon: Activity },
  { label: "Risk Assessment & Mitigation", icon: ShieldOff },
  { label: "Endpoint Security Management", icon: Laptop },
  { label: "Security KPI Reporting", icon: BarChart3 },
  { label: "Security Controls Implementation", icon: Wrench },
  { label: "Security Awareness Training", icon: GraduationCap },
  { label: "Security Policy Documentation", icon: ClipboardList },
  { label: "SIEM & Security Reporting", icon: Shield },
  { label: "Team Mentorship", icon: Users },
] as const;

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-[92px] pt-[74px]">
      <div className="mx-auto w-full max-w-[1120px] px-6">
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="text-[color:var(--accent)]">⚙︎</span>
            <h2 className="text-[28px] font-semibold tracking-tight text-white">
              Core Skills
            </h2>
          </div>
        </Reveal>

        <div className="mt-7 grid gap-4 md:grid-cols-3">
          {skills.map((s, idx) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.label} delay={idx * 0.03}>
                <div className="pf-card pf-card-hover flex h-[54px] items-center gap-3 px-4">
                  <span className="inline-flex h-[28px] w-[28px] items-center justify-center rounded-[10px] bg-white/[0.02] text-[color:var(--accent)]">
                    <Icon size={14} />
                  </span>
                  <span className="text-[12px] font-medium text-white/75">
                    {s.label}
                  </span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

