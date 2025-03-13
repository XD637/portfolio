import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa6";

export default function Projects() {
  const projects = [
    { name: "Xennium", description: "A decentralized website", link: "https://xennium.org", image: "/sites/xx.png", mobileImage: "/sites/xxs.png" },
    { name: "LittleBao", description: "An NFT Launching website", link: "https://littlebaonft.com", image: "/sites/lb.png", mobileImage: "/sites/lbs.png" },
    { name: "XenConnect", description: "A Documentation website", link: "https://xenconnect.xyz", image: "/sites/xc.png", mobileImage: "/sites/xcs.png" },
    { name: "CryptoAirdrops", description: "An Airdrop listing platform", link: "https://cryptoairdrops.fun", image: "/sites/ca.png", mobileImage: "/sites/cas.png" },
  ];

  return (
    <section id="projects" className="w-full min-h-screen flex flex-col items-center justify-center bg-white py-24 px-6 sm:px-8 md:px-12">
      <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mt-6">
        Projects
      </h2>

      {/* Project Grid */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 w-full max-w-6xl">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex flex-col items-center text-center sm:text-left sm:items-start p-6 sm:p-8 rounded-2xl border border-gray-200 
            bg-gradient-to-br from-gray-50 to-gray-100 transition-all duration-300 
            hover:scale-[1.01] hover:border-gray-300"
          >
            <div className="relative w-full h-[200px] sm:h-[250px] overflow-hidden">
              <Image
                src={project.mobileImage}
                alt={project.name}
                width={1280}
                height={1280}
                className="rounded-lg object-cover w-full h-full sm:hidden"
                priority
              />
              <Image
                src={project.image}
                alt={project.name}
                width={1366}
                height={768}
                className="rounded-lg object-cover w-full h-full hidden sm:block"
                priority
              />
            </div>
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 mt-4 sm:mt-6">{project.name}</h3>
            <p className="text-base sm:text-lg text-gray-600 mt-2 sm:mt-4">{project.description}</p>

            {/* Visit Button (Centered on Mobile, Right-Aligned on Desktop) */}
            <div className="w-full flex justify-center sm:justify-end">
              <button className="mt-4 sm:mt-6 px-4 py-2 text-sm font-medium uppercase tracking-wide text-white 
                bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl shadow-md 
                transition-all duration-500 ease-in-out hover:shadow-lg hover:scale-105 
                hover:bg-gradient-to-l hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 
                active:scale-95 flex items-center gap-2">
                Visit <FaLocationArrow size={16} />
              </button>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
