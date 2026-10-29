import { motion } from "framer-motion";
import { Reveal, Heart } from "./Reveal";

const BRANDS = ["NEWME", "Littlebox", "Yousta", "Plum", "Nykaa", "Lakmé", "Starbucks", "Toscano", "OPPO", "Myntra", "AJIO", "Zouk", "MINISO", "UNIQLO", "Bastian", "Stone Wood"];

const Cell = ({ name, i }) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true, margin: "-30px" }}
    transition={{ duration: 0.7, delay: (i % 4) * 0.08 }}
    data-testid={`brand-${name.toLowerCase().replace(/\s/g, "-")}`}
    className="group relative aspect-[3/2] sm:aspect-[16/9] flex items-center justify-center border-r border-b border-s-pearl/15 hover:bg-[#f0b6c3] transition-colors duration-500 cursor-default"
  >
    <span className="absolute top-3 left-4 label text-[9px] text-s-pearl/40 group-hover:text-[#6e0f1f] transition-colors">{String(i + 1).padStart(2, "0")}</span>
    <Heart className="absolute top-3 right-4 w-3 h-3 text-[#6e0f1f] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <span className={`font-serif-d text-[1.7rem] sm:text-4xl lg:text-[2.6rem] text-[var(--pearl)] group-hover:text-[#6e0f1f] group-hover:scale-105 transition-[color,transform] duration-500 ${i % 2 ? "italic" : ""}`}>
      {name}
    </span>
  </motion.div>
);

const Stat = ({ n, label }) => (
  <div className="text-left">
    <p className="font-serif-d text-5xl lg:text-6xl leading-none text-[var(--pearl)]">{n}</p>
    <p className="label text-[9px] mt-2 text-[#e88aa0]">{label}</p>
  </div>
);

export default function Collaborations() {
  return (
    <section id="collaborations" data-testid="collaborations-section" className="bg-[#6e0f1f] py-24 md:py-36">
      <div className="max-w-[1400px] mx-auto px-6 md:px-14">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-16 md:mb-20">
          <Reveal>
            <p className="label text-[#e88aa0] mb-8 flex items-center gap-4"><span className="w-10 h-px bg-[#e88aa0]" />Collaborations</p>
            <h2 className="font-serif-d text-5xl sm:text-6xl lg:text-7xl leading-[0.95] text-[var(--pearl)]">
              Brands I've <em className="text-[#e88aa0]">created</em> with.
            </h2>
          </Reveal>
          <Reveal delay={0.15} className="flex gap-12 lg:gap-16" data-testid="collab-stats">
            <Stat n="2+" label="Years creating" />
            <Stat n="16+" label="Brands" />
            <Stat n="15" label="Categories" />
          </Reveal>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-l border-s-pearl/15" data-testid="brands-list">
          {BRANDS.map((b, i) => <Cell key={b} name={b} i={i} />)}
        </div>

        <Reveal className="mt-12 label text-[10px] leading-[2.2] text-s-pearl/70">
          Fashion · Beauty · Lifestyle · Food & Beverage · Tech · Retail · D2C
        </Reveal>
      </div>
    </section>
  );
}
