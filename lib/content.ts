import type { IconName } from "@/components/ui/Icon";

export const site = {
  name: "Pinnacle Management",
  shortName: "Pinnacle",
  tagline: "Clarity at every level.",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pinnacle Management delivers advisory, compliance and corporate services with a straight-to-the-point approach.",
  email: "hello@pinnaclemanagement.com",
  phone: "+65 6123 4567",
  address: "1 Raffles Place, #20-01, Singapore 048616",
  hours: "Mon – Fri · 9:00am – 6:00pm",
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "Contact Us", href: "/contact" },
];

export const legalNav = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
];

const LOREM_SHORT =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

const LOREM_LONG =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.";

export type Service = {
  slug: string;
  title: string;
  icon: IconName;
  image: string;
  imageAlt: string;
  excerpt: string;
  summary: string;
  heroKicker: string;
  overview: string[];
  capabilities: { title: string; body: string }[];
  deliverables: string[];
  process: { title: string; body: string }[];
  faqs: { q: string; a: string }[];
  stats: { value: string; suffix?: string; label: string }[];
};

export const services: Service[] = [
  {
    slug: "ecommerce-platform-consultancy",
    title: "E-Commerce Platform Consultancy",
    icon: "layers",
    image: "/images/service-platform.jpg",
    imageAlt: "Analytics dashboard on a laptop screen",
    excerpt:
      "Architecture, scalability, and payments optimisation. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    summary: LOREM_SHORT,
    heroKicker: "Platform",
    overview: [LOREM_LONG, LOREM_SHORT],
    capabilities: [
      { title: "Platform Architecture", body: LOREM_SHORT },
      { title: "Scalability & Performance", body: LOREM_SHORT },
      { title: "Payments Optimisation", body: LOREM_SHORT },
      { title: "Integration & APIs", body: LOREM_SHORT },
    ],
    deliverables: [
      "Lorem ipsum architecture review",
      "Consectetur scalability roadmap",
      "Sed do eiusmod payments audit",
      "Tempor incididunt integration plan",
      "Ut labore performance report",
    ],
    process: [
      { title: "Discover", body: LOREM_SHORT },
      { title: "Design", body: LOREM_SHORT },
      { title: "Deliver", body: LOREM_SHORT },
    ],
    faqs: [
      { q: "Lorem ipsum dolor sit amet consectetur?", a: LOREM_LONG },
      { q: "Ut enim ad minim veniam quis nostrud?", a: LOREM_SHORT },
      { q: "Duis aute irure dolor in reprehenderit?", a: LOREM_SHORT },
    ],
    stats: [
      { value: "24", suffix: "h", label: "Response time" },
      { value: "100", suffix: "%", label: "Senior-led" },
      { value: "3", suffix: "", label: "Delivery phases" },
    ],
  },
  {
    slug: "foreign-company-management",
    title: "Foreign Company Management",
    icon: "compass",
    image: "/images/service-foreign.jpg",
    imageAlt: "City lights across the earth viewed from space at night",
    excerpt:
      "Structured support for cross-border expansion. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    summary: LOREM_SHORT,
    heroKicker: "Expansion",
    overview: [LOREM_LONG, LOREM_SHORT],
    capabilities: [
      { title: "Market Entry", body: LOREM_SHORT },
      { title: "Regulatory Structure", body: LOREM_SHORT },
      { title: "Operational Setup", body: LOREM_SHORT },
      { title: "Cross-Border Compliance", body: LOREM_SHORT },
    ],
    deliverables: [
      "Lorem ipsum market assessment",
      "Structural options memo",
      "Regulatory readiness pack",
      "Operational setup plan",
      "Consectetur compliance calendar",
    ],
    process: [
      { title: "Discover", body: LOREM_SHORT },
      { title: "Diagnose", body: LOREM_SHORT },
      { title: "Deliver", body: LOREM_SHORT },
    ],
    faqs: [
      { q: "Lorem ipsum dolor sit amet consectetur?", a: LOREM_LONG },
      { q: "Excepteur sint occaecat cupidatat non proident?", a: LOREM_SHORT },
      { q: "Sunt in culpa qui officia deserunt?", a: LOREM_SHORT },
    ],
    stats: [
      { value: "14", suffix: "", label: "Jurisdictions" },
      { value: "24", suffix: "h", label: "Response time" },
      { value: "100", suffix: "%", label: "Senior-led" },
    ],
  },
  {
    slug: "ecommerce-operations-advisory",
    title: "E-Commerce Operations Advisory",
    icon: "radar",
    image: "/images/service-operations.jpg",
    imageAlt: "Aisle of stocked shelving in a fulfilment warehouse",
    excerpt:
      "Operational discipline, risk mitigation, sustainable growth. Lorem ipsum dolor sit amet, consectetur.",
    summary: LOREM_SHORT,
    heroKicker: "Operations",
    overview: [LOREM_LONG, LOREM_SHORT],
    capabilities: [
      { title: "Operational Frameworks", body: LOREM_SHORT },
      { title: "Risk Mitigation", body: LOREM_SHORT },
      { title: "Oversight & Controls", body: LOREM_SHORT },
      { title: "Sustainable Growth", body: LOREM_SHORT },
    ],
    deliverables: [
      "Operations diagnostic report",
      "Lorem ipsum risk register",
      "Control framework design",
      "Consectetur adipiscing playbook",
      "Ut labore quarterly review",
    ],
    process: [
      { title: "Diagnose", body: LOREM_SHORT },
      { title: "Design", body: LOREM_SHORT },
      { title: "Deliver", body: LOREM_SHORT },
    ],
    faqs: [
      { q: "Lorem ipsum dolor sit amet consectetur?", a: LOREM_LONG },
      { q: "Nemo enim ipsam voluptatem quia voluptas?", a: LOREM_SHORT },
      { q: "Neque porro quisquam est qui dolorem?", a: LOREM_SHORT },
    ],
    stats: [
      { value: "24", suffix: "h", label: "Response time" },
      { value: "100", suffix: "%", label: "Senior-led" },
      { value: "3", suffix: "", label: "Delivery phases" },
    ],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export const homeStats = [
  { value: "3", suffix: "", label: "Specialist practices" },
  { value: "24", suffix: "h", label: "Response time" },
  { value: "100", suffix: "%", label: "Senior-led delivery" },
  { value: "14", suffix: "", label: "Jurisdictions supported" },
];

export const differentiators = [
  {
    icon: "spark" as IconName,
    title: "Straight to the point",
    body: LOREM_SHORT,
  },
  {
    icon: "shield" as IconName,
    title: "Built on trust",
    body: LOREM_SHORT,
  },
  {
    icon: "clock" as IconName,
    title: "Always on time",
    body: LOREM_SHORT,
  },
  {
    icon: "users" as IconName,
    title: "One senior team",
    body: LOREM_SHORT,
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Discovery Call",
    body: LOREM_SHORT,
  },
  {
    step: "02",
    title: "Tailored Proposal",
    body: LOREM_SHORT,
  },
  {
    step: "03",
    title: "Onboarding",
    body: LOREM_SHORT,
  },
  {
    step: "04",
    title: "Ongoing Partnership",
    body: LOREM_SHORT,
  },
];

export const testimonials = [
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "A. Lorem",
    role: "Managing Director, Ipsum Holdings",
  },
  {
    quote:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute.",
    name: "M. Dolor",
    role: "Founder, Consectetur Labs",
  },
  {
    quote:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum omnis.",
    name: "S. Amet",
    role: "CFO, Adipiscing Group",
  },
  {
    quote:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores.",
    name: "R. Elit",
    role: "Partner, Tempor Capital",
  },
];

export const values = [
  { title: "Integrity", body: LOREM_SHORT },
  { title: "Precision", body: LOREM_SHORT },
  { title: "Partnership", body: LOREM_SHORT },
  { title: "Momentum", body: LOREM_SHORT },
];

export const focusAreas: { icon: IconName; title: string; body: string }[] = [
  { icon: "spark", title: "Founders & early-stage", body: LOREM_SHORT },
  { icon: "layers", title: "Scaling e-commerce", body: LOREM_SHORT },
  { icon: "compass", title: "Cross-border expansion", body: LOREM_SHORT },
  { icon: "radar", title: "Operations-led retailers", body: LOREM_SHORT },
];

export const homeFaqs = [
  { q: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?", a: LOREM_LONG },
  { q: "Sed do eiusmod tempor incididunt ut labore et dolore?", a: LOREM_SHORT },
  { q: "Ut enim ad minim veniam, quis nostrud exercitation?", a: LOREM_SHORT },
  { q: "Duis aute irure dolor in reprehenderit in voluptate?", a: LOREM_SHORT },
];

export const sectors = [
  "DTC Brands",
  "Marketplaces",
  "Retail",
  "SaaS & Subscriptions",
  "Logistics",
  "Cross-border",
  "Startups",
  "Scale-ups",
];
