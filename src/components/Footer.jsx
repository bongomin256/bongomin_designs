import logo from "../assets/logoNew.png";

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
              <img
                src={logo}
                alt="logo"
                className="w-[7.5rem] m-auto cursor-pointer md:m-0  lg:w-[12.5rem] h-[]"
              />
            </div>
            <div className="mt-8 font-semibold text-center font-navFont text-base1 md:text-left">
              <p className="mb-2">
                <span className="text-cta-pri">Phone:</span> 4253950516
              </p>
              <p>
                <span className="mr-1 text-cta-pri">Email:</span>
                <a href="mailto:info@domain.com">info@domain.com</a>
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
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#aboutus">About Us</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#testimonial">Testimonial</a>
            </li>
            <li>
              <a href="#contactus">Contact Us</a>
            </li>
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
          <p>2024 Bongomin Web Solution. All rights reserved</p>
        </section>
      </section>
    </footer>
  );
};

export default Footer;
