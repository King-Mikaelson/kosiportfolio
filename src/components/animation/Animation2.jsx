import React, { useEffect, useRef, useState } from "react";
import styles from "./Animation.module.css";
import Logo from "../../../public/logo.png";
import frame from "../../../public/frame.png";
import Image from "next/image";
import Link from "next/link";
import {IoPersonCircle} from "react-icons/io5";
import {TbCodeCircle2} from "react-icons/tb";

function Animation2() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const[line1Specs, setLine1Specs] = useState({length: 0, angle: 0});
  const[line2Specs, setLine2Specs] = useState({length: 0, angle: 0});
  const[line3Specs, setLine3Specs] = useState({length: 0, angle: 0});
  const[line4Specs, setLine4Specs] = useState({length: 0, angle: 0});
  const[windowWidth, setWindowWidth] = useState(0);

  //  d=√((x2 – x1)² + (y2 – y1)²).
 function getDistance({x1, y1}, {x2, y2}){
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
 }

  function handleResize(){
    setWindowWidth(window.innerWidth)
  }

  function getCosineAngle(adj, hyp){
    return Math.acos(adj/hyp) * (180/Math.PI)
  }

  function getSineAngle(opp, hyp){
    return Math.asin(opp/hyp) * (180/Math.PI)
  }


  useEffect(() => {
    let line1 = ref1.current?.getBoundingClientRect();
    let line2 = ref2.current?.getBoundingClientRect();
    let line3 = ref3.current?.getBoundingClientRect();
    let line4 = ref4.current?.getBoundingClientRect();
    let line5 = ref5.current?.getBoundingClientRect();

    let position1 = {x1: line1?.right, y1: line1?.top};
    let position2 = {x2: line2?.left, y2: line2?.top};

    let position3 = {x1: line2?.left, y1: line2?.top};
    let position4 = {x2: line3?.left, y2: line3?.bottom};

    let position5 = {x1: line3?.left, y1: line3?.bottom};
    let position6 = {x2: line4?.left, y2: line4?.top};

    let position7 = {x1: line4?.left, y1: line4?.top};
    let position8 = {x2: line5?.left, y2: line5?.bottom};
  
    let length = getDistance(position1, position2);

    let length1 = getDistance(position3, position4);

    let length2 = getDistance(position5, position6);

    let length3 = getDistance(position7, position8);


    let angle = getCosineAngle(line2?.left - line1?.right, length);

    let angle1 = getSineAngle(line3?.left - line2?.left, length1)

    let angle2 = getSineAngle(line4?.left - line3?.left, length2)

    let angle3 = getSineAngle(line5?.left - line4?.left, length3)

    // console.log(length, angle)
    // console.log(length1, angle1)
    // console.log(length2, angle2)
    // console.log(length3, angle3)
    setLine1Specs({length, angle})
    setLine2Specs({length:length1, angle:angle1})
    setLine3Specs({length:length2, angle:angle2})
    setLine4Specs({length:length3, angle:angle3})
  
    //  console.log(line1);
    //  console.log(line2);
    //  console.log(line3);
    //  console.log(line4);
    //  console.log(line5);
  }, [windowWidth])

  useEffect(() => {
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize)
  }, []);



