"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { localeNames, locales, localizedPath, stripLocalePrefix, type Locale } from "@/lib/i18n";

type NavigationItem = {
  key: string;
  baseHref: string;
  href: string;
  label: string;
};

type NavbarProps = {
  locale: Locale;
  navigation: NavigationItem[];
  copy: {
    navAria: string;
    openMenu: string;
    closeMenu: string;
    languageAria: string;
    datePlace: string;
  };
};

export function Navbar({ locale, navigation, copy }: NavbarProps) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const currentPath = stripLocalePrefix(pathname);

  useEffect(() => {
    if (!menuOpen) return;

    const root = document.documentElement;
    const body = document.body;
    const pageElements = [document.querySelector("main"), document.querySelector("footer")].filter(
      (element): element is HTMLElement => element instanceof HTMLElement,
    );
    root.classList.add("menu-open");
    body.classList.add("menu-open");
    pageElements.forEach((element) => element.setAttribute("inert", ""));

    return () => {
      root.classList.remove("menu-open");
      body.classList.remove("menu-open");
      pageElements.forEach((element) => element.removeAttribute("inert"));
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <>
      <nav
        aria-label={copy.navAria}
        className={`sticky top-0 z-[60] border-b transition-colors duration-500 ${
          menuOpen
            ? "border-white/15 bg-[#3f4431] text-[var(--hero-cream)]"
            : "border-black/10 bg-[var(--brand-background)] text-[var(--charcoal)]"
        }`}
      >
        <div className="mx-auto flex h-[4.75rem] max-w-[84rem] items-center justify-between px-5 sm:px-8 lg:h-[6.25rem] 2xl:px-0">
          <Link
            aria-label="Emanuele & Chiara"
            className={`${menuOpen ? "focus-ring-dark" : "focus-ring"} block`}
            href={localizedPath(locale, "/")}
            tabIndex={menuOpen ? -1 : undefined}
          >
            <Image
              alt=""
              className="h-auto w-[11.5rem] sm:w-[13rem] lg:w-[15rem]"
              height={724}
              priority
              src="/images/brand/emanuele-chiara-logo.png"
              width={2172}
            />
          </Link>

          <div className="hidden items-center gap-5 xl:flex 2xl:gap-8">
            {navigation.map((item) => {
              const active = currentPath === item.baseHref;
              return (
                <Link
                  aria-current={active ? "page" : undefined}
                  className={`focus-ring relative py-2 font-serif text-[0.7rem] font-normal uppercase tracking-[0.18em] transition-colors duration-300 ${
                    active ? "text-[var(--charcoal)]" : "text-[var(--muted)] hover:text-[var(--charcoal)]"
                  }`}
                  href={item.href}
                  key={item.href}
                >
                  {item.label}
                  <span
                    className={`absolute inset-x-0 -bottom-0.5 h-px origin-left bg-[var(--sage-dark)] transition-transform duration-300 ${
                      active ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </Link>
              );
            })}
            <div aria-label={copy.languageAria} className="ml-1 flex items-center gap-2 border-l border-[var(--line)] pl-5">
              {locales.map((option) => (
                <Link
                  aria-current={locale === option ? "true" : undefined}
                  className={`focus-ring font-serif text-[0.68rem] font-normal uppercase tracking-[0.16em] transition-colors ${
                    locale === option ? "text-[var(--charcoal)]" : "text-[var(--muted)] hover:text-[var(--charcoal)]"
                  }`}
                  href={localizedPath(option, currentPath)}
                  hrefLang={option}
                  key={option}
                  lang={option}
                >
                  {option.toUpperCase()}
                </Link>
              ))}
            </div>
          </div>

          <button
            aria-controls="mobile-menu"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? copy.closeMenu : copy.openMenu}
            className={`${menuOpen ? "focus-ring-dark fixed right-5 top-4 text-[var(--hero-gold)] sm:right-8 lg:top-7" : "focus-ring relative"} z-[70] flex h-11 w-11 items-center justify-center xl:hidden`}
            data-open={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            type="button"
          >
            <span aria-hidden="true" className="relative block h-4 w-6">
              <span className="menu-line menu-line-top" />
              <span className="menu-line menu-line-middle" />
              <span className="menu-line menu-line-bottom" />
            </span>
          </button>
        </div>
      </nav>

      <div
        aria-hidden={!menuOpen}
        aria-modal="true"
        className="mobile-menu-panel fixed inset-0 z-50 overflow-y-auto overscroll-contain bg-[#3f4431] text-[var(--ivory)] xl:hidden"
        data-open={menuOpen}
        id="mobile-menu"
        role="dialog"
      >
        <div className="flex min-h-full flex-col pb-8 pt-[4.75rem] lg:pt-[6.25rem]">
          <div className="flex flex-1 flex-col justify-center gap-2 px-6 py-8 sm:px-10">
            {navigation.map((item, index) => (
              <Link
                className={`focus-ring-dark font-serif text-[clamp(2.5rem,11vw,4.5rem)] leading-[1.05] tracking-[-0.04em] transition-all duration-500 ${
                  menuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                } ${currentPath === item.baseHref ? "text-[var(--hero-gold)]" : "text-[var(--ivory)]"}`}
                href={item.href}
                key={item.href}
                onClick={() => setMenuOpen(false)}
                style={{ transitionDelay: menuOpen ? `${90 + index * 45}ms` : "0ms" }}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="mx-6 border-t border-white/20 pt-5 sm:mx-10">
            <div aria-label={copy.languageAria} className="mb-5 flex flex-wrap gap-x-5 gap-y-2">
              {locales.map((option) => (
                <Link
                  aria-current={locale === option ? "true" : undefined}
                  className={`focus-ring-dark text-xs font-semibold uppercase tracking-[0.17em] ${
                    locale === option ? "text-[var(--hero-gold)]" : "text-white/65"
                  }`}
                  href={localizedPath(option, currentPath)}
                  hrefLang={option}
                  key={option}
                  lang={option}
                  onClick={() => setMenuOpen(false)}
                >
                  {localeNames[option]}
                </Link>
              ))}
            </div>
            <p className="text-xs uppercase tracking-[0.2em] text-white/65">{copy.datePlace}</p>
          </div>
        </div>
      </div>
    </>
  );
}
