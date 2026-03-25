import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Lenis from "lenis";
import gsap from "gsap";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Home from "./pages/Home";
import About from "./pages/About";
import ProgramsDetailed from "./pages/ProgramsDetailed";
import DonatePage from "./pages/DonatePage";
import Stories from "./pages/Stories";
import Leaders from "./pages/Leaders";
import Newsroom from "./pages/Newsroom";
import Timeline from "./pages/Timeline";
import Dashboard from "./pages/Dashboard";
import Footer from "./components/Footer";

// ScrollToTop component to handle route changes with Lenis
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Root layout that includes Hero only on home page
const Layout = ({ children }) => {
  const { pathname } = useLocation();
  const contentRef = React.useRef(null);

  useEffect(() => {
    gsap.fromTo(contentRef.current,
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    );
  }, [pathname]);

  return (
    <div className="min-h-screen bg-neutral-bg">
      <Header />
      {pathname === "/" && <Hero />}
      <div ref={contentRef}>
        {children}
      </div>
      <Footer />
    </div>
  );
};

function App() {
  useEffect(() => {
    // Initialize Smooth Scrolling (Lenis)
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<ProgramsDetailed />} />
          <Route path="/donate" element={<DonatePage />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/leaders" element={<Leaders />} />
          <Route path="/news" element={<Newsroom />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
