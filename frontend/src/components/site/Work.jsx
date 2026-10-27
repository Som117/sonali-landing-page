import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { Reveal } from "./Reveal";

// Swap `img` with real photos/reel covers later; tiles without img show a placeholder.
const ITEMS = [
  { tag: "Lifestyle · Reel", img: "/img/floral.jpeg", reel: true },
  { tag: "Beauty · Reel", reel: true, offset: true },
  { tag: "Portrait · Campaign", img: "/img/hero.jpg" },
  { tag: "Fashion · Reel", reel: true, offset: true },
  { tag: "Skincare · UGC" },
  { tag: "F&B · Reel", reel: true, offset: true },
  { tag: "Event · Story", reel: true },
  { tag: "Fashion · Campaign", offset: true },
];

const Tile = ({ item, i }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ duration: 0.9, delay: (i % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
    whileHover={{ y: -8 }}
    className={`group ${item.offset ? "md:mt-20" : ""}`}
    data-testid={`work-tile-${i}`}
  >
    <div className={`relative overflow-hidden ${item.reel ? "aspect-[9/16]" : "aspect-[4/5]"} ${item.img ? "" : "placeholder-tile"}`}>
      {item.img ? (
        <img src={item.img} alt={item.tag} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center font-serif-d italic text-2xl text-[var(--dusty)]">coming soon</div>
      )}
      {item.reel && (
        <span className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/70 backdrop-blur flex items-center justify-center">
          <Play className="w-3.5 h-3.5 text-[var(--red)] fill-[var(--red)]" />
        </span>
      )}
    </div>
    <p className="label text-[10px] mt-4 text-[var(--cocoa)]">{item.tag}</p>
  </motion.div>
);

export default function Work() {
  return (
    <section id="work" data-testid="work-section" className="bg-[var(--blush)] py-28 md:py-40">
      <div className="max-w-[1400px] mx-auto px-6 md:px-14">
        <Reveal className="flex flex-col md:flex-row justify-between md:items-end gap-6 mb-20">
          <div>
            <p className="label mb-6 text-[var(--red)]">Selected work</p>
            <h2 className="font-serif-d text-5xl sm:text-6xl lg:text-7xl leading-none text-[var(--deep)]">Stop. Watch. <em>Remember.</em></h2>
          </div>
          <a href="https://instagram.com/whyynotsonalii" target="_blank" rel="noreferrer" className="label link-underline self-start md:self-end hover:text-[var(--red)] transition-colors" data-testid="work-instagram-link">
            More on Instagram →
          </a>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8 items-start">
          {ITEMS.map((item, i) => <Tile key={i} item={item} i={i} />)}
        </div>
      </div>
    </section>
  );
}
