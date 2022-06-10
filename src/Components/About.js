import React from "react";
import myimage from "../images/myimage.jpg";

const About = () => {
  return (
    <div>
      <div id="about" className="bg-secondary py-24">
        <div className="flex flex-col items-center justify-center my-14">
          <h1 className="font-inter text-primary text-4xl text-center font-bold">
            About Me
          </h1>
          <progress class="progress w-20 progress-primary mt-4"></progress>
        </div>
        <div class="hero py-24">
          <div class="hero-content flex-col lg:flex-row">
            <img
              src={myimage}
              class="max-w-sm rounded-lg shadow-2xl"
              alt="sarika"
            />
            <div>
              <h1 class="text-4xl font-caladea font-bold text-primary">
                Hello, I'm Sarika Mahboob
              </h1>
              <p className="py-6 font-poppins">
                A software enthusiast, about gaining skills and knowledge of
                computer science at the highest level. Always eager to learn new
                technologies in the field of science and aspiring to be a
                professional web developer.
              </p>
              <p>
                Have completed my B.Sc. in CSE degree from the Department of
                Computer Science and Engineering of the Green University of
                Bangladesh. My unmistakable fascination for Software engineering
                has empowered me to build up decent information in web
                development and programming.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
