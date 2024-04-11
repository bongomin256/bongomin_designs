const Navbar = () => {
  return (
    <nav className="flex justify-between  items-center max-w-[90rem] py-3 md:py-4 lg:py-5">
      <div>
        <h1>Bongoim Designs</h1>
      </div>

      <ul className="flex items-center gap-4 lg:py-4">
        <li>Home</li>
        <li>Services</li>
        <li>Portfolio</li>
        <li>Testimonial</li>
        <li>Contact Us</li>
      </ul>
    </nav>
  );
};

export default Navbar;
