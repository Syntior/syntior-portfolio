import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Logo } from "@/components/brand/logo";
import { CookieSettingsButton } from "@/components/consent/cookie-banner";
import { socialIcons } from "@/components/brand/social-icons";
import { footerNav, site } from "@/lib/site";
import { cn } from "@/lib/utils";

const linkClass =
  // `py-1.5` keeps each link a comfortable tap target on touch screens.
  "inline-block py-1.5 text-sm text-white/70 transition-colors hover:text-white lg:py-0.5";

export function SiteFooter() {
  return (
    <footer className="mt-auto bg-[#0f2a4d] text-white">
      <Container className="py-12 md:py-16">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div className="col-span-2 max-w-sm md:col-span-1">
            <Logo className="text-white" />
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              {site.tagline}
            </p>
            {site.socials.length > 0 ? (
              <ul role="list" aria-label="Social media" className="mt-6 flex flex-wrap gap-2.5">
                {site.socials.map((social) => {
                  const Icon = socialIcons[social.label];
                  return (
                    <li key={social.label}>
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="grid size-11 place-items-center rounded-full border border-white/20 text-white/80 transition hover:border-primary hover:bg-primary hover:text-primary-foreground"
                      >
                        <Icon className="size-[1.125rem]" />
                        <span className="sr-only">
                          {site.name} on {social.label} (opens in a new tab)
                        </span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            ) : null}
          </div>

          {footerNav.map((group) => (
            <nav key={group.title} aria-label={group.title}>
              <h2 className="font-mono text-xs font-medium tracking-wider text-white uppercase">
                {group.title}
              </h2>
              <ul className="mt-3 space-y-1 lg:mt-4 lg:space-y-3">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className={linkClass}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <nav aria-label="Connect">
            <h2 className="font-mono text-xs font-medium tracking-wider text-white uppercase">
              Connect
            </h2>
            <ul className="mt-3 space-y-1 lg:mt-4 lg:space-y-3">
              <li>
                <a
                  href={site.phone.href}
                  className={cn(linkClass, "inline-flex items-center gap-2 whitespace-nowrap")}
                >
                  <Phone className="size-4" aria-hidden="true" />
                  {site.phone.display}
                </a>
              </li>
              {/* Shown once a real address is set (NEXT_PUBLIC_CONTACT_EMAIL). */}
              {site.emailIsPlaceholder ? null : (
                <li>
                  <a
                    href={`mailto:${site.email}`}
                    className={cn(linkClass, "inline-flex items-center gap-2")}
                  >
                    <Mail className="size-4" aria-hidden="true" />
                    Email
                  </a>
                </li>
              )}
            </ul>
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-5">
            <Link href="/cookies" className="py-1.5 transition-colors hover:text-white">
              Cookie policy
            </Link>
            <CookieSettingsButton className="cursor-pointer py-1.5 transition-colors hover:text-white" />
          </div>
        </div>
      </Container>
    </footer>
  );
}
