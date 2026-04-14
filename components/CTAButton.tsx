import Link from "next/link";
import { ArrowRight } from "lucide-react";

type CTAButtonProps = {
  href: string;
  label: string;
  variant?: "primary" | "secondary" | "ghost";
  external?: boolean;
  className?: string;
};

const variantStyles = {
  primary:
    "bg-gradient-to-r from-electric-400 via-electric-500 to-indigo-500 text-white shadow-[0_18px_40px_rgba(20,146,255,0.32)] hover:brightness-110",
  secondary:
    "border border-white/15 bg-white/8 text-white hover:bg-white/12",
  ghost:
    "text-electric-300 hover:bg-electric-300/10"
};

export default function CTAButton({
  href,
  label,
  variant = "primary",
  external,
  className = ""
}: CTAButtonProps) {
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition duration-200 ${variantStyles[variant]} ${className}`}
    >
      <span>{label}</span>
      <ArrowRight className="h-4 w-4" aria-hidden="true" />
    </Link>
  );
}
