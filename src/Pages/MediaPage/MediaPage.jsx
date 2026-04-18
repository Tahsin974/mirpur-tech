import { ArrowRight, Server } from "lucide-react";
import img1 from "../../assets/Server/ftp-server.png";
import img2 from "../../assets/Server/DhakaFlix.JPG";
import img3 from "../../assets/Server/ftpmedia.png";
import img4 from "../../assets/Server/jellyfin.png";
import img5 from "../../assets/Server/circleftp.jpeg";
import img6 from "../../assets/Server/BASPLAY.JPG";
import tvimg1 from "../../assets/Server/basnet.png";
import banner from "../../assets/Server/media-banner.png";
import { motion } from "framer-motion";
export default function MediaPage() {
  const tvLinks = [
    { name: "BASNET TV", url: "http://10.99.99.99/", img: tvimg1 },
    { name: "TV Server 2", url: "http://10.10.10.2/", img: null },
    { name: "TV Server 3", url: "http://172.16.29.3:8090/", img: null },
    { name: "TV Server 4", url: "http://172.17.50.112/", img: null },
  ];
  const ftpLinks = [
    { name: "FTP Server ", url: "http://10.16.100.244/", img: img1 },
    { name: "DhakaFlix", url: "http://172.16.50.4/", img: img2 },
    { name: "FTPMedia.live", url: "http://10.1.1.1/", img: img3 },
    {
      name: "Jellyfin",
      url: "https://vdomela.com/web/#/selectserver.html",
      img: img4,
    },

    { name: "Circle FTP", url: "https://circleftp.net/", img: img5 },
    { name: "BASPLAY", url: "http://10.20.30.40/", img: img6 },
    { name: "Data", url: "http://10.1.1.1/data/" },
    { name: "FTP Server 8", url: "https://bdixftplink.blogspot.com/" },
  ];
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
              Media & Server Access Hub
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-white/80 mt-4 text-sm md:text-base max-w-xl mx-auto"
            >
              Access all TV servers, FTP storage, and media platforms from a
              single unified dashboard. Fast, secure, and organized network
              resources for seamless content access anytime.
            </motion.p>
          </div>
        </div>
      </header>
      <div className="min-h-max bg-gray-50  py-16 px-6 flex flex-col items-center">
        <h1 className="text-3xl font-bold text-gray-800  mb-8">
          TV Server Links
        </h1>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl w-full">
          {tvLinks.map((server, index) => (
            <div
              key={index}
              className="shadow-md border border-gray-700 hover:shadow-lg transition-all duration-200 p-4 space-y-4"
            >
              <div className="flex items-center justify-center flex-col ">
                {server.img ? (
                  <img src={server.img} alt={server.name} className="h-20" />
                ) : (
                  <Server className="w-20 h-20 text-blue-500 mb-2 mx-auto" />
                )}

                <h2 className="text-lg font-semibold text-gray-800  text-center">
                  {server.name}
                </h2>
              </div>

              <div className="flex justify-center">
                <a
                  href={server.url}
                  className="text-blue-600 dark:text-blue-400 font-medium hover:underline break-all flex items-center gap-1.5 "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Click Here</span> <ArrowRight size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="min-h-max bg-gray-50  py-16 px-6 flex flex-col items-center">
        <h1 className="text-3xl font-bold text-gray-800  mb-8">
          FTP Server Links
        </h1>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl w-full">
          {ftpLinks.map((server, index) => (
            <div
              key={index}
              className="shadow-md border border-gray-700 hover:shadow-lg transition-all duration-200 p-4 space-y-4"
            >
              <div className="flex items-center justify-center flex-col ">
                {server.img ? (
                  <img src={server.img} alt={server.name} className="h-20" />
                ) : (
                  <Server className="w-20 h-20 text-blue-500 mb-2 mx-auto" />
                )}

                <h2 className="text-lg font-semibold text-gray-800  text-center">
                  {server.name}
                </h2>
              </div>

              <div className="flex justify-center">
                <a
                  href={server.url}
                  className="text-blue-600 dark:text-blue-400 font-medium hover:underline break-all flex items-center gap-1.5 "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Click Here</span> <ArrowRight size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
