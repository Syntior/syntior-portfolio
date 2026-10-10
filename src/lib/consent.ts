/*
 * Cookie consent: what the visitor allowed, stored in their browser.
 *
 * Necessary storage is always on (it includes this choice itself). Analytics
 * and marketing are off until the visitor turns them on. The site loads no
 * analytics or marketing tools yet; when one is added, load it only after
 * `hasConsent("analytics")` (or "marketing") is true, and listen for
 * CONSENT_CHANGED to react when the visitor changes their mind.
 */
export type ConsentCategory = "analytics" | "marketing";

export type Consent = {
  analytics: boolean;
  marketing: boolean;
  /** ISO date of the choice, so it can be asked again after a policy change. */
  decidedAt: string;
  version: number;
};

/** Bump to ask everyone again, e.g. after adding a new tool. */
export const CONSENT_VERSION = 1;
const STORAGE_KEY = "syntior-consent";
/** Fired on window when the visitor saves a choice. */
export const CONSENT_CHANGED = "syntior:consent-changed";
/** Fire on window to reopen the cookie settings, e.g. from the footer. */
export const OPEN_COOKIE_SETTINGS = "syntior:open-cookie-settings";

export function readConsent(): Consent | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const consent = JSON.parse(raw) as Consent;
    return consent.version === CONSENT_VERSION ? consent : null;
  } catch {
    return null;
  }
}

export function saveConsent(choice: Pick<Consent, ConsentCategory>) {
  const consent: Consent = {
    ...choice,
    decidedAt: new Date().toISOString(),
    version: CONSENT_VERSION,
  };
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
  } catch {
    // Storage blocked (private mode): the choice still applies for this visit.
  }
  window.dispatchEvent(new CustomEvent(CONSENT_CHANGED, { detail: consent }));
  return consent;
}

export function hasConsent(category: ConsentCategory) {
  return readConsent()?.[category] === true;
}
