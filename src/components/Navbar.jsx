import { useState } from "react";
// import { NavLink } from "react-router-dom";

// import logo from "../assets/Bongomin.png";
import logo from "../assets/logoNew.png";

import { FaBars } from "react-icons/fa6";
import { AiOutlineClose } from "react-icons/ai";
import Button from "./Buttons";

const Navbar = () => {
  const links = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Testimonial", href: "#testimonal" },
    { label: "Contact Us", href: "#contactus" },
  ];
  const [open, setOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  const toggleNavbar = () => {
    setOpen(!open);
    console.log(open);
  };

  const closeMobileNav = () => {
    if (open) {
      setOpen(false);
    }
  };

  const activeNavBar = (link) => {
    setActiveNav(link);
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
          className={`left-0 text-base1 cursor-pointer transition-all duration-500 delay-500 ease-in-out text-heading-text font-navFont  ${
            open
              ? " block absolute top-[100%] h-screen bg-pri-bg w-full  p-6"
              : " hidden "
          } lg:flex lg:items-center lg:gap-4 lg:transition-none`}
          onClick={() => closeMobileNav()}
        >
          {links.map((link) => (
            <li
              key={link.href}
              className={`hover:text-white transition-all duration-300 ease-in-out ${
                open ? "mb-4" : "p-4"
              } ${
                activeNav === link.href
                  ? "text-white font-semibold"
                  : "text-body-text"
              }`}
              onClick={() => activeNavBar(link.href)}
            >
              <a href={link.href}>{link.label}</a>
            </li>
          ))}

          {/* <li
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
            
          </li>
          
          <li
            className={`hover:text-body-text transition-all duration-300 ease-in-out ${
              open ? "mb-4" : "p-4"
            }
              `}
          >
            <a href="#portfolio">Portfolio</a>
            
          </li>
          <li
            className={`hover:text-body-text transition-all duration-300 ease-in-out ${
              open ? "mb-4" : "p-4"
            }
            `}
          >
            <a href="#testimonal">Testimonial</a>
            
          </li>
          <li
            className={`hover:text-body-text transition-all duration-300 ease-in-out ${
              open ? "mb-4" : "p-4"
            }
            `}
          >
            <a href="#contactus">Contact Us</a>
            
          </li> */}
          <Button>Get in touch</Button>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
