import type { IconName } from "@/components/ui/Icon";

export const site = {
  name: "Pinnacle Millgrove",
  shortName: "Pinnacle",
  tagline: "Better decisions. Stronger foundations.",
  description:
    "Strategic guidance for businesses in motion. We work with organisations to improve the systems, processes and infrastructure behind their commercial operations, creating stronger foundations for long-term development.",
  email: "[Company Email]",
  phone: "[Company Number]",
  address: "[Company Address]",
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
  description: string;
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
    slug: "digital-commerce-strategy",
    title: "Digital Commerce Strategy",
    icon: "layers",
    image: "/images/service-platform.jpg",
    imageAlt: "Analytics dashboard on a laptop screen",
    excerpt:
      "We advise businesses on the technology and infrastructure supporting their online operations. From platform selection and technical planning to payments and system improvements, we help create a setup that can evolve alongside the business.",
    description:
      "We help businesses assess and strengthen the technology behind their digital operations, from platform architecture and system selection to payment integration and ongoing scalability. Our guidance is designed to create a more reliable foundation that can adapt as business requirements evolve.",
    summary:
      "We advise businesses on the technology and infrastructure supporting their online operations.",
    heroKicker: "Platform",
    overview: [LOREM_LONG, LOREM_SHORT],
    capabilities: [
      {
        title: "Platform Architecture & Scalability",
        body: "Designing technology foundations that can support evolving business requirements and future growth.",
      },
      {
        title: "Technology & Vendor Evaluation",
        body: "Assessing platforms, technical solutions and providers to identify options aligned with your business needs.",
      },
      {
        title: "Payments & System Integration",
        body: "Optimising payment infrastructure and connecting systems to create more efficient, coordinated workflows.",
      },
      {
        title: "Migration & Technology Evolution",
        body: "Planning upgrades, migrations and technology changes with minimal disruption to ongoing operations.",
      },
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
    slug: "international-business-support",
    title: "International Business Support",
    icon: "compass",
    image: "/images/service-foreign.jpg",
    imageAlt: "City lights across the earth viewed from space at night",
    excerpt:
      "Entering a new market brings practical considerations well beyond the initial expansion plan. We provide guidance on business structures, local requirements and operational arrangements to help organisations establish a more effective presence across borders.",
    description:
      "We support organisations entering new markets by helping them navigate the structural, regulatory and operational considerations involved in international expansion. Our guidance helps businesses establish practical frameworks for entering and operating across different markets with greater clarity.",
    summary:
      "We provide guidance on business structures, local requirements and operational arrangements to help organisations establish a more effective presence across borders.",
    heroKicker: "Expansion",
    overview: [LOREM_LONG, LOREM_SHORT],
    capabilities: [
      {
        title: "Business Setup & Administration",
        body: "Guidance on the practical requirements involved in establishing and managing operations in new markets.",
      },
      {
        title: "International Business Structuring",
        body: "Supporting the development of appropriate business structures for cross-border activities and expansion.",
      },
      {
        title: "Regional Networks & Connections",
        body: "Facilitating access to relevant regional networks and ecosystem relationships where appropriate.",
      },
      {
        title: "Market Readiness & Operations",
        body: "Preparing processes, resources and operational frameworks to support a smooth transition into new markets.",
      },
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
    slug: "business-operations-advisory",
    title: "Business Operations Advisory",
    icon: "radar",
    image: "/images/service-operations.jpg",
    imageAlt: "Aisle of stocked shelving in a fulfilment warehouse",
    excerpt:
      "Effective growth requires strong processes behind the scenes. We help businesses review and improve their internal operating frameworks, introducing greater structure, accountability and consistency across key areas of the organisation.",
    description:
      "We help businesses strengthen the processes, systems and internal structures that support day-to-day operations. By bringing greater visibility, consistency and accountability to key areas of the business, we help create an operating model that can support sustainable growth.",
    summary:
      "We help businesses review and improve their internal operating frameworks, introducing greater structure, accountability and consistency across key areas of the organisation.",
    heroKicker: "Operations",
    overview: [LOREM_LONG, LOREM_SHORT],
    capabilities: [
      {
        title: "Strategic & Operational Review",
        body: "Providing ongoing guidance and structured reviews to ensure business priorities and operations remain aligned.",
      },
      {
        title: "Best-Practice & Process Improvement",
        body: "Identifying opportunities to refine business processes and align operations with relevant industry practices.",
      },
      {
        title: "Risk & Operational Resilience",
        body: "Identifying potential risks and developing practical approaches to strengthen business continuity and resilience.",
      },
      {
        title: "Payment & Transaction Optimisation",
        body: "Reviewing payment and transaction flows to improve efficiency, visibility and overall operational performance.",
      },
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
    icon: "compass" as IconName,
    title: "Objective from the outset",
    body: "Our recommendations are based on the requirements of your business, not commercial relationships with technology providers. We remain focused on identifying options that make sense for your objectives and operating environment.",
  },
  {
    icon: "layers" as IconName,
    title: "One view across the business",
    body: "Technology, payments, compliance and operations rarely work in isolation. We consider how these areas interact, identifying dependencies and potential friction before they become larger operational issues.",
  },
  {
    icon: "radar" as IconName,
    title: "Designed for changing demands",
    body: "Business requirements rarely stay fixed. Our approach takes future markets, transaction volumes, currencies and operational complexity into consideration, helping create strategies that remain relevant as the business develops.",
  },
  {
    icon: "check" as IconName,
    title: "Focused on execution",
    body: "Advice is most useful when it can be put into practice. We translate recommendations into clear priorities, practical next steps, responsible ownership and measurable objectives – giving teams a defined path from planning to implementation.",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Assess",
    body: "We begin by developing a clear picture of your existing technology, payment processes and operational setup. This establishes the current position and highlights areas that may be limiting efficiency or creating unnecessary exposure.",
  },
  {
    step: "02",
    title: "Prioritise",
    body: "We turn our findings into a practical set of priorities, considering business impact, implementation requirements and potential risks. Key observations are supported by relevant evidence and presented in a straightforward manner.",
  },
  {
    step: "03",
    title: "Plan",
    body: "With the priorities established, we develop a practical roadmap covering the recommended technology, processes and operating approach. Actions are sequenced according to business needs, dependencies and available resources.",
  },
  {
    step: "04",
    title: "Support",
    body: "Our involvement can continue beyond the recommendations. Where required, we provide guidance throughout implementation, including vendor assessment, integration coordination and ongoing operational review.",
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
  {
    title: "Objective Thinking",
    body: "We approach each engagement with an open perspective, considering the circumstances, priorities and requirements of the business before forming a recommendation.",
  },
  {
    title: "Actionable Advice",
    body: "Our focus is on practical solutions that can move beyond the planning stage and be translated into clear actions, responsibilities and measurable progress.",
  },
  {
    title: "Ownership",
    body: "We take responsibility for the guidance we provide and remain engaged throughout the work, maintaining consistency from initial assessment through implementation.",
  },
  {
    title: "Forward Thinking",
    body: "Markets, technologies and business requirements continue to evolve. We account for these changes when developing strategies intended to remain useful over time.",
  },
  {
    title: "Long-Term Collaboration",
    body: "We aim to build productive working relationships based on clear communication, mutual trust, and a shared focus on achieving meaningful business outcomes.",
  },
];

export const focusAreas: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "spark",
    title: "Founders & early-stage",
    body: "Build a solid operational and technology foundation from the outset, with practical guidance that supports the next stage of the business.",
  },
  {
    icon: "layers",
    title: "Scaling e-commerce",
    body: "Strengthen the platforms, payment infrastructure and processes needed to handle increasing customers, transactions and operational demands.",
  },
  {
    icon: "compass",
    title: "Cross-border expansion",
    body: "Navigate the practical challenges of entering new markets, from payment considerations and local requirements to scalable operating structures.",
  },
  {
    icon: "radar",
    title: "Operations-led retailers",
    body: "Improve the systems and processes behind established commerce operations, creating greater consistency, visibility and control as the business evolves.",
  },
];

export const homeFaqs = [
  {
    q: "What happens when we first get in touch?",
    a: "We begin with an initial discussion to understand your objectives, current situation and any practical limitations. This first conversation helps determine the scope of the work and whether our expertise is suited to what you are looking to achieve.",
  },
  {
    q: "Do you have relationships with technology or payment providers?",
    a: "Our advisory approach is independent of specific platforms and providers. We do not rely on reseller arrangements or referral-based recommendations, allowing potential solutions to be considered according to their suitability for your business.",
  },
  {
    q: "Can you support business operating internationally?",
    a: "Yes. We work with organisations across different markets and can provide guidance on international expansion, cross-border operations, technology infrastructure and payment considerations. Most engagements can be conducted remotely, with in-person support arranged where appropriate.",
  },
  {
    q: "What will we receive at the end of an engagement?",
    a: "The output depends on the scope of the engagement, but may include a prioritised action plan, recommendations, implementation considerations and supporting technology or operating frameworks. Where relevant, we also provide clear responsibilities, estimated effort and measures for tracking progress.",
  },
];

export const sectors = [
  "Independent Advisory",
  "Platform & Infrastructure Strategy",
  "Payment Systems & Performance",
  "International Market Development",
  "Risk & Business Resilience",
  "Operational Performance",
];
