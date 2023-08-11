import React, { useState } from "react";
import {
  Bars3Icon,
  BellIcon,
  XMarkIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/logo.png";
import mobileLogo from "../../../public/logo.png";
import { usePathname } from "next/navigation";


function NavBar({ open, setOpen }) {
  // const navigation = [
  //   { name: "Home", href: "/", current: true },
  //   { name: "About", href: "#second-section", current: false },
  //   { name: "Services", href: "#third-section", current: false },
  //   { name: "Contact", href: "contactUs", current: false },
  //   { name: "Blog", href: "#fourth-section", current: false },
  // ];


  const navigation = [
    { name: "Home", href: "#home", current: true, path:"/" },
    { name: "Projects", href: "#projects", current: false, path:"/projects" },
    { name: "About me", href: "#about", current: false, path:"/about" },
    { name: "Contact me", href: "#contact", current: false, path:"/contact" },
  ];

  const pathName = usePathname();
  // console.log(pathName)
  return (
    <nav className=" w-full fixed top-0 left-0 z-50">
        <div
          className={
            open
              ? "md:hidden z-10  left-0   absolute top-0 right-0 text-black bg-[#FFFFFF] w-full h-[100vh] transition-all duration-500 ease-out"
              : "absolute left-[-50rem] transition-all duration-900 ease-in z-10  right-0 text-black bg-[#FFFFFF] w-full h-[100vh] md:hidden"
          }
        >
          <div className="cursor-pointer flex justify-between px-2 pt-5">
            <Image
              src={mobileLogo}
              alt="logo"
              className="md:w-[7rem] md:h-[100%] object-contain w-[3.75rem] h-[1.5rem]"
            />
            <XMarkIcon
              onClick={() => {
                setOpen((prevValue) => !prevValue);
              }}
              className="block h-10 w-6"
              aria-hidden="true"
            />
          </div>
          <ul className="flex flex-col gap-5 justify-center pl-0 pl-4">
            {navigation.map((link) => (
              <li key={link.name} className="md:flex text-2xl md:my-0 my-3">
                <Link
                  onClick={() => {
                    setOpen((prevValue) => !prevValue);
                  }}
                  className=" hover:underline hover:underline-offset-8 font-DMSans font-medium"
                  href={link.href}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

          {/* <div
          className={
            open
              ? "z-10 md:flex md:items-center md:static md:w-auto   absolute top-0 right-0 text-black bg-[#FFFFFF] w-full h-[100vh] transition-all duration-500 ease-out"
              : "absolute top-[-30rem]"
          }
        >
          <div className="cursor-pointer flex justify-between px-2 pt-5">
            <Image
              src={Logo}
              alt="logo"
              className=" w-[7rem] h-[100%] object-contain"
            />
            <XMarkIcon
              onClick={() => {
                setOpen((prevValue) => !prevValue);
              }}
              className="block h-10 w-6"
              aria-hidden="true"
            />
          </div>
          <ul className="flex flex-col gap-5 justify-center pl-0 pl-4">
            {navigation.map((link) => (
              <li key={link.name} className="md:flex text-2xl md:my-0 my-3">
                <Link
                  onClick={() => {
                    setOpen((prevValue) => !prevValue);
                  }}
                  className=" hover:underline hover:underline-offset-8 font-DMSans font-normal"
                  href={link.href}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div> */}

      <div className="md:flex flex items-center  justify-between  py-4 px-2  lg:px-6 xl:px-[6.5rem] w-full  relative">
      <div className="cursor-pointer flex justify-between items-center px-2">
          <Image
            src={Logo}
            alt="logo"
            className=" md:w-[6.875rem] md:h-[2.75rem] w-[3.75rem] h-[1.5rem]"
          />
        </div>
        <Bars3Icon
          onClick={() => setOpen((prevValue) => !prevValue)}
          className="md:hidden block h-6 w-6 text-white"
          aria-hidden="true"
        />
        <ul className="hidden md:flex md:items-center md:justify-center md:static md:w-auto  absolute top-0 right-0 text-white w-full">
          {navigation.map((link) => (
            <li key={link.name} className="md:ml-8 text-2xl md:my-0 my-7">
              <Link
                className={
                  link.path === pathName
                    ? "text-[#D9D9D9] text-base font-sans font-bold underline underline-offset-1"
                    : "text-[#D9D9D9] text-base font-sans font-medium hover:underline hover:underline-offset-2"
                }
                href={link.href}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
