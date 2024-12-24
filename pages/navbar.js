import React from "react";
import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import { useEffect } from 'react';
import { FaLinkedin, FaInstagram, FaFacebook, FaGithub, FaBehance, FaDribbble, FaYoutube} from "react-icons/fa6";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";

export function Menu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} shouldHideOnScroll>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link className="kumar-one-regular" color="foreground" href="#">
            Nimish
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-10" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Skills
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Experience
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Portfolio
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Link color="foreground" href="#">
            <FaLinkedin/>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            <FaInstagram/>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            <FaFacebook/>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            <FaGithub/>
          </Link>
        </NavbarItem>
        {/* <NavbarItem>
          <Link color="foreground" href="#">
            <FaBehance/>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            <FaDribbble/>
          </Link>
        </NavbarItem> */}
        <NavbarItem>
          <Link color="foreground" href="#">
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
          <Link className="w-full" color="foreground" href="#" size="lg">
            Skills
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link className="w-full" color="foreground" href="#" size="lg">
            Experience
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link className="w-full" color="foreground" href="#" size="lg">
            Portfolio
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link className="w-full" color="foreground" href="#" size="lg">
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
          <div className="w-screen h-screen p-8 flex items-start justify-center">
            <Menu />
          </div>
        </NextUIProvider>
      </React.StrictMode>
    );
  }, []);

  return <div id="navbar-item"></div>;
};

export default navbar;