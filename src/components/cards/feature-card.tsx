import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

type FeatureCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  /** Makes the whole card a link, with a "Learn more" cue. */
  href?: string;
};

/** Icon, title and one-line description. Used for benefits, expectations and services. */
export function FeatureCard({ icon: Icon, title, description, href }: FeatureCardProps) {
  const card = (
    <Card className="h-full flex-row items-start gap-4 p-5 transition-colors group-hover:border-primary/60 sm:flex-col sm:p-6">
      <span
        aria-hidden="true"
        className="grid size-10 shrink-0 place-items-center rounded-lg border border-border bg-muted text-primary"
      >
        <Icon className="size-5" />
      </span>
      <div>
        <h3 className="text-base font-semibold tracking-tight">{title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
        {href ? (
          <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
            Learn more
            <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-0.5" />
          </span>
        ) : null}
      </div>
    </Card>
  );

  if (!href) return card;
  return (
    <Link href={href} className="group block h-full rounded-xl focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none">
      {card}
    </Link>
  );
}
