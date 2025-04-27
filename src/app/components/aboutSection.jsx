"use client";
import React, { useState, useRef } from "react";
import { useInView } from "framer-motion";
import { Certification ,TAB_DATA, TAB_CONTENTHIGHIGHT } from "./projectData";

import TabButton from "./TabButton";

const Section = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
        }}
      >
        {children}
      </span>
    </section>
  );
};


const AboutSection = () => {
  const [tab, setTab] = useState("work experience");
  const handleTabChange = (id) => {
    setTab(id);
  };
  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center px-4 py-8 xl:gap-16 sm:py-16">
        <Section className="flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-4 text-center text-[#2f4156]">Preview</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {Object.values(TAB_CONTENTHIGHIGHT).map((videoSrc, index) => (
              <video
                key={index}
                autoPlay
                loop
                muted
                playsInline
                className="w-[100px] lg:w-[250px]   h-auto rounded-lg shadow-lg"
              >
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ))}
          </div>
        </Section>
        <Section>
          <h2 className="text-3xl lg:text-5xl font-bold text-[#2f4156] mb-4 ">
            So who am I?
          </h2>
          <p className="text-base lg:text-lg text-[#2f4156] text-justify">
            Hi, I’m Vichea, a passionate Content Creator Specialist and newly
            Digital Marketing with a creative edge and a results-driven mindset.
            I specialize in crafting compelling content strategies, managing
            brand storytelling across multiple platforms, and driving meaningful
            engagement that converts. With a strong foundation in SEO, social
            media marketing, email campaigns, and data analytics, I blend
            creativity with strategy to elevate brand presence and connect with
            audiences in impactful ways. Whether It&apos;s developing content
            calendars, producing eye-catching visuals, or optimizing ad
            performance, I bring ideas to life and deliver measurable growth.{" "}
          </p>
          <div className="flex flex-row mt-8">
            <TabButton
              selectTab={() => handleTabChange("work experience")}
              active={tab === "work experience"}
            >
              Work
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>

          </div>
          <div
            className={`grid md:grid-cols-1 mt-2 ${
              tab === "work experience" ? "lg:grid-cols-1" : "lg:grid-cols-2"
            }`}
          >
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </Section>
      </div>
      <div className="certification-section">
        <div className="certifications-container">
          <ul className="certifications grid grid-cols-1 md:grid-cols-3 gap-14 py-8 xl:gap-8">
            {Certification.map((item, index) => (
              <li
                key={`certification-item-${index}`}
                className="flex md:grid-cols-2 gap-14 py-8 xl:gap-8"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
