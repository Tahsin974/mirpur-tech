import { motion } from "framer-motion";
import aboutImg from "../../assets/About/about.gif";

export default function AboutPage() {
  return (
    <section className="bg-white py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-[#1189DF] mb-8"
        >
          About Us
        </motion.h2>

        {/* Intro Section */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={aboutImg}
              alt="About Mirpur Tech"
              className="rounded-2xl shadow-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <h3 className="text-2xl font-semibold text-[#1189DF]">
              Who We Are
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Mirpur Tech is a trusted Internet Service Provider delivering
              high-speed internet and reliable connectivity across Dhaka. Our
              mission is to empower homes and businesses with seamless digital
              experiences through advanced networking technology and exceptional
              customer service.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We are passionate about innovation and committed to creating a
              smarter, faster, and more connected Bangladesh. From home users to
              corporate networks, we ensure stability, security, and speed —
              every step of the way.
            </p>
          </motion.div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-10 mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <h4 className="text-xl font-semibold text-[#1189DF] mb-3">
              Our Mission
            </h4>
            <p className="text-gray-600 leading-relaxed">
              To provide fast, secure, and affordable internet solutions that
              enhance the digital lifestyle of every customer we serve.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <h4 className="text-xl font-semibold text-[#1189DF] mb-3">
              Our Vision
            </h4>
            <p className="text-gray-600 leading-relaxed">
              To become Bangladesh’s most customer-focused ISP — connecting
              communities, businesses, and innovations that shape the future.
            </p>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-center mt-16"
        >
          <div>
            <h3 className="text-3xl font-bold text-[#1189DF]">1K+</h3>
            <p className="text-gray-600">Happy Clients</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-[#1189DF]">99%</h3>
            <p className="text-gray-600">Uptime Guarantee</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-[#1189DF]">24/7</h3>
            <p className="text-gray-600">Support Service</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-[#1189DF]">10+</h3>
            <p className="text-gray-600">Years of Experience</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
