"use client"
import React from 'react'

const TabButton = ({ selectTab, active, children }) => (
  <a
    type="button"
    onClick={selectTab}
    className={`p-2 cursor-pointer ${
      active
        ? "bg-[#2f4156] rounded-full transition-all delay-150 text-white drop-shadow-xl"
        : "text-[#2f4156]"
    }`}
  >
    {children}
  </a>
);

export default TabButton;
