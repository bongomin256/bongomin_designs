/* eslint-disable react/prop-types */

import data from "../../data.json";
import SectionLayout from "../layouts/SectionLayout";

import ServiceCard from "./ServiceCard";
const OurServiceHome = ({ bgDefault }) => {
  const services = data.ourServices;

  return (
    <SectionLayout bgDefault={"bg-white"}>
      <section>
        <div className="mb-[4.688rem]">
          <div className="flex items-center justify-center gap-3 mb-6 text-center">
            <span className=" w-[4.5rem] border-b border-cta-sec"></span>
            <h3 className="inline-block text-cta-sec text-heading3-sm font-headerFonts">
              Our Services
            </h3>
            <span className=" w-[4.5rem] border-b border-cta-sec"></span>
          </div>
          <h2 className="text-center text-heading-text text-heading2-sm font-headerFonts">
            What we bring to the table
          </h2>
        </div>
        {/* <div className="mb-[4.688rem]">
          <h3 className="mb-6 text-center text-cta-sec text-heading3-sm font-headerFonts">
            Our Services
          </h3>
          <h2 className="text-center text-heading-text text-heading2-sm font-headerFonts">
            What we bring to the table
          </h2>
        </div> */}
        <section className="flex flex-col justify-center gap-5 md:flex-row md:flex-wrap lg:flex-nowrap">
          <ServiceCard services={services} />
        </section>
      </section>
    </SectionLayout>
  );
};

export default OurServiceHome;
