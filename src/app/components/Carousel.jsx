import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Image from "next/image";
import { API } from "../constants";
import Link from "next/link";
export default function Carousel(props) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,

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
  return (
    <div className="container mx-auto">
      <Slider {...settings}>
        {props.data.map((item) => (
          <div key={item.id} className="">
            <Link href={`/movie/${item.id}`}>
              <div className=" flex flex-col justify-center items-center">
                <Image
                  src={API.image(item.poster_path)}
                  width={190}
                  height={190}
                  alt={item.id}
                  className="rounded-xl w-auto h-auto"
                ></Image>
              </div>
              <div className="flex flex-col item-center justify-center">
                <h2 className="text-center">
                  {props.type == 0 ? item.title : item.name}
                </h2>
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
}
