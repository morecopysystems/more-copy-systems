"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";
import { SITE } from "@/data/site";

/**
 * Always-available conversion surface.
 * Mobile: a bar pinned to the bottom edge. Desktop: a single floating WhatsApp pill.
 * Appears after the hero so it never competes with the first impression.
 */
export default function ContactDock() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <>
          <motion.div
            initial={{ y: 80 }}
            animate={{ y: 0 }}
            exit={{ y: 80 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-hairline bg-ink/90 backdrop-blur-xl sm:hidden"
          >
            <a
              href={SITE.phones[0].href}
              className="flex items-center justify-center gap-2 py-4 text-sm font-medium text-paper"
            >
              <Phone className="h-4 w-4" aria-hidden />
              Call
            </a>
            <a
              href={SITE.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-accent py-4 text-sm font-medium text-paper"
            >
              <MessageCircle className="h-4 w-4" aria-hidden />
              WhatsApp
            </a>
          </motion.div>

          <motion.a
            href={SITE.whatsapp.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.9, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 12 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="group fixed bottom-8 right-8 z-40 hidden items-center gap-2.5 rounded-full bg-accent px-5 py-3.5 text-sm font-medium text-paper shadow-[0_10px_40px_-10px_rgba(0,0,0,0.8)] transition-colors duration-300 hover:bg-accent-soft sm:inline-flex"
          >
            <MessageCircle className="h-4 w-4" aria-hidden />
            <span>WhatsApp us</span>
          </motion.a>
        </>
      ) : null}
    </AnimatePresence>
  );
}
