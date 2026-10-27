import { Mail, Instagram, Phone, MapPin } from "lucide-react";
import { Reveal } from "./Reveal";
import EnquiryForm from "./EnquiryForm";

const OFFERS = ["Brand Campaigns", "UGC Campaigns", "Influencer Collaborations", "Product Launches", "Event Promotions", "Brand Awareness", "Social Media Campaigns", "Long-Term Partnerships"];
const CATEGORIES = "Fashion • Beauty • Lifestyle • Food & Beverage • Travel • Hospitality • Fitness • Events • Jewellery • Skincare • Personal Care • Retail • Local Businesses • Startups • D2C Brands";

const CONTACTS = [
  { icon: Mail, label: "Work.Whyynotsonali@gmail.com", href: "mailto:Work.Whyynotsonali@gmail.com", id: "email" },
  { icon: Instagram, label: "@whyynotsonalii", href: "https://instagram.com/whyynotsonalii", id: "instagram" },
  { icon: Phone, label: "+91 98765 43210", href: "tel:+919876543210", id: "phone" },
  { icon: MapPin, label: "Pune, India", id: "location" },
];

const ContactList = () => (
  <ul className="space-y-5 mt-12">
    {CONTACTS.map(({ icon: Icon, label, href, id }) => (
      <li key={id} className="flex items-center gap-4">
        <Icon className="w-4 h-4 text-[var(--red)]" strokeWidth={1.4} />
        {href ? (
          <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="link-underline hover:text-[var(--red)] transition-colors" data-testid={`contact-${id}`}>{label}</a>
        ) : (
          <span data-testid={`contact-${id}`}>{label}</span>
        )}
      </li>
    ))}
  </ul>
);

export default function HireMe() {
  return (
    <section id="contact" data-testid="hire-me-section" className="bg-[#fbeeec] py-28 md:py-40">
      <div className="max-w-[1400px] mx-auto px-6 md:px-14">
        <Reveal className="grid lg:grid-cols-[1.1fr_1fr] gap-12 mb-20">
          <div>
            <p className="label mb-6 text-[var(--red)]">Hire me</p>
            <h2 className="font-serif-d text-5xl sm:text-6xl lg:text-7xl leading-[0.98] text-[var(--deep)]">Why brands work <br />with <em>Sonalii.</em></h2>
          </div>
          <p className="text-[17px] leading-[1.9] text-[var(--choc)] self-end">
            I bring creator influence and digital marketing understanding together — so I look at every collaboration from both the creator's and the brand's side. Rather than simply promoting a product, I figure out how it should be presented, what content will connect, and how your brand can sit naturally inside the story. Great for one-time campaigns and long-term partnerships alike.
          </p>
        </Reveal>

        <Reveal className="flex flex-wrap gap-3 mb-8" data-testid="collab-offers">
          {OFFERS.map((o) => (
            <span key={o} className="border border-[var(--dusty)] rounded-full px-5 py-2 text-sm hover:bg-[var(--red)] hover:border-[var(--red)] hover:text-white transition-colors duration-300">{o}</span>
          ))}
        </Reveal>
        <p className="label leading-[2.2] text-[var(--cocoa)] max-w-4xl mb-24" data-testid="collab-categories">{CATEGORIES}</p>

        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-16 border-t border-[var(--dusty)]/60 pt-20">
          <Reveal>
            <h3 className="font-serif-d text-4xl sm:text-5xl text-[var(--deep)] leading-tight">Let's make <em>something</em> together.</h3>
            <p className="mt-6 text-[var(--cocoa)] leading-relaxed">Tell me about your brand and campaign — I usually reply within 48 hours.</p>
            <ContactList />
          </Reveal>
          <Reveal delay={0.15}><EnquiryForm /></Reveal>
        </div>
      </div>
    </section>
  );
}
