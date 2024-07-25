import "./App.css";
import Dishes from "./components/Dishes";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Mission from "./components/Mission";

function App() {
  return (
    <>
      <main className="overflow-y-hidden text-neutral-200 antialiased bg-black">
        <HeroSection />
        <Navbar />
        <Dishes />
        <About />
        <Mission />
      </main>
    </>
  );
}

export default App;
