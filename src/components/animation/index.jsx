import React, { useEffect } from "react";
import styles from "./Animation.module.css";
import Logo from "../../../public/logo.png";
import frame from "../../../public/frame.png";
import Image from "next/image";
import Link from "next/link";

function Animation() {
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
    <main className="container">
      <section className="tilted_container">
        <div className="tilted_element w-full py-10 lg:py-16 lg:px-6 xl:px-32 px-4 relative">
          <Image
            src={Logo}
            alt="logo"
            className=" w-[ 6.875rem] h-[2.75rem]"
            priority={true}
          />

          <h1 className="text-[rgba(254,254,254,1.00)] font-sans  font-bold md:text-[2.5rem] py-4">
            PROJECTS
          </h1>

          <div className="flex">
            
            <div className="relative top-52 left-[42%] flex justify-center">
              <Image src={frame} alt="frame" />
              <div className="line1"></div>
            </div>

            <div className="relative bottom-10 left-[28%] ">
              <Image src={frame} alt="frame" />
              <div className="line"></div>

            </div>

            <div className="relative bottom-20 right-[28%] ">
              <Image src={frame} alt="frame" />
              <div className="line"></div>

            </div>

            <div className="relative top-[40%]  left-[16%] ">
              <Image src={frame} alt="frame" />
              <div className="line1"></div>
            </div>

            <div className="absolute top-[30%]  right-[16%] ">
              <Image src={frame} alt="frame" />
            </div>           
          </div>
        </div>
      </section>
      {/* <a
        href="https://google.com"
        target="_blank"
        className={styles.google_link}
      >
        Google
      </a> */}
    </main>
  );
}

export default Animation;
