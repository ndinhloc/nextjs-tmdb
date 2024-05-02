"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Image from "next/image";
import { API } from "../constants";
import Link from "next/link";
import { motion } from "framer-motion";
export default function Carousel(props) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplay: false,
    pauseOnHover: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const ref = props.type == 0 ? "moive" : "tv";
  return (
    <div className="container mx-auto">
      <Slider {...settings} className="">
        {props.data.map((item) => (
          <motion.div
            key={item.id}
            className=" flex flex-col items-center rounded-xl "
            whileHover={{ scale: 1.1 }}
          >
            <Link href={`/${ref}/${item.id}`}>
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
                <h2 className="text-center text-slate-200">
                  {item.title || item.name}
                </h2>
              </div>
            </Link>
          </motion.div>
        ))}
      </Slider>
    </div>
  );
}
