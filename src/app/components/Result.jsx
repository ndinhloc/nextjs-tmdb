import React from "react";
import Card from "./Card";
export default function Result(props) {
  return (
    <div>
      <div className=" w-5/6 mx-auto">
        <h1 className="text-2xl font-semibold mt-20 mx-auto">{props.option}</h1>
        <div className="mt-4 grid xl:grid-cols-5 lg:grid-cols-4 sm:grid-cols-2 gap-x-4 gap-y-4">
          {props.data.map((item) => (
            <Card
              title={item.title || item.name}
              key={item.id}
              id={item.id}
              poster={item.poster_path}
              release_date={item.release_date}
              rating={Math.floor(item.vote_average * 10)}
            >
              {console.log(item.id)}
            </Card>
          ))}
        </div>
      </div>
      <div></div>
    </div>
  );
}
