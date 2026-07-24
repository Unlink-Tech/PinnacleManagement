import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ParticleBackdrop } from "@/components/ui/Decor";
import { Icon } from "@/components/ui/Icon";

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
  children,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  breadcrumbs?: { label: string; href?: string }[];
  children?: React.ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-white pb-16 pt-36 sm:pb-20 sm:pt-44">
      <ParticleBackdrop />
      <Container>
        {breadcrumbs && (
          <Reveal>
            <nav
              aria-label="Breadcrumb"
              className="mb-7 flex flex-wrap items-center gap-2 text-sm text-ink-soft"
            >
              {breadcrumbs.map((c, i) => (
                <span key={c.label} className="flex items-center gap-2">
                  {c.href ? (
                    <Link
                      href={c.href}
                      className="transition-colors hover:text-brand-700"
                    >
                      {c.label}
                    </Link>
                  ) : (
                    <span className="text-ink">{c.label}</span>
                  )}
                  {i < breadcrumbs.length - 1 && (
                    <Icon
                      name="arrow"
                      className="h-3.5 w-3.5 text-brand-400"
                      strokeWidth={2}
                    />
                  )}
                </span>
              ))}
            </nav>
          </Reveal>
        )}

        {eyebrow && (
          <Reveal>
            <Eyebrow>{eyebrow}</Eyebrow>
          </Reveal>
        )}

        <Reveal delay={0.08}>
          <h1 className="mt-6 max-w-4xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            {title}
          </h1>
        </Reveal>

        {description && (
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
              {description}
            </p>
          </Reveal>
        )}

        {children && <Reveal delay={0.24}>{children}</Reveal>}
      </Container>
    </section>
  );
}
