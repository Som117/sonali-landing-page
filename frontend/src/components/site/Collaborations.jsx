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

const Row = ({ hidden }) => (
  <div className="flex items-center gap-20 pr-20 shrink-0" aria-hidden={hidden}>
    {BRANDS.map((b) => (
      <span
        key={b.n}
        data-testid={hidden ? undefined : `brand-${b.n.toLowerCase().replace(/\s/g, "-")}`}
        className={`text-2xl whitespace-nowrap text-[var(--cocoa)]/60 hover:text-[var(--red)] transition-colors duration-300 cursor-default ${b.c}`}
      >
        {b.n}
      </span>
    ))}
  </div>
);

export default function Collaborations() {
  return (
    <section id="collaborations" data-testid="collaborations-section" className="bg-[var(--blush-deep)] py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-14">
        <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p className="label mb-6 text-[var(--red)]">Collaborations</p>
            <h2 className="font-serif-d text-5xl sm:text-6xl leading-none text-[var(--deep)]">Brands I've <em>created</em> with.</h2>
          </div>
          <p className="max-w-sm text-[var(--cocoa)] leading-relaxed">Campaigns, product launches and UGC across fashion, beauty, lifestyle and F&B.</p>
        </Reveal>
      </div>
      <div className="marquee overflow-hidden border-y border-[var(--dusty)]/50 py-10" data-testid="brands-marquee">
        <div className="marquee-track flex w-max">
          <Row />
          <Row hidden />
        </div>
      </div>
      <Reveal className="max-w-[1400px] mx-auto px-6 md:px-14 mt-12 flex flex-wrap gap-x-10 gap-y-3 label text-[var(--cocoa)]" data-testid="collab-stats">
        <span><b className="font-serif-d text-3xl normal-case tracking-normal text-[var(--deep)] mr-2">2+</b>Years</span>
        <span><b className="font-serif-d text-3xl normal-case tracking-normal text-[var(--deep)] mr-2">16+</b>Brands</span>
        <span className="self-center">Fashion · Beauty · Lifestyle · F&B · Retail</span>
      </Reveal>
    </section>
  );
}
