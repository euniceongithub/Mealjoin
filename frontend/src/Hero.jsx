import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import slide1 from "./assets/slide1.jpg";
import slide2 from "./assets/slide2.jpg";
import slide3 from "./assets/slide3.jpg";

const Hero = () => {
  const headerRef = useRef(null);
  const [heroHeight, setHeroHeight] = useState("100vh");

  useEffect(() => {
    const header = document.querySelector("header");
    if (header) {
      const height = header.offsetHeight;
      setHeroHeight(`calc(100vh - ${height}px)`);
    }

    // Update on resize
    const handleResize = () => {
      const header = document.querySelector("header");
      if (header) {
        const height = header.offsetHeight;
        setHeroHeight(`calc(100vh - ${height}px)`);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div style={{ width: "100%", overflow: "hidden", marginTop: headerRef?.current?.offsetHeight }}>
      <Slider {...settings}>
        {[slide1, slide2, slide3].map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`slide ${index + 1}`}
              style={{
                width: "100vw",
                height: heroHeight,
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
