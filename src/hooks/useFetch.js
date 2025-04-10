import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const base_url = `https://api.themoviedb.org/3/${url}?api_key=0419218df2164cdf1a6de78c38908643`;

  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch(base_url);
      const json = await response.json();
      setData(json.results);
    }
    fetchMovies();
  }, [url]);
  return { data };
};
