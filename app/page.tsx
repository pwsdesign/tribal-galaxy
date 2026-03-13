import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Offerings from "./components/Offerings";
import Classes from "./components/Classes";
import Ceremonies from "./components/Ceremonies";
import Community from "./components/Community";
import Booking from "./components/Booking";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      {/* Star field */}
      <div style={{
        position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none",
        background: `
          radial-gradient(ellipse at 20% 50%, rgba(42,138,122,0.05) 0%, transparent 60%),
          radial-gradient(ellipse at 80% 20%, rgba(201,168,76,0.04) 0%, transparent 50%),
          radial-gradient(ellipse at 60% 80%, rgba(139,32,53,0.03) 0%, transparent 50%)
        `,
      }} />
      <Nav />
      <main style={{ position: "relative", zIndex: 1 }}>
        <Hero />
        <About />
        <Offerings />
        <Classes />
        <Ceremonies />
        <Community />
        <Booking />
      </main>
      <Footer />
    </>
  );
}
