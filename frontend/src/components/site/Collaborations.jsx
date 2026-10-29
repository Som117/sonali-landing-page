import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";
import { Reveal } from "./Reveal";

// Brands without a logo file render as a serif wordmark — drop a file in /public/logos and add `logo`.
const BRANDS = [
  { name: "NEWME", logo: "newme.png", cat: "Fashion" },
  { name: "Littlebox", logo: "littlebox.png", cat: "Fashion" },
  { name: "Yousta", cat: "Fashion" },
  { name: "Plum", logo: "plum.svg", cat: "Skincare" },
  { name: "Nykaa", logo: "nykaa.svg", cat: "Beauty" },
  { name: "Lakmé", logo: "lakme.png", cat: "Beauty", dark: true },
  { name: "Starbucks", logo: "starbucks.svg", cat: "F&B" },
  { name: "Toscano", logo: "toscano.webp", cat: "Dining" },
  { name: "OPPO", logo: "oppo.svg", cat: "Tech" },
  { name: "Myntra", logo: "myntra.svg", cat: "Fashion" },
  { name: "AJIO", logo: "ajio.svg", cat: "Fashion" },
  { name: "Zouk", logo: "zouk.webp", cat: "Accessories" },
  { name: "MINISO", logo: "miniso.png", cat: "Lifestyle" },
  { name: "UNIQLO", logo: "uniqlo.svg", cat: "Fashion" },
  { name: "Bastian", cat: "Dining" },
  { name: "Stone Wood", cat: "Lifestyle" },
];

const Highlight = ({ b, i }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.7 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, margin: "-30px" }}
    transition={{ duration: 0.6, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
    className="group flex flex-col items-center gap-2.5 cursor-default"
    data-testid={`brand-${b.name.toLowerCase().replace(/\s|é/g, (m) => (m === "é" ? "e" : "-"))}`}
  >
    <div className="relative w-[68px] h-[68px] sm:w-24 sm:h-24 rounded-full p-[3px] overflow-hidden">
      <span className="absolute inset-[-50%] bg-[conic-gradient(from_0deg,#be1e2d,#f0b6c3,#6e0f1f,#e88aa0,#be1e2d)] group-hover:animate-[spin_3s_linear_infinite]" />
      <div className="relative w-full h-full rounded-full bg-white border-[3px] border-[var(--pearl)] flex items-center justify-center overflow-hidden group-hover:scale-[0.97] transition-transform duration-300">
        {b.logo ? (
          <img src={`/logos/${b.logo}`} alt={`${b.name} logo`} loading="lazy" className={`max-w-[80%] max-h-[62%] object-contain ${b.dark ? "brightness-0" : ""}`} />
        ) : (
          <span className="font-serif-d italic text-[13px] sm:text-lg text-[#6e0f1f] text-center leading-none px-1">{b.name}</span>
        )}
      </div>
    </div>
    <p className="text-[11px] sm:text-xs text-[#6e0f1f] leading-none">{b.name}</p>
    <p className="label text-[8px] text-[#c66a84] -mt-1 opacity-0 group-hover:opacity-100 transition-opacity">{b.cat}</p>
  </motion.div>
);

const Stat = ({ n, label }) => (
  <div className="text-center">
    <p className="font-serif-d text-2xl sm:text-3xl leading-none text-[#6e0f1f]">{n}</p>
    <p className="text-[10px] sm:text-xs mt-1 text-[#9a4656]">{label}</p>
  </div>
);

const ProfileCard = () => (
  <Reveal delay={0.1} className="bg-[var(--pearl)] rounded-[28px] p-6 sm:p-10 shadow-[0_40px_80px_-40px_rgba(0,0,0,0.55)]" data-testid="collab-profile-card">
    <div className="flex items-center gap-5 sm:gap-8">
      <div className="w-20 h-20 sm:w-28 sm:h-28 shrink-0 rounded-full p-[3px] bg-[conic-gradient(#be1e2d,#f0b6c3,#6e0f1f,#be1e2d)]">
        <img src="/img/hero.jpg" alt="Sonalii" className="w-full h-full rounded-full object-cover object-top border-[3px] border-[var(--pearl)]" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="flex items-center gap-1.5 text-[#6e0f1f] font-medium text-sm sm:text-base">whyynotsonalii <BadgeCheck className="w-4 h-4 text-[#be1e2d]" /></p>
        <div className="mt-3 flex justify-between sm:justify-start sm:gap-12" data-testid="collab-stats">
          <Stat n="16+" label="brands" />
          <Stat n="2+" label="years" />
          <Stat n="15" label="categories" />
        </div>
      </div>
    </div>
    <div className="mt-6 flex items-center gap-4">
      <span className="label text-[9px] text-[#9a4656] whitespace-nowrap">Collab highlights</span>
      <span className="flex-1 h-px bg-s-dusty/50" />
    </div>
    <div className="mt-6 grid grid-cols-4 gap-x-3 gap-y-4 sm:gap-x-6" data-testid="brands-list">
      {BRANDS.map((b, i) => <Highlight key={b.name} b={b} i={i} />)}
    </div>
  </Reveal>
);

export default function Collaborations() {
  return (
    <section id="collaborations" data-testid="collaborations-section" className="bg-[#6e0f1f] py-24 md:py-36 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-5 md:px-14 grid lg:grid-cols-[0.8fr_1fr] gap-14 lg:gap-20 items-center">
        <Reveal>
          <p className="label text-[#e88aa0] mb-8 flex items-center gap-4"><span className="w-10 h-px bg-[#e88aa0]" />Collaborations</p>
          <h2 className="font-serif-d text-5xl sm:text-6xl lg:text-7xl leading-[0.95] text-[var(--pearl)]">
            Brands I've <em className="text-[#e88aa0]">created</em> with.
          </h2>
          <p className="mt-8 max-w-sm text-s-pearl/80 leading-relaxed">
            Every circle is a paid partnership, from national beauty and fashion labels to Pune's favourite tables.
          </p>
          <p className="mt-10 label text-[10px] leading-[2.2] text-s-pearl/60">Fashion · Beauty · Skincare · F&B · Tech · Lifestyle · Dining</p>
        </Reveal>
        <ProfileCard />
      </div>
    </section>
  );
}
