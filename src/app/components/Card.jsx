import React from "react";
import Link from "next/link";
import Image from "next/image";
import { API } from "../constants";
export default function Card(props) {
  return (
    <div className="group rounded-2xl overflow-hidden shadow-lg my-4  relative min-h-full transform transition duration-500 hover:scale-110">
      <Link href={`/movie/${props.id}`} className="">
        <Image
          src={API.image(props.poster)}
          alt=""
          width={500}
          height={300}
          className="w-full object-contain group-hover:opacity-80 rounded-2xl"
        ></Image>
        <div className="px-6 ">
          <p className="font-bold text-xl mb-2 ">{props.title}</p>

          <div className="flex">
            <p className="absolute bottom-2">{props.release_date}</p>
            {props.rating < 40 && (
              <p className="text-red-500 absolute bottom-2 right-2">
                {props.rating}%
              </p>
            )}
            {props.rating >= 40 && props.rating < 70 && (
              <p className="text-yellow-500 absolute bottom-2 right-2">
                {props.rating}%
              </p>
            )}
            {props.rating > 70 && (
              <p className="text-green-500 absolute bottom-2 right-2">
                {props.rating}%
              </p>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
}
