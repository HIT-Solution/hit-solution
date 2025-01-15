"use client";
import React from "react";
import logo from "../../../public/logo.png";
import { IoIosArrowDown } from "react-icons/io";
import { Tooltip } from "@nextui-org/react";
import { FaArrowRightLong } from "react-icons/fa6";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
} from "@nextui-org/react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const pathName = usePathname();
  const isActive = (path) => path === pathName;

  // Close the menu when any menu item is clicked
  const handleMenuClick = () => {
    setIsMenuOpen(false);
  };

  const servicesContent = (
    <div className="p-10">
      <ul className="text-lg space-y-5">
        <h1 className="text-teal-600 font-semibold">Service List</h1>
        <li>
          <Link
            className="hover:text-teal-600"
            href={"/"}
            onClick={handleMenuClick}
          >
            Software Development & Digital Product
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-teal-600"
            href={"/"}
            onClick={handleMenuClick}
          >
            Cloud Computing Solutions
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-teal-600"
            href={"/"}
            onClick={handleMenuClick}
          >
            Internet of Things (IoT) Solutions
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-teal-600"
            href={"/"}
            onClick={handleMenuClick}
          >
            Product Design
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-teal-600"
            href={"/"}
            onClick={handleMenuClick}
          >
            Quality Assurance
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-teal-600"
            href={"/"}
            onClick={handleMenuClick}
          >
            Tech Consultancy and IT Support
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-teal-600"
            href={"/"}
            onClick={handleMenuClick}
          >
            Digital Marketing
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-teal-600"
            href={"/"}
            onClick={handleMenuClick}
          >
            AR Creative Studio
          </Link>
        </li>
        <Button
          variant="shadow"
          className="bg-gradient-to-br from-black to-teal-700 text-white"
          onClick={handleMenuClick}
        >
          Hire The Best Team <FaArrowRightLong />
        </Button>
      </ul>
    </div>
  );

  return (
    <Navbar
      className="bg-gradient-to-br from-black to-teal-800"
      onMenuOpenChange={setIsMenuOpen}
      isMenuOpen={isMenuOpen}
    >
      <NavbarContent>
        {/* Hamburger Menu Toggle */}
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:block md:hidden text-white"
        />
        <NavbarBrand>
          <Link href={"/"} onClick={handleMenuClick}>
            <Image alt="Logo" quality={100} width={60} height={60} src={logo} />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      {/* Main Navbar Items */}
      <NavbarContent className="hidden md:flex" justify="end">
        <NavbarItem
          className={
            isActive("/") ? "text-teal-400" : "text-white hover:text-teal-400"
          }
        >
          <Link href="/" onClick={handleMenuClick}>
            Home
          </Link>
        </NavbarItem>
        <NavbarItem
          className={
            isActive("/services")
              ? "text-teal-400"
              : "text-white hover:text-teal-400"
          }
        >
          <Tooltip content={servicesContent}>
            <Link
              className="flex items-center"
              href="/services"
              onClick={handleMenuClick}
            >
              Services <IoIosArrowDown />
            </Link>
          </Tooltip>
        </NavbarItem>
        <NavbarItem
          className={
            isActive("/technologies")
              ? "text-teal-400"
              : "text-white hover:text-teal-400"
          }
        >
          <Link href="/technologies" onClick={handleMenuClick}>
            Technologies
          </Link>
        </NavbarItem>
        <NavbarItem
          className={
            isActive("/Portfolio")
              ? "text-teal-400"
              : "text-white hover:text-teal-400"
          }
        >
          <Link href="/" onClick={handleMenuClick}>
            Portfolio
          </Link>
        </NavbarItem>
        <NavbarItem
          className={
            isActive("/blogs")
              ? "text-teal-400"
              : "text-white hover:text-teal-400"
          }
        >
          <Link href="/blogs" onClick={handleMenuClick}>
            Blogs
          </Link>
        </NavbarItem>
        <NavbarItem
          className={
            isActive("/career")
              ? "text-teal-400"
              : "text-white hover:text-teal-400"
          }
        >
          <Link href="/career" onClick={handleMenuClick}>
            Career
          </Link>
        </NavbarItem>
        <NavbarItem
          className={
            isActive("/aboutUs")
              ? "text-teal-400"
              : "text-white hover:text-teal-400"
          }
        >
          <Link href="/aboutUs" onClick={handleMenuClick}>
            About Us
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href={"/contact"} onClick={handleMenuClick}>
            <Button className="bg-teal-400" variant="shadow" color="success">
              Contact
            </Button>
          </Link>
        </NavbarItem>
      </NavbarContent>

      {/* Hamburger Menu Content */}
      <NavbarMenu className="bg-gradient-to-br from-black to-teal-800 sm:block md:hidden">
        <NavbarMenuItem>
          <Link className="text-white" href="/" onClick={handleMenuClick}>
            Home
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            className="text-white"
            href="/services"
            onClick={handleMenuClick}
          >
            Services
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            className="text-white"
            href="/technologies"
            onClick={handleMenuClick}
          >
            Technologies
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link className="text-white" href="/" onClick={handleMenuClick}>
            Portfolio
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link className="text-white" href="/blogs" onClick={handleMenuClick}>
            Blogs
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link className="text-white" href="/career" onClick={handleMenuClick}>
            Career
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            className="text-white"
            href="/aboutUs"
            onClick={handleMenuClick}
          >
            About Us
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href={"/contact"} onClick={handleMenuClick}>
            <Button className="bg-teal-400" variant="shadow" color="success">
              Contact
            </Button>
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};

export default NavBar;
