import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Accordion } from "@/components/ui/Accordion";
import { StatsBand } from "@/components/sections/StatsBand";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { CtaBand } from "@/components/sections/CtaBand";
import { getService, services } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Service not found" };
  return { title: service.title, description: service.excerpt };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={service.heroKicker}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Our Services", href: "/services" },
          { label: service.title },
        ]}
        title={service.title}
        description={service.excerpt}
      >
        <div className="mt-10 flex flex-wrap gap-3">
          <Button href="/contact" size="lg">
            Request a proposal
          </Button>
          <Button href="#capabilities" variant="secondary" size="lg" icon="arrowUpRight">
            See capabilities
          </Button>
        </div>
      </PageHero>

      {/* Overview + sticky summary */}
      <Section tone="white" className="pt-6">
        <div className="grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16">
          <Reveal className="space-y-5">
            <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
              <Icon name={service.icon} className="h-7 w-7" />
            </span>
            <h2 className="text-balance pt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
              Overview
            </h2>
            {service.overview.map((p, i) => (
              <p key={i} className="leading-relaxed text-ink-soft">
                {p}
              </p>
            ))}
          </Reveal>

          <Reveal delay={0.14} className="lg:sticky lg:top-28 lg:h-fit">
            <div className="rounded-3xl border border-line bg-canvas-soft p-7 shadow-soft">
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-soft">
                What you receive
              </h3>
              <ul className="mt-6 space-y-4">
                {service.deliverables.map((d) => (
                  <li key={d} className="flex gap-3 text-[0.95rem] text-ink">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-600 text-white">
                      <Icon name="check" className="h-3 w-3" strokeWidth={3} />
                    </span>
                    <span className="leading-relaxed">{d}</span>
                  </li>
                ))}
              </ul>
              <Button href="/contact" className="mt-8 w-full">
                Speak to a specialist
              </Button>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Capabilities */}
      <Section tone="soft" id="capabilities">
        <SectionHeading
          eyebrow="Capabilities"
          title="Where we go deep."
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
        />
        <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2">
          {service.capabilities.map((c, i) => (
            <RevealItem key={c.title}>
              <Card className="h-full p-8">
                <div className="flex items-start gap-5">
                  <span className="text-2xl font-semibold tracking-tight text-brand-200 transition-colors duration-500 group-hover:text-brand-500">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight text-ink">
                      {c.title}
                    </h3>
                    <p className="mt-2.5 text-[0.95rem] leading-relaxed text-ink-soft">
                      {c.body}
                    </p>
                  </div>
                </div>
              </Card>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      {/* Stats */}
      <Section tone="white" size="compact">
        <StatsBand stats={service.stats} />
      </Section>

      {/* Process */}
      <Section tone="soft">
        <SectionHeading
          align="center"
          eyebrow="Our approach"
          title={`How a ${service.title.toLowerCase()} engagement runs.`}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
        />
        <div className="mx-auto mt-16 max-w-4xl">
          <ProcessTimeline steps={service.process} />
        </div>
      </Section>

      {/* FAQ */}
      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <SectionHeading
            eyebrow="FAQ"
            title={`${service.title} questions.`}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor."
          />
          <Reveal delay={0.1}>
            <Accordion items={service.faqs} />
          </Reveal>
        </div>
      </Section>

      {/* Related */}
      <Section tone="soft">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading eyebrow="Related" title="Explore other services." />
          <Reveal delay={0.15}>
            <Button href="/services" variant="secondary">
              All services
            </Button>
          </Reveal>
        </div>
        <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((s) => (
            <RevealItem key={s.slug}>
              <Card className="h-full">
                <Link href={`/services/${s.slug}`} className="flex h-full flex-col p-7">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-700 transition-all duration-500 group-hover:bg-brand-600 group-hover:text-white">
                    <Icon name={s.icon} className="h-5.5 w-5.5" />
                  </span>
                  <h3 className="mt-6 text-lg font-semibold tracking-tight text-ink">
                    {s.title}
                  </h3>
                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-ink-soft">
                    {s.summary}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-700">
                    Learn more
                    <Icon
                      name="arrowUpRight"
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                      strokeWidth={2}
                    />
                  </span>
                </Link>
              </Card>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      <CtaBand
        eyebrow="Get started"
        title={`Let's talk about ${service.title.toLowerCase()}.`}
      />
    </>
  );
}
