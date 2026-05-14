import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

type Props = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  external?: boolean;
  className?: string;
  ariaLabel?: string;
};

const styles: Record<Variant, string> = {
  primary:
    "bg-blood text-bone hover:bg-bloodDark active:translate-y-[1px] focus-visible:ring-2 focus-visible:ring-bone/40",
  secondary:
    "border border-bone/30 text-bone hover:border-bone hover:bg-bone/5 active:translate-y-[1px] focus-visible:ring-2 focus-visible:ring-bone/40",
  ghost:
    "text-bone hover:text-bloodLight transition-colors focus-visible:ring-2 focus-visible:ring-bone/40 focus-visible:ring-offset-2 focus-visible:ring-offset-ink",
};

export default function Button({ href, children, variant = "primary", external, className = "", ariaLabel }: Props) {
  const cls = `inline-flex items-center justify-center gap-2 min-h-[48px] px-7 text-sm md:text-base font-medium tracking-wide uppercase rounded-none transition-all duration-150 ${styles[variant]} ${className}`;
  const props = external ? { target: "_blank", rel: "noopener noreferrer" } : {};
  return (
    <Link href={href} className={cls} aria-label={ariaLabel} {...props}>
      {children}
    </Link>
  );
}
