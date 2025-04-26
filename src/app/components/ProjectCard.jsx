import React from 'react'
import Image from 'next/image';

const ProjectCard = ({ imgUrl }) => (
    <div className="w-full rounded-xl relative group overflow-hidden">
      <Image
        className="w-full rounded-xl"
        src={imgUrl}
        alt="Project Image"
        width={500}
        height={500}
        layout="responsive"
        objectFit="cover"
      />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300 ease-in-out" />
    </div>
  );
  

export default ProjectCard