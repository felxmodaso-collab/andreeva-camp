type Props = { className?: string };

export default function Mountains({ className = "" }: Props) {
  return (
    <svg
      viewBox="0 0 1440 200"
      preserveAspectRatio="none"
      aria-hidden
      className={className}
    >
      <path
        d="M0 200 L0 120 L80 80 L160 110 L240 60 L320 90 L380 50 L460 95 L540 70 L620 30 L720 75 L800 50 L880 100 L960 70 L1050 110 L1130 85 L1220 115 L1300 90 L1380 130 L1440 105 L1440 200 Z"
        fill="currentColor"
        fillOpacity="0.18"
      />
      <path
        d="M0 200 L0 150 L100 130 L200 145 L300 110 L400 140 L500 120 L600 150 L700 130 L800 160 L900 135 L1000 165 L1100 140 L1200 170 L1300 145 L1400 175 L1440 160 L1440 200 Z"
        fill="currentColor"
        fillOpacity="0.32"
      />
    </svg>
  );
}
