import { Reveal } from "./Reveal";

// Sample testimonials — replace with real reviews.
const REVIEWS = [
  { q: "Her reels felt like a friend recommending our product, not an ad. Engagement was well above our usual creator benchmarks.", n: "Priya M.", r: "Marketing Lead, Skincare D2C brand" },
  { q: "Sonalii understood the brief instantly and came back with ideas we hadn't even thought of. Smooth, professional and on time.", n: "Rohan K.", r: "Brand Manager, Fashion label" },
  { q: "Warm, creative and really easy to work with. The content looked beautiful and felt completely natural on her feed.", n: "Aisha D.", r: "Founder, Café & Bakery, Pune" },
];

export default function KindWords() {
  return (
    <section id="kind-words" data-testid="kind-words-section" className="bg-[var(--strawberry)] py-28 md:py-40">
      <div className="max-w-[1400px] mx-auto px-6 md:px-14">
        <Reveal className="mb-20">
          <p className="label mb-6 text-[var(--wine)]">Kind words</p>
          <h2 className="font-serif-d text-5xl sm:text-6xl leading-none text-[var(--choc)]">What brands <em>say.</em></h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-14 md:gap-10">
          {REVIEWS.map((r, i) => (
            <Reveal key={r.n} delay={i * 0.12} className={i === 1 ? "md:mt-16" : ""} data-testid={`review-${i}`}>
              <span className="font-serif-d text-8xl leading-none text-[var(--wine)]">“</span>
              <p className="font-serif-d text-2xl lg:text-[1.75rem] leading-snug -mt-6 text-[var(--choc)]">{r.q}</p>
              <div className="mt-8 pt-5 border-t border-[#d98c8e]">
                <p className="label text-[var(--wine)]">{r.n}</p>
                <p className="text-sm text-s-choc/75 mt-1">{r.r}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="label text-[9px] mt-16 text-s-choc/60" data-testid="reviews-sample-note">* Sample reviews — to be replaced with real client feedback</p>
      </div>
    </section>
  );
}
