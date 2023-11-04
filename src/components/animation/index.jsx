// import React, { useEffect, useRef, useState } from "react";
// import Logo from "../../../public/logo.png";
// import frame from "../../../public/frame.png";
// import Image from "next/image";
// import Link from "next/link";
// import {IoPersonCircle} from "react-icons/io5";
// import {TbCodeCircle2} from "react-icons/tb";
// // import Aos from "aos";
// // import "aos/dist/aos.css";

// function Animation() {
//   const ref1 = useRef(null);
//   const ref2 = useRef(null);
//   const ref3 = useRef(null);
//   const ref4 = useRef(null);
//   const ref5 = useRef(null);
//   const[line1Specs, setLine1Specs] = useState({length: 0, angle: 0});
//   const[line2Specs, setLine2Specs] = useState({length: 0, angle: 0});
//   const[line3Specs, setLine3Specs] = useState({length: 0, angle: 0});
//   const[line4Specs, setLine4Specs] = useState({length: 0, angle: 0});
//   const[windowWidth, setWindowWidth] = useState(0);

//   //  d=√((x2 – x1)² + (y2 – y1)²).
//  function getDistance({x1, y1}, {x2, y2}){
//   return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
//  }

//   function handleResize(){
//     setWindowWidth(window.innerWidth)
//   }

//   function getCosineAngle(adj, hyp){
//     return Math.acos(adj/hyp) * (180/Math.PI)
//   }

//   function getSineAngle(opp, hyp){
//     return Math.asin(opp/hyp) * (180/Math.PI)
//   }

//   useEffect(() => {
//     let line1 = ref1.current?.getBoundingClientRect();
//     let line2 = ref2.current?.getBoundingClientRect();
//     let line3 = ref3.current?.getBoundingClientRect();
//     let line4 = ref4.current?.getBoundingClientRect();
//     let line5 = ref5.current?.getBoundingClientRect();

//     let position1 = {x1: line1?.right, y1: line1?.top};
//     let position2 = {x2: line2?.left, y2: line2?.top};

//     let position3 = {x1: line2?.left, y1: line2?.top};
//     let position4 = {x2: line3?.left, y2: line3?.bottom};

//     let position5 = {x1: line3?.left, y1: line3?.bottom};
//     let position6 = {x2: line4?.left, y2: line4?.top};

//     let position7 = {x1: line4?.left, y1: line4?.top};
//     let position8 = {x2: line5?.left, y2: line5?.bottom};

//     let length = getDistance(position1, position2);

//     let length1 = getDistance(position3, position4);

//     let length2 = getDistance(position5, position6);

//     let length3 = getDistance(position7, position8);

//     let angle = getCosineAngle(line2?.left - line1?.right, length);

//     let angle1 = getSineAngle(line3?.left - line2?.left, length1)

//     let angle2 = getSineAngle(line4?.left - line3?.left, length2)

//     let angle3 = getSineAngle(line5?.left - line4?.left, length3)

//     setLine1Specs({length, angle})
//     setLine2Specs({length:length1, angle:angle1})
//     setLine3Specs({length:length2, angle:angle2})
//     setLine4Specs({length:length3, angle:angle3})

//   }, [windowWidth])

//   useEffect(() => {
//   window.addEventListener("resize", handleResize);
//   return () => window.removeEventListener("resize", handleResize)
//   }, []);

// // UseEffect for 3D tilt Effect
// let refContainer = useRef(null);

// function tiltDiv(event){
//   const boundingRect = refContainer?.current.getBoundingClientRect();
//   const offsetX = event.clientX - boundingRect.left;
//   const offsetY = event.clientY - boundingRect.bottom;
//   const centerX = boundingRect.width / 2;
//   const centerY = boundingRect.height / 2.5;

//   // Calculate tilt angles with reduced intensity
//   const tiltX = (offsetX - centerX) * 0.005; // Reduce the multiplier from 0.1 to 0.05
//   const tiltY = (offsetY - centerY) * 0.005; // Reduce the multiplier from 0.1 to 0.05

//   // Set custom properties to be used in CSS
//   refContainer?.current.style.setProperty("--tiltX", `${tiltX}deg`);
//   refContainer?.current.style.setProperty("--tiltY", `${tiltY}deg`);
// }

//   useEffect(() => {
//     // Add JavaScript to update the --tiltX and --tiltY custom properties based on mouse movement
//     // const container = document.querySelector(".tilted_container");
//     refContainer?.current.addEventListener("mousemove", (event) => {
//       tiltDiv(event)
//     });

//     return () => window.removeEventListener("mousemove",  (event) => {
//       tiltDiv(event)
//     })

//   }, []);

//   // useEffect(() => {
//   //   Aos.init({ duration: 2000 });
//   // }, []);

//   return (
//   <>
//    <main id="projects" className="container hidden lg:flex">
//       <section ref={refContainer} className="tilted_container">
//         <div className="tilted_element w-full py-10 lg:pt-16 lg:pb-56 lg:px-6 xl:px-28 px-4 relative">
//           <Image
//             src={Logo}
//             alt="logo"
//             className=" w-[ 6.875rem] h-[2.75rem]"
//             priority={true}
//           />

//           <h1 className="text-[rgba(254,254,254,1.00)] font-sans  font-bold md:text-[2.5rem] py-10">
//             PROJECTS
//           </h1>

//           <div className="flex flex-col  relative">

//           <svg className="vector" xmlns="http://www.w3.org/2000/svg" width="812" height="225" viewBox="0 0 812 225" fill="none">
//   <g opacity="0.1">
//     <path d="M1 79L140 224L341 1L629 194L811 43" stroke="#5013E3" strokeWidth="2" strokeLinejoin="round" strokeDasharray="4 4"/>
//     <path d="M1 79L140 224L341 1L629 194L811 43" stroke="url(#paint0_linear_162_180)" strokeWidth="2" strokeLinejoin="round" strokeDasharray="4 4"/>
//   </g>
//   <defs>
//     <linearGradient id="paint0_linear_162_180" x1="0.999999" y1="58.9999" x2="833" y2="62.9999" gradientUnits="userSpaceOnUse">
//       <stop stopColor="#E518FF" stopOpacity="0.7"/>
//       <stop offset="1" stopColor="#5013E3" stopOpacity="0.7"/>
//     </linearGradient>
//   </defs>
// </svg>

//             <div className="box font-sans text-white text-base">
//             <div className="text">
//                  <p className="font-semibold">The Placeholder Project</p>
//                 <div className="flex items-center py-1 gap-2">
//                 <IoPersonCircle size={15} className="inline-block  text-[#ADADAE]" />
//                 <p className="font-light text-[#ADADAE]">Backend engineer</p>
//                 </div>
//                 <div className="flex items-center py-1 gap-2">
//                 <TbCodeCircle2 size={15} className="inline-block  text-[#ADADAE]" />
//                 <p className="font-light text-[#ADADAE]">Golang, python, java</p>

//                 </div>
//                 </div>

