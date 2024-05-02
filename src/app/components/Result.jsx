import Card from "./Card";
export default function Result(props) {
  return (
    <div>
      <div className="container h-20"></div>
      <div className=" w-full">
        <h1 className="text-2xl font-semibold mx-10 text-slate-200">
          {props.option}
        </h1>
        <div className="mt-4 grid xl:grid-cols-5 mx-10 lg:grid-cols-4 sm:grid-cols-2 gap-x-8 gap-y-8 text-slate-200">
          {props.data.map((item) => (
            <Card
              title={item.title || item.name}
              key={item.id}
              id={item.id}
              poster={item.poster_path}
              release_date={item.release_date}
              rating={Math.floor(item.vote_average * 10)}
            ></Card>
          ))}
        </div>
      </div>
      <div></div>
    </div>
  );
}
