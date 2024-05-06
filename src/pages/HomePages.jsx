import AboutUsHome from "../components/AboutUsHome";
import ContactUs from "../components/ContactUs";
import HeroSection from "../components/HeroSection";
import OurServiceHome from "../components/OurServiceHome";
import PortfolioHome from "../components/PortfolioHome";

const HomePages = () => {
  return (
    <>
      <HeroSection />
      <OurServiceHome />
      <AboutUsHome />
      <PortfolioHome />
      <ContactUs />
    </>
  );
};

export default HomePages;
