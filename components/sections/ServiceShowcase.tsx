import { Reveal } from "@/components/ui/Reveal";
import { ParallaxImage } from "@/components/ui/ParallaxImage";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import type { Service } from "@/lib/content";

export function ServiceShowcase({ services }: { services: Service[] }) {
  return (
    <div className="flex flex-col gap-24 sm:gap-28 lg:gap-36">
      {services.map((service, i) => {
        const flipped = i % 2 === 1;
        return (
          <div
            key={service.slug}
            className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20"
          >
            {/* Visual */}
            <Reveal
              direction={flipped ? "left" : "right"}
              className={flipped ? "lg:order-2" : ""}
            >
              <div className="relative">
                {/* offset accent frame */}
                <div
                  aria-hidden
                  className={`absolute -inset-3 -z-10 rounded-[2.4rem] border border-brand-100 bg-brand-50/60 ${
                    flipped ? "rotate-[1.5deg]" : "-rotate-[1.5deg]"
                  }`}
                />
                <ParallaxImage
                  src={service.image}
                  alt={service.imageAlt}
                  className="aspect-4/3 rounded-[2rem] shadow-lift ring-1 ring-black/5"
                >
                  {/* index badge */}
                  <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3.5 py-1.5 text-xs font-semibold tracking-[0.2em] text-brand-700 shadow-soft backdrop-blur">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {/* floating stat card */}
                  {service.stats[0] && (
                    <div className="absolute bottom-5 right-5 flex items-center gap-3 rounded-2xl bg-white/95 px-4 py-3 shadow-lift backdrop-blur">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-600 text-white">
                        <Icon name={service.icon} className="h-5 w-5" />
                      </span>
                      <span className="leading-tight">
                        <span className="block text-lg font-semibold tracking-tight text-ink">
                          {service.stats[0].value}
                          {service.stats[0].suffix ?? ""}
                        </span>
                        <span className="block text-[0.7rem] uppercase tracking-wide text-ink-soft">
                          {service.stats[0].label}
                        </span>
                      </span>
                    </div>
                  )}
                </ParallaxImage>
              </div>
            </Reveal>

            {/* Copy */}
            <Reveal
              direction={flipped ? "right" : "left"}
              delay={0.1}
              className={flipped ? "lg:order-1" : ""}
            >
              <Eyebrow>{service.heroKicker}</Eyebrow>
              <h3 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
                {service.title}
              </h3>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">
                {service.excerpt}
              </p>

              <ul className="mt-8 grid gap-x-8 gap-y-6 border-t border-line pt-8 sm:grid-cols-2">
                {service.capabilities.map((cap) => (
                  <li key={cap.title} className="flex gap-3.5">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                      <Icon name="check" className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                    <span>
                      <span className="block text-[0.95rem] font-semibold leading-snug tracking-tight text-ink">
                        {cap.title}
                      </span>
                      <span className="mt-1.5 block text-sm leading-relaxed text-ink-soft">
                        {cap.body}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        );
      })}
    </div>
  );
}
