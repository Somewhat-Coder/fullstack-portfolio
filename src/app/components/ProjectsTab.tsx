import React from "react";

type projectTypePropType = {
  name: string,
  isSelected: boolean,
  onClick: (name: string) => void;
};
const ProjectsTab = ({ name, isSelected, onClick }: projectTypePropType) => {
  const buttonStyle = isSelected
    ? `text-white bg-purple-500`
    : `text-[#ADB7BE] border-slate-600 hover:border-white`;
  return (
    <button
      onClick={() => onClick(name)}
      className={`${buttonStyle} rounded-full px-6 py-3 border-2 text-xl cursor-pointer`}
    >
      {name}
    </button>
  );
};

export default ProjectsTab;
