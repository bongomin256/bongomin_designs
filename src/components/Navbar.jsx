import { useState } from "react";
// import { NavLink } from "react-router-dom";

// import logo from "../assets/Bongomin.png";
import logo from "../assets/logoNew.png";

import { FaBars } from "react-icons/fa6";
import { AiOutlineClose } from "react-icons/ai";
import Button from "./Buttons";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggleNavbar = () => {
    setOpen(!open);
    console.log(open);
  };

  const closeMobileNav = () => {
    if (open) {
      setOpen(false);
    }
  };
  return (
    <header className=" bg-[#15252d] sticky z-50 top-0 px-[1.5rem] md:px-[2rem] lg:px-[8.063rem] m-[0 auto]">
      {/* className="sticky z-50 px-[] md:w-[44rem] lg:w-[73.875rem] m-[0 auto]" */}
      <nav className="flex items-center justify-between py-3 md:py-4 lg:py-5">
        <a href="#home">
          {/* <h1>Bongoim Designs</h1> */}
          <img src={logo} alt="" className="w-[7.5rem] lg:w-[12.5rem] h-[]" />
          {/* w-[13.5rem] h-[4.063rem] */}
        </a>

        <div onClick={() => toggleNavbar()} className="lg:hidden">
          {open ? <AiOutlineClose size={36} /> : <FaBars size={36} />}
        </div>

        <ul
          className={`left-0 text-base1 cursor-pointer transition-all duration-500 delay-500 ease-in-out text-heading-text font-navFont font-semibold ${
            open
              ? "block absolute top-[100%] h-screen bg-pri-bg w-full  p-6"
              : "hidden"
          } lg:flex lg:items-center lg:gap-4 `}
          onClick={() => closeMobileNav()}
        >
          {/* <div
            className={`${
              open
                ? "block z-[1000] absolute top-0 right-0 left-0 text-red w-full"
                : "hidden"
            }`}
          ></div> */}
          {/* lg:flex lg:items-center lg:gap-4 lg:py-4` */}
          <li
            className={`hover:text-body-text transition-all duration-300 ease-in-out ${
              open ? "mb-4" : "p-4"
            } `}
          >
            <a href="#home">Home</a>
          </li>
          <li
            className={`hover:text-body-text transition-all duration-300 ease-in-out ${
              open ? "mb-4" : "p-4"
            } `}
          >
            <a href="#services">Services</a>
            {/* Services */}
          </li>
          {/* ${open ? "ml-6 pl-0 py-4  md:ml-8 md:pl-0 md:py-4 " : "p-4"}` */}
          {/* ${open ? "mb-4" : "p-4"}` */}
          <li
            className={`hover:text-body-text transition-all duration-300 ease-in-out ${
              open ? "mb-4" : "p-4"
            }
              `}
          >
            <a href="#portfolio">Portfolio</a>
            {/* Portfolio */}
          </li>
          <li
            className={`hover:text-body-text transition-all duration-300 ease-in-out ${
              open ? "mb-4" : "p-4"
            }
            `}
          >
            <a href="#testimonial">Testimonial</a>
            {/* Testimonial */}
          </li>
          <li
            className={`hover:text-body-text transition-all duration-300 ease-in-out ${
              open ? "mb-4" : "p-4"
            }
            `}
          >
            <a href="#contactus">Contact Us</a>
            {/* Contact Us */}
          </li>
          <Button>Get in touch</Button>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
