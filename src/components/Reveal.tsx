"use client";
import { ReactNode, useEffect, useRef, useState } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
};

export default function Reveal({ children, delay = 0, className = "", as: Tag = "div" }: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setVisible(true);
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const styleStr = `transition: opacity .8s cubic-bezier(.22,.61,.36,1) ${delay}ms, transform .8s cubic-bezier(.22,.61,.36,1) ${delay}ms`;
  const Tg = Tag as any;

  return (
    <Tg
      ref={ref as any}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        willChange: "opacity, transform",
        transition: styleStr,
      }}
    >
      {children}
    </Tg>
  );
}
