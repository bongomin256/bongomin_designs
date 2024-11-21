import SectionLayout from "../layouts/SectionLayout";
import Button from "./Buttons";
import aboutImg from "../assets/about.png";

const AboutUsHome = () => {
  return (
    <SectionLayout>
      <section className="flex flex-col lg:flex-row-reverse lg:items-center">
        <div className="z-10 lg:flex-1 lg:absolute lg:w-2/4">
          {/* className="mb-[4.688rem]" */}
          <h2 className="mb-5 text-center uppercase text-heading-text text-heading2-sm tracking-sm font-headerFonts md:text-heading1-md md:tracking-md lg:text-heading1-lg lg:text-left">
            about us
          </h2>
          <div className="text-center lg:text-justify">
            <p className="mb-5 leading-7 text-base2 md:mb-7">
              We are the Bongonmin Consulting Group– a dedicated team of tech
              enthusiasts, creatives, and problem solvers passionate about
              shaping the digital future. we believe in the transformative power
              of web development, and our mission is to seamlessly blend
              innovation with functionality.
            </p>
            <p className="mb-5 leading-7 text-base2 md:mb-7">
              Experience the synergy of creativity and technology at BC where
              our team is committed to delivering impactful and innovative web
              solutions
            </p>
            {/* <div className="lg:text-right">
              <Button>Learn more</Button>
            </div> */}
          </div>
        </div>
        <div className="opacity-25 mt-[-9rem] md:mt-[-2rem] lg:flex-1 lg:mt-0">
          <img src={aboutImg} alt="" />
        </div>
      </section>
    </SectionLayout>
  );
};

export default AboutUsHome;
