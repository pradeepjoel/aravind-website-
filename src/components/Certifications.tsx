"use client";

import {
  BadgeCheck,
  Cloud,
  FileBadge,
  Shield,
  ShieldHalf,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "./motion/Reveal";

type Cert = {
  label: string;
  icon: LucideIcon;
  href?: string;
};

const certs: Cert[] = [
  {
    label: "CompTIA Network+ CE",
    icon: Shield,
    href: "https://www.credly.com/badges/1ec994b5-7e05-4c74-a6f1-fcb3a141de70",
  },
  {
    label: "CompTIA Security+ CE",
    icon: ShieldHalf,
    href: "https://www.credly.com/badges/b38157cd-fd38-4a03-b156-13b8380629ec",
  },
  {
    label: "AWS Certified Solutions Architect – Associate",
    icon: Cloud,
    href: "https://www.credly.com/badges/d46da8aa-adaf-48a7-94d5-aaa0229f39b7/public_url",
  },
  { label: "ISO 27001:2022 Lead Auditor", icon: FileBadge },
  { label: "Certified Information Systems Auditor (CISA)", icon: BadgeCheck },
];

export function Certifications() {
  return (
    <section id="certifications" className="scroll-mt-[92px] pt-[74px]">
      <div className="mx-auto w-full max-w-[1120px] px-6">
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="text-[color:var(--accent)]">🎖</span>
            <h2 className="text-[28px] font-semibold tracking-tight text-white">
              Certifications
            </h2>
          </div>
        </Reveal>

        <div className="mt-7 grid gap-4 md:grid-cols-3">
          {certs.map((c, idx) => {
            const Icon = c.icon;
            const isLastRowCentered = idx >= 3;
            const className = [
              "pf-card pf-card-hover flex h-[92px] flex-col items-center justify-center gap-3 text-center",
              isLastRowCentered ? "md:col-span-1" : "",
              idx === 3 ? "md:col-start-1 md:col-end-2" : "",
              idx === 4 ? "md:col-start-2 md:col-end-3" : "",
              c.href ? "cursor-pointer" : "",
            ].join(" ");

            const content = (
              <>
                <span className="inline-flex h-[34px] w-[34px] items-center justify-center rounded-[12px] bg-white/[0.02] text-[color:var(--accent)]">
                  <Icon size={16} />
                </span>
                <div className="max-w-[220px] text-[12px] font-medium leading-[1.35] text-white/75">
                  {c.label}
                </div>
              </>
            );

            return (
              <Reveal key={c.label} delay={idx * 0.04}>
                {c.href ? (
                  <a
                    className={className}
                    href={c.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${c.label} verification link`}
                  >
                    {content}
                  </a>
                ) : (
                  <div className={className}>{content}</div>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

