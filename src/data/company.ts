import {
  Cloud,
  CodeXml,
  Layers,
  LayoutTemplate,
  LifeBuoy,
  Rocket,
  Server,
  ShieldCheck,
  Wrench,
  type LucideIcon,
} from "lucide-react";

/**
 * Company content: what Syntior offers, how it works, and open roles.
 * Community content lives in `data/community.ts` and `data/levels.ts`.
 */

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
  /** The catalog service whose page this card links to. */
  page: string;
};

/**
 * Anchor id (or URL slug) for a service or technology, e.g. "web-applications". Symbols are
 * spelled out first so ".NET", "C#" and "C++" get distinct ids.
 */
export function serviceAnchor(title: string) {
  return title
    .toLowerCase()
    .replace(/^\./, "dot-")
    .replace(/#/g, "-sharp")
    .replace(/\+/g, "-plus")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

/**
 * PLACEHOLDER CONTENT
 *
 * A starting list based on the stack Syntior already uses (see
 * `data/projects.ts`). Edit it to match what the company actually offers
 * before launch. The home page shows the first three.
 */
export const services: Service[] = [
  {
    title: "Web applications",
    description:
      "Custom web apps built with React, Next.js and TypeScript, from the first release through ongoing development.",
    icon: CodeXml,
    page: "Web Development",
  },
  {
    title: "Product development",
    description:
      "Take an idea from scope to a working product, then keep improving it once it is live.",
    icon: Rocket,
    page: "SaaS Development",
  },
  {
    title: "UI and front-end",
    description:
      "Fast, accessible, responsive interfaces that work on every screen size.",
    icon: LayoutTemplate,
    page: "Front-end Development",
  },
  {
    title: "APIs and back-end",
    description:
      "Databases, APIs and integrations that are typed, tested and easy to maintain.",
    icon: Server,
    page: "Back-end Development",
  },
  {
    title: "DevOps and deployment",
    description:
      "CI/CD pipelines, Docker and cloud deployment, so releases are routine rather than risky.",
    icon: Cloud,
    page: "DevOps",
  },
  {
    title: "Maintenance and support",
    description:
      "Updates, fixes and improvements for software that is already in production.",
    icon: LifeBuoy,
    page: "Maintenance & Support",
  },
];

export type ServiceGroup = { title: string; items: string[] };

/**
 * The full list of services, shown on /services under "Everything we do" and
 * in the Services mega menu. Each one has its own page at /services/<slug>
 * (slug from `serviceAnchor`), with content from data/service-details.ts.
 */
export const serviceCatalog: ServiceGroup[] = [
  {
    title: "Top services",
    items: [
      "AI Development",
      "Back-end Development",
      "CMS Development",
      "Cryptocurrency & Blockchain",
      "Front-end Development",
      "Machine Learning",
      "QA Testing & Automation",
      "UX/UI Design",
      "Android App Development",
      "Business Intelligence",
      "Data Engineering",
      "eCommerce Development",
      "iOS App Development",
      "Mobile App Development",
      "SaaS Development",
      "Web Development",
    ],
  },
  {
    title: "Enterprise focused",
    items: [
      "Backup Solutions",
      "Big Data",
      "Cloud Applications",
      "CRM Systems",
      "Cybersecurity",
      "DevOps",
      "Digital Transformation",
      "ERP Development",
      "Maintenance & Support",
    ],
  },
];

export type ProcessStep = {
  title: string;
  description: string;
};

/** How a project moves from idea to production. Also drives the hero terminal. */
export const processSteps: ProcessStep[] = [
  {
    title: "Scope",
    description:
      "We agree on what to build, why it matters, and what done looks like.",
  },
  {
    title: "Build",
    description:
      "Work happens in small, reviewable pieces, with typed code and clear history.",
  },
  {
    title: "Review",
    description:
      "Every change is reviewed by another developer before it is merged.",
  },
  {
    title: "Test",
    description: "Automated tests and CI check each change before it ships.",
  },
  {
    title: "Ship",
    description:
      "We deploy to production, then keep improving what we have shipped.",
  },
];

export type Value = {
  title: string;
  description: string;
  icon: LucideIcon;
};

/** How the company works. Shown on the About and Careers pages. */
export const values: Value[] = [
  {
    title: "Real ownership",
    description:
      "Developers own features end to end: why they exist, how they work, shipping them, and looking after them afterwards.",
    icon: Layers,
  },
  {
    title: "Production standards",
    description:
      "Version control, code review, testing and CI/CD on every project, whatever its size.",
    icon: ShieldCheck,
  },
  {
    title: "Built to last",
    description:
      "Proven, well-supported tools and code that the next developer can pick up with confidence.",
    icon: Wrench,
  },
];

export type Role = {
  title: string;
  /** e.g. "Full-time", "Contract". */
  type: string;
  /** e.g. "Remote", "Hybrid". */
  location: string;
  /** One or two sentences. */
  description: string;
};

/**
 * Open roles on the Careers page. List real openings only. While this is
 * empty the page says so and offers a way to get in touch instead.
 */
export const roles: Role[] = [];

/** Every service that has its own page, in catalog order. */
export const serviceNames = serviceCatalog.flatMap((group) => group.items);

/** URL of a service's page, e.g. "/services/back-end-development". */
export function serviceHref(name: string) {
  return `/services/${serviceAnchor(name)}`;
}

export function getServiceName(slug: string) {
  return serviceNames.find((name) => serviceAnchor(name) === slug);
}
