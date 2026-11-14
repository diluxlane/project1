"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Magnetic } from "@/components/motion/Magnetic";
import { Wordmark } from "@/components/layout/Wordmark";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { useLenis } from "@/components/providers/SmoothScrollProvider";
import { navLinks, socials } from "@/lib/constants";
import { ease } from "@/lib/motion";

export function Header() {
  const { direction, scrolled } = useScrollDirection(90);
  const { scrollTo, lenis } = useLenis();
  const [menuOpen, setMenuOpen] = useState(false);

  const hidden = direction === "down" && scrolled && !menuOpen;

  // Lock scrolling while the mobile menu is open.
  useEffect(() => {
    if (menuOpen) lenis?.stop();
    else lenis?.start();
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen, lenis]);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    // Delay slightly so the menu-close animation and scroll don't fight.
    window.setTimeout(() => scrollTo(href, -90), menuOpen ? 260 : 0);
  };

  return (
    <>
      <motion.header
        initial={{ y: -120, opacity: 0 }}
        animate={{ y: hidden ? -120 : 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: ease.luxury }}
        className="fixed inset-x-0 top-0 z-50 pt-4 sm:pt-5"
      >
        <Container size="wide">
          <nav
            className={`flex items-center justify-between gap-4 rounded-full px-4 py-2.5 pl-5 transition-[background,box-shadow,border-color] duration-500 ease-luxury sm:px-5 ${
              scrolled || menuOpen
                ? "glass-bar shadow-glass"
                : "border border-transparent bg-transparent"
            }`}
          >
            {/* Brand */}
            <button
              onClick={() => scrollTo(0)}
              className="shrink-0"
              aria-label="Back to top"
            >
              <Wordmark />
            </button>

            {/* Desktop nav */}
            <ul className="hidden items-center gap-1 lg:flex">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="group relative px-4 py-2 text-[0.8rem] font-medium tracking-wide text-foreground/75 transition-colors duration-300 hover:text-foreground"
                  >
                    {link.label}
                    <span className="absolute inset-x-4 bottom-1 h-px origin-left scale-x-0 bg-gradient-to-r from-gold to-transparent transition-transform duration-400 ease-luxury group-hover:scale-x-100" />
                  </button>
                </li>
              ))}
            </ul>

            {/* Right cluster */}
            <div className="flex items-center gap-2">
              <div className="hidden sm:block">
                <Magnetic strength={0.4}>
                  <Button
                    size="sm"
                    variant="primary"
                    onClick={() => handleNav("#begin")}
                    rightIcon={<ArrowIcon />}
                  >
                    Begin
                  </Button>
                </Magnetic>
              </div>

              {/* Mobile toggle */}
              <button
                onClick={() => setMenuOpen((v) => !v)}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
                className="flex h-11 w-11 items-center justify-center rounded-full text-foreground transition-colors hover:text-gold-light lg:hidden"
              >
                <Burger open={menuOpen} />
              </button>
            </div>
          </nav>
        </Container>
      </motion.header>

      {/* Mobile / full-screen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: ease.luxury }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="glass-panel absolute inset-0 flex flex-col justify-between px-6 pb-10 pt-28">
              <nav>
                <ul className="flex flex-col">
                  {navLinks.map((link, i) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{
                        duration: 0.6,
                        delay: 0.08 + i * 0.07,
                        ease: ease.luxury,
                      }}
                      className="border-b border-white/10"
                    >
                      <button
                        onClick={() => handleNav(link.href)}
                        className="w-full py-5 text-left font-serif text-4xl text-foreground/90 transition-colors hover:text-gold-light"
                      >
                        <span className="mr-4 text-sm text-gold/60">
                          0{i + 1}
                        </span>
                        {link.label}
                      </button>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              <div className="space-y-8">
                <Button
                  size="lg"
                  variant="primary"
                  className="w-full"
                  onClick={() => handleNav("#begin")}
                  rightIcon={<ArrowIcon />}
                >
                  Begin the Reverie
                </Button>
                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      className="text-xs uppercase tracking-[0.2em] text-muted transition-colors hover:text-gold-light"
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ---- Small inline icons (no emoji) ---- */
function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Burger({ open }: { open: boolean }) {
  return (
    <div className="relative h-4 w-6">
      <motion.span
        className="absolute left-0 block h-px w-6 bg-current"
        animate={{ top: open ? 8 : 3, rotate: open ? 45 : 0 }}
        transition={{ duration: 0.3, ease: ease.luxury }}
        style={{ top: 3 }}
      />
      <motion.span
        className="absolute left-0 top-[13px] block h-px w-6 bg-current"
        animate={{ top: open ? 8 : 13, rotate: open ? -45 : 0 }}
        transition={{ duration: 0.3, ease: ease.luxury }}
      />
    </div>
  );
}
