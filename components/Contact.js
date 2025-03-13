import { FaGithub, FaEnvelope, FaDiscord, FaTwitter } from "react-icons/fa";

export default function Contact() {
  const contacts = [
    { name: "GitHub", icon: <FaGithub className="text-4xl" />, link: "https://github.com/XD637" },
    { name: "Email", icon: <FaEnvelope className="text-4xl" />, link: "mailto:kishorekkumar34@email.com" },
    { name: "Discord", icon: <FaDiscord className="text-4xl" />, link: "https://discord.com/users/xish101" },
    { name: "Twitter", icon: <FaTwitter className="text-4xl" />, link: "https://twitter.com/soluzeth_" },
  ];

  return (
    <section id="contact" className="w-full min-h-screen flex flex-col items-center justify-center bg-white py-24 px-6">
      <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mt-6">Contact</h2>
      <p className="text-md md:text-lg text-gray-500 mt-4 text-center">
        Let&apos;s connect! Feel free to reach out.
      </p>

      {/* Divider */}
      <div className="w-20 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 
        mt-4 rounded-full transition-all duration-500 ease-in-out 
        hover:bg-gradient-to-l hover:from-blue-600 hover:via-purple-600 hover:to-pink-600">
      </div>

      {/* Contact Icons */}
      <div className="mt-10 flex flex-col sm:flex-row items-center sm:gap-10 gap-6">
        {contacts.map((contact, index) => (
          <a
            key={index}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 text-gray-700 hover:text-black transition-all duration-300"
          >
            {contact.icon}
            <span className="text-xs font-medium">{contact.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
