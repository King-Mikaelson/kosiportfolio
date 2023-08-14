import Image from "next/image";
import kosiImg from "../../../public/kosiImg.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function AboutMe() {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <main id="about" className="relative w-full py-10 lg:py-16 lg:pb-24 lg:px-6 xl:px-28 px-4 flex flex-col gap-10 md:gap-20 ">
      <div className="flex flex-col lg:flex-row justify-center items-center w-full my-0 mx-auto">
        <div data-aos="fade-right" className="w-full hidden lg:flex items-center md:justify-center lg:justify-normal">
          <Image priority src={kosiImg} alt="kosi" className="object-contain" />
        </div>


        <div data-aos="fade-right" className="justify-between flex flex-col md:py-10 py-6 gap-6 relative">
          <p className="text-[#040722] text-2xl md:text-[2.5rem] font-bold font-sans leading-snug">
            “Man shall not live by bread alone, but by the codes that proceeds
            from his fingers and keyboard...”
          </p>
          <p className="text-[#040722] text-base md:text-2xl font-normal font-sans">
            “Man shall not live by bread alone, but by the codes that proceeds
            from his fingers and keyboard...”
          </p>
          <div  className="hidden lg:block absolute bottom-28 right-[40%] z-0 opacity-10 hover:opacity-25 hover:animate-none lg:w-[25ch]">
        <p className="text-[0.75rem] text-[#A59F9F] font-serif">
        def __init__(self, input_file, cache_index=True): if isinstance(input_file, basestring): self.source_file = open(input_file,'rb') filename = input_file</p>
      </div>
        </div>

        <div data-aos="fade-down" className="w-full md:w-1/2 flex  lg:hidden items-center justify-center">
          <Image src={kosiImg} alt="kosi" className="object-contain w-full md:object-fill" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between divide-solid md:divide-x divide-[#040722] gap-12">
        <aside data-aos="fade-up" className="md:w-3/5 font-sans font-medium text-[#040722] text-base">
          Talking about myself here because if I don’t, who will? Talk about
          every thing you are okay with letting everyone know. Could sprinkle
          childhood tales and anything that sparks you imagination... blah blah
          blahTalking about myself here because if I don’t, who will? Talk about
          every thing you are okay with letting everyone know. Could sprinkle
          childhood tales and anything that sparks you imagination... blah blah
          blahTalking about myself here because if I don’t, who will? Talk about
          every thing you are okay with letting everyone know. Could sprinkle
          childhood tales and anything that sparks you imagination... blah blah
          blahTalking about myself here because if I don’t, who will? Talk about
          every thing you are okay with letting everyone know. Could sprinkle
          childhood tales and anything that sparks you imagination... blah blah
          blahTalking about myself here because if I don’t, who will? Talk{" "}
        </aside>
        <ul data-aos="fade-down" className="md:w-2/5 flex flex-col md:py-6 px-4 md:px-20 list-disc font-sans font-medium text-[#040722] text-base">
          <li>Music I listen to</li>
          <li>where you traveled to</li>
          <li>puzzle quiz?</li>
          <li>Oh maybe just anything</li>
        </ul>
      </div>

      <div  className="hidden lg:block absolute bottom-24 right-[10%] z-0 opacity-25 hover:opacity-50 hover:animate-none lg:w-[25ch]">
        <p className="text-[0.75rem] text-[#A59F9F] font-serif font-light">
        this.onreadystatechange = function () console.log( "XMLHttpRequest.onreadystatechange" ); console.log( this )</p>
      </div>


      <div  className="hidden lg:block absolute bottom-24 right-[10%] z-0 opacity-25 hover:opacity-50 hover:animate-none lg:w-[25ch]">
        <p className="text-[0.75rem] text-[#A59F9F] font-serif">
        this.onreadystatechange = function () console.log( "XMLHttpRequest.onreadystatechange" ); console.log( this )</p>
      </div>

      <div  className="hidden lg:block absolute bottom-4 left-20 md:left-auto md:bottom-4 md:right-1/2 z-0 opacity-25 hover:opacity-50 hover:animate-none lg:w-[25ch]">
        <p className="text-[0.75rem] text-[#A59F9F] font-serif font-light">
        def __init__(self, input_file, cache_index=True): if isinstance(input_file, basestring): self.source_file = open(input_file,'rb') filename = input_file</p>
        </div>
    </main>
  );
}

export default AboutMe;
