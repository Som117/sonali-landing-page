import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { ArrowRight, Loader2 } from "lucide-react";
import { Heart } from "./Reveal";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;
const TYPES = ["Brand Campaign", "UGC Campaign", "Influencer Collaboration", "Product Launch", "Event Promotion", "Brand Awareness Campaign", "Long-Term Partnership", "Other"];
const BUDGETS = ["Under ₹10,000", "₹10,000 – ₹25,000", "₹25,000 – ₹50,000", "₹50,000+", "Barter / Product only"];
const EMPTY = { name: "", company: "", email: "", collab_type: "", budget: "", message: "" };

const Field = ({ label, children }) => (
  <label className="block">
    <span className="label text-[10px] text-[var(--cocoa)]">{label}</span>
    {children}
  </label>
);

export default function EnquiryForm() {
  const [form, setForm] = useState(EMPTY);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(`${API}/enquiries`, { ...form, budget: form.budget || null });
      setSent(true);
      setForm(EMPTY);
    } catch (err) {
      const d = err.response?.data?.detail;
      toast.error(typeof d === "string" ? d : "Something went wrong. Please check the form or email directly.");
    } finally {
      setLoading(false);
    }
  };

  if (sent) {
    return (
      <div className="bg-[var(--blush)] p-12 md:p-16 text-center" data-testid="enquiry-success">
        <Heart className="w-10 h-10 mx-auto text-[var(--red)]" />
        <h4 className="font-serif-d text-4xl mt-6 text-[var(--deep)]">Thank you <em>so much.</em></h4>
        <p className="mt-4 text-[var(--cocoa)]">Your enquiry is in Sonalii's inbox — she'll be in touch soon.</p>
        <button onClick={() => setSent(false)} className="label mt-10 link-underline" data-testid="enquiry-send-another-btn">Send another</button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="grid sm:grid-cols-2 gap-x-10 gap-y-8" data-testid="enquiry-form">
      <Field label="Your name *"><input required className="field" value={form.name} onChange={set("name")} placeholder="Ananya Sharma" data-testid="enquiry-name-input" /></Field>
      <Field label="Brand / company *"><input required className="field" value={form.company} onChange={set("company")} placeholder="Your brand" data-testid="enquiry-company-input" /></Field>
      <Field label="Email *"><input required type="email" className="field" value={form.email} onChange={set("email")} placeholder="you@brand.com" data-testid="enquiry-email-input" /></Field>
      <Field label="Collaboration type *">
        <select required className="field cursor-pointer" value={form.collab_type} onChange={set("collab_type")} data-testid="enquiry-type-select">
          <option value="" disabled>Choose one</option>
          {TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
        </select>
      </Field>
      <Field label="Budget range (optional)">
        <select className="field cursor-pointer" value={form.budget} onChange={set("budget")} data-testid="enquiry-budget-select">
          <option value="">Prefer not to say</option>
          {BUDGETS.map((b) => <option key={b} value={b}>{b}</option>)}
        </select>
      </Field>
      <div className="hidden sm:block" />
      <div className="sm:col-span-2">
        <Field label="Tell me about the campaign *">
          <textarea required minLength={5} rows={4} className="field resize-none" value={form.message} onChange={set("message")} placeholder="Product, timelines, deliverables…" data-testid="enquiry-message-input" />
        </Field>
      </div>
      <button
        type="submit"
        disabled={loading}
        data-testid="enquiry-submit-btn"
        className="group sm:col-span-2 justify-self-start inline-flex items-center gap-5 bg-[var(--red)] hover:bg-[var(--wine)] text-white rounded-full px-10 py-4 label transition-colors duration-300 disabled:opacity-60"
      >
        {loading ? "Sending" : "Send enquiry"}
        {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" strokeWidth={1.4} />}
      </button>
    </form>
  );
}
