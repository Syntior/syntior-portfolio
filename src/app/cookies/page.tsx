import { PageHeader } from "@/components/layout/page-header";
import { Section } from "@/components/layout/section";
import { CookieSettingsButton } from "@/components/consent/cookie-banner";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Cookie policy",
  description: `How ${site.name} uses cookies and similar storage, and how to change your choice.`,
  path: "/cookies",
});

/*
 * Keep this page true to what the site actually does. Today it stores only
 * the visitor's cookie choice and loads no analytics or marketing tools.
 * Update the "Analytics" and "Marketing" sections when a tool is added.
 */
export default function CookiesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Cookie policy"
        description="What we store in your browser, why, and how to change your choice at any time."
      />

      <Section aria-label="Cookie policy">
        <div className="max-w-3xl space-y-10 text-base leading-relaxed text-muted-foreground sm:text-lg">
          <div>
            <h2 className="font-brand text-2xl font-semibold text-foreground">What cookies are</h2>
            <p className="mt-3">
              Cookies and similar browser storage are small pieces of data a website saves on your
              device. They let a site remember things between visits, such as your preferences.
            </p>
          </div>

          <div>
            <h2 className="font-brand text-2xl font-semibold text-foreground">Necessary</h2>
            <p className="mt-3">
              Always on. We save your cookie choice in your browser (as{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 text-sm text-foreground">syntior-consent</code>)
              so we don&apos;t ask you again on every page. It never leaves your device.
            </p>
          </div>

          <div>
            <h2 className="font-brand text-2xl font-semibold text-foreground">Analytics</h2>
            <p className="mt-3">
              Off unless you allow it. We don&apos;t run any analytics tools today. If we add one to
              learn which pages are useful, it will only load after you allow analytics, and we
              will list it here.
            </p>
          </div>

          <div>
            <h2 className="font-brand text-2xl font-semibold text-foreground">Marketing</h2>
            <p className="mt-3">
              Off unless you allow it. We don&apos;t run any marketing or advertising tools today.
              If we add one, it will only load after you allow marketing, and we will list it here.
            </p>
          </div>

          <div>
            <h2 className="font-brand text-2xl font-semibold text-foreground">Changing your choice</h2>
            <p className="mt-3">
              You can change your choice at any time from{" "}
              <CookieSettingsButton className="font-medium text-primary underline-offset-4 hover:underline" />{" "}
              (also in the site footer), or by clearing this site&apos;s data in your browser.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
