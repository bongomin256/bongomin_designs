import { TbWorldWww } from "react-icons/tb";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#15252d] py-[3.75rem] px-[1.5rem] md:px-[2rem] lg:px-[8.063rem]">
      <section>
        <section className="flex items-center gap-12 flex-col w-full md:flex-row md:justify-between md:items-start ">
          <div>
            <div>
              <p>Bongomin Designs</p>
            </div>
            <div className="mt-8 text-center font-navFont font-semibold text-base1 md:text-left">
              <p className="mb-2">
                <span className="text-cta-pri">Phone:</span> 4253950516
              </p>
              <p>
                <span className="text-cta-pri">Email:</span> info@domain.com
              </p>
            </div>
            <div className="flex justify-between text-cta-pri mt-5">
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <TbWorldWww size={32} />
              </a>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={32} />
              </a>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={32} />
              </a>

              <a href="http://" target="_blank" rel="noopener noreferrer">
                <FaGithub size={32} />
              </a>
            </div>
          </div>
          <ul className="flex flex-col text-center gap-6 text-base1 md:text-end lg:flex-row">
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Contact Us</li>
          </ul>
        </section>
        <section className="flex flex-col text-center gap-8 text-base1 font-thin mt-12 lg:flex-row-reverse justify-between lg:text-left">
          <div className="flex justify-between">
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <p>Terms & Conditions</p>
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <p>Privacy Policy</p>
            </a>
          </div>
          <p>2024 Company Name. All rights reserved</p>
        </section>
      </section>
    </footer>
  );
};

export default Footer;
