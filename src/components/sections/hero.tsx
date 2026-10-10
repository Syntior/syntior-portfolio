import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { TypedIndustries } from "@/components/sections/typed-industries";
import office1 from "../../../public/images/hero-bg/office-1.webp";
import office2 from "../../../public/images/hero-bg/office-2.webp";
import office3 from "../../../public/images/hero-bg/office-3.webp";
import office4 from "../../../public/images/hero-bg/office-4.webp";

/*
 * Background photos: software teams at work, from Unsplash (free for
 * commercial use under the Unsplash License). They are blurred and
 * compressed ahead of time (sharp, blur 4, WebP), so the browser does no
 * blurring work. Each shows for 5 seconds, then crossfades to the next.
 */
const slides = [office1, office2, office3, office4];

/*
 * A simple, centred hero: headline, one supporting line and a single call to
 * action, over blurred photos of software teams that change every 5 seconds.
 */
export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="relative isolate overflow-hidden border-b border-border bg-background">
      {/* Background: the photos, then a white wash so the dark text reads clearly. */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        {slides.map((src, i) => (
          <Image
            key={i}
            src={src}
            alt=""
            fill
            priority={i === 0}
            sizes="100vw"
            className={i === 0 ? "object-cover" : "hero-slide object-cover"}
            style={i === 0 ? undefined : { animationDelay: `${i * 5}s` }}
          />
        ))}
        <div className="absolute inset-0 bg-white/70" />
      </div>
      <Container className="relative z-10 py-20 text-center sm:py-28 lg:py-36">
        <Reveal immediate>
          <h1
            id="hero-heading"
            className="mx-auto max-w-4xl font-brand text-[2rem] leading-[1.15] font-medium tracking-tight text-balance sm:text-5xl sm:leading-[1.12] lg:text-6xl"
          >
            Turn your roadmap into production-ready software.
          </h1>
          <p className="mx-auto mt-5 max-w-3xl font-brand text-lg leading-relaxed font-normal text-black sm:mt-6 sm:text-xl">
            Delivering project success no matter what the challenge, from the first sprint to the
            final release.
          </p>
          <TypedIndustries />
          <div className="mt-8 flex justify-center sm:mt-10">
            <Button asChild size="lg" className="font-brand">
              <Link href="/contact">
                Schedule a call
                <ArrowRight aria-hidden="true" data-icon="inline-end" />
              </Link>
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
