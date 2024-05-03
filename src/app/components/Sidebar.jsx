"use client";
import Link from "next/link";
import SearchBar from "./SearchBar";
import { MOVIE_GENRES, TV_GENRES } from "../constants";
import * as HoverCard from "@radix-ui/react-hover-card";
import Modal from "./Modal/Modal";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [open, setOpen] = useState(false);
  const openModal = () => {
    setOpen(true);
  };
  const closeModal = () => {
    setOpen(false);
  };
  return (
    <div className="w-full bg-transparent z-10 absolute">
      <div className="flex justify-between gap-x-6 items-center mx-20">
        <div className="flex items-center gap-x-10">
          <Link
            href={"/"}
            className="font-semibold text-white opacity-80 hover:opacity-100 hover:cursor-pointer"
          >
            Home
          </Link>
          <HoverCard.Root openDelay={0} closeDelay={200}>
            <HoverCard.Trigger>
              <p className="font-semibold text-white opacity-80 hover:opacity-100 hover:cursor-pointer">
                Movies
              </p>
            </HoverCard.Trigger>
            <HoverCard.Portal>
              <HoverCard.Content
                className=" w-auto rounded-md bg-white p-5 shadow-xl shadow-black data-[state=open]:transition-all grid grid-cols-2 gap-y-6 gap-x-4"
                sideOffset={16}
              >
                {MOVIE_GENRES.map((item) => (
                  <div className="" key={item.name}>
                    <Link
                      href={`/genre/movie/${item.id}`}
                      className="hover:bg-slate-100 p-2 rounded"
                    >
                      {item.name}
                    </Link>
                  </div>
                ))}
              </HoverCard.Content>
            </HoverCard.Portal>
          </HoverCard.Root>
          <HoverCard.Root openDelay={0} closeDelay={200}>
            <HoverCard.Trigger>
              <p className="font-semibold text-white opacity-80 hover:opacity-100 hover:cursor-pointer">
                TV Show
              </p>
            </HoverCard.Trigger>
            <HoverCard.Portal>
              <HoverCard.Content
                className=" w-auto rounded-md bg-white p-6 shadow-xl shadow-black data-[state=open]:transition-all grid grid-cols-2 gap-y-6 gap-x-4"
                sideOffset={16}
              >
                {TV_GENRES.map((item) => (
                  <div className="" key={item.name}>
                    <Link
                      href={`/genre/tv/${item.id}`}
                      className="hover:bg-slate-100 p-2 rounded"
                    >
                      {item.name}
                    </Link>
                  </div>
                ))}
              </HoverCard.Content>
            </HoverCard.Portal>
          </HoverCard.Root>
        </div>
        <div className="flex items-center gap-x-10">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={openModal}
            type="button"
            className=" hover:bg-slate-700 h-10 w-20 text-slate-200 rounded-lg border-2 bg-[#05151E]"
          >
            Sign in
          </motion.button>
          <AnimatePresence initial={false} mode="wait">
            {open && <Modal closeModal={closeModal} />}
          </AnimatePresence>

          <SearchBar />
        </div>
      </div>
    </div>
  );
}
