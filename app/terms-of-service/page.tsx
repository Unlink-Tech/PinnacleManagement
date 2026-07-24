import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { LegalLayout } from "@/components/sections/LegalLayout";
import { CtaBand } from "@/components/sections/CtaBand";
import { lastUpdated, termsSections } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms that govern your use of the Pinnacle Management website and services.",
};

export default function TermsOfServicePage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Terms of Service" },
        ]}
        title="Terms of Service"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. These terms set out the rules for using our website and engaging our services."
      >
        <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-sm text-ink-soft">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
          Last updated {lastUpdated}
        </div>
      </PageHero>

      <LegalLayout sections={termsSections} />

      <CtaBand
        eyebrow="Questions?"
        title="Need help understanding these terms?"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Reach out and we'll talk it through."
        secondary={{ label: "Privacy Policy", href: "/privacy-policy" }}
      />
    </>
  );
}
