import { motion } from "framer-motion";
// import img from "../../../assets/hero/hero-image.webp";
import bgImg1 from "../../../assets/hero/img3.jpg";
import bgImg2 from "../../../assets/hero/img2.jpg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function HeroSection() {
  return (
    <>
      <Carousel
        showArrows={false}
        showStatus={false}
        autoPlay={true}
        infiniteLoop={true}
        interval={5000}
        swipeable={true}
      >
        <section
          className="relative  text-white overflow-hidden h-[550px] bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${bgImg1})` }}
        >
          <div className="absolute inset-0 bg-black/30 "></div>

          <div className="relative">
            <div className="container mx-auto px-6  gap-12 items-center py-32">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
              >
                <div className="space-y-6">
                  <h1 className="text-2xl sm:text-5xl lg:text-6xl font-extrabold text-left font-serif">
                    Internet Service <br /> Provider
                  </h1>
                  <p className="mt-4 text-lg sm:text-xl lg:text-4xl font-bold text-left">
                    বিশ্বস্ত একটি ইন্টারনেট প্রতিষ্ঠান
                  </p>
                  <div className="mt-6 flex gap-4">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      href="#packages"
                      className="px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 bg-white text-gray-700 font-semibold rounded-xl shadow-lg hover:bg-indigo-50"
                    >
                      View Packages
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      href="#contact"
                      className="px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 border border-white rounded-xl font-semibold hover:bg-white hover:text-gray-700"
                    >
                      Contact Us
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        <section
          className="relative  text-white overflow-hidden h-[550px] bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${bgImg2})` }}
        >
          <div className="absolute inset-0 bg-black/30 "></div>

          <div className="relative">
            <div className="container mx-auto px-6  gap-12 items-center py-32">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
              >
                <div className="space-y-6">
                  <h1 className="sm:text-5xl lg:text-6xl text-2xl  text-white lg:text-left md:text-left  font-extrabold text-left font-serif">
                    <span className="text-[#749ffd]">IPv4</span> Ready
                  </h1>
                  <p className="text-left sm:text-5xl lg:text-5xl text-2xl font-bold text-white lg:my-2 md:my-2 my-0">
                    Connecting The World
                  </p>
                  <div className="mt-6 flex gap-4">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      href="#packages"
                      className="px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 bg-white text-gray-700 font-semibold rounded-xl shadow-lg hover:bg-indigo-50"
                    >
                      View Packages
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      href="#contact"
                      className="px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 border border-white rounded-xl font-semibold hover:bg-white hover:text-gray-700"
                    >
                      Contact Us
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        {/* <section className="relative  text-white overflow-hidden h-[550px]">
          <figure className="w-full h-full">
            <img src={bgImg3} className="w-full h-full object-fill" alt="" />
          </figure>
        </section> */}
      </Carousel>
    </>
  );
}

{
  /*<section
          className="relative  text-white overflow-hidden h-[550px] bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${bgImg})` }}
        >
       
          <div className="absolute inset-0 bg-black/30 "></div>

          <div className="relative">
            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center py-24">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
              >
                <div className="space-y-6">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-serif">
                    Internet Service Provider
                  </h1>
                  <p className="mt-4 text-lg sm:text-xl lg:text-4xl font-bold">
                    বিশ্বস্ত একটি ইন্টারনেট প্রতিষ্ঠান
                  </p>
                  <div className="mt-6 flex gap-4">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      href="#packages"
                      className="px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 bg-white text-gray-700 font-semibold rounded-xl shadow-lg hover:bg-indigo-50"
                    >
                      View Packages
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      href="#contact"
                      className="px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 border border-white rounded-xl font-semibold hover:bg-white hover:text-gray-700"
                    >
                      Contact Us
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
   */
}

{
  /* <section
      className="relative bg-linear-to-r from-[#1189DF] via-[#5EC5FF] to-[#D8F3FF]
 text-white py-24 overflow-hidden"
    >
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-serif">
              Internet Service Provider
            </h1>
            <p className="mt-4 text-lg sm:text-xl lg:text-4xl font-bold ">
              বিশ্বস্ত একটি ইন্টারনেট প্রতিষ্ঠান
            </p>
            <div className="mt-6 flex gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="#packages"
                className="px-6 py-3 bg-white text-gray-700 font-semibold rounded-xl shadow-lg hover:bg-indigo-50"
              >
                View Packages
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="#contact"
                className="px-6 py-3 border border-white rounded-xl font-semibold hover:bg-white hover:text-gray-700"
              >
                Contact Us
              </motion.a>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className=""
        >
          <figure>
            <img src={img} alt="Hero Image" className="" />
          </figure>
        </motion.div>
      </div>
    </section> */
}