//                 <div className="text">
//                  <p className="font-semibold">The Placeholder Project</p>
//                 <div className="flex items-center py-1 gap-2">
//                 <IoPersonCircle size={15} className="inline-block  text-[#ADADAE]" />
//                 <p className="font-light text-[#ADADAE]">Backend engineer</p>
//                 </div>
//                 <div className="flex items-center py-1 gap-2">
//                 <TbCodeCircle2 size={15} className="inline-block  text-[#ADADAE]" />
//                 <p className="font-light text-[#ADADAE]">Golang, python, java</p>

//                 </div>
//                 </div>

//                 <div className="text">
//                  <p className="font-semibold">The Placeholder Project</p>
//                 <div className="flex items-center py-1 gap-2">
//                 <IoPersonCircle size={15} className="inline-block   text-[#ADADAE]" />
//                 <p className="font-light text-[#ADADAE]">Backend engineer</p>
//                 </div>
//                 <div className="flex items-center py-1 gap-2">
//                 <TbCodeCircle2 size={15} className="inline-block  text-[#ADADAE]" />
//                 <p className="font-light text-[#ADADAE]">Golang, python, java</p>

//                 </div>
//                 </div>

//                 <div className="text">
//                  <p className="font-semibold">The Placeholder Project</p>
//                 <div className="flex items-center py-1 gap-2">
//                 <IoPersonCircle size={15} className="inline-block text-[#ADADAE]" />
//                 <p className="font-light text-[#ADADAE]">Backend engineer</p>
//                 </div>
//                 <div className="flex items-center py-1 gap-2">
//                 <TbCodeCircle2 size={15} className="inline-block  text-[#ADADAE]" />
//                 <p className="font-light text-[#ADADAE]">Golang, python, java</p>

//                 </div>
//                 </div>

//                 <div className="text">
//                  <p className="font-semibold">The Placeholder Project</p>
//                 <div className="flex items-center py-1 gap-2">
//                 <IoPersonCircle size={15} className="inline-block  text-[#ADADAE]" />
//                 <p className="font-light text-[#ADADAE]">Backend engineer</p>
//                 </div>
//                 <div className="flex items-center py-1 gap-2">
//                 <TbCodeCircle2 size={15} className="inline-block  text-[#ADADAE]" />
//                 <p className="font-light text-[#ADADAE]">Golang, python, java</p>

//                 </div>
//                 </div>

//               <div  className="outer outer1">
//               <div className="inner">
//               <div ref={ref1} className="rotation-box">
//               <div className="rotation-inner">
//               <span className="rotation-span" style={{width:`${line1Specs.length}px`, transform:`rotate(${line1Specs.angle}deg)`}}></span>
//               </div>
//               </div>
//               <Image src={frame} alt="frame" className="image img1" />
//               </div>
//               </div>

//             <div  className="outer outer2">
//             <div className="inner">
//             <div ref={ref2} className="rotation-box1">
//               <div className="rotation-inner">
//               {/* <span className="rotation-span1"></span> */}
//               </div>
//               </div>
//               <Image src={frame} alt="frame"  className="image img2" />
//             </div>
//             </div>

//             <div  className="outer outer3">
//             <div className="inner">
//             <div ref={ref3} className="rotation-box2">
//               <div className="rotation-inner">
//               <span className="rotation-span" style={{width:`${line2Specs.length}px`, transform:`rotate(${line2Specs.angle}deg)`}}></span>
//               </div>
//               </div>
//             <Image src={frame} alt="frame" className="image img3" />
//             </div></div>

//              <div className="outer outer4">
//             <div className="inner">
//             <div ref={ref4} className="rotation-box3">
//               <div className="rotation-inner">
//               <span className="rotation-span" style={{width:`${line3Specs.length}px`, transform:`rotate(-${line3Specs.angle}deg)`}}></span>
//               </div>
//             </div>
//              <Image src={frame} alt="frame" className="image img4" />
//               </div>
//             </div>

//             <div  className="outer outer5">
//             <div className="inner">
//             <div ref={ref5} className="rotation-box4">
//               <div className="rotation-inner">
//               <span className="rotation-span" style={{width:`${line4Specs.length}px`, transform:`rotate(${line4Specs.angle}deg)`}}></span>
//               </div>
//             </div>
//             <Image src={frame} alt="frame" className="image img5" />
//             </div>
//             </div>

//             </div>
//           </div>
//         </div>
//       </section>
//   </main>

//       <section id="projects" className="relative block lg:hidden bg-[url('/Projects(1).png')] bg-center bg-cover bg-no-repeat">
//         <div className="w-full py-10 lg:pt-16 lg:pb-56 lg:px-6 xl:px-32 px-4 relative">
//           <Image
//             src={Logo}
//             alt="logo"
//             className=" lg:w-[ 6.875rem] lg:h-[2.75rem] w-[3.75rem] h-[1.5rem]"
//             priority={true}
//           />

//           <h1 className="text-[rgba(254,254,254,1.00)] font-sans  font-bold text-[1.5rem] pt-8 pb-1">
//             PROJECTS
//           </h1>

//             <div className="relative flex flex-col font-sans text-white text-base gap-16">

//             <div className=" absolute -top-10 left-12   z-0 opacity-40 hover:opacity-100">
//         <p className="text-[0.75rem] text-[#A59F9F] font-serif">
//         this.onreadystatechange = function () console.log( "XMLHttpRequest.onreadystatechange" ); console.log( this )</p>
//           </div>

//             <div data-aos="fade-right" className="flex flex-col self-start items-center">
//               <Image src={frame} alt="frame" className="w-[6.375rem] h-[6.375rem]" />
//                 <p className="font-semibold text-sm font-sans text-[#FFF]">The Placeholder Project</p>
//                 <div className="flex items-center py-1 gap-2">
//                 <IoPersonCircle size={15} className="inline-block  text-[#ADADAE]" />
//                 <p className="font-light text-sm font-sans text-[#ADADAE]">Backend engineer</p>
//                 </div>
//                 <div className="relative flex items-center py-1 gap-2">
//                 <TbCodeCircle2 size={15} className="inline-block  text-[#ADADAE]" />
//                 <p className="font-light text-sm font-sans text-[#ADADAE]">Golang, python, java</p>
//                 <div className=" absolute -top-6  left-10 z-0 opacity-40 hover:opacity-100">
//         <p className="text-[0.75rem] text-[#A59F9F] font-serif">
//         this.onreadystatechange = function () console.log( "XMLHttpRequest.onreadystatechange" ); console.log( this )</p>
//         </div>
//                 </div>
//             </div>

