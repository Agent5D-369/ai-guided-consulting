import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import GlassCard from "@/components/GlassCard";

type ServiceCardProps = {
  title: string;
  copy: string;
  href: string;
};

export default function ServiceCard({ title, copy, href }: ServiceCardProps) {
  return (
    <GlassCard className="group h-full p-6 transition duration-300 hover:-translate-y-1 hover:border-electric-300/30 hover:bg-white/[0.07]">
      <div className="flex h-full flex-col justify-between gap-6">
        <div className="space-y-3">
          <h3 className="font-heading text-xl font-semibold tracking-tight text-white">{title}</h3>
          <p className="text-sm leading-7 text-slate-300 sm:text-base">{copy}</p>
        </div>
        <Link
          href={href}
          className="inline-flex items-center gap-2 text-sm font-semibold text-electric-300 transition group-hover:text-electric-200"
        >
          Learn more
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </GlassCard>
  );
}
