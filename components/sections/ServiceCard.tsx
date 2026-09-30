import Image from "next/image";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import type { Service } from "@/lib/content";

export function ServiceCard({
  service,
  index,
}: {
  service: Service;
  index?: number;
}) {
  return (
    <Card className="h-full">
      <div className="flex h-full flex-col">
        {/* Image header */}
        <div className="relative aspect-16/10 overflow-hidden">
          <Image
            src={service.image}
            alt={service.imageAlt}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.07]"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-brand-950/55 via-brand-950/5 to-transparent"
          />
          <span className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/90 text-brand-700 shadow-soft backdrop-blur transition-all duration-500 group-hover:bg-brand-600 group-hover:text-white">
            <Icon name={service.icon} className="h-6 w-6" />
          </span>
          {index !== undefined && (
            <span className="absolute right-5 top-5 text-sm font-semibold tracking-[0.2em] text-white/85">
              {String(index + 1).padStart(2, "0")}
            </span>
          )}
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-7 sm:p-8">
          <h3 className="text-xl font-semibold tracking-tight text-ink transition-colors group-hover:text-brand-800">
            {service.title}
          </h3>
          <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-ink-soft">
            {service.excerpt}
          </p>
        </div>

        <span
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-brand-500 to-brand-800 transition-transform duration-500 group-hover:scale-x-100"
        />
      </div>
    </Card>
  );
}
