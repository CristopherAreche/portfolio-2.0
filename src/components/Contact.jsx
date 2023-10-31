import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import { social } from "@/utils/Object";
import { sendEmail } from "../../actions/sendEmail";
import toast from "react-hot-toast";

const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-screen dark:bg-dark_bg">
      <div className="max-w-[1240px] m-auto px-2 py-[6em] w-full">
        <p className="text-xl tracking-widest uppercase text-[#53E767]">
          Contact
        </p>
        <h2 className="py-4 dark:text-dark_mode_text">Get in Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left side */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4 dark:text-dark_mode_text dark:bg-gray-800 dark:shadow-none">
            <div className="lg:p-1 h-full">
              <div>
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src={require("/public/assets/contact.jpg")}
                  alt="/"
                />
              </div>
              <div>
                <h2 className="py-2">Cristopher Areche</h2>
                <p>Front-End Developer</p>
                <p className="py-3">
                  I am available for freelance or full-time positions. Contact
                  me and let's talk.
                </p>
              </div>
              <div>
                <p className="uppercase py-4">Connect With Me</p>
                <div className="flex items-center justify-between py-2">
                  {social.map(({ id, icon, url }) => (
                    <a
                      key={id}
                      href={url}
                      className="rounded-full shadow-lg dark:shadow-none dark:bg-dark_mode_text dark:text-black shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300"
                    >
                      {icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* right side */}

          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4 dark:text-dark_mode_text dark:bg-gray-800 dark:shadow-none">
            <div className="p-4">
              <form
                action={async (formData) => {
                  await sendEmail(formData);
                }}
              >
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <input
                      placeholder="Name"
                      name="senderName"
                      required
                      maxLength={40}
                      className="border-2 rounded-lg p-3 flex border-gray-300 dark:bg-dark_mode_text outline-none"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col">
                    <input
                      placeholder="Phone Number"
                      name="senderPhoneNumber"
                      required
                      maxLength={10}
                      className="border-2 rounded-lg p-3 flex border-gray-300 dark:bg-dark_mode_text outline-none"
                      type="text"
                    />
                  </div>
                </div>

                <div className="flex flex-col py-2">
                  <input
                    placeholder="Email"
                    name="senderEmail"
                    required
                    maxLength={500}
                    className="border-2 rounded-lg p-3 flex border-gray-300 dark:bg-dark_mode_text outline-none"
                    type="email"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <input
                    required
                    maxLength={500}
                    name="senderSubject"
                    placeholder="Subject"
                    className="border-2 rounded-lg p-3 flex border-gray-300 dark:bg-dark_mode_text outline-none"
                    type="text"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <textarea
                    name="senderMessage"
                    placeholder="Message"
                    required
                    maxLength={5000}
                    className="border-2 rounded-lg p-3 border-gray-300 dark:bg-dark_mode_text outline-none"
                    rows="10"
                  ></textarea>
                </div>
                <button
                  onClick={() => toast.success("Your Email has been sent.")}
                  className="w-full p-4 font-bold text-gray-100 mt-4 dark:shadow-none"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12 dark:bg-dark_bg">
          <Link href="/#home">
            <div className="rounded-full shadow-lg shadow-gray-400 dark:bg-dark_mode_text dark:shadow-none p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-[#53E767]" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
