import emailjs from "@emailjs/browser";
import React, { useRef } from "react";
import { MdEmail } from "react-icons/md";
import { BsFillPhoneFill } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3mh6y4n",
        "template_i5yepwo",
        form.current,
        "6Sc1lyLNtd3OieYcz"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="bg-secondary pb-24">
      <div className="flex flex-col items-center justify-center py-24">
        <h1 className="font-inter text-primary text-4xl font-bold">
          Get in Touch
        </h1>
        <progress class="progress w-20 progress-primary mt-4"></progress>
      </div>
      <div class="hero" id="contact-form">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <div class="text-center lg:text-left">
            <h1 className="font-inter text-primary text-2xl font-bold">
              Contact Info
            </h1>
            <div className="w-96 flex flex-col items-center lg:items-start mt-4 font-caladea">
              <div class="flex items-center gap-2">
                <span className="text-secondary">
                  <MdEmail />
                </span>
                <span className="font-bold text-primary ">
                  sarika.mahboob1234@gmail.com
                </span>
              </div>
              <div class="flex items-center gap-2">
                <span className="text-secondary">
                  <BsFillPhoneFill />
                </span>
                <span className="font-bold text-primary ">01700000000</span>
              </div>
              <div class="flex items-center gap-2">
                <span className="text-secondary">
                  <FaMapMarkerAlt />
                </span>
                <span className="font-bold text-primary ">
                  California, U.S.
                </span>
              </div>
            </div>
          </div>
          <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form ref={form} onSubmit={sendEmail} class="card-body">
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  class="input input-bordered"
                  name="user_name"
                />
              </div>

              <div class="form-control">
                <label class="label">
                  <span class="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="user_email"
                  placeholder="email"
                  class="input input-bordered"
                />
              </div>

              <div class="form-control">
                <label class="label">
                  <span class="label-text">Message</span>
                </label>
                <textarea name="message" class="input input-bordered" />
              </div>

              <div class="form-control mt-6">
                <input
                  className="btn btn-primary text-secondary hover:bg-transparent hover:border-primary hover:text-primary font-caladea tracking-widest"
                  type="submit"
                  value="Send"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
