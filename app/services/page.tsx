import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { ServiceShowcase } from "@/components/sections/ServiceShowcase";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { CtaBand } from "@/components/sections/CtaBand";
import { homeFaqs, processSteps, services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Lorem ipsum dolor sit amet. E-commerce platform consultancy, foreign company management and e-commerce operations advisory.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Our Services" }]}
        title={
          <>
            Three practices,{" "}
            <span className="text-brand-600">one accountable team.</span>
          </>
        }
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
      >
        <div className="mt-10 flex flex-wrap gap-3">
          <Button href="/contact" size="lg">
            Request a proposal
          </Button>
          <Button href="#all" variant="secondary" size="lg" icon="arrowUpRight">
            Browse services
          </Button>
        </div>
      </PageHero>

      {/* Alternating showcase */}
      <Section tone="white" id="all" className="pt-6">
        <ServiceShowcase services={services} />
      </Section>

      {/* Process */}
      <Section tone="soft">
        <SectionHeading
          align="center"
          eyebrow="Engagement model"
          title="A clear path, whichever service you choose."
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
        />
        <div className="mt-16">
          <ProcessTimeline steps={processSteps} />
        </div>
      </Section>

      {/* Comparison-style list */}
      <Section tone="white">
        <SectionHeading
          eyebrow="At a glance"
          title="What's included across every engagement."
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
        />
        <RevealGroup className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Dedicated senior lead",
            "Fixed-fee scoping",
            "Secure document portal",
            "Quarterly business review",
            "Compliance calendar",
            "Same-day acknowledgement",
          ].map((item) => (
            <RevealItem
              key={item}
              className="bg-white px-7 py-8 transition-colors duration-500 hover:bg-brand-50"
            >
              <span className="text-[0.95rem] font-medium text-ink">{item}</span>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do.
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      {/* FAQ */}
      <Section tone="soft">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <SectionHeading
            eyebrow="FAQ"
            title="Common questions about our services."
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod."
          />
          <Reveal delay={0.1}>
            <Accordion items={homeFaqs} />
          </Reveal>
        </div>
      </Section>

      <CtaBand
        eyebrow="Next step"
        title="Not sure which service fits? Let's work it out together."
      />
    </>
  );
}
