import Result from "@/app/components/Result";
import { API } from "@/app/constants";

async function getSearchResult(query) {
  const res = await fetch(API.search("multi", query, 1)).then((response) =>
    response.json()
  );
  const result = res.results;
  return result;
}
export default async function SearchPage({ params }) {
  const searchResult = await getSearchResult(params.query);
  return (
    <Result
      data={searchResult}
      option={`Search results for: ${params.query}`}
    ></Result>
  );
}
