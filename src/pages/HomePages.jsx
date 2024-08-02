import AboutUsHome from "../components/AboutUsHome";
import ContactUs from "../components/ContactUs";
import HeroSection from "../components/HeroSection";
import OurServiceHome from "../components/OurServiceHome";
import PortfolioHome from "../components/PortfolioHome";

const HomePages = () => {
  return (
    <>
      <section id="home">
        <HeroSection />
      </section>
      <section id="services">
        <OurServiceHome />
      </section>
      <section id="aboutus">
        <AboutUsHome />
      </section>
      <section id="portfolio">
        <PortfolioHome />
      </section>
      <section id="contactus">
        <ContactUs />
      </section>
    </>
  );
};

export default HomePages;
