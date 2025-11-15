import banner from "../../assets/Offer/offer-banner.jpg";
import img from "../../assets/Offer/offer.png";
import { Link } from "react-router";

export default function OfferPage() {
  return (
    <div>
      <header className="relative  ">
        <div className="absolute inset-0">
          <img
            src={banner}
            alt=""
            className="w-full h-full object-cover bg-opacity-50"
          />
        </div>
        <div className="relative  lg:pb-32 md:pb-20 pb-16 lg:pt-32 md:pt-30 pt-24 -mt-24 px-5 md:px-8 lg:mt-0 bg-[#7c163b8c]">
          <h1 className="font-extrabold tracking-tight pt-12 lg:pt-0 text-white lg:text-5xl md:text-4xl text-4xl">
            Offers & Campaigns
          </h1>
          <p className="lg:mt-6 md:mt-3 mt-6 lg:text-lg md:text-base text-lg text-indigo-100 max-w-4xl">
            Welcome to Mirpur Tech's Offers page! Since 2015, we've been
            providing top-notch broadband services with cutting-edge technology.
            As one of Bangladesh's fastest-growing ISPs, we're committed to
            affordable prices and excellent customer service. Stay tuned for
            exciting offers and promotions to enhance your internet experience!
            Choose Mirpur Tech today!
          </p>
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
