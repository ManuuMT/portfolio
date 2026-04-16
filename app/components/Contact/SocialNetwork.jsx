"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const iconStyle = {
  borderLeft: "10px solid transparent",
  borderRight: "10px solid transparent",
  borderTop: "10px solid var(--main-color)",
};

const SocialNetwork = ({ social, selected, setSelected }) => {
  // * Hooks
  const router = useRouter();

  return (
    <div className="flex">
      <div className="w-0 h-0 rotate-[-135deg] mt-2 mr-1" style={iconStyle} />
      {social.action ? (
        <div
          onClick={() =>
            social.action ? social.action() : router.push(social.url)
          }
          className="relative w-full"
          onMouseEnter={() => setSelected(social.title)}
          onMouseLeave={() => setSelected(null)}
        >
          <div
            className="bg-[var(--main-color)] w-full h-full absolute z-20 top-0 left-0 transition-all duration-300 cursor-pointer flex items-center px-2"
            style={{
              clipPath:
                social.title === selected ? "inset(0 0 0)" : "inset(50% 0 50%)",
            }}
          >
            <h3 className="text-[#000] text-4xl">{social.message}</h3>
          </div>
          <h3>{social.title}</h3>
        </div>
      ) : (
        <Link
          href={social.url}
          className="relative w-full"
          onMouseEnter={() => setSelected(social.title)}
          onMouseLeave={() => setSelected(null)}
        >
          <div
            className="bg-[var(--main-color)] w-full h-full absolute z-20 top-0 left-0 transition-all duration-300 cursor-pointer flex items-center px-2"
            style={{
              clipPath:
                social.title === selected ? "inset(0 0 0)" : "inset(50% 0 50%)",
            }}
          >
            <h3 className="text-[#000] text-4xl">{social.message}</h3>
          </div>
          <h3>{social.title}</h3>
        </Link>
      )}
    </div>
  );
};

export default SocialNetwork;
