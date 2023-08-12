import React from "react";


import img1 from "../../assets/images/1.png";
import img2 from "../../assets/images/2.png";
import img3 from "../../assets/images/3.png";
import img4 from "../../assets/images/4.png";
import img5 from "../../assets/images/5.png";
import img6 from "../../assets/images/6.png";
import img7 from "../../assets/images/7.png";
import img8 from "../../assets/images/8.png";

import img1_lg from "../../assets/images/headerlg (1).png";
import img2_lg from "../../assets/images/headerlg (2).png";
import img3_lg from "../../assets/images/headerlg (3).png";
import img4_lg from "../../assets/images/headerlg (4).png";

// import img5_lg from "../../assets/images/headerlg (1).png";
// import img6_lg from "../../assets/images/headerlg (2).png2.png";
// import img7_lg from "../../assets/images/headerlg (3).png3.png";
// import img8_lg from "../../assets/images/headerlg (4).png4.png";

import HeaderCard from "./HeaderCard";

export default function Header() {
  return (
    <>
      <div className="bg-black w-full h-screen relative overflow-hidden">
        <HeaderCard
          ini={"100%"}
          ani={"-100%"}
          img1={img7}
          img2={img8}
          img_lg1={img1_lg}
          img_lg2={img2_lg}
          className="header1"
        />

        <HeaderCard
          ini={"-100%"}
          ani={"100%"}
          img1={img3}
          img2={img4}
          img_lg1={img4_lg}
          img_lg2={img3_lg}
          className="header2"

        />
        <HeaderCard
          ini={"100%"}
          ani={"-100%"}
          img1={img5}
          img2={img6}
          img_lg1={img2_lg}
          img_lg2={img1_lg}
          className="header3"

        />
        <HeaderCard
          ini={"-100%"}
          ani={"100%"}
          img1={img1}
          img2={img2}
          img_lg1={img3_lg}
          img_lg2={img4_lg}
          className="header4"

        />
      </div>
    </>
  );
}
