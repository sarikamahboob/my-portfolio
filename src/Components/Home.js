import React from "react";
import About from "./About";
import Banner from "./Banner";
import Blogs from "./Blogs";
import ContactForm from "./ContactForm";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Projects from "./Projects";

const Home = () => {
  return (
    <div id="home">
      <Navbar />
      <Banner />
      <About />
      <Projects />
      <Blogs />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Home;
