import React from "react";
import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import { useEffect } from 'react';
import { FaLinkedin, FaInstagram, FaFacebook, FaGithub, FaBehance, FaDribbble, FaYoutube} from "react-icons/fa6";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, 
  NavbarMenu, NavbarMenuItem, Link, Button } from "@nextui-org/react";

export function Menu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent id="brand-logo-section" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link className="kumar-one-regular" title="Nimish" color="foreground" href="#">
            Nimish
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent id="brand-portfolio-section" className="hidden sm:flex gap-10" justify="center">
        <NavbarItem>
          <Link color="foreground" title="About Me" href="#about-section">
            About Me
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" title="My Services" href="#my-services-section">
            My Services
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" title="Portfolio" href="#portfolio-section">
            Portfolio
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" title="Contact" href="#contact-section">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent id="brand-social-section" justify="end">
        <NavbarItem>
          <Link color="foreground" title="Nimish Shah | LinkedIn" target="_blank" href="https://www.linkedin.com/in/nimish69/">
            <FaLinkedin/>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" title="Nimish Shah | Instagram" target="_blank" href="https://www.instagram.com/nimishshah69/">
            <FaInstagram/>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" title="Nimish Shah | Facebook" target="_blank" href="https://www.facebook.com/nimesh.shah.3958">
            <FaFacebook/>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" title="Nimish Shah | Behance" target="_blank" href="javascript:void(0);">
            <FaBehance/>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" title="Nimish Shah | Dribbble" target="_blank" href="javascript:void(0);">
            <FaDribbble/>
          </Link>
        </NavbarItem>
        {/* <NavbarItem>
          <Link color="foreground" title="Nimish Shah | YouTube" target="_blank" href="https://www.youtube.com/@Cre-Tech">
            <FaYoutube/>
          </Link>
        </NavbarItem> */}
        <NavbarItem>
          <Link color="foreground" title="Nimish Shah | GitHub" target="_blank" href="https://github.com/nimish1969">
            <FaGithub/>
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {/* {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))} */}
        <NavbarMenuItem>
          <Link className="w-full" title="About Me" color="foreground" href="#about-section" size="lg">
            About Me
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link className="w-full" title="My Services" color="foreground" href="#my-services-section" size="lg">
            My Services
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link className="w-full" title="Portfolio" color="foreground" href="#portfolio-section" size="lg">
            Portfolio
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link className="w-full" title="Contact" color="foreground" href="#contact-section" size="lg">
            Contact
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}

const navbar = () => {
  useEffect(() => {
    ReactDOM.createRoot(document.getElementById("navbar-item")).render(
      <React.StrictMode>
        <NextUIProvider>
          <div className="w-screen flex items-start justify-center">
            <Menu/>
          </div>
        </NextUIProvider>
      </React.StrictMode>
    );
  }, []);

  return <div id="navbar-item"></div>;
};

export default navbar;