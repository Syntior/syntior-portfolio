import { CirclePlus } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { homeFaq } from "@/data/faq";
import { jsonLd } from "@/lib/seo";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: homeFaq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

/**
 * Home page FAQ: centred heading and full-width rows with a plus icon that
 * turns into a cross when open. Built on native <details> like FaqList, so
 * answers are in the HTML for search engines and work without JavaScript.
 */
export function HomeFaq() {
  return (
    <section
      aria-labelledby="home-faq-heading"
      className="border-t border-border bg-secondary/50 py-12 sm:py-16 md:py-24"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(faqJsonLd) }}
      />
      <Container>
        <Reveal>
          <h2
            id="home-faq-heading"
            className="text-center font-brand text-4xl font-semibold tracking-tight sm:text-5xl"
          >
            FAQs
          </h2>
        </Reveal>

        <div className="mx-auto mt-8 max-w-4xl divide-y divide-border sm:mt-12">
          {homeFaq.map((item) => (
            <details key={item.id} name="home-faq" className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-brand text-lg font-medium transition-colors hover:text-primary sm:py-7 sm:text-xl [&::-webkit-details-marker]:hidden">
                {item.question}
                <CirclePlus
                  aria-hidden="true"
                  strokeWidth={1.5}
                  className="size-6 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-45 group-open:text-primary sm:size-7"
                />
              </summary>
              <p className="-mt-1 max-w-3xl pb-6 font-brand text-base leading-relaxed text-muted-foreground sm:-mt-2 sm:pb-7 sm:text-lg">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
