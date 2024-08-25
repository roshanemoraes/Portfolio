import React from "react";
import { HERO_CONTENT } from "./../constants/index";
import profilePic from "./../assets/20240520_144938.jpg";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

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
      <div className="flex flex-wrap">
        <div className="w-full lg:mt-[70px] mt-[130px] lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-bold tracking-tight lg:mt-16 lg:text-8xl"
            >
              Adam Moraes
            </motion.h1>
            <motion.div
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="text-2xl font-light tracking-tight"
            >
              I'm a
            </motion.div>
            <div className="sm:h-[300px] lg:min-h-[50px]  lg:h-auto">
              <motion.span
                variants={container(0.6)}
                initial="hidden"
                animate="visible"
                className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-6xl pb-2 tracking-tight text-transparent "
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

            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-[890px] py-6 font-light tracking-tighter text-justify"
              style={{ wordSpacing: "0.3em" }}
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full sm:ml-[100px] lg:w-1/3 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profilePic}
              alt="Adam Moraes"
            ></motion.img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
