import Logo from "../../../public/logo.png";
import Image from "next/image";
import Link from "next/link";
import {AiOutlineCopyrightCircle} from "react-icons/ai";
import {FiGithub, FiTwitter} from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { SlSocialLinkedin } from "react-icons/sl";
import { MdKeyboardArrowRight } from "react-icons/md";

function Footer() {
  return (
    <main className="z-[20] mt-10 mb-auto backgroundPic2 text-white py-10 lg:py-16 lg:px-6 xl:px-36 px-4 mx-0 w-full self-end  border-t lg:border-t-0">
      <Image
            src={Logo}
            alt="logo"
            className=" block md:hidden mb-5 w-[3.75rem] h-[1.5rem]"
            priority={true}
          />
      <div className="flex flex-col md:flex-row md:justify-between lg:items-center gap-5 ">
       <div className=" md:order-1 order-4 flex justify-center flex-col gap-5 md:self-start">
       <Image
            src={Logo}
            alt="logo"
            className=" w-[ 6.875rem] h-[2.75rem] hidden md:block"
            priority={true}
          />
          <div className="flex gap-1 ">
            <p className="font-inter text-[#FEFEFE] text-lg font-normal">Email: </p>
            <p className="underline text-[rgba(145,146,148,1)] font-inter  text-lg font-normal">nzeaokosi7@gmail.com </p>
          </div>

          <div className="flex items-center justify-between  md:gap-5">
          <Link  href={"/"}>
        <FiGithub size={20}  className="inline-block  cursor-pointer" />
        </Link>
        <Link  href={"/"}>
        <SlSocialLinkedin size={20}  className="inline-block  cursor-pointer" />
        </Link>
        <Link href={"/"} >
        <FiTwitter  size={20} className="inline-block  cursor-pointer" />
        </Link>
        <Link href={"https://www.instagram.com/medichealthwellness/"}>
        <FaInstagram size={20}  className="inline-block cursor-pointer"/>
        </Link>
       </div>
        </div>
        
      

        <div className="flex flex-col gap-3  font-inter  md:order-2 order-2">
        <h3 className="font-sans text-[#FEFEFE] text-base md:text-2xl font-bold py-2 md:py-0">Home page</h3>
        <div className="flex md:flex-col gap-3 py-2 md:py-0">
        <div className="flex gap-3">
            <MdKeyboardArrowRight size={25} />
            <p  className="font-sans text-[#FEFEFE] text-sm  md:text-base font-medium md:font-bold">Projects</p>
          </div>
          <div className="flex gap-3">
            <MdKeyboardArrowRight size={25} />
          <p  className="font-sans text-[#FEFEFE] text-sm md:text-base font-medium md:font-bold">About me</p>
          </div>
          <div className="flex gap-3">
            <MdKeyboardArrowRight size={25} />
          <p  className="font-sans text-[#FEFEFE] text-sm md:text-base font-medium md:font-bold">Contact me</p>
          </div>
        </div>
        </div>
        
      </div>

    </main>
  );
}

export default Footer;




