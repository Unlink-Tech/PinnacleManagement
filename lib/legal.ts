import type { LegalSection } from "@/components/sections/LegalLayout";

const P1 =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
const P2 =
  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

export const lastUpdated = "22 July 2026";

export const privacySections: LegalSection[] = [
  {
    id: "introduction",
    heading: "Introduction",
    body: [P1, P2],
  },
  {
    id: "information-we-collect",
    heading: "Information We Collect",
    body: [P1],
    list: [
      "Lorem ipsum identity and contact details",
      "Consectetur adipiscing business information",
      "Sed do eiusmod technical and device data",
      "Tempor incididunt usage and analytics data",
      "Ut labore marketing and communication preferences",
    ],
  },
  {
    id: "how-we-use",
    heading: "How We Use Your Information",
    body: [P1, P2],
  },
  {
    id: "legal-basis",
    heading: "Legal Basis for Processing",
    body: [P2],
    list: [
      "Performance of a contract",
      "Compliance with a legal obligation",
      "Legitimate interests, balanced against your rights",
      "Consent, where required",
    ],
  },
  {
    id: "sharing",
    heading: "Sharing and Disclosure",
    body: [P1, P2],
  },
  {
    id: "retention",
    heading: "Data Retention",
    body: [P1],
  },
  {
    id: "security",
    heading: "Security Measures",
    body: [P2],
  },
  {
    id: "your-rights",
    heading: "Your Rights",
    body: [P1],
    list: [
      "Request access to your personal data",
      "Request correction of inaccurate data",
      "Request erasure where applicable",
      "Object to or restrict processing",
      "Withdraw consent at any time",
    ],
  },
  {
    id: "cookies",
    heading: "Cookies and Tracking",
    body: [P2],
  },
  {
    id: "contact",
    heading: "Contact Us",
    body: [
      "Lorem ipsum dolor sit amet. If you have questions about this policy or how we handle your information, please contact us at hello@pinnaclemanagement.com.",
    ],
  },
];

export const termsSections: LegalSection[] = [
  {
    id: "agreement",
    heading: "Agreement to Terms",
    body: [P1, P2],
  },
  {
    id: "use-of-site",
    heading: "Use of the Website",
    body: [P1],
    list: [
      "Use the site only for lawful purposes",
      "Do not attempt to gain unauthorised access",
      "Do not interfere with the operation of the site",
      "Do not reproduce content without permission",
    ],
  },
  {
    id: "services",
    heading: "Our Services",
    body: [P1, P2],
  },
  {
    id: "intellectual-property",
    heading: "Intellectual Property",
    body: [P2],
  },
  {
    id: "user-content",
    heading: "User Submissions",
    body: [P1],
  },
  {
    id: "disclaimers",
    heading: "Disclaimers",
    body: [P2, P1],
  },
  {
    id: "liability",
    heading: "Limitation of Liability",
    body: [P2],
  },
  {
    id: "third-party",
    heading: "Third-Party Links",
    body: [P1],
  },
  {
    id: "termination",
    heading: "Termination",
    body: [P2],
  },
  {
    id: "governing-law",
    heading: "Governing Law",
    body: [P1],
  },
  {
    id: "changes",
    heading: "Changes to These Terms",
    body: [
      "Lorem ipsum dolor sit amet. We may update these terms from time to time. The version published on this page is the version that applies.",
    ],
  },
];