//             <div data-aos="fade-up" className="relative flex flex-col self-end items-center">
//               <Image src={frame} alt="frame" className="w-[6.375rem] h-[6.375rem]" />
//                 <p className="font-semibold text-sm font-sans text-[#FFF]">The Placeholder Project</p>
//                 <div className="flex items-center py-1 gap-2">
//                 <IoPersonCircle size={15} className="inline-block  text-[#ADADAE]" />
//                 <p className="font-light text-sm font-sans text-[#ADADAE]">Backend engineer</p>
//                 </div>
//                 <div className="flex items-center py-1 gap-2">
//                 <TbCodeCircle2 size={15} className="inline-block  text-[#ADADAE]" />
//                 <p className="font-light text-sm font-sans text-[#ADADAE]">Golang, python, java</p>
//                 </div>
//                 <div className=" absolute -bottom-12  right-10 z-0 opacity-40 hover:opacity-100">
//         <p className="text-[0.75rem] text-[#A59F9F] font-serif">
//         this.onreadystatechange = function () console.log( "XMLHttpRequest.onreadystatechange" ); console.log( this )</p>
//         </div>
//             </div>

//             <div data-aos="fade-up-right" className="relative flex flex-col items-center self-start">
//               <Image src={frame} alt="frame" className="w-[6.375rem] h-[6.375rem]" />
//                 <p className="font-semibold text-sm font-sans text-[#FFF]">The Placeholder Project</p>
//                 <div className="flex items-center py-1 gap-2">
//                 <IoPersonCircle size={15} className="inline-block  text-[#ADADAE]" />
//                 <p className="font-light text-sm font-sans text-[#ADADAE]">Backend engineer</p>
//                 </div>
//                 <div className="flex items-center py-1 gap-2">
//                 <TbCodeCircle2 size={15} className="inline-block  text-[#ADADAE]" />
//                 <p className="font-light text-sm font-sans text-[#ADADAE]">Golang, python, java</p>
//                 </div>
//                 <div className="absolute -bottom-20 left-16  ml-auto   z-0 opacity-40 hover:opacity-100">
//         <p className="text-[0.75rem] text-[#A59F9F] font-serif">
//         this.onreadystatechange = function () console.log( "XMLHttpRequest.onreadystatechange" ); console.log( this )</p>
//         </div>
//             </div>

//             <div data-aos="fade-up-right" className="flex flex-col  self-end items-center">
//               <Image src={frame} alt="frame" className="w-[6.375rem] h-[6.375rem]" />
//                 <p className="font-semibold text-sm font-sans text-[#FFF]">The Placeholder Project</p>
//                 <div className="flex items-center py-1 gap-2">
//                 <IoPersonCircle size={15} className="inline-block  text-[#ADADAE]" />
//                 <p className="font-light text-sm font-sans text-[#ADADAE]">Backend engineer</p>
//                 </div>
//                 <div className="flex items-center py-1 gap-2">
//                 <TbCodeCircle2 size={15} className="inline-block  text-[#ADADAE]" />
//                 <p className="font-light text-sm font-sans text-[#ADADAE]">Golang, python, java</p>

//                 </div>
//             </div>

//             <div data-aos="slide-down" className="flex flex-col items-center self-start ">
//               <Image src={frame} alt="frame" className="w-[6.375rem] h-[6.375rem]" />
//                 <p className="font-semibold text-sm font-sans text-[#FFF]">The Placeholder Project</p>
//                 <div className="flex items-center py-1 gap-2">
//                 <IoPersonCircle size={15} className="inline-block  text-[#ADADAE]" />
//                 <p className="font-light text-sm font-sans text-[#ADADAE]">Backend engineer</p>
//                 </div>
//                 <div className="flex items-center py-1 gap-2">
//                 <TbCodeCircle2 size={15} className="inline-block  text-[#ADADAE]" />
//                 <p className="font-light text-sm font-sans text-[#ADADAE]">Golang, python, java</p>

//                 </div>
//             </div>

//             </div>
//           </div>
//       </section>
//   </>

//   );
// }

// export default Animation;

import React, { useEffect, useRef, useState } from "react";
import Logo from "../../../public/logo.png";
import frame from "../../../public/frame.png";
import Image from "next/image";
import Link from "next/link";
import { IoPersonCircle } from "react-icons/io5";
import { TbCodeCircle2 } from "react-icons/tb";
import Tilt from "react-parallax-tilt";
import Aos from "aos";
import "aos/dist/aos.css";
import Tooltip from "../Tooltip/Tooltip";

