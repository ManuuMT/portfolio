"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const setClipboard = async () => {
  const clipboardItemData = {
    "text/plain": "emtuero@hotmail.com",
  };
  const clipboardItem = new ClipboardItem(clipboardItemData);
  await navigator.clipboard.write([clipboardItem]);
};

const socialArray = [
  {
    title: "email",
    message: "emtuero@hotmail.com",
    url: "",
    icon: "email",
    action: setClipboard,
  },
  {
    title: "linkedin",
    message: "emanuel-mt",
    url: "https://www.linkedin.com/in/emanuel-mt",
    icon: "linkedin",
    action: null,
  },
  {
    title: "github",
    message: "altermanu",
    url: "https://github.com/AlterManu",
    icon: "github",
    action: null,
  },
];

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

export default function Contact() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="w-screen my-[40vh] flex justify-center">
      <div className="container">
        <div className="w-full flex justify-center items-center">
          <div className="flex justify-center gap-20 text-6xl">
            {/* Contact message */}
            <div className="w-1/2">
              <div className="w-full flex justify-end">
                <h3 className="w-3/5">feel free to connect with me</h3>
              </div>
            </div>
            {/* Social section */}
            <div className="w-1/2 flex flex-col">
              {socialArray.map((social) => (
                <SocialNetwork
                  social={social}
                  key={social.title}
                  selected={selected}
                  setSelected={setSelected}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
