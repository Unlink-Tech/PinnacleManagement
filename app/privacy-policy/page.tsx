import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { LegalLayout } from "@/components/sections/LegalLayout";
import { CtaBand } from "@/components/sections/CtaBand";
import { lastUpdated, privacySections } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Pinnacle Millgrove collects, uses and protects your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]}
        title="Privacy Policy"
        description="This policy explains what we collect, why we collect it, and the choices you have."
      >
        <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-sm text-ink-soft">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
          Last updated {lastUpdated}
        </div>
      </PageHero>

      <LegalLayout sections={privacySections} />

      <CtaBand
        eyebrow="Questions?"
        title="Need clarification on how we handle your data?"
        description="Our team is happy to walk you through it."
        secondary={{ label: "Terms of Service", href: "/terms-of-service" }}
      />
    </>
  );
}
