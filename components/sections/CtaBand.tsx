import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { Blobs } from "@/components/ui/Decor";

export function CtaBand({
  eyebrow = "Get started",
  title = "Move forward with clarity",
  description = "Tell us where you want to go and what stands in the way. We’ll explore your priorities, understand the wider context and determine how we can help.",
  primary = { label: "Contact Us", href: "/contact" },
  secondary = { label: "Our Services", href: "/services" },
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string } | null;
}) {
  return (
    <Section tone="white" className="pb-24 pt-4 sm:pb-28">
      <Reveal>
        <div className="relative isolate overflow-hidden rounded-[2.5rem] bg-brand-900 px-7 py-16 text-center sm:px-14 sm:py-20">
          <Blobs tone="dark" />
          <div
            aria-hidden
            className="bg-dots pointer-events-none absolute inset-0 -z-10 opacity-[0.15] invert"
          />
          <Eyebrow tone="dark">{eyebrow}</Eyebrow>
          <h2 className="mx-auto mt-6 max-w-3xl text-balance text-3xl font-semibold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-[2.9rem]">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-brand-100/75">{description}</p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Button href={primary.href} variant="light" size="lg">
              {primary.label}
            </Button>
            {secondary && (
              <Button
                href={secondary.href}
                size="lg"
                icon="arrowUpRight"
                className="border border-white/25 bg-transparent text-white hover:bg-white/10"
              >
                {secondary.label}
              </Button>
            )}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
