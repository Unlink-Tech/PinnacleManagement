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
    "Lorem ipsum dolor sit amet. Digital commerce strategy, international business support and business operations advisory.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Our Services" }]}
        title={
          <>
            Better direction for {" "}
            <span className="text-brand-600">complex business environments.</span>
          </>
        }
        description="We help organisations navigate the technology, payments and operational decisions behind modern commerce. Our independent approach brings greater clarity to complex challenges, helping businesses establish stronger foundations and build with confidence as they grow."
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
          title="A structured approach from start to finish."
          description="Every engagement follows a clear and defined process, with each stage focused on a specific outcome. You’ll have visibility into what’s being addressed and what comes next.."
        />
        <div className="mt-16">
          <ProcessTimeline steps={processSteps} />
        </div>
      </Section>

      {/* Comparison-style list */}
      {/* <Section tone="white">
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
      </Section> */}

      {/* FAQ */}
      {/* <Section tone="soft">
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
      </Section> */}

      <CtaBand
        eyebrow="Next step"
        title="Where can we make the greatest difference?"
        description="Share the challenge you’re facing, and we’ll assess where our expertise can provide the most relevant support. If another approach or specialist is better suited to your needs, we’ll be clear about that too."
      />
    </>
  );
}
