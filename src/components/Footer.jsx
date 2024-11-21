// import { useState, useEffect } from "react";

import logo from "../assets/logoNew.png";

import { TbWorldWww } from "react-icons/tb";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  // const [navLink, setNavLink] = useState([]);
  // const [activeNav, setActiveNav] = useState("#home");

  // useEffect(() => {
  //   fetch("/data.json")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setNavLink(data.navLinks);
  //     });
  // }, []);

  // const activeNavBar = (navLink) => {
  //   console.log(navLink);
  //   setActiveNav(navLink);
  // };

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
            <div className="mt-8 text-center font-navFont text-base1 md:text-left">
              <p className="mb-2">
                {/* <span className="text-cta-pri">Phone:</span>  */}
                <a href="tel:+14253950516">4253950516</a>
              </p>
              <p>
                {/* <span className="mr-1 text-cta-pri">Email:</span> */}
                <a href="mailto:bongominwebsolutions@gmail.com">
                  bongominwebsolutions@gmail.com
                </a>
              </p>
            </div>

            <div className="flex justify-between mt-5 text-cta-pri lg:gap-7 lg:justify-start">
              <a
                href="https://bongominwebsolutions.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TbWorldWww size={32} />
              </a>
              <a
                href="https://www.linkedin.com/company/bongomin-web-solutions/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={32} />
              </a>
              {/* <a href="http://" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={32} />
              </a> */}

              <a
                href="https://github.com/bongomin256"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={32} />
              </a>
            </div>
          </div>
          {/* <ul className="flex flex-col gap-6 text-center cursor-pointer text-base1 md:text-end lg:flex-row">
            {navLink.map((link) => (
              <li
                key={link.label}
                className={`${
                  activeNav === link.href
                    ? "text-white font-semibold"
                    : "text-body-text"
                }`}
                onClick={() => activeNavBar(link.href)}
              >
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul> */}
          <ul className="flex flex-col gap-6 text-center cursor-pointer text-base1 md:text-end lg:flex-row">
            <li className="hover:text-white">
              <a href="#home">Home</a>
            </li>
            <li className="hover:text-white">
              <a href="#aboutus">About Us</a>
            </li>
            <li className="hover:text-white">
              <a href="#services">Services</a>
            </li>
            <li className="hover:text-white">
              <a href="#portfolio">Portfolio</a>
            </li>
            <li className="hover:text-white">
              <a href="#testimonial">Testimonial</a>
            </li>
            <li className="hover:text-white">
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
          <p>
            &copy; {new Date().getFullYear()} Bongomin Web Solutions. All rights
            reserved
          </p>
        </section>
      </section>
    </footer>
  );
};

export default Footer;
