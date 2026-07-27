/**
 * Author: Paurav Shah
 * Date: 2025-02-03
 * Version: 1.2.0
 * License: MIT
 */

import React, { useEffect, useState } from "react";
import { NextUIProvider } from "@nextui-org/react";
import { Avatar, Navbar as NextUINavbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, 
  NavbarMenu, NavbarMenuItem, Link } from "@nextui-org/react";
import { FaLinkedin, FaInstagram, FaFacebook, FaBehance, FaYoutube } from "react-icons/fa6";

export function Menu({ isArtistPage = false }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <NextUINavbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent id="brand-logo-section" justify="start">
        {!isArtistPage && (
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
        )}
        <NavbarBrand>
          <Link href={isArtistPage ? "./" : "#"} className="flex items-center gap-2 cursor-pointer">
            <Avatar size="sm" title="Nimish" color="default" src="./nimish_profile_photo.png"/>
            <span id="brand-logo" className="kumar-one-regular" title="Nimish">
              Nimish
            </span>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      {!isArtistPage && (
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
            <Link id="art-gallery-item" className="menuItem" color="foreground" title="Art Gallery" href="#art-gallery">
              Art Gallery
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
      )}

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
        <NavbarItem>
          <Link color="foreground" title="Nimish Shah | YouTube" target="_blank" href="https://www.youtube.com/@Cre-Tech/videos">
            <FaYoutube/>
          </Link>
        </NavbarItem>
      </NavbarContent>

      {!isArtistPage && (
        <NavbarMenu>
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
            <Link id="art-gallery-item" className="w-full" title="Art Gallery" color="foreground" href="#art-gallery" size="lg">
              Art Gallery
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
      )}
    </NextUINavbar>
  );
}

const NavbarComponent = (props) => {
  const [isArtist, setIsArtist] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const pathname = window.location.pathname;
      if (props?.isArtistPage || pathname.includes("/artist") || pathname.includes("/gallery")) {
        setIsArtist(true);
      }
    }
  }, [props?.isArtistPage]);

  return (
    <NextUIProvider>
      <div className="w-screen flex items-start justify-center">
        <Menu isArtistPage={isArtist || Boolean(props?.isArtistPage)} />
      </div>
    </NextUIProvider>
  );
};

export default NavbarComponent;