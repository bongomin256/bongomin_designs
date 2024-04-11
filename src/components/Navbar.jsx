import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggleNavbar = () => {
    setOpen(!open);
  };
  return (
    <header className=" bg-[#15252d] sticky z-50 px-[1.5rem] md:px-[2rem] lg:px-[8.063rem] m-[0 auto]">
      {/* className="sticky z-50 px-[] md:w-[44rem] lg:w-[73.875rem] m-[0 auto]" */}
      <nav className="flex justify-between items-center   py-3 md:py-4 lg:py-5">
        <div>
          <h1>Bongoim Designs</h1>
        </div>

        <div onClick={() => toggleNavbar()} className="lg:hidden">
          {open ? <AiOutlineClose size={36} /> : <FaBars size={36} />}
        </div>

        <ul
          className={`text-base1 transition-all duration-500 delay-500 ease-in-out text-heading-text font-navFont font-semibold ${
            open
              ? "block absolute top-[100%] bg-[#15252d] w-full left-0"
              : "hidden"
          } lg:flex lg:items-center `}
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
            className={`${
              open ? "ml-6 pl-0 py-4  md:ml-8 md:pl-0 md:py-4 " : "p-4"
            }`}
          >
            Home
          </li>
          <li
            className={`${
              open ? "ml-6 pl-0 py-4  md:ml-8 md:pl-0 md:py-4 " : "p-4"
            }`}
          >
            Services
          </li>
          <li
            className={`${
              open ? "ml-6 pl-0 py-4  md:ml-8 md:pl-0 md:py-4 " : "p-4"
            }`}
          >
            Portfolio
          </li>
          <li
            className={`${
              open ? "ml-6 pl-0 py-4  md:ml-8 md:pl-0 md:py-4 " : "p-4"
            }`}
          >
            Testimonial
          </li>
          <li
            className={`${
              open ? "ml-6 pl-0 py-4  md:ml-8 md:pl-0 md:py-4 " : "p-4"
            }`}
          >
            Contact Us
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
