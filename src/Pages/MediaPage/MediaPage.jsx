import { ArrowRight, Server } from "lucide-react";

export default function MediaPage() {
  const ftpLinks = [
    { name: "FTP Server 1", url: "http://10.16.100.244/" },
    { name: "FTP Server 2", url: "http://172.16.50.4/" },
    { name: "FTP Server 3", url: "https://172.27.27.84/" },
    { name: "FTP Server 4", url: "http://showtimebd.com/" },
    { name: "FTP Server 5", url: "http://banglatube.net/" },
    { name: "FTP Server 6", url: "https://bdixftplink.blogspot.com/" },
    { name: "FTP Server 7", url: "http://10.1.1.1/" },
    {
      name: "FTP Server 8",
      url: "https://vdomela.com/web/#/selectserver.html",
    },
  ];
  return (
    <div>
      <div className="min-h-screen bg-gray-50  py-16 px-6 flex flex-col items-center">
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
                <Server className="w-8 h-8 text-blue-500 mb-2 mx-auto" />
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
