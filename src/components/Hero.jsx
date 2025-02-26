// import React from "react";
import { HERO_CONTENT } from "./../constants/index";
// import profilePic from "./../assets/20240520_144938.jpg";
import profilePic from "./../assets/Profile-bg-remove-1.png";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import uomLogo from "./../assets/uom-logo.png";
import wos2Logo from "./../assets/wso2-logo.svg";
// import { Button } from "react-bootstrap/Button";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="grid grid-cols-2">
        <div className="col-span-2 lg:col-span-1">aa</div>
        <div className="col-span-2 lg:col-span-1">ss</div>
      </div>
      <div className="flex flex-wrap">
        <div className="lg:mt-[70px] mt-[130px] w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <div className="flex items-center text-[25px] lg:mt-16">
              Hello I'm
            </div>

            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-6 text-6xl font-bold tracking-tight lg:mt-3 lg:text-8xl text-black"
            >
              Adam Moraes
            </motion.h1>
            <motion.div
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="text-2xl font-light tracking-tight text-black"
            ></motion.div>
            <div className="sm:h-[300px] lg:min-h-[50px]  lg:h-auto">
              <motion.span
                variants={container(0.6)}
                initial="hidden"
                animate="visible"
                className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text lg:text-6xl text-2xl  pb-2 tracking-tight text-transparent "
                style={{
                  opacity: 1,
                  willChange: "auto",
                  transform: "none",
                }}
              >
                <Typewriter
                  words={["Full Stack Developer", "Software Engineer"]}
                  loop={false} // Set to false to run through each word once
                  cursor
                  cursorStyle="|"
                  typeSpeed={50}
                  deleteSpeed={30}
                  delaySpeed={1000} // Adjust delay between words
                />
              </motion.span>
            </div>
            <div className="sm:h-[180px] ">
              <div className="grid grid-cols-12 mt-[40px] ml-[40px]">
                <div className="col-span-1 flex items-center">
                  <motion.img
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 1.2 }}
                    src={uomLogo}
                    alt="Adam Moraes"
                    style={{
                      borderRadius: "20px",
                      width: "30px",
                      height: "30px",
                    }}
                  ></motion.img>
                </div>
                <div className="col-span-11 text-[#71717a] flex items-center">
                  <div>
                    Computer Science & Engineering Undergraduate
                    <br /> Faculty of Engineering, University of Moratuwa
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-12 mt-[10px] ml-[40px]">
                <div className="col-span-1 flex items-center">
                  <motion.img
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 1.2 }}
                    src={wos2Logo}
                    alt="Adam Moraes"
                    style={{
                      borderRadius: "20px",
                      width: "60px",
                      height: "60px",
                    }}
                  ></motion.img>
                </div>
                <div className="col-span-10 text-[#71717a] flex items-center ml-[10px]">
                  Intern At WSO2
                </div>
              </div>
            </div>
            <div className="flex flex-start">
              <button className="bg-[#fff] hover:bg-black hover:text-white text-black font-bold text-[13px] py-3 px-4 rounded-full border-black border-[1px]">
                Download CV
              </button>
              <button className="bg-[#71717a] ml-[20px] hover:bg-black text-white font-bold text-[13px] py-3 px-4 rounded-full">
                Contact Info
              </button>
            </div>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-[890px] hidden xs:block py-6 text-[#71717a] tracking-tighter text-justify"
              style={{ wordSpacing: "0.3em" }}
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className=" w-1/2  lg:p-8 pt-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0, delay: 0 },
                border: "0.5px solid #a3a3a3",
              }}
              src={profilePic}
              alt="Adam Moraes"
              style={{
                borderRadius: "20px",
                border: "0.5px solid #a3a3a3",
                width: "380px",
                height: "520px",
              }}
            ></motion.img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
