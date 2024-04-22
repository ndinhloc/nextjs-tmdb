"use client";
import Image from "next/image";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { API } from "../../constants";
import Link from "next/link";
export default function MoviePage({ params }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(API.details(params.id, "movie"))
      .then((response) => {
        if (response.status == 200) {
          setData(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [params.id]);
  const genres = data.genres;
  return (
    <div className="w-3/4 object-contain mt-10 mx-auto mb-20">
      <div className="relative ">
        <Image
          src={API.image(data.backdrop_path)}
          width={1920}
          height={1080}
          alt=""
          className=" opacity-80 object-contain rounded-2xl"
        ></Image>
        <div className="absolute -bottom-10 left-20 ">
          <Image
            src={API.image(data.poster_path)}
            width={300}
            height={300}
            alt=""
            className="object-contain rounded-2xl shadow-lg shadow-slate-800"
          ></Image>
        </div>
      </div>
      <div className="mt-20 mx-20">
        <h1 className="text-2xl font-bold ">{data.original_title}</h1>
        <div className="flex mb-4">
          <h2 className="text-l font-semibold ">
            {data.release_date} • ({data.origin_country}) •{" "}
            {Math.floor(data.runtime / 60)}h{data.runtime % 60} •
          </h2>
          <h2>
            {genres &&
              genres.map((item) => (
                <Link
                  key={item.id}
                  href={"/"}
                  className="pl-1 font-semibold hover:text-slate-600"
                >
                  {item.name}
                </Link>
              ))}
          </h2>
        </div>

        <h2 className="text-lg font-semibold">Overview</h2>
        <p className="text-md">{data.overview}</p>
      </div>
    </div>
  );
}
