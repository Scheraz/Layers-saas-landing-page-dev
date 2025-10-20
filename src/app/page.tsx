import Features from "@/sections/Features";
import Hero from "@/sections/Hero";
import Integrations from "@/sections/Integrations";
import Introduction from "@/sections/Introduction";
import LogoTicker from "@/sections/LogoTicker";
import Navbar from "@/sections/Navbar";
import Faq from "@/sections/Faqs";
import CallToAction from "@/sections/CallToAction";
import Footer from "@/sections/Footer";

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <LogoTicker />
            <Introduction />
            <Features />
            <Integrations />
            <Faq />
            <CallToAction />
            <Footer />
        </>
    );
}
