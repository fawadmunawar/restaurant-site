import "./App.css";
import Dishes from "./components/Dishes";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Mission from "./components/Mission";
import Expertise from "./components/Expertise";
import Review from "./components/Review";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <main className="overflow-hidden text-neutral-200 antialiased bg-black">
        <HeroSection />
        <Navbar />
        <Dishes />
        <About />
        <Mission />
        <Expertise />
        <Review />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}

export default App;