function Animation() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const [line1Specs, setLine1Specs] = useState({ length: 0, angle: 0 });
  const [line2Specs, setLine2Specs] = useState({ length: 0, angle: 0 });
  const [line3Specs, setLine3Specs] = useState({ length: 0, angle: 0 });
  const [line4Specs, setLine4Specs] = useState({ length: 0, angle: 0 });
  const [windowWidth, setWindowWidth] = useState(0);

  //  d=√((x2 – x1)² + (y2 – y1)²).
  function getDistance({ x1, y1 }, { x2, y2 }) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  }

  function handleResize() {
    setWindowWidth(window.innerWidth);
  }

  function getCosineAngle(adj, hyp) {
    return Math.acos(adj / hyp) * (180 / Math.PI);
  }

  function getSineAngle(opp, hyp) {
    return Math.asin(opp / hyp) * (180 / Math.PI);
  }

  useEffect(() => {
    let line1 = ref1.current?.getBoundingClientRect();
    let line2 = ref2.current?.getBoundingClientRect();
    let line3 = ref3.current?.getBoundingClientRect();
    let line4 = ref4.current?.getBoundingClientRect();
    let line5 = ref5.current?.getBoundingClientRect();

    let position1 = { x1: line1?.right, y1: line1?.top };
    let position2 = { x2: line2?.left, y2: line2?.top };

    let position3 = { x1: line2?.left, y1: line2?.top };
    let position4 = { x2: line3?.left, y2: line3?.bottom };

    let position5 = { x1: line3?.left, y1: line3?.bottom };
    let position6 = { x2: line4?.left, y2: line4?.top };

    let position7 = { x1: line4?.left, y1: line4?.top };
    let position8 = { x2: line5?.left, y2: line5?.bottom };

    let length = getDistance(position1, position2);

    let length1 = getDistance(position3, position4);

    let length2 = getDistance(position5, position6);

    let length3 = getDistance(position7, position8);

    let angle = getCosineAngle(line2?.left - line1?.right, length);

    let angle1 = getSineAngle(line3?.left - line2?.left, length1);

    let angle2 = getSineAngle(line4?.left - line3?.left, length2);

    let angle3 = getSineAngle(line5?.left - line4?.left, length3);

    setLine1Specs({ length, angle });
    setLine2Specs({ length: length1, angle: angle1 });
    setLine3Specs({ length: length2, angle: angle2 });
    setLine4Specs({ length: length3, angle: angle3 });
  }, [windowWidth]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  let timeout;
  const [active, setActive] = useState(false);

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, 200);
  };

  const hideTip = () => {
    clearInterval(timeout);
    setActive(false);
  };

  return (
    <>
      <main id="projects" className="container hidden lg:flex relative">
        <section className="tilted_container relative">
          <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} perspective={1000}>
            <div className="tilted_element w-full py-10 lg:pt-16 lg:pb-56 lg:px-6 xl:px-28 px-4">
              <div className="relative">
                <h1 className="text-[rgba(254,254,254,1.00)] font-sans  font-bold md:text-[2.5rem] pb-24 pt-6">
                  PROJECTS
                </h1>
              </div>

              <div className="flex flex-col relative element_child">
                <svg
                  className="vector"
                  xmlns="http://www.w3.org/2000/svg"
                  width="812"
                  height="225"
                  viewBox="0 0 812 225"
                  fill="none"
                >
                  <g opacity="0.1">
                    <path
                      d="M1 79L140 224L341 1L629 194L811 43"
                      stroke="#5013E3"
                      strokeWidth="2"
                      strokeLinejoin="round"
                      strokeDasharray="4 4"
                    />
                    <path
                      d="M1 79L140 224L341 1L629 194L811 43"
                      stroke="url(#paint0_linear_162_180)"
                      strokeWidth="2"
                      strokeLinejoin="round"
                      strokeDasharray="4 4"
                    />
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_162_180"
                      x1="0.999999"
                      y1="58.9999"
                      x2="833"
                      y2="62.9999"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#E518FF" stopOpacity="0.7" />
                      <stop offset="1" stopColor="#5013E3" stopOpacity="0.7" />
                    </linearGradient>
                  </defs>
                </svg>

                <div className="box font-sans text-white text-base">
                  <div className="text">
                    <p className="font-semibold">Okra</p>
                    <div className="flex items-center py-1 gap-2">
                      <IoPersonCircle
                        size={20}
                        className="inline-block  text-[#ADADAE]"
                      />
                      <p className="font-light text-[#ADADAE]">
                        Platform Engineer
                      </p>
                    </div>
                    <div className="flex items-center  gap-2">
                      <TbCodeCircle2
                        size={20}
                        className="inline-block  text-[#ADADAE] self-start"
                      />
                      <p className="font-light text-[#ADADAE] w-[30ch] self-start">
                        Dart(Flutter), Java/Kotlin (Android/GRPC), Objective
                        C(Swift), Javascript, Typescript (React Native)
                      </p>
                    </div>
                  </div>

                  <div className="text relative">
                    <p className="font-semibold">eMenu</p>
                    <div className="flex items-center py-1 gap-2">
                      <IoPersonCircle
                        size={20}
                        className="inline-block  text-[#ADADAE]"
                      />
                      <p className="font-light text-[#ADADAE]">
                        Project Lead and Android Developer
                      </p>
                    </div>
                    <div className="flex items-center py-1 gap-2">
                      <TbCodeCircle2
                        size={20}
                        className="inline-block  text-[#ADADAE] self-start"
                      />
                      <p className="font-light text-[#ADADAE] ">
                        Dart(Flutter), Java/Kotlin (Android/GRPC)
                      </p>
                    </div>
                  </div>

                  <div className="text">
                    <p className="font-semibold">Google</p>
                    <div className="flex items-center py-1 gap-2">
                      <IoPersonCircle
                        size={20}
                        className="inline-block   text-[#ADADAE]"
                      />
                      <p className="font-light text-[#ADADAE]">
                        Google Developer Student’s Clubs (GDSC) Lead
                      </p>
                    </div>
                    <div className="flex items-center py-1 gap-2">
                      <TbCodeCircle2
                        size={20}
                        className="inline-block  text-[#ADADAE]  self-start"
                      />
                      <p className="font-light text-[#ADADAE] ">
                        Public Speaking, Leadership, People Management
                      </p>
                    </div>
                  </div>

                  <div className="text">
                    <p className="font-semibold">Varscon</p>
                    <div className="flex items-center py-1 gap-2">
                      <IoPersonCircle
                        size={20}
                        className="inline-block text-[#ADADAE]"
                      />
                      <p className="font-light text-[#ADADAE]">
                        Senior Project Manager and Team Lead
                      </p>
                    </div>
                    <div className="flex items-center py-1 gap-2">
                      <TbCodeCircle2
                        size={20}
                        className="inline-block  text-[#ADADAE] self-start"
                      />
                      <p className="font-light text-[#ADADAE]">
                        Cross Team Management, Agile Framework,
                        Client-Engineering Team Interfacing
                      </p>
                    </div>
                  </div>

                  <div className="text">
                    <p className="font-semibold">The Csaen</p>
                    <div className="flex items-center py-1 gap-2">
                      <IoPersonCircle
                        size={25}
                        className="inline-block  text-[#ADADAE] self-start"
                      />
                      <p className="font-light text-[#ADADAE]">
                        Product Owner and Android Developer
                      </p>
                    </div>
                    {/* <div className="flex items-center py-1 gap-2">
                      <TbCodeCircle2
                        size={15}
                        className="inline-block  text-[#ADADAE] self-start"
                      />
                      <p className="font-light text-[#ADADAE] w-[30ch]">
                        I led the development of 3 fully functional mobile
                        applications, pioneered the creation of their
                        engineering team and introduced the team to better
                        engineering practices.
                      </p>
                    </div> */}
                  </div>

                  <div className="outer outer1">
                    <div className="inner">
                      <div ref={ref1} className="rotation-box">
                        <div className="rotation-inner">
                          <span
                            className="rotation-span"
                            style={{
                              width: `${line1Specs.length}px`,
                              transform: `rotate(${line1Specs.angle}deg)`,
                            }}
                          ></span>
                        </div>
                      </div>
                      <Tooltip
                        content="Okra is an API for accessing financial data. Led the development and release of Okra's first official React Native SDK and the relaunch of their Android and Flutter SDK. "
                        direction="right"
                      >
                        <Image src={frame} alt="frame" className="image img1" />
                      </Tooltip>
                    </div>
                  </div>

                  <div className="outer outer2 relative z-30">
                    <div className="inner relative z-30">
                      <div ref={ref2} className="rotation-box1">
                        <div className="rotation-inner">
                          {/* <span className="rotation-span1"></span> */}
                        </div>
                      </div>
                      <Tooltip
                        content="eMenu is a tech service used by top restaurants in Nigeria to render the best customer experience. As the project lead, I facilitated the optimisation of the solution with hands-on leadership, travelling to different cities to set up the service for new clients.  "
                        direction="right"
                      >
                        <Image src={frame} alt="frame" className="image img2" />
                      </Tooltip>
                    </div>
                  </div>

                  <div className="outer outer3 relative">
                    <div className="inner relative">
                      <div ref={ref3} className="rotation-box2">
                        <div className="rotation-inner">
                          <span
                            className="rotation-span"
                            style={{
                              width: `${line2Specs.length}px`,
                              transform: `rotate(${line2Specs.angle}deg)`,
                            }}
                          ></span>
                        </div>
                      </div>
                      <Tooltip
                        content="GDSCs are university-based community groups for students interested in Google technologies and programming. As a GDSC lead, my primary drive was to contribute to my local community by educating them about diverse tech paths and technologies beyond their current ecosystem."
                        direction="right"
                      >
                        <Image src={frame} alt="frame" className="image img3" />
                      </Tooltip>
                    </div>
                  </div>

                  <div className="outer outer4">
                    <div className="inner relative">
                      <div ref={ref4} className="rotation-box3">
                        <div className="rotation-inner">
                          <span
                            className="rotation-span"
                            style={{
                              width: `${line3Specs.length}px`,
                              transform: `rotate(-${line3Specs.angle}deg)`,
                            }}
                          ></span>
                        </div>
                      </div>
                      <Tooltip
                        content="Provides technical solutions for businesses through different services tailored to customer needs. I pioneered the engineering team and established pace-setting processes, raking in clients. "
                        direction="left"
                      >
                        <Image src={frame} alt="frame" className="image img4" />
                      </Tooltip>
                    </div>
                  </div>

                  <div className="outer outer5">
                    <div className="inner">
                      <div ref={ref5} className="rotation-box4">
                        <div className="rotation-inner">
                          <span
                            className="rotation-span"
                            style={{
                              width: `${line4Specs.length}px`,
                              transform: `rotate(${line4Specs.angle}deg)`,
                            }}
                          ></span>
                        </div>
                      </div>
                      <Tooltip
                        content="I led the development of 3 fully functional mobile applications, pioneered the creation of their engineering team and introduced the team to better engineering practices.  "
                        direction="left"
                      >
                        <Image src={frame} alt="frame" className="image img5" />
                      </Tooltip>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Tilt>
        </section>
      </main>

      <main
        id="project"
        className="relative block lg:hidden bg-[url('/Projects(1).png')] bg-center bg-cover bg-no-repeat"
      >
        <div className="w-full py-10 lg:pt-16 lg:pb-56 lg:px-6 xl:px-32 px-4 relative">
          <h1 className="text-[rgba(254,254,254,1.00)] font-sans  font-bold text-[1.5rem] pt-2 pb-4">
            PROJECTS
          </h1>

          <div className="relative flex flex-col font-sans text-white text-base gap-16">
            <div className=" absolute -top-10 left-12   z-0 opacity-25 hover:opacity-50">
              <p className="text-[0.75rem] text-[#A59F9F] font-serif font-light">
                this.onreadystatechange = function () console.log(
                "XMLHttpRequest.onreadystatechange" ); console.log( this )
              </p>
            </div>

            <div data-aos="fade-right" className="flex flex-col self-start">
              <Tooltip
                content="Okra is an API for accessing financial data. Led the development and release of Okra's first official React Native SDK and the relaunch of their Android and Flutter SDK. "
                direction="right"
                width="10rem"
              >
                <Image
                  src={frame}
                  alt="frame"
                  className="w-[6.375rem] h-[6.375rem]"
                />{" "}
              </Tooltip>
              <p className="font-semibold text-sm font-sans text-[#FFF]">
                Okra{" "}
              </p>
              <div className="flex items-center py-1 gap-2">
                <IoPersonCircle
                  size={15}
                  className="inline-block  text-[#ADADAE]"
                />
                <p className="font-light text-sm font-sans text-[#ADADAE]">
                  Platform Engineer
                </p>
              </div>
              <div className="relative  flex py-1 gap-2">
                <TbCodeCircle2
                  size={30}
                  className="inline-block  text-[#ADADAE] self-start"
                />
                <p className="font-light text-sm font-sans text-[#ADADAE] ">
                  Dart(Flutter), Java/Kotlin (Android/GRPC), Objective C(Swift),
                  Javascript, Typescript (React Native)
                </p>
                <div className=" absolute -top-6  left-10 z-0 opacity-25 hover:opacity-50">
                  <p className="text-[0.75rem] text-[#A59F9F] font-serif font-light">
                    this.onreadystatechange = function () console.log(
                    "XMLHttpRequest.onreadystatechange" ); console.log( this )
                  </p>
                </div>
              </div>
            </div>

            <div
              data-aos="fade-up"
              className="relative flex flex-col self-end "
            >
              <div className="flex  flex-col">
                <Tooltip
                  content="eMenu is a tech service used by top restaurants in Nigeria to render the best customer experience. As the project lead, I facilitated the optimisation of the solution with hands-on leadership, travelling to different cities to set up the service for new clients.  "
                  direction="left"
                  width="14rem"
                >
                  <Image
                    src={frame}
                    alt="frame"
                    className="w-[6.375rem] h-[6.375rem]"
                  />{" "}
                </Tooltip>
                <p className="font-semibold  text-sm font-sans text-[#FFF]">
                  {" "}
                  eMenu{" "}
                </p>
              </div>
              <div className="flex items-center py-1 gap-2">
                <IoPersonCircle
                  size={15}
                  className="inline-block  text-[#ADADAE]  self-start"
                />
                <p className="font-light text-sm font-sans text-[#ADADAE] w-[20ch]">
                  Project Lead and Android Developer
                </p>
              </div>
              <div className="flex items-center py-1 gap-2">
                <TbCodeCircle2
                  size={15}
                  className="inline-block  self-start  text-[#ADADAE]"
                />
                <p className="font-light text-sm font-sans text-[#ADADAE] w-[20ch]">
                  Dart(Flutter), Java/Kotlin (Android/GRPC){" "}
                </p>
              </div>
              <div className=" absolute -bottom-12  right-10 z-0 opacity-25 hover:opacity-50">
                <p className="text-[0.75rem] text-[#A59F9F] font-serif font-light">
                  this.onreadystatechange = function () console.log(
                  "XMLHttpRequest.onreadystatechange" ); console.log( this )
                </p>
              </div>
            </div>

            <div
              data-aos="fade-up-right"
              className="relative flex flex-col  self-start"
            >
              <Tooltip
                content="GDSCs are university-based community groups for students interested in Google technologies and programming. As a GDSC lead, my primary drive was to contribute to my local community by educating them about diverse tech paths and technologies beyond their current ecosystem."
                direction="right"
                width="9.5rem"
              >
                <Image
                  src={frame}
                  alt="frame"
                  className="w-[6.375rem] h-[6.375rem]"
                />
              </Tooltip>
              <p className="font-semibold text-sm font-sans text-[#FFF]">
                Google{" "}
              </p>
              <div className="flex items-center py-1 gap-2">
                <IoPersonCircle
                  size={15}
                  className="inline-block  text-[#ADADAE]"
                />
                <p className="font-light text-sm font-sans text-[#ADADAE] ">
                  Google Developer Student’s Clubs (GDSC) Lead{" "}
                </p>
              </div>
              <div className="flex items-center py-1 gap-2">
                <TbCodeCircle2
                  size={15}
                  className="inline-block  text-[#ADADAE]"
                />
                <p className="font-light text-sm font-sans text-[#ADADAE] ">
                  Public Speaking, Leadership, People Management{" "}
                </p>
              </div>
              <div className="absolute -bottom-20 left-16  ml-auto   z-0 opacity-25 hover:opacity-50">
                <p className="text-[0.75rem] text-[#A59F9F] font-serif font-light">
                  this.onreadystatechange = function () console.log(
                  "XMLHttpRequest.onreadystatechange" ); console.log( this )
                </p>
              </div>
            </div>

            <div data-aos="fade-up-right" className="flex flex-col  self-end">
              <Tooltip
                content="Provides technical solutions for businesses through different services tailored to customer needs. I pioneered the engineering team and established pace-setting processes, raking in clients. "
                direction="left"
                width="11rem"
              >
                <Image
                  src={frame}
                  alt="frame"
                  className="w-[6.375rem] h-[6.375rem]"
                />
              </Tooltip>

              <p className="font-semibold text-sm font-sans text-[#FFF]">
                Varscon{" "}
              </p>
              <div className="flex items-center py-1 gap-2">
                <IoPersonCircle
                  size={15}
                  className="inline-block  text-[#ADADAE] self-start"
                />
                <p className="font-light text-sm font-sans text-[#ADADAE] w-[25ch]">
                  Senior Project Manager and Team Lead
                </p>
              </div>
              <div className="flex items-center py-1 gap-2">
                <TbCodeCircle2
                  size={15}
                  className="inline-block  text-[#ADADAE] self-start"
                />
                <p className="font-light text-sm font-sans text-[#ADADAE] w-[25ch]">
                  Cross Team Management, Agile Framework, Client-Engineering
                  Team Interfacing{" "}
                </p>
              </div>
            </div>

            <div
              data-aos="slide-down"
              className="flex flex-col self-start "
            >
              <Tooltip
                content="I led the development of 3 fully functional mobile applications, pioneered the creation of their engineering team and introduced the team to better engineering practices. "
                direction="right"
                width="10rem"
              >
                <Image
                  src={frame}
                  alt="frame"
                  className="w-[6.375rem] h-[6.375rem]"
                />
              </Tooltip>
              <p className="font-semibold text-sm font-sans text-[#FFF]">
              The Csaen
              </p>
              <div className="flex items-center py-1 gap-2">
                <IoPersonCircle
                  size={15}
                  className="inline-block  text-[#ADADAE]"
                />
                <p className="font-light text-sm font-sans text-[#ADADAE]">
                Product Owner and Android Developer
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Animation;

