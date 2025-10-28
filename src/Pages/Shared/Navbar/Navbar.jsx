import { motion } from "framer-motion";
import logo from "../../../assets/Logo/logo.png";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import MobileMenu from "./components/MobileMenu";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const links = [
    { name: "Home", link: "/#" },
    { name: "Packages", link: "/#packages" },
    { name: "ISP tariff Approval", link: "/tariff-approval-page" },
    { name: "Media", link: "/media" },
    { name: "Service", link: "/#service" },
    { name: "Contact", link: "/contact/" },
  ];

  return (
    <header className="bg-white backdrop-blur-md shadow sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2"
        >
          <a href="/#">
            <figure>
              <img src={logo} alt="logo" className="h-[50px] w-auto" />
            </figure>
          </a>
        </motion.div>
        <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
          {links.map((link, i) => (
            <motion.a
              key={i}
              href={`${link.link}`}
              whileHover={{ scale: 1.1, color: "#59aef8" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {link.name}
            </motion.a>
          ))}
        </nav>

        <div className="md:hidden flex">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <X size={24} className="text-gray-800" />
            ) : (
              <Menu size={24} className="text-gray-800" />
            )}
          </button>
        </div>
      </div>
      <MobileMenu isMenuOpen={isMenuOpen} links={links} />
    </header>
  );
}
