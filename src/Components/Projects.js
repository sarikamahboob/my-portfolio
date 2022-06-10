import React from "react";
import website1 from "../images/website1.png";
import website2 from "../images/website2.png";
import website3 from "../images/website3.png";

const Projects = () => {
  return (
    <div>
      <div id="projects">
        <div className="flex flex-col items-center justify-center my-14">
          <h1 className="font-inter text-primary text-4xl text-center font-bold">
            My Projects
          </h1>
          <progress class="progress w-20 progress-primary mt-4"></progress>
        </div>
        <div
          className="container mx-auto"
          style={{
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div className="my-10 flex-row items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
            <div class="card w-80 bg-base-100 shadow-xl transition hover:duration-300 mt-4 h-full">
              <figure className="mt-2 rounded-lg">
                <img src={website1} alt="Shoes" className="rounded-lg" />
              </figure>
              <div class="card-body items-center font-caladea">
                <h2 class="text-white p-2 font-bold text-xl bg-primary rounded ">
                  Manufacturer Website
                </h2>
                <a
                  className="text-primary underline"
                  href="https://indus-client.web.app/"
                  alt="link"
                >
                  Live Website Link
                </a>
                <a
                  className="text-primary underline"
                  href="https://github.com/sarikamahboob/manufacturer-website-indus-client"
                  alt="link"
                >
                  Client-Side Code Link
                </a>
                <a
                  className="text-primary underline"
                  href="https://github.com/sarikamahboob/manufacturer-website-indus-server"
                  alt="link"
                >
                  Server-Side Code Link
                </a>
                <p class=" font-bold text-gray-500 text-justify  ">
                  <h1 class="card-body items-center text-primary font-roboto">
                    Website key Features
                  </h1>
                  <li>
                    Any normal user can place their orders and can do their
                    payments from my orders page
                  </li>
                  <li>
                    An admin, not a normal user can make any other user an admin
                    from make an admin page
                  </li>
                  <li>
                    An admin can add a product that will be shown on the home
                    page and also an admin can delete any product
                  </li>
                </p>
                <p className="text-center">
                  <p class="badge badge-secondary text-primary border-primary mr-2">
                    react js.
                  </p>
                  <p class="badge badge-secondary text-primary border-primary mr-2">
                    tailwind
                  </p>
                  <p class="badge badge-secondary text-primary border-primary mr-2">
                    react router
                  </p>
                  <p class="badge badge-secondary text-primary border-primary mr-2">
                    react icons
                  </p>
                  <p class="badge badge-secondary text-primary border-primary mr-2">
                    firebase
                  </p>
                  <p class="badge badge-secondary text-primary border-primary mr-2">
                    stripe
                  </p>
                  <p class="badge badge-secondary text-primary border-primary mr-2">
                    daisy ui
                  </p>
                  <p class="badge badge-secondary text-primary border-primary mr-2">
                    node js.
                  </p>
                  <p class="badge badge-secondary text-primary border-primary mr-2">
                    express js.
                  </p>
                  <p class="badge badge-secondary text-primary border-primary mr-2">
                    mongodb
                  </p>
                </p>
              </div>
            </div>

            <div class="card w-80 bg-base-100 shadow-xl transition hover:duration-300 mt-4 h-full">
              <figure className="mt-2 rounded-lg">
                <img src={website2} alt="Shoes" className="rounded-lg" />
              </figure>
              <div class="card-body items-center font-caladea">
                <h2 class="text-white p-2 font-bold text-xl bg-primary rounded ">
                  Warehouse Management
                </h2>
                <a
                  className="text-primary underline"
                  href="https://e-warehouse-client.web.app/"
                  alt=""
                >
                  Live Website Link
                </a>
                <a
                  className="text-primary underline"
                  href="https://github.com/sarikamahboob/warehouse-management-client"
                  alt=""
                >
                  Client-Side Code Link
                </a>
                <a
                  className="text-primary underline"
                  href="https://github.com/sarikamahboob/warehouse-management-server"
                  alt=""
                >
                  Server-Side Code Link
                </a>
                <p class=" font-bold text-gray-500 text-justify ">
                  <h1 class="card-body items-center text-primary font-roboto">
                    Website key Features
                  </h1>
                  <li>
                    A warehouse management website, where sellers can add their
                    products by giving product description
                  </li>
                  <li>
                    In the stock update form, sellers can update their products
                    quantity
                  </li>
                  <li>
                    In the my products page, the sellers can only see their
                    added products
                  </li>
                </p>
                <p className="text-center">
                  <p class="badge badge-secondary text-primary border-primary mr-2">
                    react js.
                  </p>
                  <p class="badge badge-secondary text-primary border-primary mr-2">
                    react router
                  </p>
                  <p class="badge badge-secondary text-primary border-primary mr-2">
                    react icons
                  </p>
                  <p class="badge badge-secondary text-primary border-primary mr-2">
                    react bootstrap
                  </p>
                  <p class="badge badge-secondary text-primary border-primary mr-2">
                    firebase
                  </p>
                  <p class="badge badge-secondary text-primary border-primary mr-2">
                    node js.
                  </p>
                  <p class="badge badge-secondary text-primary border-primary mr-2">
                    express js.
                  </p>
                  <p class="badge badge-secondary text-primary border-primary mr-2">
                    mongodb
                  </p>
                </p>
              </div>
            </div>

            <div class="card w-80 bg-base-100 shadow-xl transition hover:duration-300 mt-4 h-full">
              <figure className="mt-2 rounded-lg">
                <img src={website3} alt="Shoes" className="rounded-lg" />
              </figure>
              <div class="card-body items-center font-caladea">
                <h2 class="text-white p-2 font-bold text-xl bg-primary rounded text-center ">
                  Independent Service Provider
                </h2>
                <a
                  className="text-primary underline"
                  href="https://conquerself-8580b.web.app/"
                  alt="link"
                >
                  Live Website Link
                </a>
                <a
                  className="text-primary underline"
                  href="https://github.com/sarikamahboob/independent-service-provider-conquerself"
                  alt="link"
                >
                  Github Code Link
                </a>
                <p class=" font-bold text-gray-500 text-justify ">
                  <h1 class="card-body items-center text-primary font-roboto">
                    Website key Features
                  </h1>
                  <li>
                    A independent service provider website, where in the service
                    section, one can see the whole services and also can see the
                    service details
                  </li>
                  <li>Used a map using leaflet</li>
                  <li>
                    Used authentication system with the firebase, with this one
                    can sign in or sign up in the website
                  </li>
                </p>
                <p className="text-center">
                  <p class="badge badge-secondary text-primary border-primary mr-2">
                    react js.
                  </p>
                  <p class="badge badge-secondary text-primary border-primary mr-2">
                    react bootstrap
                  </p>
                  <p class="badge badge-secondary text-primary border-primary mr-2">
                    firebase
                  </p>
                  <p class="badge badge-secondary text-primary border-primary mr-2">
                    aos animation
                  </p>
                  <p class="badge badge-secondary text-primary border-primary mr-2">
                    react leaflet
                  </p>
                  <p class="badge badge-secondary text-primary border-primary mr-2">
                    react router
                  </p>
                  <p class="badge badge-secondary text-primary border-primary mr-2">
                    react icons
                  </p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
