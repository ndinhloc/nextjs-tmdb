"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Result from "@/app/components/Result";
import { API } from "@/app/constants";
export default function SearchPage({ params }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(API.search("multi", params.query, 1))
      .then((response) => {
        if (response.status === 200) {
          setData(response.data.results);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [params]);
  return (
    <Result data={data} option={`Search results for: ${params.query}`}></Result>
  );
}