// UseEffect for 3D tilt Effect
  useEffect(() => {
    // Add JavaScript to update the --tiltX and --tiltY custom properties based on mouse movement
    const container = document.querySelector(".tilted_container");
    console.log(container);
    container?.addEventListener("mousemove", (event) => {
      const boundingRect = container.getBoundingClientRect();
      const offsetX = event.clientX - boundingRect.left;
      const offsetY = event.clientY - boundingRect.bottom;
      const centerX = boundingRect.width / 2;
      const centerY = boundingRect.height / 2.5;

      // Calculate tilt angles with reduced intensity
      const tiltX = (offsetX - centerX) * 0.005; // Reduce the multiplier from 0.1 to 0.05
      const tiltY = (offsetY - centerY) * 0.005; // Reduce the multiplier from 0.1 to 0.05

      // Set custom properties to be used in CSS
      container.style.setProperty("--tiltX", `${tiltX}deg`);
      container.style.setProperty("--tiltY", `${tiltY}deg`);
    });
  }, []);

  return (
  <>
   <main className="container hidden lg:flex">
      <section className="tilted_container">
        <div className="tilted_element w-full py-10 lg:pt-16 lg:pb-56 lg:px-6 xl:px-32 px-4 relative">
          <Image
            src={Logo}
            alt="logo"
            className=" w-[ 6.875rem] h-[2.75rem]"
            priority={true}
          />

          <h1 className="text-[rgba(254,254,254,1.00)] font-sans  font-bold md:text-[2.5rem] py-10">
            PROJECTS
          </h1>

          <div className="flex flex-col  relative">
          
          <svg className="vector" xmlns="http://www.w3.org/2000/svg" width="812" height="225" viewBox="0 0 812 225" fill="none">
  <g opacity="0.1">
    <path d="M1 79L140 224L341 1L629 194L811 43" stroke="#5013E3" strokeWidth="2" strokeLinejoin="round" strokeDasharray="4 4"/>
    <path d="M1 79L140 224L341 1L629 194L811 43" stroke="url(#paint0_linear_162_180)" strokeWidth="2" strokeLinejoin="round" strokeDasharray="4 4"/>
  </g>
  <defs>
    <linearGradient id="paint0_linear_162_180" x1="0.999999" y1="58.9999" x2="833" y2="62.9999" gradientUnits="userSpaceOnUse">
      <stop stopColor="#E518FF" stopOpacity="0.7"/>
      <stop offset="1" stopColor="#5013E3" stopOpacity="0.7"/>
    </linearGradient>
  </defs>
</svg>

            <div className="box font-sans text-white text-base">
            <div className="text">
                 <p className="font-semibold">The Placeholder Project</p>
                <div className="flex items-center py-1 gap-2">
                <IoPersonCircle size={15} className="inline-block  text-[#ADADAE]" /> 
                <p className="font-light text-[#ADADAE]">Backend engineer</p>
                </div>
                <div className="flex items-center py-1 gap-2">
                <TbCodeCircle2 size={15} className="inline-block  text-[#ADADAE]" />
                <p className="font-light text-[#ADADAE]">Golang, python, java</p>

                </div>
                </div>

                <div className="text">
                 <p className="font-semibold">The Placeholder Project</p>
                <div className="flex items-center py-1 gap-2">
                <IoPersonCircle size={15} className="inline-block  text-[#ADADAE]" /> 
                <p className="font-light text-[#ADADAE]">Backend engineer</p>
                </div>
                <div className="flex items-center py-1 gap-2">
                <TbCodeCircle2 size={15} className="inline-block  text-[#ADADAE]" />
                <p className="font-light text-[#ADADAE]">Golang, python, java</p>

                </div>
                </div>


                <div className="text">
                 <p className="font-semibold">The Placeholder Project</p>
                <div className="flex items-center py-1 gap-2">
                <IoPersonCircle size={15} className="inline-block   text-[#ADADAE]" /> 
                <p className="font-light text-[#ADADAE]">Backend engineer</p>
                </div>
                <div className="flex items-center py-1 gap-2">
                <TbCodeCircle2 size={15} className="inline-block  text-[#ADADAE]" />
                <p className="font-light text-[#ADADAE]">Golang, python, java</p>

                </div>
                </div>

                <div className="text">
                 <p className="font-semibold">The Placeholder Project</p>
                <div className="flex items-center py-1 gap-2">
                <IoPersonCircle size={15} className="inline-block text-[#ADADAE]" /> 
                <p className="font-light text-[#ADADAE]">Backend engineer</p>
                </div>
                <div className="flex items-center py-1 gap-2">
                <TbCodeCircle2 size={15} className="inline-block  text-[#ADADAE]" />
                <p className="font-light text-[#ADADAE]">Golang, python, java</p>

                </div>
                </div>


                <div className="text">
                 <p className="font-semibold">The Placeholder Project</p>
                <div className="flex items-center py-1 gap-2">
                <IoPersonCircle size={15} className="inline-block  text-[#ADADAE]" /> 
                <p className="font-light text-[#ADADAE]">Backend engineer</p>
                </div>
                <div className="flex items-center py-1 gap-2">
                <TbCodeCircle2 size={15} className="inline-block  text-[#ADADAE]" />
                <p className="font-light text-[#ADADAE]">Golang, python, java</p>

                </div>
                </div>
              
              <div  className="outer outer1">
              <div className="inner">
              <div ref={ref1} className="rotation-box">
              <div className="rotation-inner">
              <span className="rotation-span" style={{width:`${line1Specs.length}px`, transform:`rotate(${line1Specs.angle}deg)`}}></span>
              </div>
              </div>
              <Image src={frame} alt="frame" className="image img1" />
              </div>
              </div>

            <div  className="outer outer2">
            <div className="inner">
            <div ref={ref2} className="rotation-box1">
              <div className="rotation-inner">
              {/* <span className="rotation-span1"></span> */}
              </div>
              </div>           
              <Image src={frame} alt="frame"  className="image img2" />
            </div>
            </div>

            <div  className="outer outer3">
            <div className="inner">
            <div ref={ref3} className="rotation-box2">
              <div className="rotation-inner">
              <span className="rotation-span" style={{width:`${line2Specs.length}px`, transform:`rotate(${line2Specs.angle}deg)`}}></span>
              </div>
              </div>
            <Image src={frame} alt="frame" className="image img3" />
            </div></div>
            


             <div className="outer outer4">
            <div className="inner">
            <div ref={ref4} className="rotation-box3">
              <div className="rotation-inner">
              <span className="rotation-span" style={{width:`${line3Specs.length}px`, transform:`rotate(-${line3Specs.angle}deg)`}}></span>
              </div>
            </div>
             <Image src={frame} alt="frame" className="image img4" />
              </div>
            </div>


            <div  className="outer outer5">
            <div className="inner">
            <div ref={ref5} className="rotation-box4">
              <div className="rotation-inner">
              <span className="rotation-span" style={{width:`${line4Specs.length}px`, transform:`rotate(${line4Specs.angle}deg)`}}></span>
              </div>
            </div>
            <Image src={frame} alt="frame" className="image img5" /> 
            </div>
            </div>
              
            </div>         
          </div>
        </div>
      </section>
  </main>


      <section className="relative block lg:hidden bg-[url('/projects.png')] bg-center bg-cover bg-no-repeat">
        <div className="w-full py-10 lg:pt-16 lg:pb-56 lg:px-6 xl:px-32 px-4 relative">
          <Image
            src={Logo}
            alt="logo"
            className=" lg:w-[ 6.875rem] lg:h-[2.75rem] w-[3.75rem] h-[1.5rem]"
            priority={true}
          />

          <h1 className="text-[rgba(254,254,254,1.00)] font-sans  font-bold text-[1.5rem] pt-8 pb-1">
            PROJECTS
          </h1>


            <div className="relative flex flex-col font-sans text-white text-base gap-16">

            <div className=" absolute -top-10 left-12  px-10  z-0 opacity-25 hover:opacity-100">
        <p className="text-[0.75rem] text-[#A59F9F] font-serif">
        this.onreadystatechange = function () console.log( "XMLHttpRequest.onreadystatechange" ); console.log( this )</p>
          </div>

            <div className="flex flex-col self-start items-center">
              <Image src={frame} alt="frame" className="w-[6.375rem] h-[6.375rem]" />
                <p className="font-semibold text-sm font-sans text-[#FFF]">The Placeholder Project</p>
                <div className="flex items-center py-1 gap-2">
                <IoPersonCircle size={15} className="inline-block  text-[#ADADAE]" /> 
                <p className="font-light text-sm font-sans text-[#ADADAE]">Backend engineer</p>
                </div>
                <div className="relative flex items-center py-1 gap-2">
                <TbCodeCircle2 size={15} className="inline-block  text-[#ADADAE]" />
                <p className="font-light text-sm font-sans text-[#ADADAE]">Golang, python, java</p>
                <div className=" absolute -top-6 px-10 left-10 z-0 opacity-25 hover:opacity-100">
        <p className="text-[0.75rem] text-[#A59F9F] font-serif">
        this.onreadystatechange = function () console.log( "XMLHttpRequest.onreadystatechange" ); console.log( this )</p>
        </div>
                </div>
            </div>

            <div className="relative flex flex-col self-end items-center">
              <Image src={frame} alt="frame" className="w-[6.375rem] h-[6.375rem]" />
                <p className="font-semibold text-sm font-sans text-[#FFF]">The Placeholder Project</p>
                <div className="flex items-center py-1 gap-2">
                <IoPersonCircle size={15} className="inline-block  text-[#ADADAE]" /> 
                <p className="font-light text-sm font-sans text-[#ADADAE]">Backend engineer</p>
                </div>
                <div className="flex items-center py-1 gap-2">
                <TbCodeCircle2 size={15} className="inline-block  text-[#ADADAE]" />
                <p className="font-light text-sm font-sans text-[#ADADAE]">Golang, python, java</p>
                </div>
                <div className=" absolute -bottom-6 px-10 right-10 z-0 opacity-25 hover:opacity-100">
        <p className="text-[0.75rem] text-[#A59F9F] font-serif">
        this.onreadystatechange = function () console.log( "XMLHttpRequest.onreadystatechange" ); console.log( this )</p>
        </div>
            </div>


            <div className="relative flex flex-col items-center self-start">
              <Image src={frame} alt="frame" className="w-[6.375rem] h-[6.375rem]" />
                <p className="font-semibold text-sm font-sans text-[#FFF]">The Placeholder Project</p>
                <div className="flex items-center py-1 gap-2">
                <IoPersonCircle size={15} className="inline-block  text-[#ADADAE]" /> 
                <p className="font-light text-sm font-sans text-[#ADADAE]">Backend engineer</p>
                </div>
                <div className="flex items-center py-1 gap-2">
                <TbCodeCircle2 size={15} className="inline-block  text-[#ADADAE]" />
                <p className="font-light text-sm font-sans text-[#ADADAE]">Golang, python, java</p>
                </div>
                <div className="absolute -bottom-20 left-16  ml-auto px-10  z-0 opacity-25 hover:opacity-100">
        <p className="text-[0.75rem] text-[#A59F9F] font-serif">
        this.onreadystatechange = function () console.log( "XMLHttpRequest.onreadystatechange" ); console.log( this )</p>
        </div>
            </div>

            <div className="flex flex-col  self-end items-center">
              <Image src={frame} alt="frame" className="w-[6.375rem] h-[6.375rem]" />
                <p className="font-semibold text-sm font-sans text-[#FFF]">The Placeholder Project</p>
                <div className="flex items-center py-1 gap-2">
                <IoPersonCircle size={15} className="inline-block  text-[#ADADAE]" /> 
                <p className="font-light text-sm font-sans text-[#ADADAE]">Backend engineer</p>
                </div>
                <div className="flex items-center py-1 gap-2">
                <TbCodeCircle2 size={15} className="inline-block  text-[#ADADAE]" />
                <p className="font-light text-sm font-sans text-[#ADADAE]">Golang, python, java</p>

                </div>
            </div>


            <div className="flex flex-col items-center self-start ">
              <Image src={frame} alt="frame" className="w-[6.375rem] h-[6.375rem]" />
                <p className="font-semibold text-sm font-sans text-[#FFF]">The Placeholder Project</p>
                <div className="flex items-center py-1 gap-2">
                <IoPersonCircle size={15} className="inline-block  text-[#ADADAE]" /> 
                <p className="font-light text-sm font-sans text-[#ADADAE]">Backend engineer</p>
                </div>
                <div className="flex items-center py-1 gap-2">
                <TbCodeCircle2 size={15} className="inline-block  text-[#ADADAE]" />
                <p className="font-light text-sm font-sans text-[#ADADAE]">Golang, python, java</p>

                </div>
            </div>
              
            </div>         
          </div>
      </section>
  </>


    
  );
}

export default Animation2;
