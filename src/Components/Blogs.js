import React from "react";
// import { Typewriter } from "react-simple-typewriter";
// import "react-simple-typewriter/dist/index";

const Blogs = () => {
  return (
    <div id="blogs">
      <div className="bg-primary py-10">
        <div className="flex flex-col items-center justify-center my-14">
          <h1 className="font-inter text-secondary text-4xl text-center font-bold">
            My Projects
          </h1>
          <progress class="progress w-20 progress-secondary mt-4"></progress>
        </div>
        <h1 className="font-inter text-secondary text-2xl text-center font-bold">
          {/* <Typewriter
            loop
            cursor
            cursorStyle="_"
            typeSpeed={50}
            deleteSpeed={50}
            delaySpeed={2000}
            words={["Coming Soon"]}
          /> */}
          Coming Soon
        </h1>
      </div>
    </div>
  );
};

export default Blogs;