// import React, { useEffect, useRef, useState } from "react";
// import Logo from "../../../public/logo.png";
// import frame from "../../../public/frame.png";
// import Image from "next/image";
// import Link from "next/link";
// import {IoPersonCircle} from "react-icons/io5";
// import {TbCodeCircle2} from "react-icons/tb";
// import Tilt from 'react-parallax-tilt';
// import Aos from "aos";
// import "aos/dist/aos.css";

// function Animation() {
//   const ref1 = useRef(null);
//   const ref2 = useRef(null);
//   const ref3 = useRef(null);
//   const ref4 = useRef(null);
//   const ref5 = useRef(null);
//   const[line1Specs, setLine1Specs] = useState({length: 0, angle: 0});
//   const[line2Specs, setLine2Specs] = useState({length: 0, angle: 0});
//   const[line3Specs, setLine3Specs] = useState({length: 0, angle: 0});
//   const[line4Specs, setLine4Specs] = useState({length: 0, angle: 0});
//   const[windowWidth, setWindowWidth] = useState(0);

//   //  d=√((x2 – x1)² + (y2 – y1)²).
//  function getDistance({x1, y1}, {x2, y2}){
//   return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
//  }

//   function handleResize(){
//     setWindowWidth(window.innerWidth)
//   }

//   function getCosineAngle(adj, hyp){
//     return Math.acos(adj/hyp) * (180/Math.PI)
//   }

