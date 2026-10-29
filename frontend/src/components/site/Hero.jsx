import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ease = [0.22, 1, 0.36, 1];

export default function Hero() {
  return (
    <section id="top" data-testid="hero-section" className="min-h-screen flex items-center pt-24 pb-16 bg-[var(--ballet)]">
      <div className="max-w-[1400px] w-full mx-auto px-6 md:px-14 grid md:grid-cols-[1fr_1.15fr] gap-12 md:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease }}
          className="mx-auto w-[78%] sm:w-[60%] md:w-full max-w-[460px] aspect-[4/5] rounded-[50%] overflow-hidden bg-[var(--rose)]"
        >
          <img src="/img/hero.jpg" alt="Sonalii, UGC creator" data-testid="hero-image" className="w-full h-full object-cover scale-[1.04]" />
        </motion.div>

        <div className="text-center md:text-left">
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.9, ease }} className="label mb-6 text-[var(--wine)]" data-testid="hero-eyebrow">
            UGC Creator • Portfolio
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1, ease }}
            className="font-serif-d text-[3.4rem] sm:text-7xl lg:text-[6.4rem] leading-[0.95] tracking-[-0.02em] text-[var(--choc)]"
            data-testid="hero-headline"
          >
            Content That <br />
            <em>Feels Real.</em>
          </motion.h1>
          <motion.a
            href="#work"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.9, ease }}
            data-testid="hero-view-work-btn"
            className="group mt-12 inline-flex items-center gap-6 border border-[var(--choc)] rounded-full px-9 py-4 label hover:bg-[var(--wine)] hover:border-[var(--wine)] hover:text-[var(--pearl)] transition-colors duration-300"
          >
            View my work
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" strokeWidth={1.3} />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
