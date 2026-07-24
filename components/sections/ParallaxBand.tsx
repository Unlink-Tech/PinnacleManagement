import { Container } from "@/components/ui/Container";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { ParallaxImage } from "@/components/ui/ParallaxImage";
import { Eyebrow } from "@/components/ui/SectionHeading";

/**
 * Full-bleed parallax image band with an overlaid heading and optional
 * stat row. A high-impact scroll moment used to break up the page.
 */
export function ParallaxBand({
  image,
  imageAlt,
  eyebrow,
  title,
  description,
  stats,
}: {
  image: string;
  imageAlt: string;
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  stats?: { value: string; label: string }[];
}) {
  return (
    <section className="relative isolate">
      <ParallaxImage
        src={image}
        alt={imageAlt}
        sizes="100vw"
        strength={90}
        overlay={false}
        className="min-h-[26rem] sm:min-h-[32rem]"
      >
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-b from-brand-950/85 via-brand-950/70 to-brand-950/85"
        />
        <div className="relative flex min-h-[26rem] items-center py-20 sm:min-h-[32rem]">
          <Container>
            <div className="max-w-3xl text-white">
              {eyebrow && (
                <Reveal>
                  <Eyebrow tone="dark">{eyebrow}</Eyebrow>
                </Reveal>
              )}
              <Reveal delay={0.08}>
                <h2 className="mt-5 text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                  {title}
                </h2>
              </Reveal>
              {description && (
                <Reveal delay={0.16}>
                  <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
                    {description}
                  </p>
                </Reveal>
              )}
            </div>

            {stats && stats.length > 0 && (
              <RevealGroup className="mt-14 grid max-w-3xl gap-8 sm:grid-cols-3">
                {stats.map((s) => (
                  <RevealItem key={s.label}>
                    <span className="block text-4xl font-semibold tracking-tight text-white">
                      {s.value}
                    </span>
                    <span className="mt-2 block text-sm text-white/70">
                      {s.label}
                    </span>
                  </RevealItem>
                ))}
              </RevealGroup>
            )}
          </Container>
        </div>
      </ParallaxImage>
    </section>
  );
}
