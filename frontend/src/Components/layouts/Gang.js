import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import fox from "../../assets/images/gang/fox.png";
import bike from "../../assets/images/gang/bike.png";
import boys from "../../assets/images/gang/boys.png";
import cap from "../../assets/images/gang/cap.png";
import juice from "../../assets/images/gang/juice.png";
import bus from "../../assets/images/gang/bus.png";
import moon from "../../assets/images/gang/moon.png";
import spider from "../../assets/images/gang/spider.png";
import star from "../../assets/images/gang/star.png";
import note from "../../assets/images/gang/note.png";
import mobile from "../../assets/images/gang/mobile.png";
import laptop from "../../assets/images/gang/laptop.png";

export default function Gang() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      setScreenHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-full h-screen relative overflow-hidden flex items-center justify-center  ">
      <motion.div
        className="absolute right-0 bottom-0  overflow-hidden"
        initial={{ x: "60vw", y: 0 }}
        animate={{ x: "-100vw", y: 0 }}
        transition={{
          duration: `45`,

          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
      >
        <motion.img
          src={bus}
          alt="foxImage"
          className="w-[150px] sm:w-[200px] md:w-[250px] h-auto"
        />
      </motion.div>
      {/* <motion.div
        className="absolute right-0 top-10  "
        initial={{ x: "0vw", y: "0vh" }}
        animate={{ x: "0", y: "10vh" }}
        transition={{
          duration: `40`,

          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
      >
        <motion.img
          src={spider}
          alt="foxImage"
          className="w-[150px] sm:w-[200px] md:w-[250px] h-auto"
        />
      </motion.div> */}

      <motion.div
        className="absolute right-5   z-3"
        initial={{ x: "0vw", y: 0 }}
        animate={{ x: "0", y: 30 }}
        end={{ x: "0", y: 0 }}
        transition={{
          duration: `10`,

          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
      >
        <motion.img
          src={boys}
          alt="foxImage"
          className="w-[70px] sm:w-[120px] md:w-[150px] h-auto"
        />
      </motion.div>

      <motion.div
        className="absolute left-10   z-3"
        initial={{ x: 0, y: 0 }}
        animate={{ x: 10, y: 30 }}
        end={{ x: "0", y: 0 }}
        transition={{
          duration: `10`,

          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
      >
        <motion.img
          src={cap}
          alt="foxImage"
          className="w-[70px] sm:w-[100px] md:w-[150px] h-auto"
        />
      </motion.div>
      <motion.div
        className="absolute left-10 top-20  z-3 "
        initial={{ x: "90vw", y: 0 }}
        animate={{ x: "-100vw", y: 0 }}
        transition={{
          duration: `20`,

          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
      >
        <motion.img
          src={bike}
          alt="foxImage"
          className="w-[150px] sm:w-[200px] md:w-[250px] h-auto"
        />
      </motion.div>
      {/* <motion.div
        className="absolute left-10 top-20  z-3 "
        initial={{ x: "90vw", y: 0 }}
        animate={{ x: "-100vw", y: 0 }}
        end={{ x: "0", y: 0 }}
        transition={{
          duration: `35`,

          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
      >
        <motion.img
          src={moon}
          alt="foxImage"
          className="w-[70px] sm:w-[100px] md:w-[150px] h-auto"
        />
      </motion.div> */}
      <motion.div
        className="absolute left-0 top-10  z-3"
        initial={{ x: 30, y: 0 }}
        animate={{ x: 0, y: 0 }}
        end={{ x: "0", y: 0 }}
        transition={{
          duration: `20`,

          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
      >
        <motion.img
          src={star}
          alt="foxImage"
          className="w-[50px] sm:w-[90px] md:w-[120px] h-auto"
        />
      </motion.div>
      <motion.div
        className="absolute bottom-40   z-3"
        initial={{ x: 40, y: 0 }}
        animate={{ x: 0, y: 20 }}
        end={{ x: "0", y: 0 }}
        transition={{
          duration: `15`,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
      >
        <motion.img
          src={juice}
          alt="foxImage"
          className="w-[70px] sm:w-[100px] md:w-[150px] h-auto"
        />
      </motion.div>
      <motion.div
        className="absolute  top-[10vh] left-10  z-3"
        initial={{ x: 40, y: 20 }}
        animate={{ x: 0, y: 0 }}
        end={{ x: "0", y: 0 }}
        transition={{
          duration: `30`,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
      >
        <motion.img
          src={note}
          alt="foxImage"
          className="w-[70px] sm:w-[100px] md:w-[150px] h-auto"
        />
      </motion.div>

      <motion.div
        className="absolute  top-[10vh]   z-3"
        initial={{ x: 40, y: 0 }}
        animate={{ x: 30, y: 20 }}
        end={{ x: "0", y: 0 }}
        transition={{
          duration: `20`,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
      >
        <motion.img
          src={mobile}
          alt="foxImage"
          className="w-[70px] sm:w-[100px] md:w-[150px] h-auto"
        />
      </motion.div>
      <motion.div
        className="absolute  left-10 bottom-[20vh]   z-3"
        initial={{ x: 0, y: 30 }}
        animate={{ x: 20, y: 0 }}
        end={{ x: "0", y: 0 }}
        transition={{
          duration: `15`,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
      >
        <motion.img
          src={laptop}
          alt="foxImage"
          className="w-[70px] sm:w-[100px] md:w-[150px] h-auto"
        />
      </motion.div>
      <motion.div className=" absolute flex-row items-center justify-center z-3">
        <Link to={`/gang/images/0`}>
          <div className="head-font">Gang Images</div>
        </Link>
      </motion.div>

      <motion.div
        className=" absolute  flex items-center justify-center  cursor-pointer"
        drag
        dragElastic={0.8}
        dragConstraints={{
          left: -screenWidth / 2 + 50,
          right: screenWidth / 2 - 50,
          top: -screenHeight / 2 + 50,
          bottom: screenHeight / 2 - 50,
        }}
      >
        <div className="card card-23 w-[100px] h-[120px] md:w-[150px] md:h-[180px] bg-black "></div>
      </motion.div>
      <motion.div
        className=" absolute  flex items-center justify-center  cursor-pointer"
        drag
        dragElastic={0.8}
        dragConstraints={{
          left: -screenWidth / 2 + 50,
          right: screenWidth / 2 - 50,
          top: -screenHeight / 2 + 50,
          bottom: screenHeight / 2 - 50,
        }}
      >
        <div className="card card-22 w-[100px] h-[120px] md:w-[150px] md:h-[180px] bg-black "></div>
      </motion.div>
      <motion.div
        className=" absolute  flex items-center justify-center  cursor-pointer"
        drag
        dragElastic={0.8}
        dragConstraints={{
          left: -screenWidth / 2 + 50,
          right: screenWidth / 2 - 50,
          top: -screenHeight / 2 + 50,
          bottom: screenHeight / 2 - 50,
        }}
      >
        <div className="card card-21 w-[100px] h-[120px] md:w-[150px] md:h-[180px] bg-black "></div>
      </motion.div>
      <motion.div
        className=" absolute  flex items-center justify-center  cursor-pointer"
        drag
        dragElastic={0.8}
        dragConstraints={{
          left: -screenWidth / 2 + 50,
          right: screenWidth / 2 - 50,
          top: -screenHeight / 2 + 50,
          bottom: screenHeight / 2 - 50,
        }}
      >
        <div className="card card-20 w-[100px] h-[120px] md:w-[150px] md:h-[180px] bg-black "></div>
      </motion.div>
      <motion.div
        className=" absolute  flex items-center justify-center  cursor-pointer"
        drag
        dragElastic={0.8}
        dragConstraints={{
          left: -screenWidth / 2 + 50,
          right: screenWidth / 2 - 50,
          top: -screenHeight / 2 + 50,
          bottom: screenHeight / 2 - 50,
        }}
      >
        <div className="card card-19 w-[100px] h-[120px] md:w-[150px] md:h-[180px] bg-black "></div>
      </motion.div>
      <motion.div
        className=" absolute  flex items-center justify-center  cursor-pointer"
        drag
        dragElastic={0.8}
        dragConstraints={{
          left: -screenWidth / 2 + 50,
          right: screenWidth / 2 - 50,
          top: -screenHeight / 2 + 50,
          bottom: screenHeight / 2 - 50,
        }}
      >
        <div className="card card-18 w-[100px] h-[120px] md:w-[150px] md:h-[180px] bg-black "></div>
      </motion.div>
      <motion.div
        className=" absolute  flex items-center justify-center  cursor-pointer"
        drag
        dragElastic={0.8}
        dragConstraints={{
          left: -screenWidth / 2 + 50,
          right: screenWidth / 2 - 50,
          top: -screenHeight / 2 + 50,
          bottom: screenHeight / 2 - 50,
        }}
      >
        <div className="card card-17 w-[100px] h-[120px] md:w-[150px] md:h-[180px] bg-black "></div>
      </motion.div>
      <motion.div
        className=" absolute  flex items-center justify-center  cursor-pointer"
        drag
        dragElastic={0.8}
        dragConstraints={{
          left: -screenWidth / 2 + 50,
          right: screenWidth / 2 - 50,
          top: -screenHeight / 2 + 50,
          bottom: screenHeight / 2 - 50,
        }}
      >
        <div className="card card-16 w-[100px] h-[120px] md:w-[150px] md:h-[180px] bg-black "></div>
      </motion.div>
      <motion.div
        className=" absolute  flex items-center justify-center  cursor-pointer"
        drag
        dragElastic={0.8}
        dragConstraints={{
          left: -screenWidth / 2 + 50,
          right: screenWidth / 2 - 50,
          top: -screenHeight / 2 + 50,
          bottom: screenHeight / 2 - 50,
        }}
      >
        <div className="card card-15 w-[100px] h-[120px] md:w-[150px] md:h-[180px] bg-black "></div>
      </motion.div>
      <motion.div
        className=" absolute  flex items-center justify-center  cursor-pointer"
        drag
        dragElastic={0.8}
        dragConstraints={{
          left: -screenWidth / 2 + 50,
          right: screenWidth / 2 - 50,
          top: -screenHeight / 2 + 50,
          bottom: screenHeight / 2 - 50,
        }}
      >
        <div className="card card-14 w-[100px] h-[120px] md:w-[150px] md:h-[180px] bg-black "></div>
      </motion.div>

      <motion.div
        className=" absolute  flex items-center justify-center  cursor-pointer"
        drag
        dragElastic={0.8}
        dragConstraints={{
          left: -screenWidth / 2 + 50,
          right: screenWidth / 2 - 50,
          top: -screenHeight / 2 + 50,
          bottom: screenHeight / 2 - 50,
        }}
      >
        <div className="card card-13 w-[100px] h-[120px] md:w-[150px] md:h-[180px] bg-black "></div>
      </motion.div>
      <motion.div
        className=" absolute  flex items-center justify-center  cursor-pointer"
        drag
        dragElastic={0.8}
        dragConstraints={{
          left: -screenWidth / 2 + 50,
          right: screenWidth / 2 - 50,
          top: -screenHeight / 2 + 50,
          bottom: screenHeight / 2 - 50,
        }}
      >
        <div className="card card-12 w-[100px] h-[120px] md:w-[150px] md:h-[180px] bg-black "></div>
      </motion.div>
      <motion.div
        className=" absolute  flex items-center justify-center  cursor-pointer"
        drag
        dragElastic={0.8}
        dragConstraints={{
          left: -screenWidth / 2 + 50,
          right: screenWidth / 2 - 50,
          top: -screenHeight / 2 + 50,
          bottom: screenHeight / 2 - 50,
        }}
      >
        <div className="card card-11 w-[100px] h-[120px] md:w-[150px] md:h-[180px] bg-black "></div>
      </motion.div>
      <motion.div
        className=" absolute  flex items-center justify-center  cursor-pointer"
        drag
        dragElastic={0.8}
        dragConstraints={{
          left: -screenWidth / 2 + 50,
          right: screenWidth / 2 - 50,
          top: -screenHeight / 2 + 50,
          bottom: screenHeight / 2 - 50,
        }}
      >
        <div className="card card-10 w-[100px] h-[120px] md:w-[150px] md:h-[180px] bg-black "></div>
      </motion.div>
      <motion.div
        className=" absolute  flex items-center justify-center  cursor-pointer"
        drag
        dragElastic={0.8}
        dragConstraints={{
          left: -screenWidth / 2 + 50,
          right: screenWidth / 2 - 50,
          top: -screenHeight / 2 + 50,
          bottom: screenHeight / 2 - 50,
        }}
      >
        <div className="card card-9 w-[100px] h-[120px] md:w-[150px] md:h-[180px] bg-black "></div>
      </motion.div>
      <motion.div
        className=" absolute  flex items-center justify-center  cursor-pointer"
        drag
        dragElastic={0.8}
        dragConstraints={{
          left: -screenWidth / 2 + 50,
          right: screenWidth / 2 - 50,
          top: -screenHeight / 2 + 50,
          bottom: screenHeight / 2 - 50,
        }}
      >
        <div className="card card-8 w-[100px] h-[120px] md:w-[150px] md:h-[180px] bg-black "></div>
      </motion.div>
      <motion.div
        className=" absolute  flex items-center justify-center  cursor-pointer"
        drag
        dragElastic={0.8}
        dragConstraints={{
          left: -screenWidth / 2 + 50,
          right: screenWidth / 2 - 50,
          top: -screenHeight / 2 + 50,
          bottom: screenHeight / 2 - 50,
        }}
      >
        <div className="card card-7 w-[100px] h-[120px] md:w-[150px] md:h-[180px] bg-black "></div>
      </motion.div>
      <motion.div
        className=" absolute  flex items-center justify-center  cursor-pointer"
        drag
        dragElastic={0.8}
        dragConstraints={{
          left: -screenWidth / 2 + 50,
          right: screenWidth / 2 - 50,
          top: -screenHeight / 2 + 50,
          bottom: screenHeight / 2 - 50,
        }}
      >
        <div className="card card-6 w-[100px] h-[120px] md:w-[150px] md:h-[180px] bg-black "></div>
      </motion.div>
      <motion.div
        className=" absolute  flex items-center justify-center  cursor-pointer"
        drag
        dragElastic={0.8}
        dragConstraints={{
          left: -screenWidth / 2 + 50,
          right: screenWidth / 2 - 50,
          top: -screenHeight / 2 + 50,
          bottom: screenHeight / 2 - 50,
        }}
      >
        <div className="card card-5 w-[100px] h-[120px] md:w-[150px] md:h-[180px] bg-black "></div>
      </motion.div>
      <motion.div
        className=" absolute  flex items-center justify-center  cursor-pointer"
        drag
        dragElastic={0.8}
        dragConstraints={{
          left: -screenWidth / 2 + 50,
          right: screenWidth / 2 - 50,
          top: -screenHeight / 2 + 50,
          bottom: screenHeight / 2 - 50,
        }}
      >
        <div className="card card-4 w-[100px] h-[120px] md:w-[150px] md:h-[180px] bg-black "></div>
      </motion.div>
      <motion.div
        className=" absolute  flex items-center justify-center  cursor-pointer"
        drag
        dragElastic={0.8}
        dragConstraints={{
          left: -screenWidth / 2 + 50,
          right: screenWidth / 2 - 50,
          top: -screenHeight / 2 + 50,
          bottom: screenHeight / 2 - 50,
        }}
      >
        <div className="card card-3 w-[100px] h-[120px] md:w-[150px] md:h-[180px] bg-black "></div>
      </motion.div>

      <motion.div
        className=" absolute  flex items-center justify-center  cursor-pointer"
        drag
        dragElastic={0.8}
        dragConstraints={{
          left: -screenWidth / 2 + 50,
          right: screenWidth / 2 - 50,
          top: -screenHeight / 2 + 50,
          bottom: screenHeight / 2 - 50,
        }}
      >
        <div className="card card-2 w-[100px] h-[120px] md:w-[150px] md:h-[180px] bg-black "></div>
      </motion.div>

      <motion.div
        className=" absolute  flex items-center justify-center  cursor-pointer"
        drag
        dragElastic={0.8}
        dragConstraints={{
          left: -screenWidth,
          right: screenWidth,
          top: -screenHeight,
          bottom: screenHeight,
        }}
      >
        <div className="card card-1 w-[100px] h-[120px] md:w-[150px] md:h-[180px] bg-black "></div>
      </motion.div>
    </div>
  );
}
