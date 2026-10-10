import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, ChevronRight, House } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { ContactForm } from "@/components/forms/contact-form";
import { TechLogo } from "@/components/brand/tech-logo";
import { DiscussCta } from "@/components/sections/discuss-cta";
import {
  getServiceName,
  processSteps,
  serviceAnchor,
  serviceHref,
  serviceNames,
} from "@/data/company";
import { serviceDetails } from "@/data/service-details";
import { technologies, technologySlug } from "@/data/technologies";
import { pageMetadata } from "@/lib/seo";

// Only the services in the catalog exist; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return serviceNames.map((name) => ({ slug: serviceAnchor(name) }));
}

export async function generateMetadata({
  params,
}: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const name = getServiceName(slug);
  if (!name) return {};

  return pageMetadata({
    title: `${name} services`,
    description: serviceDetails[name]?.summary ?? `${name} services from Syntior.`,
    path: `/services/${slug}`,
  });
}

export default async function ServicePage({
  params,
}: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const name = getServiceName(slug);
  if (!name) notFound();

  const detail = serviceDetails[name];
  const stack = (detail?.stack ?? [])
    .map((techName) => technologies.find((technology) => technology.name === techName))
    .filter((technology) => technology !== undefined);
  const others = serviceNames.filter((other) => other !== name);

  return (
    <>
      <section aria-labelledby="service-heading" className="bg-hero border-b border-border">
        <Container className="py-12 md:py-16">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/"
                  className="-m-2 flex items-center rounded-sm p-2 transition-colors hover:text-foreground"
                >
                  <House aria-hidden="true" className="size-4" />
                  <span className="sr-only">Home</span>
                </Link>
              </li>
              <li aria-hidden="true">
                <ChevronRight className="size-4" />
              </li>
              <li>
                <Link href="/services" className="rounded-sm transition-colors hover:text-foreground">
                  Services
                </Link>
              </li>
              <li aria-hidden="true">
                <ChevronRight className="size-4" />
              </li>
              <li>
                <span aria-current="page" className="font-semibold text-foreground">
                  {name}
                </span>
              </li>
            </ol>
          </nav>

          <div className="mt-12 grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_26rem] lg:gap-16">
            <div className="lg:pt-8">
              <p className="font-brand text-sm font-semibold tracking-[0.14em] text-muted-foreground uppercase sm:text-base">
                {name} services
              </p>
              <h1
                id="service-heading"
                className="mt-5 font-brand text-4xl leading-[1.08] font-medium tracking-tight text-balance sm:text-5xl xl:text-6xl"
              >
                Expert {name},{" "}
                <span className="text-primary">built to production standards.</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                {detail?.summary} Tell us what you need, and we will help you plan it,
                build it and keep it running.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-lg sm:p-8">
              <p className="font-brand text-2xl leading-snug font-semibold tracking-tight">
                Get expert help for your {name} project.
              </p>
              <div className="mt-6">
                <ContactForm
                  subject={`${name} project`}
                  messageLabel="Tell us about your needs"
                  submitLabel="Start your project"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {detail ? (
        <Section aria-labelledby="offerings-heading">
          <SectionHeading
            id="offerings-heading"
            eyebrow="What we deliver"
            title={`Our ${name} services`}
          />
          <ul role="list" className="mt-10 grid gap-6 md:grid-cols-3">
            {detail.offerings.map((offering) => (
              <li key={offering} className="flex gap-4 rounded-xl border border-border bg-card p-6">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Check aria-hidden="true" className="size-4" />
                </span>
                <span className="text-lg font-medium">{offering}</span>
              </li>
            ))}
          </ul>
        </Section>
      ) : null}

      {stack.length > 0 ? (
        <Section aria-labelledby="stack-heading" bordered>
          <SectionHeading
            id="stack-heading"
            eyebrow="Technologies"
            title="The tools we use"
          />
          <ul role="list" className="mt-10 flex flex-wrap gap-3 sm:gap-4">
            {stack.map((technology) => (
              <li key={technology.name}>
                <Link
                  href={`/technologies/${technologySlug(technology)}`}
                  className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 font-medium transition-colors hover:border-primary hover:text-primary"
                >
                  <TechLogo technology={technology} className="size-7" />
                  {technology.name}
                </Link>
              </li>
            ))}
          </ul>
        </Section>
      ) : null}

      <Section aria-labelledby="process-heading" bordered>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 [&>*]:min-w-0">
          <SectionHeading
            id="process-heading"
            eyebrow="How we work"
            title="From scope to ship"
            description={`Every ${name} project follows the same five steps, so you always know where things stand.`}
          />
          <ol role="list" className="divide-y divide-border border-y border-border">
            {processSteps.map((step, index) => (
              <li key={step.title} className="flex gap-5 py-6">
                <span aria-hidden="true" className="pt-1 font-mono text-sm text-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-lg font-semibold tracking-tight">{step.title}</h3>
                  <p className="mt-1.5 text-base leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section aria-labelledby="other-services-heading" bordered>
        <h2
          id="other-services-heading"
          className="flex items-center gap-2.5 text-sm font-semibold tracking-[0.14em] text-muted-foreground uppercase"
        >
          <span aria-hidden="true" className="size-2.5 rounded-xs bg-primary" />
          Other services
        </h2>
        <ul role="list" className="mt-6 flex flex-wrap gap-3">
          {others.map((other) => (
            <li key={other}>
              <Link
                href={serviceHref(other)}
                className="inline-flex rounded-full border border-border px-4 py-2 font-medium transition-colors hover:border-primary hover:text-primary"
              >
                {other}
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <DiscussCta />
    </>
  );
}
