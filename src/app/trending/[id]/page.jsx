"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Result from "@/app/components/Result";
import { API } from "@/app/constants";

export default function TrendingPage({ params }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const next = () => {
    setCurrentPage(currentPage + 1);
  };
  const prev = () => {
    if (currentPage == 0) {
      return;
    }
    setCurrentPage(currentPage - 1);
  };
  useEffect(() => {
    axios
      .get(API.trending(params.id, currentPage))
      .then((response) => {
        if (response.status === 200) {
          setData(response.data.results);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [params, currentPage]);
  return (
    <div className="">
      <Result data={data} option={`TRENDING ${params.id.toUpperCase()}`} />
      <div className="flex justify-between w-3/4 mx-auto ">
        <button
          onClick={prev}
          className="container w-20 h-16 bg-black rounded-lg my-20 shadow-2xl"
        >
          <h1 className="text-2xl font-bold hover:cursor-pointer text-slate-50">
            Back
          </h1>
        </button>
        <button
          onClick={next}
          className="container w-20 h-16 bg-black rounded-lg my-20 shadow-2xl"
        >
          <h1 className="text-2xl font-bold hover:cursor-pointer text-slate-50">
            Next
          </h1>
        </button>
      </div>
    </div>
  );
}
