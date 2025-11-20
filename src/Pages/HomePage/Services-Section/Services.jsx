import { motion } from "framer-motion";
import img1 from "../../../assets/Services/globe.png";
import img2 from "../../../assets/Services/building.png";
import img3 from "../../../assets/Services/ftp.png";
import img4 from "../../../assets/Services/speed.png";
import bgImg from "../../../assets/Services/service-bg.webp";
export default function ServicesSection() {
  const services = [
    {
      name: "Internet Connectivity",
      description:
        "Dedicated High speed internet connectivity through primary and secondary link.",
      img: img1,
    },
    {
      name: "Corporate",
      description:
        "We help our clients build, connect, operate and maintain their office network.",
      img: img2,
    },
    {
      name: "Media FTP",
      description: "Fast and secure media file transfers.",
      img: img3,
    },
    {
      name: "Hight Speed Internet",
      description: "Experience blazing fast internet speeds.",
      img: img4,
    },
  ];
  return (
    <section
      id="service"
      className="bg-white md:py-20 py-5 lg:h-[550px] relative"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div>
        <div className="absolute inset-0 bg-white    opacity-50"></div>
        <div className="container mx-auto px-6 z-20 relative">
          <h2 className="md:text-4xl text-3xl  font-bold text-center text-gray-800  ">
            Our Services
          </h2>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-6 rounded-2xl shadow-lg bg-linear-to-br from-gray-50 to-white text-center hover:shadow-xl transition space-y-2.5"
              >
                <figure className="flex justify-center">
                  <img
                    src={service.img}
                    alt={service.name}
                    className="w-12 h-12"
                  />
                </figure>
                <h3 className="font-bold text-gray-700 text-xl">
                  {service.name}
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
