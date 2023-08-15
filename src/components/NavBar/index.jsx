// import React, { useState } from "react";
// import {
//   Bars3Icon,
//   BellIcon,
//   XMarkIcon,
//   SearchIcon,
//   ShoppingCartIcon,
// } from "@heroicons/react/24/outline";
// import Image from "next/image";
// import Link from "next/link";
// import Logo from "../../../public/logo.png";
// import mobileLogo from "../../../public/logo.png";
// import { usePathname } from "next/navigation";


// function NavBar({ open, setOpen }) {
//   // const navigation = [
//   //   { name: "Home", href: "/", current: true },
//   //   { name: "About", href: "#second-section", current: false },
//   //   { name: "Services", href: "#third-section", current: false },
//   //   { name: "Contact", href: "contactUs", current: false },
//   //   { name: "Blog", href: "#fourth-section", current: false },
//   // ];


//   const navigation = [
//     { name: "Home", href: "#home", current: true, path:"/" },
//     { name: "Projects", href: "#projects", current: false, path:"/projects" },
//     { name: "About me", href: "#about", current: false, path:"/about" },
//     { name: "Contact me", href: "#contact", current: false, path:"/contact" },
//   ];

//   const pathName = usePathname();
//   // console.log(pathName)
//   return (
//     <nav className=" w-full fixed top-0 left-0 z-50">
//         <div
//           className={
//             open
//               ? "md:hidden z-10  left-0   absolute top-0 right-0 text-black bg-[#FFFFFF] w-full h-[100vh] transition-all duration-500 ease-out"
//               : "absolute left-[-50rem] transition-all duration-900 ease-in z-10  right-0 text-black bg-[#FFFFFF] w-full h-[100vh] md:hidden"
//           }
//         >
//           <div className="cursor-pointer flex justify-between px-2 pt-5">
//             <Image
//               src={mobileLogo}
//               alt="logo"
//               className="md:w-[7rem] md:h-[100%] object-contain w-[3.75rem] h-[1.5rem]"
//             />
//             <XMarkIcon
//               onClick={() => {
//                 setOpen((prevValue) => !prevValue);
//               }}
//               className="block h-10 w-6"
//               aria-hidden="true"
//             />
//           </div>
//           <ul className="flex flex-col gap-5 justify-center pl-0 pl-4">
//             {navigation.map((link) => (
//               <li key={link.name} className="md:flex text-2xl md:my-0 my-3">
//                 <Link
//                   onClick={() => {
//                     setOpen((prevValue) => !prevValue);
//                   }}
//                   className=" hover:underline hover:underline-offset-8 font-DMSans font-medium"
//                   href={link.href}
//                 >
//                   {link.name}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>



//       <div className="md:flex flex items-center  justify-between  py-4 px-2  lg:px-6 xl:px-[6.5rem] w-full  relative">
//       <div className="cursor-pointer flex justify-between items-center px-2">
//           <Image
//             src={Logo}
//             alt="logo"
//             className=" md:w-[6.875rem] md:h-[2.75rem] w-[3.75rem] h-[1.5rem]"
//           />
//         </div>
//         <Bars3Icon
//           onClick={() => setOpen((prevValue) => !prevValue)}
//           className="md:hidden block h-6 w-6 text-white"
//           aria-hidden="true"
//         />
//         <ul className="hidden md:flex md:items-center md:justify-center md:static md:w-auto  absolute top-0 right-0 text-white w-full">
//           {navigation.map((link) => (
//             <li key={link.name} className="md:ml-8 text-2xl md:my-0 my-7">
//               <Link
//                 className={
//                   link.path === pathName
//                     ? "text-[#D9D9D9] text-base font-sans font-bold underline underline-offset-1"
//                     : "text-[#D9D9D9] text-base font-sans font-medium hover:underline hover:underline-offset-2"
//                 }
//                 href={link.href}
//               >
//                 {link.name}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </nav>
//   );
// }

// export default NavBar;






import Link from "next/link";
import { React, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Logo from "../../../public/logo.png";
import mobileLogo from "../../../public/activeLogo.png";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "#home", current: true, path:"/" },
    { name: "Projects", href: "#project", current: false, path:"/project" },
    { name: "About me", href: "#about", current: false, path:"/about" },
    { name: "Contact me", href: "#contact", current: false, path:"/contact" },
];

  const navigation = [
    { name: "Home", href: "#home", current: true, path:"/" },
    { name: "Projects", href: "#projects", current: false, path:"/projects" },
    { name: "About me", href: "#about", current: false, path:"/about" },
    { name: "Contact me", href: "#contact", current: false, path:"/contact" },
  ];




const Navbar = ({ open, setOpen }) => {
  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  const pathName = usePathname();

  return (
    <header className=" w-full fixed top-0 left-0 z-50">
      <nav className="md:flex flex items-center  justify-between  py-4 px-2  lg:px-6 xl:px-[6.5rem] w-full relative ">
      <div className="cursor-pointer flex justify-between items-center px-2">
          <Image
            src={Logo}
            alt="logo"
            className="md:w-[6.875rem] md:h-[2.75rem] w-[3.75rem] h-[1.5rem] object-contain"
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
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="md:hidden fixed left-0 top-0 w-full h-screen origin-top bg-white text-black p-10 z-50"
          >
            <div className="flex h-full flex-col">
              <div className="flex justify-between">
              <Image
            src={mobileLogo}
            alt="logo"
            className=" w-[3.75rem] h-[1.5rem] object-contain"
          />
                <p
                  className="cursor-pointer text-md text-black"
                  onClick={toggleMenu}
                >
                  Close
                </p>
              </div>
              <motion.div
                variants={containerVars}
                initial="initial"
                animate="open"
                exit="initial"
                className="flex flex-col h-full justify-center font-lora items-center gap-4 "
              >
                {navLinks.map((link, index) => {
                  return (
                    <div className="overflow-hidden">
                      <MobileNavLink
                        key={index}
                        title={link.name}
                        href={link.href}
                        open={open}
                        setOpen={setOpen}
                      />
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
const mobileLinkVars = {
  initial: {
    y: "30vh",
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  open: {
    y: 0,
    transition: {
      ease: [0, 0.55, 0.45, 1],
      duration: 0.7,
    },
  },
};
const MobileNavLink = ({ title, href, open, setOpen }) => {
  return (
    <motion.div
      variants={mobileLinkVars}
      className="text-3xl  uppercase text-black"
    >
      {/* <Link href={href}>{title}</Link> */}
      <div >
                <Link
                  onClick={() => {
                     setOpen((prevValue) => !prevValue);
                   }}
                   href={href}
                >
                 {title}
                </Link>
        </div>
    </motion.div>
  );
};
