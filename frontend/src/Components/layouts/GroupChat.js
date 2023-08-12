import React, { useEffect, useState } from "react";
import Chat from "./Chat/Chat";
import { Link } from "react-router-dom";
import leaf from ".././../assets/images/leaf.png";
import leaf1 from ".././../assets/images/leaf1.png";
import leaf2 from ".././../assets/images/leaf2.png";
import leaf3 from ".././../assets/images/leaf3.png";
import leaf4 from ".././../assets/images/leaf4.png";
import leaf5 from ".././../assets/images/leaf5.png";

import { motion } from "framer-motion";

export default function GroupChat() {
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
    <div className="w-full h-screen relative overflow-hidden chat-bg">
      <div className="w-full h-screen absolute flex items-center justify-center z-0">
        <Link
          to="/gang/chat"
          className="text-md md:text-xl text-gray-700 font-bold glass z-50 typewriter w-[100px]"
        >
          Make Chat
        </Link>
      </div>

      <div className="absolute z-10 flex">
        <motion.div
          initial={{ x: "10vw", y: "-10vh", rotate: "0deg" }}
          animate={{ x: "50vw", y: "100vh", rotate: "180deg" }}
          transition={{
            duration: `35`,

            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
          className="w-[70px] h-[70px] md:w-[150px] md:h-[150px]   z-20"
        >
          <img src={leaf} alt="leaf" className="w-full h-full" />
        </motion.div>
        <motion.div
          initial={{ x: "20vw", y: "-10vh", rotate: "0deg" }}
          animate={{ x: "30vw", y: "100vh", rotate: "80deg" }}
          transition={{
            duration: "40",
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
          className="w-[70px] h-[70px] md:w-[150px] md:h-[150px] absolute  z-20"
        >
          <img src={leaf1} alt="leaf2" className="w-full h-full" />
        </motion.div>
        <motion.div
          initial={{ x: "70vw", y: "-10vh", rotate: "0deg" }}
          animate={{ x: "10vw", y: "100vh", rotate: "159deg" }}
          transition={{
            duration: `45`,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
          className="w-[70px] h-[70px] md:w-[150px] md:h-[150px] absolute  z-20"
        >
          <img src={leaf2} alt="leaf3" className="w-full h-full" />
        </motion.div>
        <motion.div
          initial={{ x: "60vw", y: "-10vh", rotate: "0deg" }}
          animate={{ x: "40vw", y: "100vh", rotate: "80deg" }}
          transition={{
            duration: `50`,
            delay: "15",
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
          className="w-[70px] h-[70px] md:w-[150px] md:h-[150px] absolute  z-20"
        >
          <img src={leaf3} alt="leaf4" className="w-full h-full" />
        </motion.div>
        <motion.div
          initial={{ x: "80vw", y: "-10vh", rotate: "0deg" }}
          animate={{ x: "70vw", y: "100vh", rotate: "270deg" }}
          transition={{
            duration: `55`,
            delay: 10,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
          className="w-[70px] h-[70px] md:w-[150px] md:h-[150px]  absolute z-20"
        >
          <img src={leaf4} alt="leaf5" className="w-full h-full" />
        </motion.div>
        <motion.div
          initial={{ x: "0vw", y: "-10vh", rotate: "0deg" }}
          animate={{ x: "60vw", y: "100vh", rotate: "70deg" }}
          transition={{
            duration: `60`,
            delay: 5,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
          className="w-[70px] h-[70px] md:w-[150px] md:h-[150px] absolute  z-20"
        >
          <img src={leaf5} alt="leaf5" className="w-full h-full" />
        </motion.div>
      </div>
    </div>
  );
}
