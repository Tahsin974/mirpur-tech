export default function PackageCard() {
  return (
    <div>
      <div className="grid lg:grid-cols-4 md:grid-cols-4 grid-cols-1 items-center z-10 ">
        {/* Header Section */}
        <div className="p-4  text-left">
          <h2 className="text-2xl leading-6 font-bold text-gray-800 flex items-center gap-1">
            Steel
          </h2>
          <p className="mt-3 text-sm text-gray-800 ">
            Choose a package and start your internet journey
          </p>
          <p className="lg:mt-8 md:mt-5 mt-8">
            <span className="lg:text-2xl md:text-xl text-xl font-extrabold text-white lg:px-9 md:px-4 px-5 lg:py-4 md:py-3 py-3 shadow-lg rounded-t-2xl rounded-r-2xl bg-[#59AEF8]">
              20 Mbps
            </span>
          </p>
        </div>

        {/* Features - Left Column */}
        <div className="lg:border-x md:border-x border-x-0 border-[#2c3543] px-5 grid grid-cols-1 gap-2 text-left">
          {["IIG 10 Mbps", "Unlimited Facebook", "Unlimited Youtube"].map(
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
        <div className="px-5 grid grid-cols-1 gap-2">
          {["BDIX Connected Server", "24/7 Phone and Online Support"].map(
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

        {/* Price & CTA */}
        <div className="p-5 flex flex-col justify-center lg:items-end md:items-end items-center z-10  rounded-2xl bg-[#59AEF8] ">
          <p className=" text-center lg:text-right">
            <span className="text-4xl font-extrabold text-white">৳1260</span>
            <span className="text-white font-medium">/month</span>
          </p>
        </div>
      </div>
    </div>
  );
}
