import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Marquee } from "@/components/ui/Marquee";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Card } from "@/components/ui/Card";
import { Blobs } from "@/components/ui/Decor";
import { HomeHero } from "@/components/sections/HomeHero";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { StatsBand } from "@/components/sections/StatsBand";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { ParallaxBand } from "@/components/sections/ParallaxBand";
import { CtaBand } from "@/components/sections/CtaBand";
import {
  sectors,
  differentiators,
  homeFaqs,
  homeStats,
  processSteps,
  services,
} from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <HomeHero />

      {/* Built for */}
      <Section tone="white" size="compact" className="py-12 sm:py-14">
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-ink-soft">
            Built for modern commerce teams
          </p>
          <Marquee items={sectors} className="mt-8" />
        </Reveal>
      </Section>

      {/* Stats */}
      <Section tone="soft" size="compact">
        <StatsBand stats={homeStats} />
      </Section>

      {/* Services */}
      <Section tone="white" id="services">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Our Services"
            title={
              <>
                A stronger foundation{" "}
                <span className="text-brand-600">for what&apos;s ahead</span>
              </>
            }
            description="We help businesses improve the systems and processes behind their digital operations. From technology and payments to day-to-day business infrastructure, our advisory approach focuses on creating greater efficiency, resilience, and room for future development."
          />
          <Reveal delay={0.2}>
            <Button href="/services" variant="secondary">
              View all services
            </Button>
          </Reveal>
        </div>

        <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <RevealItem key={service.slug}>
              <ServiceCard service={service} index={i} />
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      {/* Impact band */}
      <ParallaxBand
        image="/images/home-band.jpg"
        imageAlt="Modern corporate towers viewed from below"
        eyebrow="Why Pinnacle"
        title={
          <>
            Clarity at every level, from the first call to a long-term partnership.
          </>
        }
        description="We believe effective advisory starts with clear communication and continues through every stage of the relationship. From the initial conversation to ongoing support, we keep priorities, decisions and next steps transparent and aligned with your business objectives."
        stats={[
          { value: "24h", label: "Response time" },
          { value: "100%", label: "Senior-led delivery" },
          { value: "Fixed", label: "Transparent fees" },
        ]}
      />

      {/* Why us — split */}
      <Section tone="soft">
        <Blobs />
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Why Pinnacle"
              title="Advice shaped by your interests."
              description="Our recommendations are guided by your business requirements rather than predetermined technology or vendor preferences. We assess available options objectively, explain the practical considerations clearly, and focus on solutions that align with your objectives, resources, and long-term plans."
            />
            <Reveal delay={0.2}>
              <Button href="/about" className="mt-9">
                More about us
              </Button>
            </Reveal>
          </div>

          <RevealGroup className="grid gap-5 sm:grid-cols-2">
            {differentiators.map((item) => (
              <RevealItem key={item.title}>
                <Card className="h-full p-7">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-100 text-brand-700 transition-all duration-500 group-hover:bg-brand-600 group-hover:text-white">
                    <Icon name={item.icon} className="h-5.5 w-5.5" />
                  </span>
                  <h3 className="mt-6 text-base font-semibold tracking-tight text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-ink-soft">
                    {item.body}
                  </p>
                </Card>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Section>

      {/* Process */}
      <Section tone="white">
        <SectionHeading
          align="center"
          eyebrow="How we work"
          title="From insights to implementation."
          description="Our engagements follow a defined framework that keeps priorities clear and progress visible. You will know what we are working on, what comes next and what practical outputs you can take forward when the engagement concludes."
        />
        <div className="mt-16">
          <ProcessTimeline steps={processSteps} />
        </div>
      </Section>

      {/* FAQ */}
      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <SectionHeading
            eyebrow="FAQ"
            title="Questions, answered."
            description={
              <>
                Reach out to us if you have any questions!{" "}
                <Link
                  href="/contact"
                  className="font-medium text-brand-700 underline underline-offset-4"
                >
                  Contact us directly
                </Link>
                .
              </>
            }
          />
          <Reveal delay={0.1}>
            <Accordion items={homeFaqs} />
          </Reveal>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
