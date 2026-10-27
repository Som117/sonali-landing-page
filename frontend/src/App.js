import { MotionConfig } from "framer-motion";
import "@/App.css";
import { Toaster } from "@/components/ui/sonner";
import Nav from "@/components/site/Nav";
import Hero from "@/components/site/Hero";
import About from "@/components/site/About";
import Collaborations from "@/components/site/Collaborations";
import HireMe from "@/components/site/HireMe";
import Work from "@/components/site/Work";
import KindWords from "@/components/site/KindWords";
import Approach from "@/components/site/Approach";
import Footer from "@/components/site/Footer";

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="grain overflow-x-hidden" data-testid="landing-page">
        <Nav />
        <main>
          <Hero />
          <About />
          <Collaborations />
          <HireMe />
          <Work />
          <KindWords />
          <Approach />
        </main>
        <Footer />
        <Toaster position="bottom-center" />
      </div>
    </MotionConfig>
  );
}

export default App;
