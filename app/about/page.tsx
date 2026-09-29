import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Blobs } from "@/components/ui/Decor";
import { ParallaxImage } from "@/components/ui/ParallaxImage";
import { StatsBand } from "@/components/sections/StatsBand";
import { ParallaxBand } from "@/components/sections/ParallaxBand";
import { CtaBand } from "@/components/sections/CtaBand";
import { ValuesCarousel } from "@/components/sections/ValuesCarousel";
import { focusAreas, homeStats } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Lorem ipsum dolor sit amet. Who we are, what we value and how we work at Pinnacle Millgrove.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
        title={
          <>
            Clear direction for complex {" "}
            <span className="text-brand-600">business environments.</span>
          </>
        }
        description="We provide practical advisory across technology, payments and business operations, helping organisations evaluate their options, address challenges and build a stronger foundation for sustainable growth."
      >
        <div className="mt-10 flex flex-wrap gap-3">
          <Button href="/contact" size="lg">
            Talk to our team
          </Button>
          <Button href="/services" variant="secondary" size="lg" icon="arrowUpRight">
            What we do
          </Button>
        </div>
      </PageHero>

      {/* Stats */}
      <Section tone="white" size="compact" className="pt-4">
        <StatsBand stats={homeStats} />
      </Section>

      {/* Story */}
      <Section tone="soft">
        <Blobs />
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Image */}
          <Reveal direction="right">
            <div className="relative">
              <div
                aria-hidden
                className="absolute -inset-3 -z-10 rounded-[2.4rem] border border-brand-100 bg-white/50 -rotate-[1.5deg]"
              />
              <ParallaxImage
                src="/images/about-story.jpg"
                alt="Team collaborating around a table with laptops"
                className="aspect-4/3 rounded-[2rem] shadow-lift ring-1 ring-black/5"
              >
                <div className="absolute bottom-5 left-5 rounded-2xl bg-white/95 px-5 py-4 shadow-lift backdrop-blur">
                  <span className="block text-2xl font-semibold tracking-tight text-brand-700">
                    Senior-led
                  </span>
                  <span className="mt-1 block text-xs uppercase tracking-wide text-ink-soft">
                    Expertise from day one
                  </span>
                </div>
              </ParallaxImage>
            </div>
          </Reveal>

          {/* Copy */}
          <div>
            <SectionHeading
              eyebrow="Our story"
              title="Founded on clarity, built for what's next."
            />
            <Reveal delay={0.12} className="mt-6 space-y-5 text-ink-soft">
              <p className="leading-relaxed">
                Pinnacle Millgrove helps organisations navigate important decisions across technology, payments and business operations.
              </p>
              <p className="leading-relaxed">
                Our work goes beyond strategic recommendations. We provide practical direction throughout the process, from understanding the challenge and evaluating the options to supporting implementation and establishing a framework for continued progress.
              </p>
              
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section tone="white">
        <SectionHeading
          align="center"
          eyebrow="Our values"
          title="Principles put into practice."
          description="The way we work matters as much as the advice we provide. These standards influence every engagement, from the first conversation through to the final outcome and provide a clear framework for the experience our clients can expect."
        />
        <Reveal delay={0.12}>
          <ValuesCarousel />
        </Reveal>
      </Section>

      {/* Culture band */}
      <ParallaxBand
        image="/images/about-culture.jpg"
        imageAlt="Bright modern office meeting space"
        eyebrow="How we work"
        title="One senior team, fully accountable for the outcome."
        description="Our senior team stays closely involved throughout each engagement, providing continuity from initial strategy through to implementation. With clear ownership at every stage, you have one team accountable for turning recommendations into meaningful outcomes."
      />

      {/* Who we help */}
      <Section tone="soft">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Who we help"
            title="Focused on the businesses we know best."
            description="We support businesses at key stages of growth, from strengthening existing operations to entering new markets. Our focus is on organisations where thoughtful strategy can make a practical difference."
          />
          <Reveal delay={0.18}>
            <Button href="/services" variant="secondary">
              See what we do
            </Button>
          </Reveal>
        </div>

        <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {focusAreas.map((area) => (
            <RevealItem key={area.title}>
              <Card className="h-full p-8">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-100 text-brand-700 transition-all duration-500 group-hover:bg-brand-600 group-hover:text-white">
                  <Icon name={area.icon} className="h-5.5 w-5.5" />
                </span>
                <h3 className="mt-6 text-lg font-semibold tracking-tight text-ink">
                  {area.title}
                </h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-soft">
                  {area.body}
                </p>
              </Card>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      <CtaBand
        eyebrow="Work with us"
        title="Move forward with confidence"
      />
    </>
  );
}
