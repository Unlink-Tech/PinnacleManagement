"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { nav, services } from "@/lib/content";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-line/80 bg-white/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <Container className="flex h-20 items-center justify-between gap-6">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => {
            const hasMenu = item.href === "/services";
            return (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => hasMenu && setServicesOpen(true)}
                onMouseLeave={() => hasMenu && setServicesOpen(false)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300",
                    isActive(item.href)
                      ? "text-brand-800"
                      : "text-ink-soft hover:text-brand-700",
                  )}
                >
                  {item.label}
                  {isActive(item.href) && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-brand-50"
                      transition={{ type: "spring", stiffness: 320, damping: 30 }}
                    />
                  )}
                </Link>

                {hasMenu && (
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                        transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute left-1/2 top-full w-[38rem] -translate-x-1/2 pt-4"
                      >
                        <div className="grid grid-cols-2 gap-1 rounded-3xl border border-line bg-white p-3 shadow-lift">
                          {services.map((s) => (
                            <Link
                              key={s.slug}
                              href={`/services/${s.slug}`}
                              className="group flex items-start gap-3 rounded-2xl p-3 transition-colors hover:bg-brand-50"
                            >
                              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-100 text-brand-700 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                                <Icon name={s.icon} className="h-4.5 w-4.5" />
                              </span>
                              <span>
                                <span className="block text-sm font-semibold text-ink">
                                  {s.title}
                                </span>
                                <span className="mt-0.5 block text-xs leading-relaxed text-ink-soft line-clamp-3">
                                  {s.summary}
                                </span>
                              </span>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Button href="/contact" size="sm">
            Book a Consultation
          </Button>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-ink transition-colors hover:border-brand-300 hover:text-brand-700 lg:hidden"
        >
          <Icon name={menuOpen ? "close" : "menu"} className="h-5 w-5" />
        </button>
      </Container>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-20 z-40 overflow-y-auto bg-white lg:hidden"
          >
            <Container className="flex flex-col gap-2 py-8">
              {nav.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + i * 0.06, duration: 0.4 }}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center justify-between border-b border-line py-4 text-2xl font-semibold tracking-tight",
                      isActive(item.href) ? "text-brand-700" : "text-ink",
                    )}
                  >
                    {item.label}
                    <Icon name="arrowUpRight" className="h-5 w-5 text-brand-500" />
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.32, duration: 0.4 }}
                className="mt-6"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-soft">
                  Services
                </p>
                <div className="mt-4 grid gap-2 sm:grid-cols-2">
                  {services.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className="flex items-center gap-3 rounded-2xl border border-line p-3 text-sm font-medium text-ink transition-colors hover:border-brand-300 hover:bg-brand-50"
                    >
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-100 text-brand-700">
                        <Icon name={s.icon} className="h-4.5 w-4.5" />
                      </span>
                      {s.title}
                    </Link>
                  ))}
                </div>
                <Button href="/contact" className="mt-8 w-full" size="lg">
                  Book a Consultation
                </Button>
              </motion.div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
