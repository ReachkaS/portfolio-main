"use client";
import React, { useState, useRef } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";

const TAB_CONTENTHIGHIGHT = {
  vdo1: "vdos/IMG_0443.MP4",
  vdo2: "vdos/IMG_2292.MP4",
  vdo4: "vdos/IMG_3364.mp4",
  vdo5: "vdos/IMG_7042.mp4",
};
const TAB_DATA = [
  {
    title: "Work Experience",
    id: "work experience",
    content: (
      <ul className="education-list">
        <li className="education-item">
          <div className="degree">
            Jin Fu Mao : ASA Coffee&Bakery and ASA 430 2nd Branch/ JUMBO Seafood
            Cambodia and FlaminGo hotpot
          </div>
          <div className="date">01 July 2024 - Present</div>
          <div className="institution">Work as Content Creator</div>
          <div className="institution">Assisting in Digital Marketing</div>
          <div className="institution">
            - Managing of all Pages of the company
          </div>
          <div className="institution">- Marketing Planing</div>
        </li>
        <li className="education-item">
          <div className="degree">Three Bakery & Three Pastry</div>
          <div className="date">01 December 2023 - 25 June 2024</div>
          <div className="institution">Work as Content Creator</div>
          <div className="institution">- Create Content</div>
          <div className="institution">- Editing Video</div>
          <div className="institution">- Admin Page</div>
          <div className="institution">- Edit Pictures (Meitu app)</div>
          <div className="institution">- Shooting</div>
        </li>
        <li className="education-item">
          <div className="degree">Finn Furniture</div>
          <div className="date">15 August 2023 - 15 November 2023</div>
          <div className="institution">
            Work Full Staff as Interior Design and Architecture
          </div>
        </li>
        <li className="education-item">
          <div className="degree">Kolabot.kh/ Mean chhey</div>
          <div className="date">01 March 2022 - 30 May 2022</div>
          <div className="institution">
            Internship as an Architect and Interior Design
          </div>
        </li>
        <li className="education-item">
          <div className="degree">Thmor Architecture</div>
          <div className="date">8 August 2021 - 8 November 2021</div>
          <div className="institution">
            Internship as an Architect and Interior DesignKhmer
          </div>
        </li>
      </ul>
    ),
    images: [
      <Image
        key="skills-image1"
        src="/images/ryl.JPG"
        alt="Skill image 1"
        width={200}
        height={300}
      />,
    ],
  },
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="education-list">
        <li className="education-item">
          <div className="degree">Teamwork</div>
        </li>
        <li className="education-item">
          <div className="degree">Creative</div>
        </li>
        <li className="education-item">
          <div className="degree">Marketing</div>
        </li>
        <li className="education-item">
          <div className="degree">Hard Working</div>
        </li>
        <li className="education-item">
          <div className="degree">Critical Thinking</div>
        </li>
        <li className="education-item">
          <div className="degree">Flexible</div>
        </li>
      </ul>
    ),
    images: [
      <Image
        key="skills-image1"
        src="/images/batch_certificates.png"
        alt="Skill image 1"
        width={500}
        height={300}
      />,
    ],
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="education-list">
        <li className="education-item">
          <div className="degree">3 Months Course in Degital Marketing</div>
          <div className="institution">Internation Youth Fellowship - IYF</div>
          <div className="date">Completed 2025</div>
        </li>
        <li className="education-item">
          <div className="degree">Bechelor of Architextire and Urbanism</div>
          <div className="institution">Royal University of Fine Arts</div>
          <div className="date">2018 - 2023</div>
        </li>
        <li className="education-item">
          <div className="institution">University of Cambodia</div>
          <div className="date">2018</div>
        </li>
        <li className="education-item">
          <div className="institution">
            Hun Sen Borey 100 knorng High School
          </div>
          <div className="date">2015 - 2018</div>
        </li>
      </ul>
    ),
    images: [
      <Image
        key="education-image1"
        src="/images/Beltei.jpg"
        alt="Education image"
        width={200}
        height={300}
      />,
    ],
  },
];
const Certification = [
  <Image
    key="certifications-image1"
    src="/images/IMG_0543.png"
    alt="Certification image 1"
    width={200}
    height={300}
  />,
  <Image
    key="certifications-image2"
    src="/images/IMG_1403.png"
    alt="Certification image 2"
    width={200}
    height={300}
  />,
  <Image
    key="certifications-image3"
    src="/images/IMG_1443.png"
    alt="Certification image 2"
    width={200}
    height={300}
  />,
  <Image
    key="certifications-image4"
    src="/images/IMG_3755.JPG"
    alt="Certification image 2"
    width={200}
    height={300}
  />,
];
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

const AboutSection = () => {
  const [tab, setTab] = useState("work experience");
  const handleTabChange = (id) => {
    setTab(id);
  };
  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center px-4 py-8 xl:gap-16 sm:py-16">
        <Section className="flex flex-col items-center">
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
