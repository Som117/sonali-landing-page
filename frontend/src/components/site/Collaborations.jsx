import { motion } from "framer-motion";
import { Reveal, Heart } from "./Reveal";

const BRANDS = ["NEWME", "Littlebox", "Yousta", "Plum", "Nykaa", "Lakmé", "Starbucks", "Toscano", "OPPO", "Myntra", "AJIO", "Zouk", "MINISO", "UNIQLO", "Bastian", "Stone Wood"];

const Brand = ({ name, i }) => (
  <motion.span
    initial={{ opacity: 0, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-30px" }}
    transition={{ duration: 0.8, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
    className="inline-flex items-center"
  >
    <span
      data-testid={`brand-${name.toLowerCase().replace(/\s/g, "-")}`}
      className={`group relative font-serif-d text-[2.1rem] sm:text-5xl lg:text-[3.6rem] leading-[1.25] text-[var(--choc)] hover:text-[var(--red)] transition-colors duration-300 cursor-default ${i % 3 === 1 ? "italic" : ""}`}
    >
      {name}
      <sup className="label text-[9px] ml-1 align-super text-[var(--dusty)] group-hover:text-[var(--red)] transition-colors">{String(i + 1).padStart(2, "0")}</sup>
    </span>
    {i < BRANDS.length - 1 && <Heart className="w-3.5 h-3.5 mx-4 sm:mx-6 text-[var(--red)] shrink-0" />}
  </motion.span>
);

const Stat = ({ n, label }) => (
  <div className="border-t border-[var(--blush)]/30 pt-5">
    <p className="font-serif-d text-6xl lg:text-7xl leading-none">{n}</p>
    <p className="label mt-3 text-[var(--rose)]">{label}</p>
  </div>
);

export default function Collaborations() {
  return (
    <section id="collaborations" data-testid="collaborations-section" className="grid lg:grid-cols-[minmax(340px,0.42fr)_1fr]">
      <div className="bg-[var(--red)] text-[var(--blush)] px-6 md:px-14 py-20 lg:py-32 flex flex-col justify-between gap-16">
        <Reveal>
          <p className="label text-[var(--rose)] mb-8">Collaborations</p>
          <h2 className="font-serif-d text-5xl sm:text-6xl lg:text-7xl leading-[0.95]">
            Brands I've <em className="text-[var(--rose)]">created</em> with.
          </h2>
          <p className="mt-8 max-w-xs text-[var(--blush)]/85 leading-relaxed">
            Campaigns, product launches and UGC for names you know, and the local favourites you love.
          </p>
        </Reveal>
        <Reveal delay={0.15} className="grid grid-cols-2 gap-8" data-testid="collab-stats">
          <Stat n="2+" label="Years creating" />
          <Stat n="16+" label="Brands" />
        </Reveal>
      </div>

      <div className="bg-[var(--blush)] px-6 md:px-14 lg:px-20 py-20 lg:py-32 flex flex-col justify-center">
        <div className="flex flex-wrap items-center gap-y-3 sm:gap-y-5" data-testid="brands-list">
          {BRANDS.map((b, i) => <Brand key={b} name={b} i={i} />)}
        </div>
        <Reveal className="mt-16 pt-6 border-t border-[var(--dusty)]/50 label leading-[2.2] text-[var(--cocoa)]">
          Fashion · Beauty · Lifestyle · Food & Beverage · Tech · Retail
        </Reveal>
      </div>
    </section>
  );
}
