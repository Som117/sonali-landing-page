import { motion } from "framer-motion";
import { Reveal } from "./Reveal";

// Sample testimonials — replace with real reviews.
const COLUMNS = [
  [
    { q: "Sonalii understood our brief better than our own deck did. The reel she delivered became our highest-performing asset of the quarter.", r: "Marketing Lead · D2C Beauty Label", bg: "bg-[#6e0f1f]", text: "text-[var(--pearl)]", mark: "text-[var(--strawberry)]", line: "bg-[var(--strawberry)]", big: true, rot: -1.2 },
    { q: "Effortless to work with, always ahead of deadline, and the content feels native to the platform rather than like an ad.", r: "Brand Manager · Fashion Retail", bg: "bg-[#f6d9de]", text: "text-[var(--choc)]", mark: "text-[var(--wine)]", line: "bg-[var(--wine)]", rot: 1.4 },
  ],
  [
    { q: "She brought a strategy to the table, not just a shoot. Our engagement on the campaign doubled against benchmark.", r: "Founder · Lifestyle Startup", bg: "bg-[#8e1a2f]", text: "text-[var(--pearl)]", mark: "text-[var(--strawberry)]", line: "bg-[var(--strawberry)]", rot: -1 },
    { q: "Genuine storytelling with a polished finish.", r: "Campaign Director · Hospitality Group", bg: "bg-[#c66a84]", text: "text-white", mark: "text-[var(--wine)]", line: "bg-[var(--wine)]", rot: 1.6 },
  ],
  [
    { q: "We briefed four creators for the launch. Hers was the only cut we shipped without a single revision round.", r: "Growth Marketer · Consumer Tech", bg: "bg-[#fbf8f6] border border-[#e6d3d3]", text: "text-[var(--choc)]", mark: "text-[var(--red)]", line: "bg-[var(--red)]", rot: -2 },
  ],
];

const Card = ({ c, i }) => (
  <motion.figure
    initial={{ opacity: 0, y: 40, rotate: 0 }}
    whileInView={{ opacity: 1, y: 0, rotate: c.rot }}
    whileHover={{ rotate: 0, y: -6 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
    className={`${c.bg} ${c.text} p-8 sm:p-10 ${c.big ? "lg:py-14" : ""} shadow-[0_22px_40px_-22px_rgba(110,15,31,0.45)]`}
    data-testid={`review-card-${i}`}
  >
    <span className={`font-['Georgia'] font-bold text-3xl leading-none ${c.mark}`}>“</span>
    <blockquote className={`font-serif-d mt-5 leading-snug ${c.big ? "text-3xl lg:text-[2.1rem]" : "text-2xl"}`}>{c.q}</blockquote>
    <figcaption className="mt-8 flex items-start gap-4">
      <span className={`w-8 h-px mt-[7px] shrink-0 ${c.line}`} />
      <span className="label text-[10px] leading-[1.8] opacity-90">{c.r}</span>
    </figcaption>
  </motion.figure>
);

const Squiggle = () => (
  <svg viewBox="0 0 300 20" className="w-56 lg:w-72 text-[#c66a84]" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M2 10 Q 14 0 26 10 T 50 10 T 74 10 T 98 10 T 122 10 T 146 10 T 170 10 T 194 10 T 218 10 T 242 10 T 266 10 T 290 10" />
  </svg>
);

export default function KindWords() {
  let n = 0;
  return (
    <section id="kind-words" data-testid="kind-words-section" className="bg-[#f2ece9] border-t-4 border-[var(--wine)] py-24 md:py-36">
      <div className="max-w-[1400px] mx-auto px-6 md:px-14">
        <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-20">
          <h2 className="font-serif-d text-5xl sm:text-6xl lg:text-7xl leading-none text-[var(--wine)]" data-testid="kind-words-title">
            What brands <em className="text-[#c66a84]">say</em>
          </h2>
          <Squiggle />
        </Reveal>
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10 items-start">
          {COLUMNS.map((col, ci) => (
            <div key={ci} className="flex flex-col gap-8 lg:gap-10">
              {col.map((c) => <Card key={c.r} c={c} i={n++} />)}
            </div>
          ))}
        </div>
        <p className="label text-[9px] mt-16 text-[var(--choc)]/60" data-testid="reviews-sample-note">* Sample reviews — to be replaced with real client feedback</p>
      </div>
    </section>
  );
}
