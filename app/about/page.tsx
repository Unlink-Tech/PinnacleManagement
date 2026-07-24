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
import { focusAreas, homeStats, values } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Lorem ipsum dolor sit amet. Who we are, what we value and how we work at Pinnacle Management.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
        title={
          <>
            A senior team built around{" "}
            <span className="text-brand-600">one simple idea.</span>
          </>
        }
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="leading-relaxed">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit
                anim id est laborum.
              </p>
              <p className="leading-relaxed">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt.
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
          title="Four principles that shape every engagement."
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
        />
        <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <RevealItem key={v.title}>
              <Card className="h-full p-8">
                <span className="text-4xl font-semibold tracking-tight text-brand-100 transition-colors duration-500 group-hover:text-brand-400">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 text-lg font-semibold tracking-tight text-ink">
                  {v.title}
                </h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-soft">
                  {v.body}
                </p>
              </Card>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      {/* Culture band */}
      <ParallaxBand
        image="/images/about-culture.jpg"
        imageAlt="Bright modern office meeting space"
        eyebrow="How we work"
        title="One senior team, fully accountable for the outcome."
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
      />

      {/* Who we help */}
      <Section tone="soft">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Who we help"
            title="Focused on the businesses we know best."
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
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
        title="Lorem ipsum dolor sit amet, ready when you are."
      />
    </>
  );
}
