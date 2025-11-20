import { motion } from "framer-motion";
// import img from "../../../assets/hero/hero-image.webp";
import bgImg1 from "../../../assets/hero/img3.jpg";
import bgImg2 from "../../../assets/hero/img2.jpg";
import bgImg3 from "../../../assets/hero/banner3.jpeg";
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
          className="relative  text-white overflow-hidden md:h-[550px] h-[300px] bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${bgImg1})` }}
        >
          <div className="absolute inset-0 bg-black/45 "></div>

          <div className="relative">
            <div className="container mx-auto px-6  gap-12 items-center md:py-32 py-15">
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
          className="relative  text-white overflow-hidden md:h-[550px] h-[300px] bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${bgImg2})` }}
        >
          <div className="absolute inset-0 bg-black/45 "></div>

          <div className="relative">
            <div className="container mx-auto px-6  gap-12 items-center md:py-32 py-20">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
              >
                <div className="space-y-6">
                  <h1 className="sm:text-5xl lg:text-6xl text-2xl  text-white lg:text-left md:text-left  font-extrabold text-left font-serif">
                    <span className="md:text-[#749ffd] text-[#8faff5]">
                      IPv4
                    </span>{" "}
                    Ready
                  </h1>
                  <p className="text-left sm:text-5xl lg:text-5xl text-2xl font-bold text-white lg:my-2 md:my-2 my-0">
                    Connecting The World
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        <section
          className="relative  text-white overflow-hidden md:h-[550px] h-[300px] bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${bgImg3})` }}
        >
          <div className="absolute inset-0 bg-black/45 "></div>

          <div className="relative">
            <div className="container mx-auto px-6  gap-12 items-center md:py-32 py-15">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
              >
                <div className="space-y-6">
                  <h1 className="text-2xl sm:text-5xl lg:text-6xl font-extrabold text-left font-serif">
                    Experience Seamless <br /> Networking
                  </h1>
                  <p className="mt-4 text-lg sm:text-xl lg:text-4xl font-bold text-left">
                    Your internet, simplified.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </Carousel>
    </>
  );
}
