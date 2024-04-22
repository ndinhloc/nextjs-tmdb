import React, { useEffect, useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import DropdownCard from "./DropdownCard";

export default function Dropdown({ label, genres, typeFromSidebar }) {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  return (
    <>
      <button
        className="flex items-center gap-x-2 hover:text-slate-600"
        onClick={toggleVisibility}
      >
        <p className="flex text-xl ">{label}</p>
        <BsChevronDown />
      </button>
      {isVisible ? (
        <DropdownCard genres={genres} type={typeFromSidebar} />
      ) : null}
    </>
  );
}
