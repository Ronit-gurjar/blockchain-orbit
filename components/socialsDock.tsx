"use client";

import { motion } from "framer-motion";

const socials = [
  {
    name: "Twitter",
    icon: (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="white"
        viewBox="0 0 48 48"
      >
        <path d="M 11 4 C 7.1456661 4 4 7.1456661 4 11 L 4 39 C 4 42.854334 7.1456661 46 11 46 L 39 46 C 42.854334 46 46 42.854334 46 39 L 46 11 C 46 7.1456661 42.854334 4 39 4 L 11 4 z M 11 6 L 39 6 C 41.773666 6 44 8.2263339 44 11 L 44 39 C 44 41.773666 41.773666 44 39 44 L 11 44 C 8.2263339 44 6 41.773666 6 39 L 6 11 C 6 8.2263339 8.2263339 6 11 6 z M 13.085938 13 L 22.308594 26.103516 L 13 37 L 15.5 37 L 23.4375 27.707031 L 29.976562 37 L 37.914062 37 L 27.789062 22.613281 L 36 13 L 33.5 13 L 26.660156 21.009766 L 21.023438 13 L 13.085938 13 z M 16.914062 15 L 19.978516 15 L 34.085938 35 L 31.021484 35 L 16.914062 15 z" />
      </svg>
    ),
    link: "https://x.com/Blockchainorbit",
  },
  {
    name: "LinkedIn",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="white"
        viewBox="0 0 24 24"
      >
        <path d="M19.5 3h-15C3.67 3 3 3.67 3 4.5v15c0 .83.67 1.5 1.5 1.5h15c.83 0 1.5-.67 1.5-1.5v-15c0-.83-.67-1.5-1.5-1.5zm-10.92 14H6V10h2.58v7zm-1.29-8.26a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm10.71 8.26h-2.58v-3.49c0-.84-.3-1.41-.96-1.41-.52 0-.83.35-.97.69-.05.13-.06.3-.06.48v3.73h-2.57V10h2.46v.92h.04c.34-.6.95-1.23 1.98-1.23 1.45 0 2.54.95 2.54 2.99v4.32z" />
      </svg>
    ),
    link: "https://www.linkedin.com/company/blockchainorbit/",
  },
];

<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">

</svg>

const Socials = () => {
  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 flex gap-4 bg-black/30 p-3 rounded-full backdrop-blur-md">
      {socials.map((social) => (
        <motion.a
          key={social.name}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white p-2"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
        >
          {social.icon}
        </motion.a>
      ))}
    </div>
  );
};

export default Socials;
