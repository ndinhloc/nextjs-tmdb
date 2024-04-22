"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import SearchBar from "./SearchBar";
import { MOVIE_GENRES, TV_GENRES } from "../constants";

import Dropdown from "./Dropdown";

export default function Header() {
  return (
    <div className=" w-72 p-8 lg:h-screen gap-y-6">
      <div className="flex justify-center items-center">
        <Link href={"/"}>
          <Image
            src={"/film-movie-reel-icon.svg"}
            width={100}
            height={100}
            alt="logo"
          ></Image>
        </Link>
      </div>
      <SearchBar />
      <p className="text-2xl font-semibold">Discover</p>
      <div className="flex flex-col pt-5 gap-y-3 ">
        <Dropdown
          label={"Movies"}
          genres={MOVIE_GENRES}
          typeFromSidebar="movie"
        ></Dropdown>
        <Dropdown
          label={"TV Show"}
          genres={TV_GENRES}
          typeFromSidebar="tv"
        ></Dropdown>
      </div>
      <div></div>
    </div>
  );
}
