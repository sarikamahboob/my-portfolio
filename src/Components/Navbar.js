import React from "react";

const Navbar = () => {
  return (
    <div className="bg-primary">
      <div className="container mx-auto text-accent">
        <div class="navbar ">
          <div class="navbar-start">
            <div class="dropdown">
              <label tabindex="0" class="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabindex="0"
                class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a href="#home" className="text-primary font-quicksand">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-primary font-quicksand">
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#contact-form"
                    className="text-primary font-quicksand"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <a class="btn btn-ghost font-caladea text-xl tracking-widest text-secondary">
              Sarika
            </a>
          </div>
          <div class="navbar-end hidden lg:flex ">
            <ul class="menu menu-horizontal p-0 font-quicksand text-xl text-secondary font-bold">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#blogs">Blogs</a>
              </li>
              <li>
                <a href="#contact-form">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
