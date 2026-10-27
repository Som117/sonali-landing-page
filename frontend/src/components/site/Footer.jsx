import { ArrowUpRight, Instagram } from "lucide-react";
import { Reveal, Heart } from "./Reveal";

const LINKS = [["About", "#about"], ["Collaborations", "#collaborations"], ["Work", "#work"], ["Approach", "#approach"], ["Contact", "#contact"]];

export default function Footer() {
  return (
    <footer data-testid="site-footer" className="bg-[var(--deep)] text-[var(--blush)] pt-28 pb-10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-14">
        <Reveal>
          <p className="label text-[var(--dusty)] mb-8">Let's talk</p>
          <h2 className="font-serif-d text-5xl sm:text-7xl lg:text-[7.5rem] leading-[0.92] tracking-[-0.02em]" data-testid="footer-headline">
            Let's create something <em className="text-[var(--rose)]">impactful.</em>
          </h2>
          <div className="mt-14 flex flex-wrap gap-4">
            <a href="mailto:Work.Whyynotsonali@gmail.com" data-testid="footer-email-btn" className="group inline-flex items-center gap-4 bg-[var(--rose)] text-[var(--deep)] rounded-full px-8 py-4 label hover:bg-white transition-colors duration-300">
              Email me <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a href="https://instagram.com/whyynotsonalii" target="_blank" rel="noreferrer" data-testid="footer-instagram-btn" className="inline-flex items-center gap-3 border border-[var(--rose)]/50 rounded-full px-8 py-4 label hover:border-[var(--rose)] transition-colors duration-300">
              <Instagram className="w-4 h-4" strokeWidth={1.4} /> @whyynotsonalii
            </a>
          </div>
        </Reveal>

        <div className="mt-28 pt-10 border-t border-[var(--rose)]/20 grid md:grid-cols-3 gap-10 items-start">
          <div>
            <p className="tracking-[0.45em] text-[15px]">SONALI</p>
            <p className="text-sm text-[var(--dusty)] mt-3">UGC Creator · Digital Marketing · Content Strategy</p>
          </div>
          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {LINKS.map(([l, h]) => (
              <a key={h} href={h} className="label link-underline text-[var(--rose)]" data-testid={`footer-link-${l.toLowerCase()}`}>{l}</a>
            ))}
          </nav>
          <div className="md:text-right text-sm text-[var(--dusty)] space-y-2">
            <p>Based in Pune, India</p>
            <p className="inline-flex items-center gap-2" data-testid="footer-copyright">© 2026 Sonalii · made with <Heart className="w-4 h-4 text-[var(--rose)]" /></p>
          </div>
        </div>
      </div>
    </footer>
  );
}
