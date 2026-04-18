import banner from "../../assets/Offer/offer-banner.jpg";
import img from "../../assets/Offer/offer.png";
import { Link } from "react-router";
import { motion } from "framer-motion";

export default function OfferPage() {
  return (
    <div>
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
              Offers & Campaigns
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-white/80 mt-4 text-sm md:text-base max-w-xl mx-auto"
            >
              Welcome to Mirpur Tech's Offers page! Since 2015, we've been
              providing top-notch broadband services with cutting-edge
              technology. As one of Bangladesh's fastest-growing ISPs, we're
              committed to affordable prices and excellent customer service.
              Stay tuned for exciting offers and promotions to enhance your
              internet experience! Choose Mirpur Tech today!
            </motion.p>
          </div>
        </div>
      </header>
      <main className="container mx-auto my-20 px-4">
        <Link to={`/offers/refer`}>
          <div className="card bg-white md:w-96 shadow-sm">
            <figure>
              <img src={img} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title border-b border-gray-300 pb-2.5">
                রেফার করুন, পুরষ্কার জিতুন
              </h2>
              <p>
                Mirpur Tech এ নতুন কাউকে রেফার করলে মাসিক বিল থেকে ২০০ টাকা ছাড়
                উপভোগ করুন। সাথে রিডিমেবল পয়েন্টস পেয়ে আকর্ষণীয় সকল গ্যাজেটস
                সহজে নিতে পারবেন। আর রেফার করলে নতুন সংযোগের কানেকশন চার্জেও ৫০০
                টাকা ছাড় পাবেন।
              </p>
              <div className="card-actions justify-start">
                <button className="text-orange-500 font-bold text-lg">
                  Learn More{" "}
                </button>
              </div>
            </div>
          </div>
        </Link>
      </main>
    </div>
  );
}
