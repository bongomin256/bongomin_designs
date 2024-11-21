import SectionLayout from "../layouts/SectionLayout";

import { AiOutlineMail } from "react-icons/ai";
import { FaPhone } from "react-icons/fa";

import ContactForm from "./ContactForm";

const ContactUs = () => {
  return (
    <SectionLayout id="contactus">
      <section className="lg:w-[655px] md:m-auto">
        <div className="mb-10">
          <div className="flex items-center justify-center gap-3 text-center mb-[4.688rem] lg:mb-6">
            <span className=" w-[4.5rem] border-b border-cta-sec"></span>
            <h3 className="inline-block text-cta-sec text-heading3-sm font-headerFonts">
              Contact Us
            </h3>
            <span className=" w-[4.5rem] border-b border-cta-sec"></span>
          </div>
          <h2 className="text-center text-heading-text text-heading3-lg font-headerFonts md:text-left">
            Connect and collaborate with us and we build something Amazing
            together
          </h2>
        </div>
        <section>
          <div className="mb-10">
            <p className="flex items-center gap-4 mb-4 ">
              <span>
                <AiOutlineMail size={24} className="text-cta-sec" />
              </span>
              <a href="mailto:bongominwebsolutions@gmail.com">
                bongominwebsolutions@gmail.com
              </a>
            </p>
            <p className="flex items-center gap-4">
              <span>
                <FaPhone size={24} className="text-cta-sec" />
              </span>
              <a href="tel:+14253950516">4253950516</a>
            </p>
          </div>
          <ContactForm />
        </section>
      </section>
    </SectionLayout>
  );
};

export default ContactUs;
