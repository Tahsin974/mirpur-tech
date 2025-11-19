import { motion } from "framer-motion";
import logo from "../../../assets/Logo/logo.png";
import facebook from "../../../assets/Footer/facebook.png";

export default function Footer() {
  const links = [
    { name: "Home", link: "/#" },
    { name: "About", link: "/about/" },
    { name: "Service", link: "/#service" },
    { name: "Contact", link: "/contact/" },
  ];
  const handlePdf = () => {
    const newTab = window.open(); // নতুন ট্যাব খোলা
    if (newTab) {
      newTab.location.href = "files/tariff-approval.pdf"; // public folder path
      newTab.focus(); // নতুন ট্যাব foreground এ নিয়ে আসা
    } else {
      // যদি popup block হয়, fallback
      window.location.href = "files/tariff-approval.pdf";
    }
  };

  return (
    <footer className="bg-[#EFF9FF] text-gray-800  px-6">
      <div className="  grid md:grid-cols-4 sm:grid-cols-2 gap-12 md:justify-items-center py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="md:col-span-1 sm:col-span-2"
        >
          <figure>
            <img src={logo} alt="logo" className="h-[50px] w-auto " />
          </figure>
          <p className="mt-2 text-base font-semibold">
            Mirpur Tech delivers high-speed and secure internet services to keep
            you connected, always.
          </p>
        </motion.div>

        <div className="text-base font-semibold">
          <h4 className="font-bold mb-3 text-xl">Menu</h4>
          <ul className="space-y-1 ">
            {links.map((link, i) => (
              <li key={i}>
                <motion.a
                  href={`${link.link}`}
                  whileHover={{ scale: 1.1, color: "#59aef8" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {link.name}
                </motion.a>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-base font-semibold">
          <h4 className="font-bold mb-3 text-xl">Links</h4>
          <ul className="space-y-1">
            <li>
              <motion.a
                onClick={handlePdf}
                whileHover={{ scale: 1.1, color: "#59aef8" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                ISP tariff Approval
              </motion.a>
            </li>
            <li>
              <motion.a
                href={`/terms-and-conditions/`}
                whileHover={{ scale: 1.1, color: "#59aef8" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Terms and Conditions
              </motion.a>
            </li>
            <li>
              <motion.a
                href={`/return-policy/`}
                whileHover={{ scale: 1.1, color: "#59aef8" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Return Policy
              </motion.a>
            </li>
            <li>
              <motion.a
                href={`/privacy-policy/`}
                whileHover={{ scale: 1.1, color: "#59aef8" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Privacy Policy
              </motion.a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-3 text-xl">Connect</h4>
          <div className="flex gap-3 md:justify-center">
            <a
              href="https://www.facebook.com/mirpurtechdotcom"
              className="cursor-pointer"
              target="_blank"
            >
              <img src={facebook} alt="facebook logo" className="h-6 w-6 " />
            </a>
          </div>
        </div>
      </div>
      <div className="  py-3 border-t border-gray-300 flex justify-center items-center ">
        <div className="text-base text-center">
          © 2015 MirpurTech. All rights reserved.
          <p className="text-[15px]">
            Developed by :{" "}
            <a
              href="https://www.linkedin.com/in/tahsin-islam477?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              className="text-blue-400 font-bold"
            >
              Tahsin Islam
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
