import { useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { Card } from "../components"

export const Search = ({apiPath}) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");
  const { data: movies } = useFetch(apiPath,queryTerm);

  document.title = `search result for ${queryTerm}`
  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="text-2xl dark:text-white py-3">
          Search Result for <span className="text-3xl font-bold">"{queryTerm}"</span>
        </div>
        <div className="flex justify-start flex-wrap">
          {movies &&
            movies.map((movie) => <Card key={movie.id} movie={movie} />)}
        </div>
      </section>
    </main>
  );
}



