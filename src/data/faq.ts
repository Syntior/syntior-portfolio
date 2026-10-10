export type Faq = { id: string; question: string; answer: string };

/**
 * Public FAQ for the Join page.
 *
 * Content rules (from the project brief):
 *  - Compensation is only ever described in general terms. No figures, splits
 *    or pool weights. Those are internal.
 *  - Never promise jobs, payment or equity.
 */
export const joinFaq: Faq[] = [
  {
    id: "experience",
    question: "Do I need experience to join?",
    answer:
      "No. Level 1 is built for learners: Git, GitHub, coding standards and small, well-scoped tasks. You will be matched to a starting level after we review your application.",
  },
  {
    id: "paid",
    question: "Is this paid?",
    answer:
      "Community phase is unpaid learning; paid opportunities open up as projects move into commercial phases.",
  },
  {
    id: "jobs",
    question: "Will this lead to a job?",
    answer:
      "We cannot promise jobs, payment or equity. What we can offer is mentorship, real project experience, and a public record of your work.",
  },
  {
    id: "after-applying",
    question: "What happens after I apply?",
    answer:
      "We review your application, then share the Contributor Agreement for you to read through. Once that is in place, we assign your starting level.",
  },
  {
    id: "areas",
    question: "Which areas can I contribute in?",
    answer:
      "Full-Stack, Frontend, Backend, Mobile, QA, UI/UX and DevOps. Choose the area you are most interested in today. You can explore others as you grow.",
  },
];

/**
 * Client FAQ on the home page.
 *
 * Keep answers to what the rest of the site backs up (the five-step process,
 * review and testing on every change). No prices, fixed timelines or
 * guarantees unless they are real.
 */
export const homeFaq: Faq[] = [
  {
    id: "cost",
    question: "How much does it cost to develop a software solution?",
    answer:
      "It depends on what you need built: the number of features, integrations and platforms. After a short call we scope the work with you and send a clear estimate before anything starts, so there are no surprises.",
  },
  {
    id: "timeline",
    question: "How long does a typical project take?",
    answer:
      "A focused feature can take a few weeks; a full product takes longer. We agree on milestones during scoping and ship in small pieces, so you see working software early and often.",
  },
  {
    id: "confidentiality",
    question: "How does your company handle project confidentiality?",
    answer:
      "We are happy to sign an NDA before you share details. Your code, data and access are only shared with the people working on your project.",
  },
  {
    id: "quality",
    question: "How do you ensure the quality and security of our software project?",
    answer:
      "Every change is reviewed by another developer and checked by automated tests before it ships. We follow secure coding practices and keep dependencies up to date.",
  },
  {
    id: "support",
    question: "Do you offer post-development support and maintenance?",
    answer:
      "Yes. After launch we can keep monitoring, fixing and improving your software, from small updates to new features.",
  },
];
