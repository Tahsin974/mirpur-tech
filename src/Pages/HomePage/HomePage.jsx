import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import AboutSection from "./About-Section/About";
import ContactSection from "./Contact-Section/Contact";
import HeroSection from "./Hero-Section/Hero";
import OurPartnersSection from "./Our-Partners/Partners";
import PackagesSection from "./Packages-Section/Packages";
import ServicesSection from "./Services-Section/Services";
import { X } from "lucide-react";

export default function HomePage() {
  const [showPopup, setShowPopup] = useState(false);
  
  useEffect(() => {
    const hasVisited = sessionStorage.getItem("visited");
    if (!hasVisited) {
      setShowPopup(true);
      sessionStorage.setItem("visited", "true");
    }
  }, []);
  const closePopup = () => setShowPopup(false);

  return (
    <div className="space-y-20">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <PackagesSection />
      <OurPartnersSection />
      <ContactSection />

      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl shadow-lg p-6 max-w-xl w-full text-center  overflow-auto max-h-[90vh]  "
          >
            <div className="relative ">
              <button
                onClick={() => setShowPopup(false)}
                className="cursor-pointer absolute right-0 top-0"
              >
                <X size={20} />
              </button>
              <h2 className="text-xl font-semibold mb-2">
                🔔 গুরুত্বপূর্ণ নোটিস
              </h2>
              <div className="text-base space-y-2 text-justify my-4">
                <p className="text-gray-800  leading-relaxed">
                  প্রিয় গ্রাহক, <br /> আমাদের ইন্টারনেট সেবা গ্রহণের জন্য
                  আপনাকে আন্তরিক ধন্যবাদ। আমাদের মূল্যবান গ্রাহক হিসেবে আপনার
                  অব্যাহত আস্থা ও সহযোগিতাকে আমরা উচ্চভাবে মূল্যায়ন করি। আপনার
                  দৃষ্টি আকর্ষণপূর্বক জানানো যাচ্ছে যে —
                </p>
                <p className="font-semibold text-red-600 leading-relaxed my-6 text-center">
                  প্রতি মাসের ১০ তারিখের মধ্যে বিল পরিশোধ করা আবশ্যক।
                </p>
                <p className="leading-relaxed text-gray-800">
                  নির্ধারিত সময়ের পর বিল পরিশোধ না হলে, আমাদের নীতিমালা
                  অনুযায়ী আপনার সংযোগ সাময়িকভাবে স্থগিত থাকতে পারে। সেবার
                  ধারাবাহিকতা ও নিরবচ্ছিন্ন ইন্টারনেট সংযোগ বজায় রাখতে,
                  অনুগ্রহপূর্বক নির্দিষ্ট সময়ের মধ্যে বিল পরিশোধ করুন। আপনার
                  সহযোগিতা ও আস্থার জন্য আমরা কৃতজ্ঞ।
                </p>
              </div>

              <button
                onClick={closePopup}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition mt-3"
              >
                ঠিক আছে
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
