"use client";
import axios from "axios";

import { API } from "../constants";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HeroSlide(props) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
  };

  return (
    <Slider {...settings}>
      {props.data &&
        props.data.map((item) => (
          <div key={item.id} className="">
            <Link href={`/movie/${item.id}`}>
              <div className=" flex flex-col justify-center items-center relative">
                <Image
                  src={API.image(item.backdrop_path)}
                  width={1920}
                  height={1080}
                  alt={item.id}
                  className="w-full h-[480px]  object-cover object-left-top brightness-50"
                ></Image>
                <div className="absolute">
                  <div className="flex gap-x-6">
                    <Image
                      src={API.image(item.poster_path)}
                      alt={item.id}
                      width={250}
                      height={250}
                      className="rounded-lg shadow-2xl w-auto h-auto"
                    ></Image>
                    <div>
                      <p className="lg:text-3xl font-semibold text-white mb-6">
                        {item.title || item.name}
                      </p>

                      <p className="text-lg text-white mb-4">
                        Release Date: {item.release_date || item.first_air_date}
                      </p>
                      <div className="flex items-center text-white ">
                        {Math.floor(item.vote_average * 10) < 40 && (
                          <div
                            className={`w-11 h-11 rounded-full border-2 border-black bg-red-500 flex justify-center items-center`}
                          >
                            <p>{Math.floor(item.vote_average * 10)}%</p>
                          </div>
                        )}
                        {Math.floor(item.vote_average * 10) >= 40 &&
                          Math.floor(item.vote_average * 10) < 70 && (
                            <div
                              className={`w-11 h-11 rounded-full border-2 border-black bg-yellow-500 flex justify-center items-center`}
                            >
                              <p>{Math.floor(item.vote_average * 10)}%</p>
                            </div>
                          )}
                        {Math.floor(item.vote_average * 10) > 70 && (
                          <div
                            className={`w-11 h-11 rounded-full border-2 border-black bg-green-500 flex justify-center items-center`}
                          >
                            <p>{Math.floor(item.vote_average * 10)}%</p>
                          </div>
                        )}

                        <p className="font-bold text-l ml-2">User Score</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
    </Slider>
  );
}
