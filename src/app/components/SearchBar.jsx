"use client";
import React, { useEffect, useState } from "react";

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
      className="flex items-center rounded-full bg-white px-3 py-2 my-6 border-2 border-slate-500"
      onSubmit={handleSubmit}
    >
      <input
        type="search"
        placeholder="Search for a movies, TV show..."
        className="text-base bg-transparent w-full focus:outline-none px-2"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
}
