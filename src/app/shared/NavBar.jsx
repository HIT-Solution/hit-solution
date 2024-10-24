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
        <h1 className="text-teal-600 text-center font-semibold">
          Service List
        </h1>
        <li>
          {" "}
          <Link href={"/"}>Software Development & Digital Product</Link>
        </li>
        <li>
          {" "}
          <Link href={"/"}>Cloud Computing Solutions</Link>
        </li>
        <li>
          {" "}
          <Link href={"/"}>Internet of Things (IoT) Solutions</Link>
        </li>
        <li>
          {" "}
          <Link href={"/"}>Product Design</Link>
        </li>
        <li>
          {" "}
          <Link href={"/"}>QuaLinkty Assurance</Link>
        </li>
        <li>
          {" "}
          <Link href={"/"}>Tech Consultancy and IT Support</Link>
        </li>
        <li>
          {" "}
          <Link href={"/"}>Digital Marketing</Link>
        </li>
        <li>
          {" "}
          <Link href={"/"}>AR Creative Studio</Link>
        </li>
        <Button className="bg-gradient-to-br from-black to-teal-700 text-white">
          Hire The Best Team <FaArrowRightLong />
        </Button>
      </ul>
      <ul className="text-lg space-y-5">
        <h1 className="text-teal-600 font-semibold text-center">For Hiring</h1>
        <li>
          {" "}
          <Link href={"/"}>Full-Stack Web-developer</Link>
        </li>
        <li>
          {" "}
          <Link href={"/"}>Front-end Developer</Link>
        </li>
      </ul>
    </div>
  );
  const technologiesContent = <div></div>;

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
          <Tooltip content={technologiesContent}>
            <Link className="flex items-center" href="/technologies">
              Technologies <IoIosArrowDown />
            </Link>
          </Tooltip>
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
