import { motion } from "framer-motion";
import { Reveal, Heart } from "./Reveal";

const TAGS = [["Authentic", "Storytelling"], ["Relatable", "Content"], ["Real", "Engagement"]];

const Polaroid = () => (
  <motion.div
    initial={{ opacity: 0, rotate: 0, y: 30 }}
    whileInView={{ opacity: 1, rotate: 3, y: 0 }}
    whileHover={{ rotate: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
    className="relative bg-white p-3 pb-3 shadow-[0_18px_40px_-18px_rgba(59,34,32,0.45)] w-[78%] max-w-[380px] mx-auto"
    data-testid="about-polaroid"
  >
    <span className="absolute -top-4 left-[12%] w-32 h-8 bg-[var(--rose)]/80 -rotate-2" />
    <img src="/img/floral.jpeg" alt="Sonalii smiling" className="w-full aspect-[3/4] object-cover object-top" />
    <motion.div
      initial={{ clipPath: "inset(0 100% 0 0)" }}
      whileInView={{ clipPath: "inset(0 0% 0 0)" }}
      viewport={{ once: true }}
      transition={{ delay: 0.9, duration: 1.6, ease: "easeInOut" }}
      className="absolute -left-12 bottom-2 -rotate-[14deg] font-hand text-[var(--choc)] text-xl leading-tight flex items-end gap-2"
      data-testid="about-handwritten-note"
    >
      <span>Hi,<br />I'm Sonali</span>
      <Heart className="w-6 h-6 text-[var(--choc)]" />
    </motion.div>
  </motion.div>
);

export default function About() {
  return (
    <section id="about" data-testid="about-section" className="bg-[var(--blush)] py-28 md:py-40">
      <div className="max-w-[1400px] mx-auto px-6 md:px-14 grid lg:grid-cols-[1fr_1fr_1.15fr] gap-16 items-center">
        <Reveal>
          <p className="label mb-10">About me</p>
          <h2 className="font-serif-d text-6xl sm:text-7xl lg:text-[5.4rem] leading-[0.95] tracking-[-0.02em] text-[var(--deep)]" data-testid="about-headline">
            Just a girl who loves <em>creating.</em>
          </h2>
          <p className="label mt-12 text-[var(--cocoa)]" data-testid="about-meta">UGC Creator &nbsp; / &nbsp; Pune, India</p>
        </Reveal>
        <Polaroid />
        <Reveal delay={0.2} className="lg:border-l border-[var(--dusty)]/60 lg:pl-14">
          <div className="space-y-7 text-[17px] leading-[1.9] tracking-[0.02em] text-[var(--choc)]" data-testid="about-copy">
            <p>I'm a UGC creator and digital marketing professional based in Pune, India. For 2+ years I've been making authentic, relatable short-form content that feels natural — because real moments create real connections.</p>
            <p>From fashion and beauty to lifestyle and everyday brands, I love bringing products to life in a way that feels genuine, creative and true to me — while still hitting the brand's goals.</p>
          </div>
          <Heart className="w-6 h-6 mt-10 text-[var(--dusty)]" />
          <div className="mt-6 flex divide-x divide-[var(--dusty)]/60">
            {TAGS.map(([a, b]) => (
              <p key={a} className="label text-[10px] leading-[1.9] px-5 first:pl-0" data-testid={`about-tag-${a.toLowerCase()}`}>{a}<br />{b}</p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
