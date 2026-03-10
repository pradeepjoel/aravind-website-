"use client";

import { BriefcaseBusiness, Calendar, MapPin } from "lucide-react";
import { Reveal } from "./motion/Reveal";

const items = [
  {
    title: "Cybersecurity Administrator – Endpoint",
    company: "Deccan Group of Companies",
    date: "July 2021 – Present",
    location: "Chennai, India",
    bullets: [
      "Investigate security incidents from endpoint protection systems and perform threat analysis",
      "Implement security controls to reduce risk from malware, ransomware, and unauthorized access",
      "Produce weekly and monthly security reports with threat KPIs and incident metrics",
      "Document security procedures, operational processes to support governance & compliance initiatives",
      "Conduct security awareness training and share threat intelligence updates with employees",
      "Configure endpoint policies, device control, firewall rule exceptions aligned with business requirements",
    ],
  },
  {
    title: "Product Support Engineer",
    company: "Fourkits Inc",
    date: "Feb 2020 – June 2021",
    location: "Chennai, India",
    bullets: [
      "Analyzed application logs to detect operational issues and security anomalies",
      "Performed root cause analysis and collaborated with engineering teams to resolve vulnerabilities",
      "Supported production issue resolution while maintaining system reliability and security",
    ],
  },
  {
    title: "Subject Matter Expert – Symantec Endpoint Protection",
    company: "Concentrix Technologies",
    date: "Feb 2018 – Feb 2020",
    location: "Chennai, India",
    bullets: [
      "Managed enterprise endpoint security operations and incident response activities",
      "Provided clients remote support for malware protection, OS attack prevention, and security monitoring",
      "Assisted in securing critical infrastructure including email, database, and web servers",
      "Conducted advanced threat investigations and recommended mitigation and remediation strategies",
    ],
  },
] as const;

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-[92px] pt-[74px]">
      <div className="mx-auto w-full max-w-[1120px] px-6">
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="text-[color:var(--accent)]">
              <BriefcaseBusiness size={16} />
            </span>
            <h2 className="text-[28px] font-semibold tracking-tight text-white">
              Experience
            </h2>
          </div>
        </Reveal>

        <div className="relative mt-7">
          <div className="absolute left-[10px] top-[6px] h-[calc(100%-6px)] w-px bg-[rgba(214,163,68,0.35)]" />

          <div className="space-y-6">
            {items.map((it, idx) => (
              <Reveal key={it.title} delay={idx * 0.06}>
                <div className="relative pl-8">
                  <div className="absolute left-[6px] top-[18px] h-[10px] w-[10px] rounded-full bg-[color:var(--accent)] shadow-[0_0_0_6px_rgba(214,163,68,0.10)]" />

                  <div className="pf-card pf-card-hover px-6 py-5">
                    <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                      <div>
                        <div className="text-[14px] font-semibold text-white/90">
                          {it.title}
                        </div>
                        <div className="mt-0.5 text-[12px] font-semibold text-[color:var(--accent)]">
                          {it.company}
                        </div>
                      </div>

                      <div className="flex flex-col gap-1 text-[11px] text-white/45 md:items-end">
                        <div className="flex items-center gap-1.5">
                          <Calendar size={12} className="text-white/40" />
                          <span>{it.date}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin size={12} className="text-white/40" />
                          <span>{it.location}</span>
                        </div>
                      </div>
                    </div>

                    <ul className="mt-3 space-y-2 text-[12px] leading-[1.75] text-white/50">
                      {it.bullets.map((b) => (
                        <li key={b} className="flex gap-2">
                          <span className="mt-[7px] h-[4px] w-[4px] shrink-0 rounded-full bg-white/30" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

