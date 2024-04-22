"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { API } from "../../../constants";

import Result from "../../../components/Result";

export default function MovieGenrePage({ params }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(API.moviesByGenre(params.id))
      .then((response) => {
        if (response.status === 200) {
          setData(response.data.results);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [params]);
  console.log(data);

  return (
    <div>
      <Result data={data} option={""} />
    </div>
  );
}
