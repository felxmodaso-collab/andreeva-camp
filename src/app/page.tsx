import Hero from "@/sections/Hero";
import Ticker from "@/components/Ticker";
import Why from "@/sections/Why";
import Program from "@/sections/Program";
import Exclusive from "@/sections/Exclusive";
import Coach from "@/sections/Coach";
import Location from "@/sections/Location";
import VideoTestimonials from "@/sections/VideoTestimonials";
import SvetlanaQuote from "@/sections/SvetlanaQuote";
import Pricing from "@/sections/Pricing";
import FAQ from "@/sections/FAQ";
import CTAFinal from "@/sections/CTAFinal";
import Footer from "@/sections/Footer";
import StickyBookMobile from "@/components/StickyBookMobile";
import Schema from "@/components/Schema";

export default function Page() {
  return (
    <>
      <Schema />
      <main className="relative">
        <Hero />
        <Ticker />
        <Why />
        <Program />
        <Exclusive />
        <Coach />
        <Location />
        <VideoTestimonials />
        <SvetlanaQuote />
        <Pricing />
        <FAQ />
        <CTAFinal />
      </main>
      <Footer />
      <StickyBookMobile />
    </>
  );
}
