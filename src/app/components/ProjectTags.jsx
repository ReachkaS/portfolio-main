import React from "react";

const ProjectTags = ({ name, onClick, isPending, subItems = [], onSubClick }) => {
  const buttonClicked = isPending
    ? "border-[#2f4156] text-[#2f4156]"
    : "border-slate-400 text-[#ADB7BE]";

  return (
    <div className="inline-block text-center">
      <button
        className={`rounded-full border-2 px-5 py-1 my-5 mx-1 ${buttonClicked}`}
        onClick={() => onClick(name)}
      >
        {name}
      </button>

      {isPending && subItems.length > 0 && (
        <div className="mt-3 flex flex-col items-center space-y-2">
        {subItems.map((sub, idx) => (
          <button
            key={idx}
            className="w-fit px-4 py-1.5 rounded-full text-sm font-medium border border-gray-300 text-gray-600 hover:bg-[#2f4156] hover:text-white transition-all duration-200 shadow-sm"
            onClick={() => onSubClick?.(sub)}
          >
            {sub}
          </button>
        ))}
      </div>
      )}
    </div>
  );
};

export default ProjectTags;
