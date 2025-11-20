import img from "../../assets/Offer/offer.png";
import facebook from "../../assets/Footer/facebook.png";
export default function OfferDetailsPage() {
  return (
    <div>
      <main className="max-w-7xl mx-auto px-4 py-8">
        <article className="bg-white p-6 md:p-10 rounded-xl shadow-lg">
          <header className="border-b pb-4 mb-6">
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
              রেফার করুন, পুরস্কার জিতুন
            </h1>
            <div className="text-sm text-gray-500 mt-2 flex justify-between items-center">
              <p>5:30 PM, September 30, 2025</p>

              <div className="flex space-x-3">
                <a
                  href="https://www.facebook.com/mirpurtechdotcom"
                  aria-label="Facebook"
                >
                  <img
                    src={facebook}
                    alt="facebook logo"
                    className="h-6 w-6 "
                  />
                </a>
              </div>
            </div>
          </header>

          <div className="relative mb-8 rounded-lg overflow-hidden border-2 border-yellow-500 shadow-xl">
            <div className=" flex items-center justify-center bg-yellow-100/50 dot-primary/80 p-2.5 text-center">
              <img
                src={img}
                alt=""
                className="w-full h-full object-fill rounded-lg"
              />
            </div>
          </div>

          <section className="space-y-6 text-gray-700 leading-relaxed text-base">
            <h2 className="text-2xl font-semibold dot-text-primary">
              Mirpur Tech Introduces the Second-Hand Repeater Program
            </h2>

            <p>
              এখন Mirpur Tech নিয়ে এসেছে সেকেন্ড হ্যান্ড রিপিটার
              প্রোগ্রাম—যেখানে নতুন রাউটার কেনার চেয়েও বেশি সুবিধা পাবেন
              গ্রাহকরা। আপনার পুরোনো রাউটার আমাদের কাছে হস্তান্তর করলেই পাচ্ছেন
              ১০০% ক্যাশ ডিসকাউন্ট, যার মাধ্যমে নতুন রাউটার কেনায় সর্বোচ্চ ৩০০
              টাকা পর্যন্ত মূল্য ফেরত পাওয়া যাবে।
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3 border-l-4 border-yellow-500 pl-3">
              নির্দেশনা
            </h3>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>
                এই প্রোগ্রামটি শুধুমাত্র নতুন কানেকশন গ্রহণকারী নির্দিষ্ট
                গ্রাহকদের জন্য প্রযোজ্য।
              </li>
              <li>
                ফেরত দেওয়া রাউটার অবশ্যই সম্পূর্ণ কার্যক্ষম (working condition)
                হতে হবে।
              </li>
              <li>
                পূর্বে Mirpur Tech এর সাথে ৫–৬ দিন ব্যবহার করেননি এমন
                ব্যবহারকারীরাও এ অফারে অংশ নিতে পারবেন।
              </li>
            </ol>

            <h3 className="text-xl font-semibold mt-6 mb-3 border-l-4 border-yellow-500 pl-3">
              যোগাযোগ
            </h3>
            <p>
              পুরোনো রাউটার/রিপিটার ফেরত ও ডিসকাউন্ট সুবিধা পেতে গ্রাহকদের
              আমাদের হটলাইন অথবা নিকটস্থ Mirpur Tech অফিসে যোগাযোগ করার অনুরোধ
              করা হচ্ছে।
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3 border-l-4 border-yellow-500 pl-3">
              রেটচার্ট
            </h3>
            <div className="overflow-x-auto bg-white rounded-box shadow-sm ">
              <table className="table  text-center">
                <thead className="bg-gray-50 text-gray-800">
                  <tr>
                    <th>ডিভাইস</th>
                    <th>মূল্য ফেরত (ক্যাশব্যাক)</th>
                    <th>টোটাল মূল্য</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>রিপিটার/রেঞ্জ এক্সটেন্ডার</td>
                    <td>১০০</td>
                    <td>১৫০</td>
                  </tr>

                  <tr>
                    <td>ডুয়াল ব্যান্ড নন-গিগাবিট রাউটার</td>
                    <td>১৫০</td>
                    <td>২০০</td>
                  </tr>

                  <tr>
                    <td>ডুয়াল ব্যান্ড গিগাবিট রাউটার</td>
                    <td>২০০</td>
                    <td>২৫০</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-semibold mt-6 mb-3 border-l-4 border-yellow-500 pl-3">
              শর্তসমূহ
            </h3>
            <ul className="list-disc list-outside space-y-2 ml-4">
              <li>পুরোনো রাউটার অবশ্যই Mirpur Tech-এর কাছে জমা দিতে হবে।</li>
              <li>
                ক্যাশব্যাক এবং সকল অফার কেবলমাত্র নতুন গ্রাহকদের জন্য প্রযোজ্য।
              </li>
              <li>
                ফেরত দেওয়া ডিভাইস ভাঙা বা ক্ষতিগ্রস্ত হলে কোনো মূল্য ফেরত দেওয়া
                হবে না।
              </li>

              <li>
                এই অফারের অধীনে পাওয়া অর্থ অন্য কোনো Mirpur Tech অফারে ব্যবহার
                করা যাবে না।
              </li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3 border-l-4 border-yellow-500 pl-3">
              দাবি (Disclaimer)
            </h3>
            <p>
              Mirpur Tech প্রয়োজন অনুসারে যেকোনো সময় এ প্রোগ্রামের নির্দেশনা ও
              শর্তাবলি পরিবর্তন, সংশোধন বা বাতিল করার অধিকার সংরক্ষণ করে।
            </p>
          </section>
        </article>
      </main>
    </div>
  );
}
