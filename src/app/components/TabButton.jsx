"use client"
import React from 'react'

const TabButton = ({ selectTab, active, children }) => (
  <button
      onClick={selectTab}
      className={`p-2 ${active ? 'bg-[#2f4156] rounded-full transition-all delay-150 text-white drop-shadow-xl' : 'text-[#2f4156]'}`}
  >
      {children}
  </button>
);

