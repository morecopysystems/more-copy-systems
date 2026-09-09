"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Menu, Phone, X } from "lucide-react";
import { CATEGORIES } from "@/data/products";
import { SERVICE_GROUPS } from "@/data/services";
import { SITE } from "@/data/site";
import { cn } from "@/lib/utils";
import { ActionAnchor } from "@/components/ui/action";

const EASE = [0.16, 1, 0.3, 1] as const;

type MenuId = "products" | "services" | null;

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState<MenuId>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();
  const reduced = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Route change closes everything.
  useEffect(() => {
    setMenu(null);
    setMobileOpen(false);
  }, [pathname]);

  // Escape closes the open surface; body scroll locks behind the mobile sheet.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setMenu(null);
      setMobileOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const openMenu = (id: MenuId) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMenu(id);
  };
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setMenu(null), 140);
  };

  return (
    <>
      <a
        href="#main"
        className="sr-only z-[60] focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:rounded-full focus:bg-accent focus:px-5 focus:py-2.5 focus:text-sm focus:text-paper"
      >
        Skip to content
      </a>

      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ease-editorial",
          scrolled || menu
            ? "border-b border-hairline bg-ink/80 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        )}
        onMouseLeave={scheduleClose}
      >
        <div className="shell flex h-16 items-center justify-between gap-6 lg:h-20">
          <Link href="/" className="group flex items-baseline gap-2" aria-label="More Copy Systems — home">
            <span className="font-display text-lg font-semibold tracking-tight text-paper lg:text-xl">
              More Copy Systems
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-accent transition-transform duration-500 ease-editorial group-hover:scale-150" />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            <MenuTrigger
              id="products"
              label="Products"
              open={menu === "products"}
              onOpen={() => openMenu("products")}
            />
            <MenuTrigger
              id="services"
              label="Services"
              open={menu === "services"}
              onOpen={() => openMenu("services")}
            />
            <TopLink href="/#why">Why us</TopLink>
            <TopLink href="/contact">Contact</TopLink>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={SITE.phones[0].href}
              className="hidden items-center gap-2 rounded-full border border-hairline px-4 py-2 font-mono text-xs text-paper-muted transition-colors duration-300 hover:border-paper/40 hover:text-paper md:inline-flex"
            >
              <Phone className="h-3.5 w-3.5" aria-hidden />
              {SITE.phones[0].label}
            </a>
            <ActionAnchor
              href={SITE.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              size="sm"
              className="hidden sm:inline-flex"
              arrow
            >
              Talk to us
            </ActionAnchor>
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-hairline text-paper lg:hidden"
              aria-label="Open menu"
              aria-expanded={mobileOpen}
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Mega menu */}
        <AnimatePresence>
          {menu ? (
            <motion.div
              key={menu}
              initial={reduced ? { opacity: 0 } : { opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduced ? { opacity: 0 } : { opacity: 0, y: -12 }}
              transition={{ duration: 0.4, ease: EASE }}
              className="hidden border-t border-hairline bg-ink/95 backdrop-blur-xl lg:block"
              onMouseEnter={() => openMenu(menu)}
              onMouseLeave={scheduleClose}
            >
              <div className="shell py-10">
                {menu === "products" ? <ProductsPanel /> : <ServicesPanel />}
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </header>

      {/* Mobile sheet */}
      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] overflow-y-auto bg-ink lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
          >
            <div className="shell flex h-16 items-center justify-between">
              <span className="font-display text-lg font-semibold">More Copy Systems</span>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-hairline"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="shell pb-24 pt-6" aria-label="Mobile">
              <MobileGroup label="Browse">
                <MobileLink href="/products">All products</MobileLink>
                {CATEGORIES.map((c) => (
                  <MobileLink key={c.slug} href={`/products/${c.slug}`} sub>
                    {c.name}
                    <span className="font-mono text-xs text-paper-dim">{c.products.length}</span>
                  </MobileLink>
                ))}
              </MobileGroup>

              <MobileGroup label="Services">
                <MobileLink href="/services">All services</MobileLink>
                {SERVICE_GROUPS.map((g) => (
                  <MobileLink key={g.id} href={`/services#${g.id}`} sub>
                    {g.name}
                  </MobileLink>
                ))}
              </MobileGroup>

              <MobileGroup label="Company">
                <MobileLink href="/#why">Why More Copy Systems</MobileLink>
                <MobileLink href="/contact">Contact & showroom</MobileLink>
              </MobileGroup>

              <div className="mt-10 grid gap-3">
                <ActionAnchor
                  href={SITE.whatsapp.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="lg"
                  arrow
                >
                  WhatsApp us
                </ActionAnchor>
                <ActionAnchor href={SITE.phones[0].href} variant="outline" size="lg">
                  Call {SITE.phones[0].label}
                </ActionAnchor>
              </div>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

function TopLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="rounded-full px-4 py-2 text-sm text-paper-muted transition-colors duration-300 hover:text-paper"
    >
      {children}
    </Link>
  );
}

function MenuTrigger({
  id,
  label,
  open,
  onOpen,
}: {
  id: string;
  label: string;
  open: boolean;
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      id={`${id}-trigger`}
      aria-expanded={open}
      aria-controls={`${id}-panel`}
      onMouseEnter={onOpen}
      onFocus={onOpen}
      onClick={onOpen}
      className={cn(
        "rounded-full px-4 py-2 text-sm transition-colors duration-300",
        open ? "text-paper" : "text-paper-muted hover:text-paper"
      )}
    >
      {label}
    </button>
  );
}

function ProductsPanel() {
  return (
    <div id="products-panel" className="grid grid-cols-12 gap-10">
      <div className="col-span-3">
        <p className="label">Product catalogue</p>
        <p className="mt-4 max-w-[22ch] font-display text-2xl leading-tight">
          Ten categories, one counter.
        </p>
        <Link
          href="/products"
          className="mt-6 inline-flex items-center gap-1.5 text-sm text-accent link-underline"
        >
          View everything <ArrowUpRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>
      <ul className="col-span-9 grid grid-cols-3 gap-x-8 gap-y-1">
        {CATEGORIES.map((c) => (
          <li key={c.slug}>
            <Link
              href={`/products/${c.slug}`}
              className="group flex items-baseline justify-between gap-4 border-b border-hairline py-3 transition-colors duration-300 hover:border-paper/30"
            >
              <span className="text-sm text-paper-muted transition-colors duration-300 group-hover:text-paper">
                {c.name}
              </span>
              <span className="font-mono text-[10px] text-paper-dim">
                {String(c.products.length).padStart(2, "0")}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ServicesPanel() {
  return (
    <div id="services-panel" className="grid grid-cols-12 gap-10">
      <div className="col-span-3">
        <p className="label">What we do</p>
        <p className="mt-4 max-w-[22ch] font-display text-2xl leading-tight">
          Sell it, service it, rent it, take it back.
        </p>
        <Link
          href="/services"
          className="mt-6 inline-flex items-center gap-1.5 text-sm text-accent link-underline"
        >
          All services <ArrowUpRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>
      <div className="col-span-9 grid grid-cols-4 gap-8">
        {SERVICE_GROUPS.map((g) => (
          <div key={g.id}>
            <Link
              href={`/services#${g.id}`}
              className="text-sm font-medium text-paper link-underline"
            >
              {g.name}
            </Link>
            <ul className="mt-3 space-y-2">
              {g.services.slice(0, 5).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services#${g.id}`}
                    className="text-sm text-paper-dim transition-colors duration-300 hover:text-paper-muted"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

function MobileGroup({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <p className="label mb-3">{label}</p>
      <ul>{children}</ul>
    </div>
  );
}

function MobileLink({
  href,
  children,
  sub,
}: {
  href: string;
  children: React.ReactNode;
  sub?: boolean;
}) {
  return (
    <li>
      <Link
        href={href}
        className={cn(
          "flex items-center justify-between border-b border-hairline py-3",
          sub ? "text-base text-paper-muted" : "font-display text-xl text-paper"
        )}
      >
        {children}
      </Link>
    </li>
  );
}
