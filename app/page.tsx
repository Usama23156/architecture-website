import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Properties from "@/components/Properties";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
    <Navbar />
    < Hero />
    <Properties />
    <Services />
    <About />
    <Contact />
    <Footer />
    <WhatsAppButton />
    </>
  );
}
