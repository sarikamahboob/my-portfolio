import React from "react";
import bannerimage from "../images/bannerimage.png";

const Banner = () => {
  return (
    <div>
      <div
        class="hero h-[800px] "
        style={{
          backgroundImage: `url(${bannerimage})`,
          backgroundPosition: "top center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div class="hero-overlay"></div>
        <div class="hero-content text-center text-neutral-content">
          <div class="max-w-lg">
            <h1 class="mb-5 text-lg font-playfair font-bold">
              May the peace, mercy, and blessings of Allah be with you
            </h1>
            <h1 class="mb-5 text-5xl font-bold font-quicksand">
              Welcome to MY Portfolio
            </h1>
            <p class="mb-5 font-poppins font-bold">MERN Stack Developer</p>
            <a
              href="Sarika_Mahboob-Resume .pdf"
              download="Sarika_Mahboob-Resume .pdf"
              class="btn btn-primary text-white"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
