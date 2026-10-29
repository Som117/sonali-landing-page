import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="site-nav"
      className={`fixed top-0 inset-x-0 z-50 transition-[background-color,box-shadow] duration-500 ${
        scrolled || open ? "bg-s-pearl/85 backdrop-blur-md shadow-[0_1px_0_#f2c1cb]" : ""
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-14 h-[72px] flex items-center justify-between">
        <a href="#top" data-testid="nav-logo" className="tracking-[0.45em] text-[15px] font-normal">SONALI</a>
        <nav className="hidden md:flex gap-14">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} data-testid={`nav-link-${l.label.toLowerCase()}`} className="label link-underline hover:text-[var(--red)] transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <button className="md:hidden" onClick={() => setOpen(!open)} data-testid="nav-menu-toggle" aria-label="Menu">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden px-6 pb-8 flex flex-col gap-6" data-testid="mobile-menu">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} data-testid={`mobile-nav-${l.label.toLowerCase()}`} className="font-serif-d text-3xl">
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
