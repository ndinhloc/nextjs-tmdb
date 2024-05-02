"use client";
import React, { useEffect, useState } from "react";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search/${search}`);
  };
  return (
    <form
      className="flex items-center rounded-xl bg-[#05151E] px-3 py-2 my-6 border-2 border-slate-100"
      onSubmit={handleSubmit}
    >
      <input
        type="search"
        placeholder="Search for movies, TV shows..."
        className="text-base text-slate-200 bg-transparent w-full focus:outline-none px-2"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      ></input>
      <div style={{ color: "white" }}>
        <MagnifyingGlassIcon className="w-5 h-5"></MagnifyingGlassIcon>
      </div>
    </form>
  );
}
