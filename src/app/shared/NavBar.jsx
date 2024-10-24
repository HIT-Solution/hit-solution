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

  const servicesContent = (
    <div className="p-5 grid grid-cols-2 gap-20 content-center">
      <ul className="text-lg space-y-5">
        <h1 className="text-teal-600 font-semibold">Service List</h1>
        <li>
          {" "}
          <Link className="hover:text-teal-600" href={"/"}>
            Software Development & Digital Product
          </Link>
        </li>
        <li>
          {" "}
          <Link className="hover:text-teal-600" href={"/"}>
            Cloud Computing Solutions
          </Link>
        </li>
        <li>
          {" "}
          <Link className="hover:text-teal-600" href={"/"}>
            Internet of Things (IoT) Solutions
          </Link>
        </li>
        <li>
          {" "}
          <Link className="hover:text-teal-600" href={"/"}>
            Product Design
          </Link>
        </li>
        <li>
          {" "}
          <Link className="hover:text-teal-600" href={"/"}>
            QuaLinkty Assurance
          </Link>
        </li>
        <li>
          {" "}
          <Link className="hover:text-teal-600" href={"/"}>
            Tech Consultancy and IT Support
          </Link>
        </li>
        <li>
          {" "}
          <Link className="hover:text-teal-600" href={"/"}>
            Digital Marketing
          </Link>
        </li>
        <li>
          {" "}
          <Link className="hover:text-teal-600" href={"/"}>
            AR Creative Studio
          </Link>
        </li>
      </ul>
      <ul className="text-lg space-y-5">
        <h1 className="text-teal-600 font-semibold">For Hiring</h1>
        <li>
          {" "}
          <Link className="hover:underline hover:text-teal-600" href={"/"}>
            Full-Stack Web-developer
          </Link>
        </li>
        <li>
          {" "}
          <Link className="hover:underline hover:text-teal-600" href={"/"}>
            Front-end Developer
          </Link>
        </li>
        <li>
          {" "}
          <Link className="hover:underline hover:text-teal-600" href={"/"}>
            Backend Developer
          </Link>
        </li>
        <li>
          {" "}
          <Link className="hover:underline hover:text-teal-600" href={"/"}>
            JavaScript Developer
          </Link>
        </li>
        <li>
          {" "}
          <Link className="hover:underline hover:text-teal-600" href={"/"}>
            Python Developer
          </Link>
        </li>
        <li>
          {" "}
          <Link className="hover:underline hover:text-teal-600" href={"/"}>
            .Net Developer
          </Link>
        </li>
        <li>
          {" "}
          <Link className="hover:underline hover:text-teal-600" href={"/"}>
            Java Developer
          </Link>
        </li>
        <Button
          variant="shadow"
          className="bg-gradient-to-br from-black to-teal-700 text-white"
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
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-white"
        />
        <NavbarBrand>
          <Image alt="" quality={100} width={60} height={60} src={logo} />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="" justify="end">
        <NavbarItem
          className={
            isActive("/")
              ? "text-teal-400 hidden lg:flex"
              : "hidden lg:flex text-white hover:text-teal-400"
          }
        >
          <Link href="/">Home</Link>
        </NavbarItem>

        <NavbarItem
          className={
            isActive("/services")
              ? "text-teal-400 hidden lg:flex"
              : "hidden lg:flex text-white hover:text-teal-400"
          }
        >
          <Tooltip content={servicesContent}>
            <Link className="flex items-center" href="/services">
              Services <IoIosArrowDown />
            </Link>
          </Tooltip>
        </NavbarItem>
        <NavbarItem
          className={
            isActive("/technologies")
              ? "text-teal-400 hidden lg:flex"
              : "hidden lg:flex text-white hover:text-teal-400"
          }
        >
          <Link className="flex items-center" href="/technologies">
            Technologies
          </Link>
        </NavbarItem>
        <NavbarItem
          className={
            isActive("/portfolio")
              ? "text-teal-400 hidden lg:flex"
              : "hidden lg:flex text-white hover:text-teal-400"
          }
        >
          <Link href="/portfolio">Portfolio</Link>
        </NavbarItem>
        <NavbarItem
          className={
            isActive("/blogs")
              ? "text-teal-400 hidden lg:flex"
              : "hidden lg:flex text-white hover:text-teal-400"
          }
        >
          <Link href="/blogs">Blogs</Link>
        </NavbarItem>

        <NavbarItem
          className={
            isActive("/career")
              ? "text-teal-400 hidden lg:flex"
              : "hidden lg:flex text-white hover:text-teal-400"
          }
        >
          <Link href="/career">Career</Link>
        </NavbarItem>
        <NavbarItem
          className={
            isActive("/aboutUs")
              ? "text-teal-400 hidden lg:flex"
              : "hidden lg:flex text-white hover:text-teal-400"
          }
        >
          <Link href="/aboutUs">AboutUs</Link>
        </NavbarItem>

        <NavbarItem>
          <Button as={Link} className="bg-teal-600" href="#" variant="flat">
            Contact
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="bg-gradient-to-br from-black to-teal-800">
        <NavbarMenuItem>
          <Link className="text-white" href="#">
            Home
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link className="text-white" href="#">
            Services
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link className="text-white" href="#">
            Blogs
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link className="text-white" href="#">
            Technologies
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link className="text-white" href="#">
            Career
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link className="text-white" href="#">
            AboutUs
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};

export default NavBar;
