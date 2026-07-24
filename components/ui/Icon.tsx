import { cn } from "@/lib/utils";

export type IconName =
  | "compass"
  | "stamp"
  | "ledger"
  | "shield"
  | "radar"
  | "layers"
  | "spark"
  | "clock"
  | "users"
  | "arrow"
  | "arrowUpRight"
  | "check"
  | "plus"
  | "mail"
  | "phone"
  | "pin"
  | "quote"
  | "menu"
  | "close"
  | "linkedin"
  | "x"
  | "facebook";

const paths: Record<IconName, React.ReactNode> = {
  compass: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m15.5 8.5-2 5.5-5.5 2 2-5.5z" />
    </>
  ),
  stamp: (
    <>
      <path d="M5 20h14" />
      <path d="M7 16h10v2H7z" />
      <path d="M9 16V11a3 3 0 0 1-3-3V7a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v1a3 3 0 0 1-3 3v5" />
    </>
  ),
  ledger: (
    <>
      <path d="M5 4h13a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H5z" />
      <path d="M5 4a2 2 0 0 0 0 4h2" />
      <path d="M10 9h5M10 13h5M10 17h3" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 5 6v5.5c0 4.2 2.9 7.9 7 9.5 4.1-1.6 7-5.3 7-9.5V6z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  radar: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.2" />
      <path d="M12 12 19 6" />
    </>
  ),
  layers: (
    <>
      <path d="m12 3 8 4.5-8 4.5-8-4.5z" />
      <path d="m4 12 8 4.5 8-4.5" />
      <path d="m4 16.5 8 4.5 8-4.5" />
    </>
  ),
  spark: (
    <>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" />
      <circle cx="12" cy="12" r="2.5" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3.5 19a5.5 5.5 0 0 1 11 0" />
      <path d="M16 5.5a3.2 3.2 0 0 1 0 6.2" />
      <path d="M17.5 14.2A5.5 5.5 0 0 1 20.5 19" />
    </>
  ),
  arrow: <path d="M4 12h15m0 0-5.5-5.5M19 12l-5.5 5.5" />,
  arrowUpRight: <path d="M7 17 17 7m0 0h-8m8 0v8" />,
  check: <path d="m5 12.5 4.5 4.5L19 7" />,
  plus: <path d="M12 5v14M5 12h14" />,
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </>
  ),
  phone: (
    <path d="M5 3h3l2 5-2.5 1.5a12 12 0 0 0 5.5 5.5L15 12.5l5 2v3a2.5 2.5 0 0 1-2.7 2.5C10.6 20.6 3.4 13.4 2.5 5.7A2.5 2.5 0 0 1 5 3z" />
  ),
  pin: (
    <>
      <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.6" />
    </>
  ),
  quote: (
    <path d="M9 6C6 7.5 4.5 10 4.5 13.5c0 2.6 1.5 4.5 3.8 4.5 2 0 3.4-1.4 3.4-3.4 0-1.9-1.3-3.3-3.1-3.3-.3 0-.6 0-.8.1.3-1.6 1.4-3 3.2-4zm9 0c-3 1.5-4.5 4-4.5 7.5 0 2.6 1.5 4.5 3.8 4.5 2 0 3.4-1.4 3.4-3.4 0-1.9-1.3-3.3-3.1-3.3-.3 0-.6 0-.8.1.3-1.6 1.4-3 3.2-4z" />
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  linkedin: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M7.5 10.5V17M7.5 7.5v.01M11.5 17v-3.6a2.4 2.4 0 0 1 4.8 0V17" />
    </>
  ),
  x: <path d="m4 4 16 16M20 4 4 20" />,
  facebook: (
    <path d="M14 21v-8h2.7l.4-3H14V8.2c0-.9.3-1.5 1.6-1.5H17V4.1A21 21 0 0 0 14.7 4C12.4 4 11 5.4 11 7.9V10H8.5v3H11v8z" />
  ),
};

const filled: IconName[] = ["quote", "facebook"];

export function Icon({
  name,
  className,
  strokeWidth = 1.6,
}: {
  name: IconName;
  className?: string;
  strokeWidth?: number;
}) {
  const isFilled = filled.includes(name);
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={cn("h-6 w-6", className)}
      fill={isFilled ? "currentColor" : "none"}
      stroke={isFilled ? "none" : "currentColor"}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  );
}
