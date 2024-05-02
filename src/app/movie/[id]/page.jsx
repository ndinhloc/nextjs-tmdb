import Image from "next/image";
import { API } from "../../constants";
import Link from "next/link";
import Carousel from "@/app/components/Carousel";
async function getMovieDetail(id) {
  const res = await fetch(API.details(id, "movie")).then((response) =>
    response.json()
  );

  return res;
}

async function getRecommendation(id) {
  const res = await fetch(API.recommend(id, "movie")).then((response) =>
    response.json()
  );
  const movies = res.results;
  return movies;
}

export default async function MoviePage({ params }) {
  const detail = await getMovieDetail(params.id);
  const res = await getRecommendation(params.id);
  const recommend = res.slice(0, 10);

  const genres = detail.genres;
  return (
    <div className="w-full object-contain mb-20 text-slate-200">
      <div className="relative ">
        <Image
          src={API.image(detail.backdrop_path)}
          width={1920}
          height={1080}
          alt=""
          className=" opacity-80  w-full h-[640px]  object-cover object-left-top brightness-50"
        ></Image>
        <div className="absolute -bottom-10 left-20 ">
          <Image
            src={API.image(detail.poster_path)}
            width={300}
            height={300}
            alt=""
            className="object-contain rounded-2xl shadow-lg shadow-slate-800"
          ></Image>
        </div>
      </div>
      <div className="mt-20 mx-20">
        <h1 className="text-2xl font-bold ">{detail.title}</h1>
        <div className="flex mb-4">
          <h2 className="text-l font-semibold ">
            {detail.release_date} • ({detail.origin_country}) •{" "}
            {Math.floor(detail.runtime / 60)}h{detail.runtime % 60} •
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
        <p className="text-md">{detail.overview}</p>
      </div>
      <h1 className="text-lg font-semibold mt-10 mb-6 mx-20">
        Recommendations
      </h1>
      <div className="grid grid-cols-5 w-5/6 gap-x-4 mx-auto">
        {recommend.map((item) => (
          <div
            key={item.id}
            className=" flex flex-col items-center h-[250]px w-[250px] transform transition duration-500 hover:scale-110"
          >
            <Link href={`/movie/${item.id}`}>
              <div className=" ">
                <Image
                  src={API.image(item.poster_path)}
                  width={190}
                  height={190}
                  alt={item.id}
                  className="rounded-xl w-11/12 h-[250px] 2xl:h-[400px] object-cover object-top"
                ></Image>
              </div>
              <div className="flex-1 p-6 flex-col ">
                <h2 className="text-center">{item.title || item.name}</h2>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
