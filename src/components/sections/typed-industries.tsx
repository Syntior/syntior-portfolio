"use client";

import { useEffect, useState } from "react";

/** Industries and product types we build for, typed out one after another. */
const industries = [
  "SaaS platforms",
  "FinTech apps",
  "HealthTech software",
  "E-commerce stores",
  "ERP systems",
  "CRM solutions",
  "EdTech platforms",
  "Logistics software",
  "Real estate portals",
  "AI-powered products",
];

const TYPE_MS = 70;
const DELETE_MS = 35;
const HOLD_MS = 1600;

/**
 * "We build <industry>": each industry is typed, held, deleted, then the
 * next one starts, looping forever. Screen readers get the full list once
 * instead of the animation. The caret stops blinking with reduced motion
 * (globals.css).
 */
export function TypedIndustries() {
  const [index, setIndex] = useState(0);
  const [length, setLength] = useState(0);
  const [deleting, setDeleting] = useState(false);

  const word = industries[index];

  useEffect(() => {
    let delay = deleting ? DELETE_MS : TYPE_MS;
    if (!deleting && length === word.length) delay = HOLD_MS;

    const timer = window.setTimeout(() => {
      if (!deleting && length === word.length) setDeleting(true);
      else if (deleting && length === 0) {
        setDeleting(false);
        setIndex((index + 1) % industries.length);
      } else setLength(length + (deleting ? -1 : 1));
    }, delay);
    return () => window.clearTimeout(timer);
  }, [index, length, deleting, word.length]);

  return (
    <p className="mt-6 font-brand text-xl font-medium text-foreground sm:mt-7 sm:text-2xl">
      <span className="sr-only">We build {industries.join(", ")}.</span>
      <span aria-hidden="true">
        We build{" "}
        <span className="font-semibold text-primary">{word.slice(0, length)}</span>
        <span className="caret ml-0.5" />
      </span>
    </p>
  );
}
