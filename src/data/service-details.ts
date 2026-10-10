/**
 * Detail content for each service page (/services/<slug>), keyed by the
 * service name in `serviceCatalog` (data/company.ts).
 *
 * Keep the copy factual: what the service is and what we build. No client
 * names, headcounts, ratings or timelines unless they are real.
 * `stack` names must match a technology in data/technologies.ts to link to it.
 */
export type ServiceDetail = {
  /** One or two sentences under the page heading. */
  summary: string;
  /** Three things we deliver, shown as a checklist. */
  offerings: [string, string, string];
  /** Technologies we typically use for it. */
  stack: string[];
};

export const serviceDetails: Record<string, ServiceDetail> = {
  "AI Development": {
    summary:
      "AI features that work in real products: assistants, automation and smart search built on large language models and your own data.",
    offerings: [
      "AI assistants and chat over your documents",
      "Automation of repetitive text and data tasks",
      "Search, classification and recommendations",
    ],
    stack: ["AI", "Python", "Machine Learning", "Node.js"],
  },
  "Back-end Development": {
    summary:
      "APIs, databases and integrations that stay fast, secure and reliable as your traffic and your team grow.",
    offerings: [
      "REST and GraphQL APIs",
      "Database design and performance tuning",
      "Integrations with payment, email and third-party services",
    ],
    stack: ["Node.js", "NestJS", "Python", ".NET", "Java", "Golang"],
  },
  "CMS Development": {
    summary:
      "Content management systems your team can actually use, so you can update your site without waiting on developers.",
    offerings: [
      "Headless CMS set-up with a fast front end",
      "Custom content models and editor workflows",
      "Migrations from older CMS platforms",
    ],
    stack: ["Next.js", "React", "PHP", "TypeScript"],
  },
  "Cryptocurrency & Blockchain": {
    summary:
      "Blockchain-backed features and Web3 apps, built with the same care for security and testing as any other product.",
    offerings: [
      "Wallet connections and on-chain payments",
      "Smart contract integration and dashboards",
      "Secure back ends for token and NFT platforms",
    ],
    stack: ["TypeScript", "Node.js", "React", "Golang"],
  },
  "Front-end Development": {
    summary:
      "Fast, accessible interfaces that look right on every screen, built with modern frameworks and a clean design system.",
    offerings: [
      "Responsive web apps and marketing sites",
      "Design systems and component libraries",
      "Performance and accessibility improvements",
    ],
    stack: ["React", "Next.js", "TypeScript", "Angular", "Vue.js"],
  },
  "Machine Learning": {
    summary:
      "Models that learn from your data to predict, classify and spot patterns, taken all the way into production.",
    offerings: [
      "Prediction and forecasting models",
      "Classification and anomaly detection",
      "Deploying and monitoring models in production",
    ],
    stack: ["Python", "Machine Learning", "AI", "Google Cloud"],
  },
  "QA Testing & Automation": {
    summary:
      "Manual and automated testing that catches problems before your users do, on every release.",
    offerings: [
      "Automated end-to-end and API tests",
      "Test plans and manual QA for key flows",
      "CI pipelines that test every change",
    ],
    stack: ["TypeScript", "JavaScript", "Python"],
  },
  "UX/UI Design": {
    summary:
      "Clear user flows and polished interfaces, designed and tested before a line of code is written.",
    offerings: [
      "User research, flows and wireframes",
      "High-fidelity UI design and prototypes",
      "Design systems that developers can build from",
    ],
    stack: ["React", "Next.js"],
  },
  "Android App Development": {
    summary:
      "Native Android apps that are fast, stable and secure, from first release to regular updates on Google Play.",
    offerings: [
      "Native Android apps in Kotlin",
      "Offline support, push notifications and payments",
      "Play Store release and ongoing updates",
    ],
    stack: ["Kotlin", "Java"],
  },
  "Business Intelligence": {
    summary:
      "Dashboards and reports that turn your data into clear answers, so decisions are based on numbers, not guesses.",
    offerings: [
      "Interactive dashboards and reports",
      "Data models connected to your sources",
      "Reports embedded in your own apps",
    ],
    stack: ["Power BI", "Python", "Google Cloud", "Microsoft Azure"],
  },
  "Data Engineering": {
    summary:
      "Reliable data pipelines that collect, clean and move your data to where it's needed, on time.",
    offerings: [
      "ETL and ELT data pipelines",
      "Data warehouses and lakes",
      "Data quality checks and monitoring",
    ],
    stack: ["Python", "Google Cloud", "AWS", "Microsoft Azure"],
  },
  "eCommerce Development": {
    summary:
      "Online stores that load fast, convert well and connect to your payments, stock and shipping.",
    offerings: [
      "Custom storefronts and checkout flows",
      "Payment, stock and shipping integrations",
      "Speed and conversion improvements",
    ],
    stack: ["Next.js", "React", "Node.js", "PHP"],
  },
  "iOS App Development": {
    summary:
      "Polished iPhone and iPad apps that feel native, perform well and pass App Store review.",
    offerings: [
      "Native iOS apps",
      "Push notifications, payments and offline support",
      "App Store release and ongoing updates",
    ],
    stack: ["Xamarin", "TypeScript"],
  },
  "Mobile App Development": {
    summary:
      "iOS and Android apps with smooth performance, stable sessions and secure data, from idea to app store.",
    offerings: [
      "Cross-platform and native mobile apps",
      "Back ends and APIs for your app",
      "App store releases and updates",
    ],
    stack: ["Kotlin", "Xamarin", "React", "Node.js"],
  },
  "SaaS Development": {
    summary:
      "Subscription software built to scale: multi-tenant, secure and ready for your first customer and your thousandth.",
    offerings: [
      "Multi-tenant SaaS platforms",
      "Subscriptions, billing and user management",
      "Admin dashboards and analytics",
    ],
    stack: ["Next.js", "NestJS", "TypeScript", "AWS"],
  },
  "Web Development": {
    summary:
      "Websites and web applications that are fast, secure and easy to grow, built with modern, typed code.",
    offerings: [
      "Custom web applications",
      "Company websites and landing pages",
      "Customer portals and dashboards",
    ],
    stack: ["Next.js", "React", "TypeScript", "Node.js"],
  },
  "Backup Solutions": {
    summary:
      "Automated backups and tested recovery plans, so your data survives mistakes, outages and attacks.",
    offerings: [
      "Automated, encrypted backups",
      "Disaster recovery plans and drills",
      "Monitoring and alerts when backups fail",
    ],
    stack: ["AWS", "Microsoft Azure", "Google Cloud"],
  },
  "Big Data": {
    summary:
      "Systems that store and process large volumes of data quickly, without your costs getting out of hand.",
    offerings: [
      "Large-scale data processing",
      "Scalable storage and querying",
      "Real-time data streams",
    ],
    stack: ["Python", "Google Cloud", "AWS", "Java"],
  },
  "Cloud Applications": {
    summary:
      "Applications designed for the cloud from day one: scalable, resilient and cost-aware.",
    offerings: [
      "Cloud-native application design",
      "Serverless back ends",
      "Migrations from on-premise servers",
    ],
    stack: ["AWS", "Microsoft Azure", "Google Cloud", "Node.js"],
  },
  "CRM Systems": {
    summary:
      "CRM systems shaped around how your team sells and serves, whether custom-built or extended from a platform.",
    offerings: [
      "Custom CRM development",
      "Salesforce customisation and automation",
      "Integrations with your other tools",
    ],
    stack: ["Salesforce", "Node.js", "React", ".NET"],
  },
  Cybersecurity: {
    summary:
      "Practical security for your applications: find the weak spots, fix them, and keep them fixed.",
    offerings: [
      "Security reviews of code and infrastructure",
      "Authentication and access control",
      "Dependency updates and vulnerability fixes",
    ],
    stack: ["AWS", "Microsoft Azure", "Node.js"],
  },
  DevOps: {
    summary:
      "CI/CD pipelines, containers and cloud infrastructure, so releases are routine rather than risky.",
    offerings: [
      "CI/CD pipelines that test and deploy every change",
      "Docker and container-based deployments",
      "Infrastructure as code and monitoring",
    ],
    stack: ["AWS", "Google Cloud", "Microsoft Azure", "Golang"],
  },
  "Digital Transformation": {
    summary:
      "Replace paper, spreadsheets and old systems with software that saves your team time every day.",
    offerings: [
      "Process automation and internal tools",
      "Modernising legacy systems",
      "Moving operations to the cloud",
    ],
    stack: ["Next.js", ".NET", "Python", "Microsoft Azure"],
  },
  "ERP Development": {
    summary:
      "ERP systems that connect finance, sales, inventory and HR in one place, shaped around how your business works.",
    offerings: [
      "Custom ERP modules",
      "Inventory, finance and HR workflows",
      "Integrations with your existing tools",
    ],
    stack: [".NET", "Node.js", "React", "Python"],
  },
  "Maintenance & Support": {
    summary:
      "Updates, fixes and improvements for software that's already live, so it stays secure, fast and up to date.",
    offerings: [
      "Bug fixes and small improvements",
      "Security and dependency updates",
      "Monitoring and performance tuning",
    ],
    stack: ["Node.js", "React", "TypeScript"],
  },
};
