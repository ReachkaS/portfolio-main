"use client";
import React, { useState } from "react";
import ProjectTags from "./ProjectTags";
import ProjectCard from "./ProjectCard";
import { projectsData } from "./projectData";

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const [selectedSubItem, setSelectedSubItem] = useState(null);

  const handleTags = (tagName) => {
    setTag(tagName);
    setSelectedSubItem(null); 
  };

  const handleSubItemClick = (subItem) => {
    setSelectedSubItem(subItem); 
  };

  const jfmSubItems = ["ASA", "Flamingo", "Jumbo Seafood"];
  const allSubItems = ["Video Content", "Funny Content", "Poster"];

  const filteredProjects = projectsData.filter((project) => {
    if (tag === "All" && selectedSubItem) {
      return project.tag.includes("All") && project.subItems?.includes(selectedSubItem);
    }
    if (tag !== "All" && selectedSubItem) {
      return project.tag.includes(tag) && project.subItems?.includes(selectedSubItem);
    }
    if (tag !== "All" && !selectedSubItem) {
      return project.tag.includes(tag);
    }
    return true;
  });

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4 text-[#2f4156]">Projects</h2>

      <div className="flex justify-center flex-wrap mb-4">
        <ProjectTags
          name="All"
          onClick={handleTags}
          isPending={tag === "All"}
          subItems={allSubItems}
          onSubClick={handleSubItemClick}
        />
        <ProjectTags
          name="Three Bakery"
          onClick={handleTags}
          isPending={tag === "Three Bakery"}
        />
        <ProjectTags
          name="JFM Company"
          onClick={handleTags}
          isPending={tag === "JFM Company"}
          subItems={jfmSubItems}
          onSubClick={handleSubItemClick}
        />
        <ProjectTags
          name="Come with Torz"
          onClick={handleTags}
          isPending={tag === "Come with Torz"}
        />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredProjects.map((project) => (
          <div key={project.image}>
            <video
              src={project.image}
              controls
              className="w-full rounded shadow"
            />
          </div>
        ))}
      </div>

      
    </div>
      );
};

export default ProjectsSection;
