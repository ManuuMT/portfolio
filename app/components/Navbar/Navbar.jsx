"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "./Navbar.scss";
import { AnimatePresence } from "framer-motion";

const links = [
  { title: "ABOUT ME", id: "#about" },
  { title: "WORK", id: "#work" },
  { title: "CONTACT", id: "#contact" },
];

const variant = {
  hidden: (custom) => ({
    opacity: 0,
    y: 25,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
      delay: (title.length - custom) * 0.025,
    },
  }),
  show: (custom) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
      delay: custom * 0.025,
    },
  }),
};

const title = "anu maldonado/>".split("");

export default function Navbar() {
  // * Hooks
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [start, setStart] = useState(false);

  // * Methods
  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    const isScrollingDown = currentScrollY > lastScrollY && currentScrollY > 50;

    setIsHidden(isScrollingDown);
    setLastScrollY(currentScrollY);
    setIsScrolled(currentScrollY > 0);
  };

  const scrollToSection = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  // * Life Cycle
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav className="w-screen palindrome">
      {/* Navbar content  */}
      <div className="container">
        <motion.div
          className={`w-full flex justify-between items-center fixed top-0 left-0 z-20 p-6 ${
            isScrolled ? "navbar-blur" : "bg-transparent"
          }`}
          animate={{ y: isHidden ? "-200%" : 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div
            className="nav-logo text-4xl flex overflow-hidden"
            onClick={() => scrollToSection("#hero")}
            onMouseEnter={() => setStart(true)}
            onMouseLeave={() => setStart(false)}
          >
            <h3>{`<m`}</h3>
            <AnimatePresence>
              {start &&
                title.map((letter, i) => (
                  <motion.div
                    key={`${letter}-${i}`}
                    variants={variant}
                    initial="hidden"
                    exit="hidden"
                    animate="show"
                    custom={i + 1}
                  >
                    <h3 className="min-w-3">{letter}</h3>
                  </motion.div>
                ))}
            </AnimatePresence>
          </div>

          <div className="flex gap-4 color-[rgba(255,255,255,0.5)]">
            {links.map((link) => (
              <h3
                onClick={() => scrollToSection(link.id)}
                className="cursor-pointer transition-all duration-500 hover:text-[var(--main-color)]"
                key={link.title}
              >
                {link.title}
              </h3>
            ))}
          </div>
        </motion.div>
      </div>
    </nav>
  );
}
