import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../../../assets/contest.webp";
import img2 from "../../../assets/contest1.webp";
import img3 from "../../../assets/contest2.webp";
import img4 from "../../../assets/contest3.webp";

const Banner = () => {
  return (
 
      <Carousel autoPlay infiniteLoop={true}>
        {/* Slide 1 */}
        <div className="relative">
          <img src={img1} />

          {/* Button Group (responsive) */}
        </div>

        {/* Slide 2 */}
        <div className="relative">
          <img src={img2} />
        </div>

        {/* Slide 3 */}
        <div className="relative">
          <img src={img3} />
        </div>

        {/* Slide 4 */}
        <div className="relative">
          <img src={img4} />
        </div>
      </Carousel>
 
  );
};

export default Banner;
