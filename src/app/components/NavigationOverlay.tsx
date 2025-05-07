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
        <li key={index}>
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default NavigationOverlay;
