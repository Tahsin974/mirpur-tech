import { motion } from "framer-motion";

import img from "../../../assets/About/about4.gif";
export default function AboutSection() {
  return (
    <section id="about" className=" overflow-hidden bg-white   ">
      <div className="container mx-auto px-6 py-20 flex flex-col md:flex-row justify-between  items-center gap-4">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-5 md:w-1/2 w-full "
        >
          <h2 className="md:text-3xl sm:text-2xl text-xl font-bold text-[#68B7FC]">
            About Us
          </h2>
          <h4 className="md:text-[45px] sm:text-3xl text-2xl leading-none font-bold text-gray-600  ">
            High Speed Broadband Internet Connection
          </h4>
          <p className="mt-4 text-gray-600   leading-relaxed sm:text-lg">
            <strong>MirpurTech</strong> is an Internet Service Provider applying
            ISP License from Bangladesh Telecommunications Regulatory Commission
            (BTRC). Unique service and Customer satisfaction is our concern.
          </p>
          <a href="/about/">
            <button className="mt-6 px-6 py-3 bg-[#68B7FC] text-white rounded-xl font-semibold hover:bg-[#59aef8] shadow-lg cursor-pointer">
              Read More
            </button>
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="md:w-1/2 w-full flex justify-center items-center "
        >
          <figure className="max-w-lg">
            <img src={img} alt="About Us Image" className="rounded-3xl " />
          </figure>
        </motion.div>
      </div>
    </section>
  );
}
