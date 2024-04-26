import { API, MOVIE_GENRES_MAP } from "./constants";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import HeroSlide from "./components/HeroSlide";
import Carousel from "./components/Carousel";
async function getHeroData() {
  const res = await fetch(API.trending("movie", 1)).then((response) =>
    response.json()
  );
  const movies = res.results;
  return movies;
}

async function getAiringShows() {
  const res = await fetch(API.popular.tv).then((response) => response.json());
  const shows = res.results;
  return shows;
}

async function getTopRatedShows() {
  const res = await fetch(API.topRated.tv).then((response) => response.json());
  const shows = res.results;
  return shows;
}

export default async function Home({}) {
  const trendingMovies = await getHeroData();
  const popularShows = await getAiringShows();
  const topRatedShows = await getTopRatedShows();
  return (
    <div className="">
      <HeroSlide data={trendingMovies}></HeroSlide>
      <div className="">
        <Link
          href={"/"}
          className="flex items-center gap-x-1 mt-2 mr-6 font-semibold float-end"
        >
          {" "}
          View all Trending<ArrowRightIcon></ArrowRightIcon>
        </Link>
      </div>
      <div className="mt-10 w-3/5 mx-auto">
        <Link href={"/"} className="text-xl font-semibold">
          What's popular
        </Link>
        <Carousel data={popularShows} type={1} className="mt-4"></Carousel>
        <Link href={"/"} className="text-xl font-semibold mt-4">
          Top Rated Shows
        </Link>
        <Carousel data={topRatedShows} type={1} className="mt-4"></Carousel>
      </div>
    </div>
  );
}
