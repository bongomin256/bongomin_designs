import { TbWorldWww } from "react-icons/tb";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <section>
        <section>
          <div>
            <div>
              <p>Bongomin Designs</p>
            </div>
            <div>
              <p>
                <span>Phone:</span> 4253950516
              </p>
              <p>
                <span>Email:</span> info@domain.com
              </p>
            </div>
            <div>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <TbWorldWww />
              </a>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>

              <a href="http://" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
            </div>
          </div>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Contact Us</li>
          </ul>
        </section>
        <section>
          <div>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <p>Terms & Conditions</p>
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <p>Privacy Policy</p>
            </a>
          </div>
          <p>&copy 2024 Company Name. All rights reserved</p>
        </section>
      </section>
    </footer>
  );
};

export default Footer;
