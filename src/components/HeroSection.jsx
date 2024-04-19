import heroImage from "../assets/hero.png";
import Button from "../components/Buttons";

const HeroSection = () => {
  return (
    <section className="px-[1.5rem] py-16 md:px-[2rem] lg:py-40 lg:px-[8.063rem]">
      <section className="flex flex-col lg:flex-row lg:gap-10 lg:items-center">
        <section className="z-10 text-center lg:text-left lg:basis-full ">
          <p className="text-heading1-sm font-headerFonts mb-7 md:text-heading1-lg">
            We help you turn your <span className="text-cta-pri">ideas</span>{" "}
            into a <span className="text-cta-pri">website</span>
          </p>
          <p className="text-base2 font-bodyFont mb-7 md:text-base1 md:leading-7">
            From talented web developers to creative designers and savy digital
            marketers, our team is equipped with the knowledge and experience to
            meet your unique requirements.
          </p>

          <Button>Request a Quote</Button>
        </section>
        <section className="mt-[-4rem] md:mt-[-4.5rem] lg:mt-0 lg:basis-full ">
          <img className="w-full" src={heroImage} alt="" />
        </section>
      </section>
    </section>
  );
};

export default HeroSection;
