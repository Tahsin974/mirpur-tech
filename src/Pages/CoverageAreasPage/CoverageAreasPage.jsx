import { useEffect } from "react";
import CoverageMap from "./Components/CoverageMap";
import banner from "../../assets/Coverage-Area/coverage-area-banner.png";
import useAreas from "../../Utils/Hooks/useAreas";

import { motion } from "framer-motion";
export default function CoverageAreasPage() {
  const { areas } = useAreas();

  // 🔥 Fix: Leaflet map resize issue on scroll/route render
  useEffect(() => {
    const handleResize = () => {
      window.dispatchEvent(new Event("resize"));
    };

    window.addEventListener("scroll", handleResize);

    return () => window.removeEventListener("scroll", handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="relative overflow-hidden">
        {/* Banner Image */}
        <div className="absolute inset-0">
          <img
            src={banner}
            alt="Coverage Areas Banner"
            className="w-full h-full object-cover scale-105"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center text-center px-4 py-24 md:py-32 lg:py-40">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-extrabold text-white text-3xl md:text-5xl lg:text-6xl tracking-tight"
            >
              Our Coverage Areas
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-white/80 mt-4 text-sm md:text-base max-w-xl mx-auto"
            >
              Explore all service regions and check availability in your area
            </motion.p>
          </div>
        </div>
      </header>

      {/* Content Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        {/* Grid */}
        <div className="grid grid-cols-1 gap-6">
          {areas?.map((thana, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Card Header */}
              <div className="px-5 py-4 bg-linear-to-r from-gray-50 to-white border-b border-gray-100">
                <h2 className="text-lg md:text-xl font-semibold text-gray-800 group-hover:text-[#7c163b] transition-colors">
                  {thana.thana}
                </h2>
              </div>

              {/* Map + Content */}
              <div className="p-4 space-y-4">
                {/* Map */}
                <div className="rounded-xl overflow-hidden border border-gray-100 ">
                  <CoverageMap data={thana.coordinates} />
                </div>

                {/* Area List (Legend) */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Covered Areas
                    </h3>

                    <span className="text-xs text-gray-400">
                      {thana.coordinates?.length} locations
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {thana.coordinates?.map((area, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs font-medium rounded-full
                             bg-gray-100 text-gray-700 border border-gray-200
                             hover:bg-[#7c163b] hover:text-white
                             transition-all duration-200 cursor-default"
                      >
                        {area.areaName}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
