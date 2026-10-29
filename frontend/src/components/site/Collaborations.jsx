import { motion } from "framer-motion";
import { Reveal } from "./Reveal";

const BRANDS = [
  { n: "NEWME", c: "font-['Jost'] font-medium tracking-[0.2em]" },
  { n: "littlebox", c: "font-serif-d italic text-[2.1rem]" },
  { n: "YOUSTA", c: "font-['Jost'] font-medium tracking-[0.3em]" },
  { n: "plum", c: "font-['Jost'] font-medium lowercase text-[2rem]" },
  { n: "NYKAA", c: "font-serif-d tracking-[0.12em] text-[2rem]" },
  { n: "Lakmé", c: "font-serif-d italic text-[2.1rem]" },
  { n: "STARBUCKS", c: "font-['Jost'] font-medium tracking-[0.18em]" },
  { n: "Toscano", c: "font-serif-d text-[2rem]" },
  { n: "OPPO", c: "font-['Jost'] font-medium tracking-[0.25em]" },
  { n: "Myntra", c: "font-['Jost'] font-medium text-[1.9rem]" },
  { n: "AJIO", c: "font-serif-d tracking-[0.3em] text-[2rem]" },
  { n: "ZOUK", c: "font-['Jost'] font-medium tracking-[0.35em]" },
  { n: "MINISO", c: "font-['Jost'] font-medium tracking-[0.2em]" },
  { n: "UNIQLO", c: "font-['Jost'] font-medium tracking-[0.15em]" },
  { n: "Bastian", c: "font-serif-d italic text-[2.1rem]" },
  { n: "STONE WOOD", c: "font-serif-d tracking-[0.18em] text-[1.7rem]" },
];

const Cell = ({ b, i }) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7, delay: (i % 4) * 0.08 }}
    data-testid={`brand-${b.n.toLowerCase().replace(/\s/g, "-")}`}
    className="group relative h-28 md:h-36 flex items-center justify-center border-r border-b border-[var(--blush)]/25 overflow-hidden cursor-default"
  >
    <span className="absolute inset-0 bg-[var(--blush)] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
    <span className={`relative text-xl md:text-2xl whitespace-nowrap text-[var(--blush)] group-hover:text-[var(--red)] transition-colors duration-500 ${b.c}`}>{b.n}</span>
  </motion.div>
);

export default function Collaborations() {
  return (
    <section id="collaborations" data-testid="collaborations-section" className="bg-[var(--red)] text-[var(--blush)] py-24 md:py-36">
      <div className="max-w-[1400px] mx-auto px-6 md:px-14">
        <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p className="label mb-6 text-[var(--rose)]">Collaborations</p>
            <h2 className="font-serif-d text-5xl sm:text-6xl lg:text-7xl leading-none">Brands I've <em className="text-[var(--rose)]">created</em> with.</h2>
          </div>
          <p className="max-w-sm text-[var(--blush)]/80 leading-relaxed">Campaigns, product launches and UGC across fashion, beauty, lifestyle and F&B.</p>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-4 border-t border-l border-[var(--blush)]/25" data-testid="brands-grid">
          {BRANDS.map((b, i) => <Cell key={b.n} b={b} i={i} />)}
        </div>
        <Reveal className="mt-12 flex flex-wrap gap-x-10 gap-y-3 label text-[var(--blush)]/80" data-testid="collab-stats">
          <span><b className="font-serif-d text-3xl normal-case tracking-normal text-white mr-2">2+</b>Years</span>
          <span><b className="font-serif-d text-3xl normal-case tracking-normal text-white mr-2">16+</b>Brands</span>
          <span className="self-center">Fashion · Beauty · Lifestyle · F&B · Retail</span>
        </Reveal>
      </div>
    </section>
  );
}
