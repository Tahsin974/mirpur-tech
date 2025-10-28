import { motion } from "framer-motion";
import location from "../../assets/contact/location.png";
import phone from "../../assets/contact/phone.png";
import email from "../../assets/contact/email.png";

export default function ContactPage() {
  return (
    <section
      id="contact"
      className="bg-white pb-20 overflow-hidden min-h-screen py-16"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="md:text-4xl text-3xl  font-bold text-center text-gray-800 mb-8"
        >
          Contact Us
        </motion.h2>
        <div className="flex flex-col lg:flex-row  gap-6 justify-center mt-12">
          <motion.form
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4 bg-gray-50 p-8 rounded-3xl shadow-xl xl:w-1/2 lg:w-1/2"
          >
            <h3 className="text-2xl font-bold text-gray-800">Contact Us</h3>
            <input
              className="focus:ring-[#68B7FC] focus:border-[$#68B7FC] block w-full border border-gray-300 rounded-lg px-3 py-2   focus:ring-2 focus:outline-none shadow-sm bg-white"
              placeholder="Your Name"
            />
            <input
              className="focus:ring-[#68B7FC] focus:border-[$#68B7FC] block w-full border border-gray-300 rounded-lg px-3 py-2   focus:ring-2 focus:outline-none shadow-sm bg-white"
              placeholder="Email"
            />
            <textarea
              rows={4}
              className="focus:ring-[#68B7FC] focus:border-[$#68B7FC] block w-full border border-gray-300 rounded-lg px-3 py-2   focus:ring-2 focus:outline-none shadow-sm bg-white"
              placeholder="Your Message"
            />
            <button className="px-6 py-3 hover:bg-[#59aef8] bg-[#68B7FC] text-white rounded-xl  shadow">
              Submit
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 p-8 rounded-3xl shadow-xl text-center lg:text-left xl:w-1/2 lg:w-1/2"
          >
            <h4 className="text-2xl font-bold text-gray-800">Office Address</h4>

            <ul className="my-5 space-y-5">
              <li className="flex flex-col xl:flex-row lg:flex-row  items-center gap-4">
                <img
                  className="w-12 h-12 hover:grayscale"
                  src={location}
                  alt="location icon"
                />
                <div className="space-y-1.5">
                  <h3 className="text-xl text-[#1D2345] inter-bold">Address</h3>
                  <p className=" font-semibold text-gray-500">
                    House #36, Road #02, Block #F, Mirpur-1, Dhaka-1216
                  </p>
                </div>
              </li>
              <li className="flex flex-col xl:flex-row lg:flex-row  items-center gap-4">
                <img
                  className="w-12 h-12 hover:grayscale"
                  src={phone}
                  alt="phone icon"
                />
                <div className="space-y-1.5">
                  <h3 className="text-xl text-[#1D2345] inter-bold">Phone</h3>
                  <div className=" flex flex-wrap justify-center items-center gap-3 text-gray-500">
                    <a
                      href="tel:+8801872-338984"
                      className="hover:text-gray-600  transition-colors font-semibold flex items-center "
                    >
                      01872338984
                    </a>

                    <a
                      href="tel:+8801872-338985"
                      className="hover:text-gray-600  transition-colors font-semibold flex items-center gap-2"
                    >
                      01872338985
                    </a>
                  </div>
                </div>
              </li>
              <li className="flex flex-col xl:flex-row lg:flex-row  items-center gap-4">
                <img
                  className="w-12 h-12 hover:grayscale"
                  src={email}
                  alt="email icon"
                />
                <div className="space-y-1.5">
                  <h3 className="text-xl text-[#1D2345] inter-bold">
                    Email Address
                  </h3>
                  <p className=" ruluko-regular text-gray-500">
                    <a
                      href="mailto:info@mirpurtech.com"
                      className="hover:text-gray-600  transition-colors font-semibold flex items-center gap-2"
                    >
                      info@mirpurtech.com
                    </a>
                  </p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-linear-to-r from-indigo-50 to-purple-50 p-3 rounded-3xl shadow-xl w-full cols-span-2 mx-auto mt-12"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2885.2203335074546!2d90.34933047410222!3d23.801064086831843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0e664c6100d%3A0x5a82c56619baab01!2sMirpurtech!5e1!3m2!1sen!2sbd!4v1761574148218!5m2!1sen!2sbd"
            width="100%"
            height="450"
            style={{ border: 0 }}
            className="rounded-3xl"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mirpurtech Location"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
