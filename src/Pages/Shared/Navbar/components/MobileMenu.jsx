import { motion } from "framer-motion";

export default function MobileMenu({ isMenuOpen, links }) {
  if (!isMenuOpen) return null;
  return (
    <motion.div
      initial={{ maxHeight: 0, opacity: 0 }}
      animate={{ maxHeight: 500, opacity: 1 }}
      exit={{ maxHeight: 0, opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="bg-white/90 backdrop-blur-md shadow-lg border border-gray-100 rounded-2xl overflow-hidden relative z-50 "
    >
      <div className="flex flex-col px-8 py-6 space-y-6">
        <nav className="flex flex-col gap-4 text-gray-700 font-semibold text-lg">
          {links.map((link, i) => (
            <motion.a
              key={i}
              href={link.link}
              whileHover={{
                scale: 1.05,
                color: "#1189DF",
                x: 8,
              }}
              transition={{ type: "spring", stiffness: 250 }}
              className="relative transition-all duration-300 hover:text-[#1189DF]"
            >
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1189DF] transition-all duration-300 group-hover:w-full"></span>
              {link.name}
            </motion.a>
          ))}
        </nav>
      </div>
    </motion.div>
  );
}
