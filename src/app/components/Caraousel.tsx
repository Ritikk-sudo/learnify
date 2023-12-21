"use client";

import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import img1 from "../../../public/images/1.jpg";
import img2 from "public/images/2.jpg";
import img3 from "../../../public/images/3.jpg";
import Image from "next/image";

function Caraousel() {
  return (
    // @ts-ignore
    <Carousel className="m-auto md:!h-[70vh] " showThumbs={false}>
      <div>
        <Image className="md:!h-[70vh]" width={600} height={600} src={img1} alt="" />
      </div>
      <div>
      <Image className="md:!h-[70vh]" width={600} height={600} src={img2} alt="" />
      </div>
      <div>
      <Image className="md:!h-[70vh]" width={600} height={600} src={img3} alt="" />
      </div>
    </Carousel>
  );
}

export default Caraousel;
