"use client";
import { Mail, MapPin, Phone, Linkedin } from "lucide-react";
import { Reveal } from "./motion/Reveal";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-[92px] pt-[74px] pb-[46px]">
      <div className="mx-auto w-full max-w-[1120px] px-6">
        <Reveal>
          <div className="mx-auto max-w-[720px] text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="text-[color:var(--accent)]">✉︎</span>
              <h2 className="text-[28px] font-semibold tracking-tight text-white">
                Get in Touch
              </h2>
            </div>
            <p className="mt-3 text-[12px] leading-[1.8] text-white/50">
              Feel free to reach out for collaborations, cybersecurity
              consulting, or professional opportunities.
            </p>
          </div>
        </Reveal>

        <div className="mx-auto mt-8 w-full max-w-[520px] text-center">
          <div className="space-y-3 text-[12px] text-white/55">
            <div className="flex items-center justify-center gap-2">
              <Mail size={14} className="text-[color:var(--accent)]" />
              <a
                href="mailto:aravindhankannan.ofc@gmail.com"
                className="transition-colors hover:text-white/80"
              >
                aravindhankannan.ofc@gmail.com
              </a>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Phone size={14} className="text-[color:var(--accent)]" />
              <span>+91 7418013813</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <MapPin size={14} className="text-[color:var(--accent)]" />
              <span>France</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Linkedin size={14} className="text-[color:var(--accent)]" />
              <a
                href="https://www.linkedin.com/in/aravindhan-kannan/"
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-white/80"
              >
                linkedin.com/in/aravindhan-kannan
              </a>
            </div>
          </div>

          <Reveal delay={0.06}>
            <div className="mt-7 flex items-center justify-center gap-3">
              <a
                href="mailto:aravindhankannan.ofc@gmail.com"
                className="inline-flex h-[40px] items-center gap-2 rounded-[10px] bg-[color:var(--accent)] px-5 text-[12px] font-semibold text-black shadow-[0_10px_22px_rgba(214,163,68,0.20)] transition-colors hover:bg-[color:var(--accent-2)]"
              >
                <Mail size={14} /> Email Me
              </a>
              <a
                href="https://www.linkedin.com/in/aravindhan-kannan/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-[40px] items-center gap-2 rounded-[10px] border border-white/[0.10] bg-black/20 px-5 text-[12px] font-semibold text-white/80 transition-colors hover:bg-white/[0.04]"
              >
                <Linkedin size={14} /> LinkedIn
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

