"use client";
import Link from "next/link";
import Image from "next/image";
import { Cross1Icon } from "@radix-ui/react-icons";
import SearchBar from "./SearchBar";
import { MOVIE_GENRES, TV_GENRES } from "../constants";
import * as HoverCard from "@radix-ui/react-hover-card";
import ".//style.css";
import Modal from "./Modal";
import { useState } from "react";
export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-3/4  mx-auto bg-slate-100">
      <div className="flex justify-between  gap-x-6 items-center">
        <div className="flex items-center gap-x-10">
          <Link href={"/"} className="mr-6">
            <Image
              src={"/film-movie-reel-icon.svg"}
              width={50}
              height={50}
              alt="logo"
            ></Image>
          </Link>
          <HoverCard.Root openDelay={0} closeDelay={200}>
            <HoverCard.Trigger>
              <p className="font-semibold">Movies</p>
            </HoverCard.Trigger>
            <HoverCard.Portal>
              <HoverCard.Content
                className="data-[side=bottom]:animate-slideUpAndFade w-auto rounded-md bg-white p-5 shadow-xl shadow-black data-[state=open]:transition-all grid grid-cols-3 gap-y-6 gap-x-4"
                sideOffset={16}
              >
                {MOVIE_GENRES.map((item) => (
                  <Link key={item.name} href={`/genre/movie/${item.id}`}>
                    {item.name}
                  </Link>
                ))}
              </HoverCard.Content>
            </HoverCard.Portal>
          </HoverCard.Root>
          <HoverCard.Root openDelay={0} closeDelay={200}>
            <HoverCard.Trigger>
              <p className="font-semibold">TV Show</p>
            </HoverCard.Trigger>
            <HoverCard.Portal>
              <HoverCard.Content
                className="data-[side=bottom]:animate-slideUpAndFade w-auto rounded-md bg-white p-5 shadow-xl shadow-black data-[state=open]:transition-all grid grid-cols-3 gap-y-6 gap-x-4"
                sideOffset={16}
              >
                {MOVIE_GENRES.map((item) => (
                  <Link key={item.name} href={`/genre/tv/${item.id}`}>
                    {item.name}
                  </Link>
                ))}
              </HoverCard.Content>
            </HoverCard.Portal>
          </HoverCard.Root>
        </div>
        <div className="flex items-center gap-x-10">
          <button
            onClick={() => {
              setOpen(!open);
            }}
            type="button"
            className=" hover:bg-slate-300 h-10 w-20 rounded-full border-2 bg-white"
          >
            Sign in
          </button>
          {open ? (
            <Modal>
              <div className="bg-white  rounded-lg max-w-md">
                <div className="justify-end flex p-2">
                  <button
                    type="button"
                    onClick={() => {
                      setOpen(!open);
                    }}
                    className=" hover:bg-gray-300 items-center"
                  >
                    <Cross1Icon></Cross1Icon>
                  </button>
                </div>

                <form class="space-y-6 mx-6 pb-4" action="#">
                  <h3 class="text-xl font-medium text-gray-900 dark:text-white">
                    Sign in
                  </h3>
                  <hr className="w-3/4 mx-auto" />
                  <div>
                    <label
                      for="email"
                      class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      placeholder="name@company.com"
                      required=""
                    ></input>
                  </div>
                  <div>
                    <label
                      for="password"
                      class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      required=""
                    ></input>
                  </div>
                  <div class="flex justify-between gap-x-10">
                    <div class="flex items-start">
                      <div class="flex items-center h-5">
                        <input
                          id="remember"
                          aria-describedby="remember"
                          type="checkbox"
                          class="bg-gray-50 border border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                          required=""
                        ></input>
                      </div>
                      <div class="text-sm ml-2">
                        <label
                          for="remember"
                          class="font-medium text-gray-900 dark:text-gray-300"
                        >
                          Remember me
                        </label>
                      </div>
                    </div>
                    <a
                      href="#"
                      class="text-sm text-blue-700 hover:underline dark:text-blue-500"
                    >
                      Lost Password?
                    </a>
                  </div>
                  <button
                    type="submit"
                    class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Sign in to your account
                  </button>
                  <div class="text-sm text-center font-medium text-gray-500 dark:text-gray-300">
                    Not registered?{" "}
                    <a
                      href="#"
                      class="text-blue-700 hover:underline dark:text-blue-500"
                    >
                      Create account
                    </a>
                  </div>
                </form>
              </div>
            </Modal>
          ) : null}
          <SearchBar />
        </div>
      </div>
    </div>
  );
}