//   function getSineAngle(opp, hyp){
//     return Math.asin(opp/hyp) * (180/Math.PI)
//   }

//   useEffect(() => {
//     let line1 = ref1.current?.getBoundingClientRect();
//     let line2 = ref2.current?.getBoundingClientRect();
//     let line3 = ref3.current?.getBoundingClientRect();
//     let line4 = ref4.current?.getBoundingClientRect();
//     let line5 = ref5.current?.getBoundingClientRect();

//     let position1 = {x1: line1?.right, y1: line1?.top};
//     let position2 = {x2: line2?.left, y2: line2?.top};

//     let position3 = {x1: line2?.left, y1: line2?.top};
//     let position4 = {x2: line3?.left, y2: line3?.bottom};

//     let position5 = {x1: line3?.left, y1: line3?.bottom};
//     let position6 = {x2: line4?.left, y2: line4?.top};

//     let position7 = {x1: line4?.left, y1: line4?.top};
//     let position8 = {x2: line5?.left, y2: line5?.bottom};

//     let length = getDistance(position1, position2);

//     let length1 = getDistance(position3, position4);

//     let length2 = getDistance(position5, position6);

//     let length3 = getDistance(position7, position8);

//     let angle = getCosineAngle(line2?.left - line1?.right, length);

//     let angle1 = getSineAngle(line3?.left - line2?.left, length1)

//     let angle2 = getSineAngle(line4?.left - line3?.left, length2)

//     let angle3 = getSineAngle(line5?.left - line4?.left, length3)

//     setLine1Specs({length, angle})
//     setLine2Specs({length:length1, angle:angle1})
//     setLine3Specs({length:length2, angle:angle2})
//     setLine4Specs({length:length3, angle:angle3})

//   }, [windowWidth])

//   useEffect(() => {
//   window.addEventListener("resize", handleResize);
//   return () => window.removeEventListener("resize", handleResize)
//   }, []);

//   useEffect(() => {
//     Aos.init({ duration: 2000 });
//   }, []);

//   return (
//   <>

//    <main id="projects" className="container hidden lg:flex relative">
//       <section  className="tilted_container relative">
//       <Tilt tiltMaxAngleX={20} tiltMaxAngleY={20} perspective={1000} >
//         <div  className="tilted_element w-full py-10 lg:pt-16 lg:pb-56 lg:px-6 xl:px-28 px-4">

//           <div className="relative">
//           <h1 className="text-[rgba(254,254,254,1.00)] font-sans  font-bold md:text-[2.5rem] pb-24 pt-6">
//             PROJECTS
//           </h1>
//           <div className="absolute  top-0 left-auto  z-0 opacity-25 hover:opacity-50 hover:animate-none w-[40ch] ">
//         <p className="text-[0.75rem] text-[#A59F9F]  font-serif font-light">
//         this.onreadystatechange = function () console.log( "XMLHttpRequest.onreadystatechange" ); console.log( this )</p>
//         </div>
//           </div>
//         </div>
//         </Tilt>

//         <Tilt tiltMaxAngleX={20} tiltMaxAngleY={20} >
//         <div className="flex flex-col relative element_child element">

