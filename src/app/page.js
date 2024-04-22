"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { API } from "./constants";
import Carousel from "./components/Carousel";
import Result from "./components/Result";
import Link from "next/link";

export default function Home() {
  const [data, setData] = useState({
    trendingMovies: [],
    trendingTV: [],
  });
  useEffect(() => {
    axios
      .all([
        axios.get(API.trending("movie", 1)),
        axios.get(API.trending("tv", 1)),
      ])
      .then(
        axios.spread((trendingMoviesRes, trendingTVRes) => {
          setData({
            trendingMovies: trendingMoviesRes.data.results,
            trendingTV: trendingTVRes.data.results,
          });
        })
      );
  }, []);
  return (
    <div className="w-5/6 ">
      <Link href={"/trending/movie"}>
        <h1 className=" mt-6 mb-4 mx-10 text-2xl font-semibold">
          Trending TV Shows
        </h1>
      </Link>
      <Carousel data={data.trendingTV} type={1}></Carousel>
      <Link href={"/trending/tv"}>
        <h1 className=" mt-6 mb-4 mx-10 text-2xl font-semibold">
          Trending Movies
        </h1>
      </Link>
      <Carousel data={data.trendingMovies} type={0}></Carousel>
    </div>
  );
}
