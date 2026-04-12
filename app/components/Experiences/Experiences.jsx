"use client";

import { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import cap from "@/assets/images/logos/logo-capgemini.png";
import utn from "@/assets/images/logos/logo-utn.png";
import attlos from "@/assets/images/logos/logo-attlos.png";
import indra from "@/assets/images/logos/logo-indra.png";
import worksut from "@/assets/images/logos/logo-worksut.png";
import ExperienceCard from "./ExperienceCard";
import ExperienceYear from "./ExperienceYear";
import "./Experiences.scss";

const jobsLeft = [
  {
    company: "Worksut",
    logo: worksut,
    title: "FRONTEND DEVELOPER",
    dateFrom: "11/2021",
    dateTo: "04/2022",
    aurora: "worksut-aurora",
    delay: 0,
  },
  {
    company: "UTN",
    logo: utn,
    title: "FRONTEND DEVELOPER",
    dateFrom: "02/2023",
    dateTo: "11/2023",
    aurora: "utn-aurora",
    delay: 1,
  },
  {
    company: "INDRA",
    logo: indra,
    title: "FRONTEND DEVELOPER",
    dateFrom: "05/2025",
    dateTo: "-",
    aurora: "indra-aurora",
    delay: 2,
  },
];

const jobsRight = [
  {
    company: "Attlos",
    logo: attlos,
    title: "FRONTEND DEVELOPER",
    dateFrom: "05/2022",
    dateTo: "12/2022",
    aurora: "attlos-aurora",
    delay: 0.5,
  },
  {
    company: "Capgemini",
    logo: cap,
    title: "FRONTEND DEVELOPER",
    dateFrom: "12/2023",
    dateTo: "04/2025",
    aurora: "cap-aurora",
    delay: 1.5,
  },
];

const years = [
  {
    year: "2021",
    class: "absolute top-0 left-1/2 -translate-x-1/2 pr-32 text-3xl text-white",
  },
  {
    year: "2022",
    class:
      "absolute top-[20%] left-1/2 -translate-x-1/2 pl-32 text-3xl text-white",
  },
  {
    year: "2023",
    class:
      "absolute top-[40%] left-1/2 -translate-x-1/2 pr-32 text-3xl text-white",
  },
  {
    year: "2024",
    class:
      "absolute top-[60%] left-1/2 -translate-x-1/2 pl-32 text-3xl text-white",
  },
  {
    year: "2025",
    class:
      "absolute top-[80%] left-1/2 -translate-x-1/2 pl-32 text-3xl text-white",
  },
];

export default function Experiences() {
  // * Hooks
  const ref = useRef(null);
  const [height, setHeight] = useState();

  // start when the top of the element reaches the center of the viewport
  // end when the bottom of the element reaches the end of the viewport
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end end"],
  });

  // * Life Cycle
  useEffect(() => {
    setHeight(ref.current?.offsetHeight);
  }, []);

  return (
    <div className="w-screen flex justify-center items-center" id="work">
      <div className="container">
        {/* Title */}
        <div className="w-full flex justify-center items-center">
          <div className="w-4/5">
            <h3 className="py-20 px-10 text-2xl w-fit">WORK EXPERIENCE</h3>
          </div>
        </div>

        <motion.section ref={ref} className="pb-[20vh]">
          {/* Cols Container */}
          <div className="flex justify-center gap-40 relative">
            {/* Left Col */}
            <div className="flex flex-col">
              {jobsLeft.map((job, i) => (
                <ExperienceCard
                  job={job}
                  className={`experience-card ${
                    i === 0 ? "mt-20" : "mt-[12rem]"
                  }`}
                  key={job.company}
                />
              ))}
            </div>

            {/* SVG */}
            <motion.svg
              width="10"
              height={height}
              viewBox={`0 0 6 ${height}`}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                d={`M3 0V${height}`}
                stroke="white"
                style={{ pathLength: scrollYProgress }}
              />
            </motion.svg>

            {years.map((year) => (
              <ExperienceYear key={year.year} year={year} />
            ))}

            {/* Right Col */}
            <div className="flex flex-col mt-[12rem]">
              {jobsRight.map((job) => (
                <ExperienceCard
                  job={job}
                  className="experience-card mt-[12rem]"
                  key={job.company}
                />
              ))}
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
