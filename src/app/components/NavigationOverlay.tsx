import React from "react";
import NavLink from "./NavLink";
import { linkObjTyoe } from "../tyoes";

const NavigationOverlay = ({
  links,
}: {
  links: linkObjTyoe[];
}) => {
  return (
    <ul className="flex flex-col py-3 items-center text-md">
      {links.map((link, index: number) => (
        <div className="w-1/6 text-center" key={index}>
          <li>
            <NavLink href={link.path} title={link.title} />
          </li>
          <hr className="border-1/2 w-full border-slate-400"/>
        </div>
      ))}
    </ul>
  );
};

export default NavigationOverlay;
