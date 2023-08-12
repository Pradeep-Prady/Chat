import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function HeaderCard({ ini, ani, img1, img2, img_lg1, img_lg2 }) {
  const [imgSrc, setImgSrc] = useState(false);

  useEffect(() => {
    // Function to handle resizing and set the image source
    const handleResize = () => {
      const isMobile = window.innerWidth <= 768; // Adjust the breakpoint as per your requirements

      if (isMobile) {
        setImgSrc(true);

        // Set the source for mobile devices
      } else {
        setImgSrc(false); // Set the source for large devices
      }
    };

    // Initial setup
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  return (
    <div className="w-full h-1/4 relative ">
      <motion.div
        initial={{ x: ` ${ini}` }}
        animate={{ x: `${ani}` }}
        transition={{
          delay: imgSrc ? '5':'10',
          duration: imgSrc ? `10` : "20",
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
        className="w-full h-full bg-black relative py-1"
      >
        {" "}
        <img
          src={imgSrc ? `${img1}` : `${img_lg1}`}
          alt="img"
          className="w-full h-full"
        />
      </motion.div>

      <motion.div
        initial={{ x: ` ${ini}` }}
        animate={{ x: `${ani}` }}
        exit={{ x: "100%" }}
        transition={{
          duration: imgSrc ? `10` : "20",
          delay: 0,

          repeat: Infinity,
          repeatType: "loop",
          ease: "linear", // Use linear easing to create a smooth marquee effect
        }}
        className="w-full h-full bg-black absolute top-0 py-1"
      >
        {/* <img src={`${imgSrc}2`} alt="img" className="w-full h-full" /> */}
        <img
          src={imgSrc ? `${img2}` : `${img_lg2}`}
          alt="img"
          className="w-full h-full"
        />
      </motion.div>
    </div>
  );
}
