"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Cookie, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  OPEN_COOKIE_SETTINGS,
  readConsent,
  saveConsent,
  type ConsentCategory,
} from "@/lib/consent";
import { cn } from "@/lib/utils";

const categories: { id: ConsentCategory | "necessary"; title: string; description: string }[] = [
  {
    id: "necessary",
    title: "Necessary",
    description:
      "Keep the site working and remember choices like this one. Always on.",
  },
  {
    id: "analytics",
    title: "Analytics",
    description:
      "Help us understand which pages are useful so we can improve the site.",
  },
  {
    id: "marketing",
    title: "Marketing",
    description:
      "Let us measure our campaigns and show relevant content on other sites.",
  },
];

/**
 * Cookie consent bar, shown at the bottom until the visitor decides. "Manage
 * preferences" opens per-category switches. The footer's "Cookie settings"
 * reopens it (OPEN_COOKIE_SETTINGS event).
 */
export function CookieBanner() {
  const [open, setOpen] = useState(false);
  const [manage, setManage] = useState(false);
  const [choice, setChoice] = useState({ analytics: false, marketing: false });
  const [decided, setDecided] = useState(false);

  useEffect(() => {
    // Read storage after mount, so server and client render the same HTML,
    // and wait a moment so the bar slides in after the page has settled.
    const timer = window.setTimeout(() => {
      const saved = readConsent();
      if (saved) {
        setChoice({ analytics: saved.analytics, marketing: saved.marketing });
        setDecided(true);
      } else {
        setOpen(true);
      }
    }, 800);

    function reopen() {
      const current = readConsent();
      if (current) setChoice({ analytics: current.analytics, marketing: current.marketing });
      setManage(true);
      setOpen(true);
    }
    window.addEventListener(OPEN_COOKIE_SETTINGS, reopen);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener(OPEN_COOKIE_SETTINGS, reopen);
    };
  }, []);

  function decide(next: { analytics: boolean; marketing: boolean }) {
    saveConsent(next);
    setChoice(next);
    setDecided(true);
    setOpen(false);
    setManage(false);
  }

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-title"
      className="fixed inset-x-0 bottom-0 z-[60] border-t border-border bg-background/95 shadow-[0_-12px_40px_-12px_rgba(15,23,42,0.25)] backdrop-blur motion-safe:animate-in motion-safe:slide-in-from-bottom-6"
    >
      <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 sm:py-6 lg:px-8">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:gap-10">
          <div className="flex min-w-0 flex-1 gap-4">
            <span
              aria-hidden="true"
              className="hidden size-11 shrink-0 place-items-center rounded-full bg-primary/10 text-primary sm:grid"
            >
              <Cookie className="size-5" />
            </span>
            <div className="min-w-0">
              <h2 id="cookie-title" className="font-brand text-lg font-semibold">
                We value your privacy
              </h2>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground sm:text-base">
                We use cookies to keep this site working and, with your permission, to understand
                how it&apos;s used and improve it. Read our{" "}
                <Link href="/cookies" className="font-medium text-primary underline-offset-4 hover:underline">
                  cookie policy
                </Link>
                .
              </p>
            </div>
          </div>

          {!manage ? (
            <div className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap lg:shrink-0">
              <Button size="lg" className="font-brand" onClick={() => decide({ analytics: true, marketing: true })}>
                Accept all
              </Button>
              <Button size="lg" variant="outline" className="font-brand" onClick={() => setManage(true)}>
                Manage preferences
              </Button>
              <Button
                size="lg"
                variant="ghost"
                className="font-brand"
                onClick={() => decide({ analytics: false, marketing: false })}
              >
                Reject optional
              </Button>
            </div>
          ) : null}
        </div>

        {manage ? (
          <div className="mt-5 border-t border-border pt-5">
            <ul role="list" className="grid gap-3 md:grid-cols-3">
              {categories.map((category) => {
                const locked = category.id === "necessary";
                const on = locked ? true : choice[category.id as ConsentCategory];
                return (
                  <li key={category.id} className="flex items-start justify-between gap-4 rounded-xl border border-border bg-card p-4">
                    <div className="min-w-0">
                      <p id={`cookie-${category.id}`} className="font-brand font-semibold">
                        {category.title}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {category.description}
                      </p>
                    </div>
                    <button
                      type="button"
                      role="switch"
                      aria-checked={on}
                      aria-labelledby={`cookie-${category.id}`}
                      disabled={locked}
                      onClick={() =>
                        setChoice((current) => ({
                          ...current,
                          [category.id]: !current[category.id as ConsentCategory],
                        }))
                      }
                      className={cn(
                        "relative mt-0.5 inline-flex h-7 w-12 shrink-0 items-center rounded-full transition-colors focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-60",
                        on ? "bg-primary" : "bg-muted-foreground/30",
                      )}
                    >
                      <span
                        className={cn(
                          "inline-block size-5 rounded-full bg-white shadow transition-transform",
                          on ? "translate-x-6" : "translate-x-1",
                        )}
                      />
                    </button>
                  </li>
                );
              })}
            </ul>
            <div className="mt-5 flex flex-col gap-2.5 sm:flex-row sm:justify-end">
              <Button size="lg" variant="outline" className="font-brand" onClick={() => decide({ analytics: false, marketing: false })}>
                Reject optional
              </Button>
              <Button size="lg" variant="outline" className="font-brand" onClick={() => decide(choice)}>
                Save my choices
              </Button>
              <Button size="lg" className="font-brand" onClick={() => decide({ analytics: true, marketing: true })}>
                Accept all
              </Button>
            </div>
          </div>
        ) : null}
      </div>

      {decided ? (
        <button
          type="button"
          aria-label="Close cookie settings"
          onClick={() => {
            setOpen(false);
            setManage(false);
          }}
          className="absolute top-3 right-3 grid size-10 place-items-center rounded-full text-muted-foreground hover:bg-muted hover:text-foreground"
        >
          <X className="size-5" />
        </button>
      ) : null}
    </div>
  );
}

/** Footer link that reopens the cookie settings. */
export function CookieSettingsButton({ className }: { className?: string }) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(OPEN_COOKIE_SETTINGS))}
      className={className}
    >
      Cookie settings
    </button>
  );
}
