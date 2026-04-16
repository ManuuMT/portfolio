"use client";

import { useState } from "react";
import SocialNetwork from "./SocialNetwork";
import Toast from "./Toast";

export default function Contact() {
  // * Hooks
  const [selected, setSelected] = useState(null);
  const [isToastOpen, setIsToastOpen] = useState(false);

  // * Methods
  const setClipboard = async () => {
    const clipboardItemData = {
      "text/plain": "emtuero@hotmail.com",
    };
    const clipboardItem = new ClipboardItem(clipboardItemData);
    await navigator.clipboard.write([clipboardItem]);
    setIsToastOpen(true);

    setTimeout(() => {
      setIsToastOpen(false);
    }, 3000);
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

  return (
    <section className="w-screen my-[40vh] flex justify-center">
      <Toast
        message={"email copied to clipboard :)"}
        isToastOpen={isToastOpen}
      />

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
