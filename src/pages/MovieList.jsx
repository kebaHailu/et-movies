import { useEffect, useState } from "react";
import { Card } from "../components";
export const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const base_url = "";

  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=0419218df2164cdf1a6de78c38908643"
      );
      const data = await response.json();
      setMovies(data.results);
    }
    fetchMovies();
  }, []);
  return (
    <main className="movie-list-page ">
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};
