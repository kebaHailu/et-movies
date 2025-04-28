import { useEffect, useState } from "react";

export const useFetch = (api_path,queryTerm="") => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const [data, setData] = useState([]);
  const base_url = `https://api.themoviedb.org/3/${api_path}?api_key=${apiKey}&query=${queryTerm}`;

  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch(base_url);
      const json = await response.json();
      setData(json.results);
    }
    fetchMovies();
  }, [api_path]);
  return { data };
};
