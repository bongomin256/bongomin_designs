import logo from "../assets/Bongomin.png";

import { TbWorldWww } from "react-icons/tb";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#15252d] py-[3.75rem] px-[1.5rem] md:px-[2rem] lg:px-[8.063rem]">
      <section>
        <section className="flex flex-col items-center w-full gap-12 md:flex-row md:justify-between md:items-start ">
          <div>
            <div>
              {/* <p>Bongomin Designs</p> */}
              <img src={logo} alt="logo" className="w-[216px] h-[65px]" />
            </div>
            <div className="mt-8 font-semibold text-center font-navFont text-base1 md:text-left">
              <p className="mb-2">
                <span className="text-cta-pri">Phone:</span> 4253950516
              </p>
              <p>
                <span className="text-cta-pri">Email:</span> info@domain.com
              </p>
            </div>
            <div className="flex justify-between mt-5 text-cta-pri">
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
          <ul className="flex flex-col gap-6 text-center text-base1 md:text-end lg:flex-row">
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Contact Us</li>
          </ul>
        </section>
        <section className="flex flex-col justify-between gap-8 mt-12 font-thin text-center text-base1 lg:flex-row-reverse lg:text-left">
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
