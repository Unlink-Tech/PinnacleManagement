import Link from "next/link";
import { legalNav, nav, site } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { Icon, type IconName } from "@/components/ui/Icon";
import { LogoMark } from "@/components/ui/Logo";

const socials: { name: IconName; href: string; label: string }[] = [
  { name: "linkedin", href: "#", label: "LinkedIn" },
  { name: "x", href: "#", label: "X" },
  { name: "facebook", href: "#", label: "Facebook" },
];

const contactRows: { icon: IconName; label: string; href?: string }[] = [
  { icon: "mail", label: site.email, href: `mailto:${site.email}` },
  { icon: "phone", label: site.phone, href: `tel:${site.phone.replace(/\s/g, "")}` },
  { icon: "pin", label: site.address },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-brand-950 text-brand-50">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-brand-600/20 blur-3xl [animation:var(--animate-blob)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-400/50 to-transparent"
      />

      <Container className="relative z-10">
        {/* CTA band */}
        

        {/* Link columns */}
        <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.3fr_1.3fr_1.2fr] lg:gap-16">
          <div>
            <div className="group flex items-center gap-3">
              <LogoMark />
              <span className="flex flex-col leading-none">
                <span className="text-[1.05rem] font-semibold tracking-tight text-white">
                  Pinnacle
                </span>
                <span className="mt-1 text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-brand-300">
                  Millgrove
                </span>
              </span>
            </div>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-brand-100/70">
              {site.description}
            </p>
            <div className="mt-7 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-brand-100 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-400 hover:bg-brand-400/15 hover:text-white"
                >
                  <Icon name={s.name} className="h-4.5 w-4.5" />
                </a>
              ))}
            </div>
          </div>

          <FooterCol title="Company">
            <div className="grid w-fit grid-flow-col grid-cols-2 grid-rows-3 gap-x-12 gap-y-3.5">
              {[...nav, ...legalNav].map((n) => (
                <FooterLink key={n.href} href={n.href}>
                  {n.label}
                </FooterLink>
              ))}
            </div>
          </FooterCol>

          <FooterCol title="Get in touch">
            {contactRows.map((row) => {
              const inner = (
                <span className="flex items-start gap-3">
                  <Icon
                    name={row.icon}
                    className="mt-0.5 h-4.5 w-4.5 shrink-0 text-brand-400"
                  />
                  <span>{row.label}</span>
                </span>
              );
              return row.href ? (
                <a
                  key={row.label}
                  href={row.href}
                  className="text-sm text-brand-100/75 transition-colors hover:text-white"
                >
                  {inner}
                </a>
              ) : (
                <span key={row.label} className="text-sm text-brand-100/75">
                  {inner}
                </span>
              );
            })}
            <span className="mt-2 inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1.5 text-xs text-brand-100/80">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-400" />
              </span>
              {site.hours}
            </span>
          </FooterCol>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-8 text-xs text-brand-100/60 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            {legalNav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="transition-colors hover:text-white"
              >
                {n.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}

function FooterCol({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col">
      <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
        {title}
      </h3>
      <div className="mt-6 flex flex-col gap-3.5">{children}</div>
    </div>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="group inline-flex w-fit items-center gap-2 text-sm text-brand-100/75 transition-colors hover:text-white"
    >
      <span className="h-px w-0 bg-brand-400 transition-all duration-300 group-hover:w-4" />
      {children}
    </Link>
  );
}
