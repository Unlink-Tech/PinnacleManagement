import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Accordion } from "@/components/ui/Accordion";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Card } from "@/components/ui/Card";
import { ContactForm } from "@/components/sections/ContactForm";
import { homeFaqs, site } from "@/lib/content";

// Hidden until the live server's Content-Security-Policy allows framing Google Maps.
const SHOW_MAP = false;

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Lorem ipsum dolor sit amet. Get in touch with the Pinnacle Millgrove team.",
};

const channels: {
  icon: IconName;
  title: string;
  value: string;
  href?: string;
  note: string;
}[] = [
  {
    icon: "mail",
    title: "Email us",
    value: site.email,
    href: `mailto:${site.email}`,
    note: "We reply within one business day.",
  },
  {
    icon: "phone",
    title: "Call us",
    value: site.phone,
    href: `tel:${site.phone.replace(/\s/g, "")}`,
    note: site.hours,
  },
  {
    icon: "pin",
    title: "Visit us",
    value: site.address,
    note: "By appointment only.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
        title={
          <>
            Have something
            <span className="text-brand-600"> to solve?</span>
          </>
        }
        description="Whether you’re reviewing your current infrastructure or preparing for the next stage of growth, we’re ready to hear about it. Send us an overview of your requirements and our team will respond within one business day."
      />

      {/* Channels */}
      <Section tone="white" size="compact" className="pt-2">
        <RevealGroup className="grid gap-6 sm:grid-cols-3">
          {channels.map((c) => (
            <RevealItem key={c.title}>
              <Card className="h-full p-7">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-700 transition-all duration-500 group-hover:bg-brand-600 group-hover:text-white">
                  <Icon name={c.icon} className="h-5.5 w-5.5" />
                </span>
                <h3 className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-ink-soft">
                  {c.title}
                </h3>
                {c.href ? (
                  <a
                    href={c.href}
                    className="mt-2 block text-lg font-semibold tracking-tight text-ink transition-colors hover:text-brand-700"
                  >
                    {c.value}
                  </a>
                ) : (
                  <p className="mt-2 text-lg font-semibold leading-snug tracking-tight text-ink">
                    {c.value}
                  </p>
                )}
                <p className="mt-3 text-sm text-ink-soft">{c.note}</p>
              </Card>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      {/* Form + map */}
      <Section tone="soft">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <Reveal>
            <ContactForm />
          </Reveal>

          <Reveal delay={0.12} className="flex flex-col gap-6">
            {SHOW_MAP && (
              <div className="relative aspect-4/3 overflow-hidden rounded-[2rem] border border-line bg-brand-50">
                <iframe
                  title={`Map showing ${site.legalName}, ${site.address}`}
                  src={`https://www.google.com/maps/embed?origin=mfe&pb=!1m3!2m1!1s${encodeURIComponent(site.mapQuery)}!6i16`}
                  className="absolute inset-0 h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
                <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-line bg-white/90 p-5 backdrop-blur">
                  <p className="text-sm font-semibold text-ink">{site.legalName}</p>
                  <p className="mt-1 text-sm text-ink-soft">{site.address}</p>
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(site.mapQuery)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-800"
                  >
                    <Icon name="pin" className="h-4 w-4" />
                    Get directions
                  </a>
                </div>
              </div>
            )}

            <div className="rounded-[2rem] border border-line bg-white p-7">
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-soft">
                Office hours
              </h3>
              <dl className="mt-5 space-y-3 text-sm">
                {[
                  ["Monday – Friday", "9:00am – 6:00pm"],
                  ["Saturday", "By appointment"],
                  ["Sunday & Holidays", "Closed"],
                ].map(([k, v]) => (
                  <div
                    key={k}
                    className="flex items-center justify-between border-b border-line pb-3 last:border-0 last:pb-0"
                  >
                    <dt className="text-ink-soft">{k}</dt>
                    <dd className="font-medium text-ink">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* FAQ */}
      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <SectionHeading
            eyebrow="Before you write"
            title="You might find your answer here."
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor."
          />
          <Reveal delay={0.1}>
            <Accordion items={homeFaqs} />
          </Reveal>
        </div>
      </Section>
    </>
  );
}
