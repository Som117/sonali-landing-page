import { motion } from "framer-motion";
import { Reveal } from "./Reveal";

const STEPS = [
  ["Research", "Understanding the brand, target audience, competitors and current social media trends."],
  ["Strategy", "Developing content pillars, campaign ideas and a consistent social media direction."],
  ["Creation", "Producing visually engaging Reels, Stories, posts and promotional content."],
  ["Execution", "Publishing and promoting content while maintaining consistency with the brand's identity."],
  ["Engagement", "Building meaningful audience interaction through relevant and relatable content."],
  ["Optimisation", "Understanding content performance and using insights to improve future campaigns."],
];

const Step = ({ title, text, i }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
    className="group grid grid-cols-[70px_1fr] md:grid-cols-[120px_1fr_1.4fr] gap-x-6 gap-y-2 items-baseline py-9 border-b border-[var(--dusty)]/60"
    data-testid={`approach-step-${i + 1}`}
  >
    <span className="font-serif-d italic text-4xl md:text-5xl text-[var(--red)]">0{i + 1}</span>
    <h3 className="font-serif-d text-3xl md:text-4xl text-[var(--deep)] transition-transform duration-500 group-hover:translate-x-2">{title}</h3>
    <p className="col-start-2 md:col-start-3 text-[var(--cocoa)] leading-relaxed">{text}</p>
  </motion.div>
);

export default function Approach() {
  return (
    <section id="approach" data-testid="approach-section" className="bg-[var(--blush-deep)] py-28 md:py-40">
      <div className="max-w-[1200px] mx-auto px-6 md:px-14">
        <Reveal className="mb-14">
          <p className="label mb-6 text-[var(--red)]">Approach</p>
          <h2 className="font-serif-d text-5xl sm:text-6xl lg:text-7xl leading-none text-[var(--deep)]">Creative-first, <em>audience-focused.</em></h2>
        </Reveal>
        <div className="border-t border-[var(--dusty)]/60">
          {STEPS.map(([t, d], i) => <Step key={t} title={t} text={d} i={i} />)}
        </div>
        <Reveal className="mt-24 bg-[var(--wine)] text-[var(--blush)] p-10 sm:p-16 lg:p-20" data-testid="approach-statement">
          <p className="font-serif-d italic text-3xl sm:text-4xl lg:text-5xl leading-tight max-w-4xl">
            “Creating content is not just about being visible — it is about creating an identity that people <span className="text-[var(--rose)]">remember.</span>”
          </p>
          <p className="label mt-8 text-[var(--rose)]">— Sonalii</p>
        </Reveal>
      </div>
    </section>
  );
}
