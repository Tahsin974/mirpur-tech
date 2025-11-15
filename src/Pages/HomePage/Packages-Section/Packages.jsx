import { motion } from "framer-motion";
import PackageCard from "../../../components/PackageCard/PackageCard";

export default function PackagesSection() {
  return (
    <section id="packages" className="bg-gray-100 py-20">
      <div className="container mx-auto px-6">
        <h2 className="md:text-4xl text-3xl  font-bold text-center text-gray-800">
          Packages
        </h2>
        <p className="text-center text-gray-500 mt-2">
          Choose a package that fits your needs
        </p>
        <div className="mt-12 grid grid-cols-1 gap-8">
          {/* {plans.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition text-center border-t-4 border-[#59AEF8]"
            >
              <h3 className="font-bold text-[#59AEF8] text-xl">{plan.name}</h3>
              <p className="text-sm text-gray-600">IIG {plan.speed}</p>
              <ul className="mt-4 text-sm text-gray-500 space-y-1">
                <li>Unlimited Facebook</li>
                <li>Unlimited YouTube</li>
                <li>BDIX Connected Server</li>
                <li>24/7 Customer Care</li>
              </ul>
              <div className="mt-6 text-3xl font-bold text-gray-800 ">
                ৳{plan.price}
                <span className="text-sm">/month</span>
              </div>
              <button className="mt-6 w-full py-2 bg-[#59AEF8] text-white rounded-xl hover:bg-[#59AEF8] shadow">
                Get Started
              </button>
            </motion.div>
          ))} */}
          {/* Steel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0, duration: 0.6 }}
            className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition text-center border-t-4 border-[#59AEF8] relative overflow-hidden"
          >
            <div
              className="
        bg-[#e0eff7]   w-[350px] h-[500px] lg:-rotate-65   absolute lg:-right-36  lg:-top-44 -bottom-[350px] hidden xl:flex lg:flex 
      "
            ></div>
            <div className="grid lg:grid-cols-4  grid-cols-1 items-center z-10  gap-3">
              {/* Header Section */}
              <div className="p-4  text-left">
                <h2 className="text-2xl leading-6 font-bold text-gray-800 flex items-center gap-1">
                  Steel
                </h2>
                <p className="mt-3 text-sm text-gray-800 ">
                  Choose a package and start your internet journey
                </p>
                <p className="lg:mt-8 md:mt-5 mt-8">
                  <span className="lg:text-2xl md:text-xl text-xl font-extrabold text-white lg:px-9 md:px-4 px-5 lg:py-4 md:py-3 py-3 shadow-lg rounded-t-2xl rounded-r-2xl bg-[#4B5563]">
                    20 Mbps
                  </span>
                </p>
              </div>

              {/* Features - Left Column */}
              <div className="lg:border-x   border-x-0 border-gray-300 px-5 grid grid-cols-1 gap-2 text-left">
                {["IIG 20 Mbps", "Unlimited Facebook", "Unlimited Youtube"].map(
                  (item, i) => (
                    <li key={i} className="flex space-x-3">
                      <svg
                        className="shrink-0 h-5 w-5 text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm text-gray-800 ">{item}</span>
                    </li>
                  )
                )}
              </div>

              {/* Features - Right Column */}
              <div className="pl-2 pr-5 grid grid-cols-1 gap-2">
                {[
                  "IPv4 Public IP Only",
                  "BDIX Connected Server",
                  "24/7 Phone and Online Support",
                ].map((item, i) => (
                  <li key={i} className="flex space-x-3">
                    <svg
                      className="shrink-0 h-5 w-5 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm text-gray-800 ">{item}</span>
                  </li>
                ))}
              </div>

              {/* Price & CTA */}
              <div className=" p-2 sm:p-5 flex flex-col justify-center lg:items-end   items-center z-10  rounded-2xl lg:bg-transparent xl:bg-transparent  bg-sky-300 ">
                <p className=" text-center lg:text-right">
                  <span className="md:text-4xl text-2xl font-extrabold xl:text-gray-800 lg:text-gray-800 text-white">
                    ৳500
                  </span>
                  <span className="xl:text-gray-800 lg:text-gray-800 text-white font-medium">
                    /month
                  </span>
                </p>
              </div>
            </div>
          </motion.div>
          {/* Bronze */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition text-center border-t-4 border-[#59AEF8] relative overflow-hidden"
          >
            <div
              className="
        bg-[#e0eff7]   w-[350px] h-[500px] lg:-rotate-65   absolute lg:-right-36  lg:-top-44 -bottom-[350px] hidden xl:flex lg:flex 
      "
            ></div>
            <div className="grid lg:grid-cols-4  grid-cols-1 items-center z-10  gap-3">
              {/* Header Section */}
              <div className="p-4  text-left">
                <h2 className="text-2xl leading-6 font-bold text-gray-800 flex items-center gap-1">
                  Bronze
                </h2>
                <p className="mt-3 text-sm text-gray-800 ">
                  Choose a package and start your internet journey
                </p>
                <p className="lg:mt-8 md:mt-5 mt-8">
                  <span className="lg:text-2xl md:text-xl text-xl font-extrabold text-white lg:px-9 md:px-4 px-5 lg:py-4 md:py-3 py-3 shadow-lg rounded-t-2xl rounded-r-2xl bg-[#966c44]">
                    30 Mbps
                  </span>
                </p>
              </div>

              {/* Features - Left Column */}
              <div className="lg:border-x   border-x-0 border-gray-300 px-5 grid grid-cols-1 gap-2 text-left">
                {["IIG 30 Mbps", "Unlimited Facebook", "Unlimited Youtube"].map(
                  (item, i) => (
                    <li key={i} className="flex space-x-3">
                      <svg
                        className="shrink-0 h-5 w-5 text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm text-gray-800 ">{item}</span>
                    </li>
                  )
                )}
              </div>

              {/* Features - Right Column */}
              <div className="pl-2 pr-5 grid grid-cols-1 gap-2">
                {[
                  "IPv4 Public IP Only",
                  "BDIX Connected Server",
                  "24/7 Phone and Online Support",
                ].map((item, i) => (
                  <li key={i} className="flex space-x-3">
                    <svg
                      className="shrink-0 h-5 w-5 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm text-gray-800 ">{item}</span>
                  </li>
                ))}
              </div>

              {/* Price & CTA */}
              <div className=" p-2 sm:p-5 flex flex-col justify-center lg:items-end   items-center z-10  rounded-2xl lg:bg-transparent xl:bg-transparent  bg-sky-300 ">
                <p className=" text-center lg:text-right">
                  <span className="md:text-4xl text-2xl font-extrabold xl:text-gray-800 lg:text-gray-800 text-white">
                    ৳800
                  </span>
                  <span className="xl:text-gray-800 lg:text-gray-800 text-white font-medium">
                    /month
                  </span>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Silver */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition text-center border-t-4 border-[#59AEF8] relative overflow-hidden"
          >
            <div
              className="
        bg-[#e0eff7]   w-[350px] h-[500px] lg:-rotate-65   absolute lg:-right-36  lg:-top-44 -bottom-[350px] hidden xl:flex lg:flex 
      "
            ></div>
            <div className="grid lg:grid-cols-4  grid-cols-1 items-center z-10  gap-3">
              {/* Header Section */}
              <div className="p-4  text-left">
                <h2 className="text-2xl leading-6 font-bold text-gray-800 flex items-center gap-1">
                  Silver
                </h2>
                <p className="mt-3 text-sm text-gray-800 ">
                  Choose a package and start your internet journey
                </p>
                <p className="lg:mt-8 md:mt-5 mt-8">
                  <span className="lg:text-2xl md:text-xl text-xl font-extrabold text-white lg:px-9 md:px-4 px-5 lg:py-4 md:py-3 py-3 shadow-lg rounded-t-2xl rounded-r-2xl bg-[#86888d]">
                    40 Mbps
                  </span>
                </p>
              </div>

              {/* Features - Left Column */}
              <div className="lg:border-x   border-x-0 border-gray-300 px-5 grid grid-cols-1 gap-2 text-left">
                {["IIG 40 Mbps", "Unlimited Facebook", "Unlimited Youtube"].map(
                  (item, i) => (
                    <li key={i} className="flex space-x-3">
                      <svg
                        className="shrink-0 h-5 w-5 text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm text-gray-800 ">{item}</span>
                    </li>
                  )
                )}
              </div>

              {/* Features - Right Column */}
              <div className="pl-2 pr-5 grid grid-cols-1 gap-2">
                {[
                  "IPv4 Public IP Only",
                  "BDIX Connected Server",
                  "24/7 Phone and Online Support",
                ].map((item, i) => (
                  <li key={i} className="flex space-x-3">
                    <svg
                      className="shrink-0 h-5 w-5 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm text-gray-800 ">{item}</span>
                  </li>
                ))}
              </div>

              {/* Price & CTA */}
              <div className=" p-2 sm:p-5 flex flex-col justify-center lg:items-end   items-center z-10  rounded-2xl lg:bg-transparent xl:bg-transparent  bg-sky-300 ">
                <p className=" text-center lg:text-right">
                  <span className="md:text-4xl text-2xl font-extrabold xl:text-gray-800 lg:text-gray-800 text-white">
                    ৳1000
                  </span>
                  <span className="xl:text-gray-800 lg:text-gray-800 text-white font-medium">
                    /month
                  </span>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Gold */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition text-center border-t-4 border-[#59AEF8] relative overflow-hidden"
          >
            <div
              className="
        bg-[#e0eff7]   w-[350px] h-[500px] lg:-rotate-65   absolute lg:-right-36  lg:-top-44 -bottom-[350px] hidden xl:flex lg:flex 
      "
            ></div>
            <div className="grid lg:grid-cols-4  grid-cols-1 items-center z-10  gap-3">
              {/* Header Section */}
              <div className="p-4  text-left">
                <h2 className="text-2xl leading-6 font-bold text-gray-800 flex items-center gap-1">
                  Gold
                </h2>
                <p className="mt-3 text-sm text-gray-800 ">
                  Choose a package and start your internet journey
                </p>
                <p className="lg:mt-8 md:mt-5 mt-8">
                  <span className="lg:text-2xl md:text-xl text-xl font-extrabold text-white lg:px-9 md:px-4 px-5 lg:py-4 md:py-3 py-3 shadow-lg rounded-t-2xl rounded-r-2xl bg-[#ca981a]">
                    50 Mbps
                  </span>
                </p>
              </div>

              {/* Features - Left Column */}
              <div className="lg:border-x   border-x-0 border-gray-300 px-5 grid grid-cols-1 gap-2 text-left">
                {["IIG 50 Mbps", "Unlimited Facebook", "Unlimited Youtube"].map(
                  (item, i) => (
                    <li key={i} className="flex space-x-3">
                      <svg
                        className="shrink-0 h-5 w-5 text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm text-gray-800 ">{item}</span>
                    </li>
                  )
                )}
              </div>

              {/* Features - Right Column */}
              <div className="pl-2 pr-5 grid grid-cols-1 gap-2">
                {[
                  "IPv4 Public IP Only",
                  "BDIX Connected Server",
                  "24/7 Phone and Online Support",
                ].map((item, i) => (
                  <li key={i} className="flex space-x-3">
                    <svg
                      className="shrink-0 h-5 w-5 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm text-gray-800 ">{item}</span>
                  </li>
                ))}
              </div>

              {/* Price & CTA */}
              <div className=" p-2 sm:p-5 flex flex-col justify-center lg:items-end   items-center z-10  rounded-2xl lg:bg-transparent xl:bg-transparent  bg-sky-300 ">
                <p className=" text-center lg:text-right">
                  <span className="md:text-4xl text-2xl font-extrabold xl:text-gray-800 lg:text-gray-800 text-white">
                    ৳1500
                  </span>
                  <span className="xl:text-gray-800 lg:text-gray-800 text-white font-medium">
                    /month
                  </span>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Platinum */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition text-center border-t-4 border-[#59AEF8] relative overflow-hidden"
          >
            <div
              className="
        bg-[#e0eff7]   w-[350px] h-[500px] lg:-rotate-65   absolute lg:-right-36  lg:-top-44 -bottom-[350px] hidden xl:flex lg:flex 
      "
            ></div>
            <div className="grid lg:grid-cols-4  grid-cols-1 items-center z-10  gap-3">
              {/* Header Section */}
              <div className="p-4  text-left">
                <h2 className="text-2xl leading-6 font-bold text-gray-800 flex items-center gap-1">
                  Platinum
                </h2>
                <p className="mt-3 text-sm text-gray-800 ">
                  Choose a package and start your internet journey
                </p>
                <p className="lg:mt-8 md:mt-5 mt-8">
                  <span className="lg:text-2xl md:text-xl text-xl font-extrabold text-white lg:px-9 md:px-4 px-5 lg:py-4 md:py-3 py-3 shadow-lg rounded-t-2xl rounded-r-2xl bg-[#838282]">
                    60 Mbps
                  </span>
                </p>
              </div>

              {/* Features - Left Column */}
              <div className="lg:border-x   border-x-0 border-gray-300 px-5 grid grid-cols-1 gap-2 text-left">
                {["IIG 60 Mbps", "Unlimited Facebook", "Unlimited Youtube"].map(
                  (item, i) => (
                    <li key={i} className="flex space-x-3">
                      <svg
                        className="shrink-0 h-5 w-5 text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm text-gray-800 ">{item}</span>
                    </li>
                  )
                )}
              </div>

              {/* Features - Right Column */}
              <div className="pl-2 pr-5 grid grid-cols-1 gap-2">
                {[
                  "IPv4 Public IP Only",
                  "BDIX Connected Server",
                  "24/7 Phone and Online Support",
                ].map((item, i) => (
                  <li key={i} className="flex space-x-3">
                    <svg
                      className="shrink-0 h-5 w-5 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm text-gray-800 ">{item}</span>
                  </li>
                ))}
              </div>

              {/* Price & CTA */}
              <div className=" p-2 sm:p-5 flex flex-col justify-center lg:items-end   items-center z-10  rounded-2xl lg:bg-transparent xl:bg-transparent  bg-sky-300  ">
                <p className=" text-center lg:text-right">
                  <span className="md:text-4xl text-2xl font-extrabold xl:text-gray-800 lg:text-gray-800 text-white">
                    ৳2000
                  </span>
                  <span className="xl:text-gray-800 lg:text-gray-800 text-white font-medium">
                    /month
                  </span>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Diamond */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition text-center border-t-4 border-[#59AEF8] relative overflow-hidden"
          >
            <div
              className="
        bg-[#e0eff7]   w-[350px] h-[500px] lg:-rotate-65   absolute lg:-right-36  lg:-top-44 -bottom-[350px] hidden xl:flex lg:flex 
      "
            ></div>
            <div className="grid lg:grid-cols-4  grid-cols-1 items-center z-10  gap-3">
              {/* Header Section */}
              <div className="p-4  text-left">
                <h2 className="text-2xl leading-6 font-bold text-gray-800 flex items-center gap-1">
                  Diamond
                </h2>
                <p className="mt-3 text-sm text-gray-800 ">
                  Choose a package and start your internet journey
                </p>
                <p className="lg:mt-8 md:mt-5 mt-8">
                  <span className="lg:text-2xl md:text-xl text-xl font-extrabold text-white lg:px-9 md:px-4 px-5 lg:py-4 md:py-3 py-3 shadow-lg rounded-t-2xl rounded-r-2xl bg-[#40E0D0]">
                    100 Mbps
                  </span>
                </p>
              </div>

              {/* Features - Left Column */}
              <div className="lg:border-x   border-x-0 border-gray-300 px-5 grid grid-cols-1 gap-2 text-left">
                {[
                  "IIG 100 Mbps",
                  "Unlimited Facebook",
                  "Unlimited Youtube",
                ].map((item, i) => (
                  <li key={i} className="flex space-x-3">
                    <svg
                      className="shrink-0 h-5 w-5 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm text-gray-800 ">{item}</span>
                  </li>
                ))}
              </div>

              {/* Features - Right Column */}
              <div className="pl-2 pr-5 grid grid-cols-1 gap-2">
                {[
                  "IPv4 Public IP Only",
                  "BDIX Connected Server",
                  "24/7 Phone and Online Support",
                ].map((item, i) => (
                  <li key={i} className="flex space-x-3">
                    <svg
                      className="shrink-0 h-5 w-5 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm text-gray-800 ">{item}</span>
                  </li>
                ))}
              </div>

              {/* Price & CTA */}
              <div className=" p-2 sm:p-5 flex flex-col justify-center lg:items-end   items-center z-10  rounded-2xl lg:bg-transparent xl:bg-transparent  bg-sky-300  ">
                <p className=" text-center lg:text-right">
                  <span className="md:text-4xl text-2xl font-extrabold xl:text-gray-800 lg:text-gray-800 text-white">
                    ৳3000
                  </span>
                  <span className="xl:text-gray-800 lg:text-gray-800 text-white font-medium">
                    /month
                  </span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