//           <svg className="vector" xmlns="http://www.w3.org/2000/svg" width="812" height="225" viewBox="0 0 812 225" fill="none">
//   <g opacity="0.1">
//     <path d="M1 79L140 224L341 1L629 194L811 43" stroke="#5013E3" strokeWidth="2" strokeLinejoin="round" strokeDasharray="4 4"/>
//     <path d="M1 79L140 224L341 1L629 194L811 43" stroke="url(#paint0_linear_162_180)" strokeWidth="2" strokeLinejoin="round" strokeDasharray="4 4"/>
//   </g>
//   <defs>
//     <linearGradient id="paint0_linear_162_180" x1="0.999999" y1="58.9999" x2="833" y2="62.9999" gradientUnits="userSpaceOnUse">
//       <stop stopColor="#E518FF" stopOpacity="0.7"/>
//       <stop offset="1" stopColor="#5013E3" stopOpacity="0.7"/>
//     </linearGradient>
//   </defs>
// </svg>

//             <div className="box font-sans text-white text-base">
//             <div className="text">
//                  <p className="font-semibold">The Placeholder Project</p>
//                 <div className="flex items-center py-1 gap-2">
//                 <IoPersonCircle size={15} className="inline-block  text-[#ADADAE]" />
//                 <p className="font-light text-[#ADADAE]">Backend engineer</p>
//                 </div>
//                 <div className="flex items-center py-1 gap-2">
//                 <TbCodeCircle2 size={15} className="inline-block  text-[#ADADAE]" />
//                 <p className="font-light text-[#ADADAE]">Golang, python, java</p>

//                 </div>
//                 </div>

//                 <div className="text relative">
//                  <p className="font-semibold">The Placeholder Project</p>
//                 <div className="flex items-center py-1 gap-2">
//                 <IoPersonCircle size={15} className="inline-block  text-[#ADADAE]" />
//                 <p className="font-light text-[#ADADAE]">Backend engineer</p>
//                 </div>
//                 <div className="flex items-center py-1 gap-2">
//                 <TbCodeCircle2 size={15} className="inline-block  text-[#ADADAE]" />
//                 <p className="font-light text-[#ADADAE]">Golang, python, java</p>
//                 <div className=" absolute top-9 left-1  z-0 opacity-20 hover:opacity-30 hover:animate-none w-[30ch]">
//         <p className="text-[0.75rem] font-light text-[#A59F9F]  font-serif">
//         def __init__(self, input_file, cache_index=True): if isinstance(input_file, basestring): self.source_file = open(input_file,'rb') filename = input_file</p>
//         </div>
//                 </div>
//                 </div>

//                 <div className="text">
//                  <p className="font-semibold">The Placeholder Project</p>
//                 <div className="flex items-center py-1 gap-2">
//                 <IoPersonCircle size={15} className="inline-block   text-[#ADADAE]" />
//                 <p className="font-light text-[#ADADAE]">Backend engineer</p>
//                 </div>
//                 <div className="flex items-center py-1 gap-2">
//                 <TbCodeCircle2 size={15} className="inline-block  text-[#ADADAE]" />
//                 <p className="font-light text-[#ADADAE]">Golang, python, java</p>

//                 </div>
//                 </div>

//                 <div className="text">
//                  <p className="font-semibold">The Placeholder Project</p>
//                 <div className="flex items-center py-1 gap-2">
//                 <IoPersonCircle size={15} className="inline-block text-[#ADADAE]" />
//                 <p className="font-light text-[#ADADAE]">Backend engineer</p>
//                 </div>
//                 <div className="flex items-center py-1 gap-2">
//                 <TbCodeCircle2 size={15} className="inline-block  text-[#ADADAE]" />
//                 <p className="font-light text-[#ADADAE]">Golang, python, java</p>

//                 </div>
//                 </div>

//                 <div className="text">
//                  <p className="font-semibold">The Placeholder Project</p>
//                 <div className="flex items-center py-1 gap-2">
//                 <IoPersonCircle size={15} className="inline-block  text-[#ADADAE]" />
//                 <p className="font-light text-[#ADADAE]">Backend engineer</p>
//                 </div>
//                 <div className="flex items-center py-1 gap-2">
//                 <TbCodeCircle2 size={15} className="inline-block  text-[#ADADAE]" />
//                 <p className="font-light text-[#ADADAE]">Golang, python, java</p>

//                 </div>
//                 </div>

//               <div  className="outer outer1">
//               <div className="inner">
//               <div ref={ref1} className="rotation-box">
//               <div className="rotation-inner">
//               <span className="rotation-span" style={{width:`${line1Specs.length}px`, transform:`rotate(${line1Specs.angle}deg)`}}></span>
//               </div>
//               </div>
//               <Image src={frame} alt="frame" className="image img1" />
//               </div>
//               </div>

//             <div  className="outer outer2 relative z-30">
//             <div className="inner relative z-30">
//             <div ref={ref2} className="rotation-box1">
//               <div className="rotation-inner">
//               {/* <span className="rotation-span1"></span> */}
//               </div>
//               </div>
//               <Image src={frame} alt="frame"  className="image img2" />
//               <div className=" absolute -top-16 left-12  z-0 opacity-20 hover:opacity-30 hover:animate-none w-[30ch]">
//         <p className="text-[0.75rem] font-light text-[#A59F9F]  font-serif">
//         if not os.path.isfile(filename+'.lineindex'): bytes_counter = 0 for line in self.source_file: bytes_counter += len(line) if len(line.strip()): self.index.add(bytes_counter-len(line))</p>
//         </div>

//         <div className=" absolute top-14 right-36  z-0 opacity-20 hover:opacity-30 hover:animate-none w-[30ch]">
//         <p className="text-[0.75rem] font-light text-[#A59F9F]  font-serif">
//         if not os.path.isfile(filename+'.lineindex'): bytes_counter = 0 for line in self.source_file: bytes_counter += len(line) if len(line.strip()): self.index.add(bytes_counter-len(line))</p>
//         </div>
//             </div>
//             </div>

//             <div  className="outer outer3 relative">
//             <div className="inner relative">
//             <div ref={ref3} className="rotation-box2">
//               <div className="rotation-inner">
//               <span className="rotation-span" style={{width:`${line2Specs.length}px`, transform:`rotate(${line2Specs.angle}deg)`}}></span>
//               </div>
//               </div>
//             <Image src={frame} alt="frame" className="image img3 z-50" />
//             <div className=" absolute top-16 left-16  z-0 opacity-10 hover:opacity-25 hover:animate-none w-[30ch]">
//         <p className="text-[0.75rem] font-light text-[#A59F9F]  font-serif">
//         def __init__(self, input_file, cache_index=True): if isinstance(input_file, basestring): self.source_file = open(input_file,'rb') filename = input_file</p>
//         </div>
//             </div>
//             </div>

