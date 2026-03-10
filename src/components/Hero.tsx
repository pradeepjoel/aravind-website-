"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Download, Mail, MoveRight } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="pt-[46px]">
      <div className="mx-auto w-full max-w-[1120px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="grid items-center gap-12 md:grid-cols-[1fr_460px]"
        >
          <div>
            <div className="flex items-center gap-2 text-[12px] font-medium text-white/55">
              <span className="text-[color:var(--accent)]">○</span>
              <span>Cybersecurity Administrator</span>
            </div>

            <h1 className="mt-5 text-[52px] font-semibold leading-[1.02] tracking-[-0.02em] text-white md:text-[58px]">
              Protecting <br />
              Systems.{" "}
              <span className="text-[color:var(--accent)]">Managing</span>
              <br />
              <span className="text-[color:var(--accent)]">Risk</span>.{" "}
              <span className="text-white">Strengthening</span>
              <br />
              <span className="text-white">Security</span>.
            </h1>

            <p className="mt-5 max-w-[520px] text-[13px] leading-[1.85] text-white/55">
              Information Security professional with 8+ years of experience in
              Endpoint Security, Incident Response, and Security Operations.
              Transitioning toward Information Security Governance, Risk
              Management, and Compliance (GRC). Currently preparing for CISA.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link
                href="#experience"
                className="inline-flex h-[40px] items-center gap-2 rounded-[10px] bg-[color:var(--accent)] px-4 text-[12px] font-semibold text-black shadow-[0_10px_22px_rgba(214,163,68,0.20)] transition-colors hover:bg-[color:var(--accent-2)]"
              >
                View Experience <MoveRight size={14} />
              </Link>
              <Link
                href="#contact"
                className="inline-flex h-[40px] items-center gap-2 rounded-[10px] border border-white/[0.10] bg-black/20 px-4 text-[12px] font-semibold text-white/80 transition-colors hover:bg-white/[0.04]"
              >
                <Mail size={14} /> Contact Me
              </Link>
              <a
                href="/Aravindhan_Kannan_Resume_2026.pdf"
                download
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-[40px] items-center gap-2 rounded-[10px] border border-white/[0.10] bg-black/20 px-4 text-[12px] font-semibold text-white/80 transition-colors hover:bg-white/[0.04]"
              >
                <Download size={14} /> Download CV
              </a>
            </div>
          </div>

          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="mx-auto w-full max-w-[460px]"
          >
            <div className="pf-card overflow-hidden rounded-[18px] border-white/[0.06] bg-white/[0.04] p-[10px]">
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[14px] bg-white/[0.02] p-2">
                <Image
                  src="/profile.png"
                  alt="Aravindhan Kannan"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

