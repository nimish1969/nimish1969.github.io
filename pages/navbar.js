/**
 * Author: Paurav Shah
 * Date: 2025-02-03
 * Version: 1.0.0
 * License: MIT
 */

import React from "react";
import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import { useEffect } from 'react';
import { Avatar, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, 
  NavbarMenu, NavbarMenuItem, Link } from "@nextui-org/react";
import { FaLinkedin, FaInstagram, FaFacebook, FaBehance, FaDribbble, FaYoutube } from "react-icons/fa6";

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
          <Avatar size="sm" title="Nimish" color="default" src="./nimish_profile_photo.png"/>
          &nbsp;&nbsp;
          <Link id="brand-logo" className="kumar-one-regular" title="Nimish" color="foreground" href="#">
            Nimish
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent id="brand-portfolio-section" className="hidden sm:flex gap-10" justify="center">
        <NavbarItem>
          <Link id="about-item" className="menuItem" color="foreground" title="About" href="#about">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link id="services-item" className="menuItem" color="foreground" title="Services" href="#services">
            Services
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link id="portfolio-item" className="menuItem" color="foreground" title="Portfolio" href="#portfolio">
            Portfolio
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link id="testimonials-item" className="menuItem" color="foreground" title="Testimonials" href="#testimonials">
            Testimonials
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link id="contact-item" className="menuItem" color="foreground" title="Contact" href="#contact">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent id="brand-social-section" justify="end">
        <NavbarItem>
          <Link color="foreground" title="Nimish Shah | Behance" target="_blank" href="https://www.behance.net/nimishshah1969">
            <FaBehance/>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" title="Nimish Shah | LinkedIn" target="_blank" href="https://www.linkedin.com/in/nimish69/">
            <FaLinkedin/>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" title="Nimish Shah | Instagram" target="_blank" href="https://www.instagram.com/ncreativetech/">
            <FaInstagram/>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" title="Nimish Shah | Facebook" target="_blank" href="https://www.facebook.com/artisticnimesh">
            <FaFacebook/>
          </Link>
        </NavbarItem>
        {/* <NavbarItem>
          <Link color="foreground" title="Nimish Shah | Dribbble" target="_blank" href="https://dribbble.com/nimishshah">
            <FaDribbble/>
          </Link>
        </NavbarItem> */}
        <NavbarItem>
          <Link color="foreground" title="Nimish Shah | YouTube" target="_blank" href="https://www.youtube.com/@Cre-Tech/videos">
            <FaYoutube/>
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
          <Link id="about-item" className="w-full" title="About" color="foreground" href="#about" size="lg">
            About
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link id="services-item" className="w-full" title="Services" color="foreground" href="#services" size="lg">
            Services
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link id="portfolio-item" className="w-full" title="Portfolio" color="foreground" href="#portfolio" size="lg">
            Portfolio
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link id="testimonials-item" className="w-full" title="Testimonials" color="foreground" href="#testimonials" size="lg">
            Testimonials
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link id="contact-item" className="w-full" title="Contact" color="foreground" href="#contact" size="lg">
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