/* eslint-disable react/prop-types */
import Button from "./Buttons";
const ServiceCard = ({ services, widthDefault }) => {
  return (
    <>
      {services.map((service, index) => (
        <section
          key={index}
          className="bg-pri-bg px-[1.563rem] py-[1.688rem] rounded-xl md:w-[21.313rem] lg:w-[17.438rem]"
        >
          <i className="">
            <img
              className="m-auto w-[2.813rem] h-[2.813rem]  mb-8"
              src={service.icon}
              alt={service.title}
            />
          </i>
          <h4 className="mb-4 text-center text-heading3-lg text-cta-sec font-headerFonts lg:text-left lg:text-[1.44rem]">
            {service.title}
          </h4>
          <div className="text-justify">
            <p className=" text-base2 leading-[157.2%] mb-4">
              {service.description}
            </p>
            {/* <Button widthDefault="w-full px-5 py-3">Request a quote</Button> */}
          </div>
        </section>
      ))}
    </>
  );
};

export default ServiceCard;
