import Link from "next/link";

import CTAButton from "@/components/CTAButton";
import { footerLinks } from "@/lib/content";
import { BOOKING_URL, CONTACT_EMAIL, SITE_NAME, TAGLINE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 pb-28 pt-14 sm:pb-16">
      <div className="container-shell grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-5">
          <div>
            <p className="font-heading text-2xl font-semibold tracking-tight text-white">{SITE_NAME}</p>
            <p className="mt-2 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">{TAGLINE}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <CTAButton href={BOOKING_URL} label="Book Your Rebuild Call" external />
            <CTAButton href="/the-7-structural-gaps-behind-project-collapse" label="See the 7 Structural Gaps" variant="secondary" />
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Navigate</p>
            <ul className="mt-4 space-y-3">
              {footerLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-slate-300 transition hover:text-white sm:text-base">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Contact</p>
            <ul className="mt-4 space-y-3">
              <li>
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-sm text-slate-300 transition hover:text-white sm:text-base">
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li className="text-sm leading-7 text-slate-400 sm:text-base">
                Built for founders, consultants, coaches, and mission-led businesses ready for a calmer, stronger structure.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container-shell mt-10 border-t border-white/10 pt-6 text-sm text-slate-500">
        © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
      </div>
    </footer>
  );
}