//              <div className="outer outer4">
//             <div className="inner relative">
//             <div ref={ref4} className="rotation-box3">
//               <div className="rotation-inner">
//               <span className="rotation-span" style={{width:`${line3Specs.length}px`, transform:`rotate(-${line3Specs.angle}deg)`}}></span>
//               </div>
//             </div>
//              <Image src={frame} alt="frame" className="image img4" />
//              <div className=" absolute top-40 left-28  z-0 opacity-25 hover:opacity-50 hover:animate-none w-[30ch]">
//         <p className="text-[0.75rem] font-light text-[#A59F9F]  font-serif">
//         this.onreadystatechange = function () console.log( "XMLHttpRequest.onreadystatechange" ); console.log( this )</p>
//         </div>
//             </div>
//             </div>

//             <div  className="outer outer5">
//             <div className="inner">
//             <div ref={ref5} className="rotation-box4">
//               <div className="rotation-inner">
//               <span className="rotation-span" style={{width:`${line4Specs.length}px`, transform:`rotate(${line4Specs.angle}deg)`}}></span>
//               </div>
//             </div>
//             <Image src={frame} alt="frame" className="image img5" />
//             </div>
//             </div>

//             </div>
//          </div>
//          </Tilt>
//       </section>
//   </main>

//   <section id="projects" className="relative block lg:hidden bg-[url('/Projects(1).png')] bg-center bg-cover bg-no-repeat">
//         <div className="w-full py-10 lg:pt-16 lg:pb-56 lg:px-6 xl:px-32 px-4 relative">

//           <h1 className="text-[rgba(254,254,254,1.00)] font-sans  font-bold text-[1.5rem] pt-2 pb-4">
//             PROJECTS
//           </h1>

//             <div className="relative flex flex-col font-sans text-white text-base gap-16">

//             <div className=" absolute -top-10 left-12   z-0 opacity-25 hover:opacity-50">
//         <p className="text-[0.75rem] text-[#A59F9F] font-serif font-light">
//         this.onreadystatechange = function () console.log( "XMLHttpRequest.onreadystatechange" ); console.log( this )</p>
//           </div>

//             <div data-aos="fade-right" className="flex flex-col self-start items-center">
//               <Image src={frame} alt="frame" className="w-[6.375rem] h-[6.375rem]" />
//                 <p className="font-semibold text-sm font-sans text-[#FFF]">The Placeholder Project</p>
//                 <div className="flex items-center py-1 gap-2">
//                 <IoPersonCircle size={15} className="inline-block  text-[#ADADAE]" />
//                 <p className="font-light text-sm font-sans text-[#ADADAE]">Backend engineer</p>
//                 </div>
//                 <div className="relative flex items-center py-1 gap-2">
//                 <TbCodeCircle2 size={15} className="inline-block  text-[#ADADAE]" />
//                 <p className="font-light text-sm font-sans text-[#ADADAE]">Golang, python, java</p>
//                 <div className=" absolute -top-6  left-10 z-0 opacity-25 hover:opacity-50">
//         <p className="text-[0.75rem] text-[#A59F9F] font-serif font-light">
//         this.onreadystatechange = function () console.log( "XMLHttpRequest.onreadystatechange" ); console.log( this )</p>
//         </div>
//                 </div>
//             </div>

//             <div data-aos="fade-up" className="relative flex flex-col self-end items-center">
//               <Image src={frame} alt="frame" className="w-[6.375rem] h-[6.375rem]" />
//                 <p className="font-semibold text-sm font-sans text-[#FFF]">The Placeholder Project</p>
//                 <div className="flex items-center py-1 gap-2">
//                 <IoPersonCircle size={15} className="inline-block  text-[#ADADAE]" />
//                 <p className="font-light text-sm font-sans text-[#ADADAE]">Backend engineer</p>
//                 </div>
//                 <div className="flex items-center py-1 gap-2">
//                 <TbCodeCircle2 size={15} className="inline-block  text-[#ADADAE]" />
//                 <p className="font-light text-sm font-sans text-[#ADADAE]">Golang, python, java</p>
//                 </div>
//                 <div className=" absolute -bottom-12  right-10 z-0 opacity-25 hover:opacity-50">
//         <p className="text-[0.75rem] text-[#A59F9F] font-serif font-light">
//         this.onreadystatechange = function () console.log( "XMLHttpRequest.onreadystatechange" ); console.log( this )</p>
//         </div>
//             </div>

//             <div data-aos="fade-up-right" className="relative flex flex-col items-center self-start">
//               <Image src={frame} alt="frame" className="w-[6.375rem] h-[6.375rem]" />
//                 <p className="font-semibold text-sm font-sans text-[#FFF]">The Placeholder Project</p>
//                 <div className="flex items-center py-1 gap-2">
//                 <IoPersonCircle size={15} className="inline-block  text-[#ADADAE]" />
//                 <p className="font-light text-sm font-sans text-[#ADADAE]">Backend engineer</p>
//                 </div>
//                 <div className="flex items-center py-1 gap-2">
//                 <TbCodeCircle2 size={15} className="inline-block  text-[#ADADAE]" />
//                 <p className="font-light text-sm font-sans text-[#ADADAE]">Golang, python, java</p>
//                 </div>
//                 <div className="absolute -bottom-20 left-16  ml-auto   z-0 opacity-25 hover:opacity-50">
//         <p className="text-[0.75rem] text-[#A59F9F] font-serif font-light">
//         this.onreadystatechange = function () console.log( "XMLHttpRequest.onreadystatechange" ); console.log( this )</p>
//         </div>
//             </div>

//             <div data-aos="fade-up-right" className="flex flex-col  self-end items-center">
//               <Image src={frame} alt="frame" className="w-[6.375rem] h-[6.375rem]" />
//                 <p className="font-semibold text-sm font-sans text-[#FFF]">The Placeholder Project</p>
//                 <div className="flex items-center py-1 gap-2">
//                 <IoPersonCircle size={15} className="inline-block  text-[#ADADAE]" />
//                 <p className="font-light text-sm font-sans text-[#ADADAE]">Backend engineer</p>
//                 </div>
//                 <div className="flex items-center py-1 gap-2">
//                 <TbCodeCircle2 size={15} className="inline-block  text-[#ADADAE]" />
//                 <p className="font-light text-sm font-sans text-[#ADADAE]">Golang, python, java</p>

//                 </div>
//             </div>

//             <div data-aos="slide-down" className="flex flex-col items-center self-start ">
//               <Image src={frame} alt="frame" className="w-[6.375rem] h-[6.375rem]" />
//                 <p className="font-semibold text-sm font-sans text-[#FFF]">The Placeholder Project</p>
//                 <div className="flex items-center py-1 gap-2">
//                 <IoPersonCircle size={15} className="inline-block  text-[#ADADAE]" />
//                 <p className="font-light text-sm font-sans text-[#ADADAE]">Backend engineer</p>
//                 </div>
//                 <div className="flex items-center py-1 gap-2">
//                 <TbCodeCircle2 size={15} className="inline-block  text-[#ADADAE]" />
//                 <p className="font-light text-sm font-sans text-[#ADADAE]">Golang, python, java</p>

//                 </div>
//             </div>

//             </div>
//           </div>
//       </section>
//   </>
//   );
// }

// export default Animation;
