import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";


export const  MovieDetail = () => {
  const {id} = useParams();
  const apiKey = import.meta.env.VITE_API_KEY;
  const [movie, setMovie] = useState({});
  const default_image ="https://www.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600nw-1037719192.jpg";
  const image_url = movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : default_image;

  useEffect(() => {
    async function fetchMovie() 
    {
      const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;
      const response = await fetch(url);
      const json = await response.json();
      console.log(json)
      setMovie(json);
    }
    fetchMovie();
  }, [])

  
  return (
    <main>
      <section className="flex justify-center flex-wrap py-5 ">
        <div className="max-w-sm mx-5">
          <img className="rounded-lg" src={image_url} alt={movie.title} />
        </div>
        <div className="max-w-md ml-5 dark:text-white">
          <h1 className="text-2xl font-bold py-3">{movie.title}</h1>
          <p>{movie.overview}</p>

          <div className="flex">
            {movie.genres &&
              movie.genres.map((genere) => (
                <div className="border rounded m-2 p-1 px-2">
                  {genere.name}
                </div>
              ))}
          </div>
          <div className="m-3">
            ⭐<span className="mx-1">{movie.vote_average} </span> - <span>{movie.vote_count} reviews</span>
          </div>
          <div>
            <span className="font-medium m-3"> Runtime:</span> 
            <span>{movie.runtime}</span>
          </div>
          <div>
            <span className="font-medium m-3"> Budget:</span>
            <span>{movie.budget}</span>
          </div>
          <div>
            <span className="font-medium m-3"> Revenue:</span> 
            <span>{movie.revenue}</span>
          </div>
          <div>
            <span className="font-medium m-3"> Release Date:</span> 
            <span>{movie.release_date}</span>
          </div>
          <div>
            <span className="font-medium m-3"> IMB Code:</span> 
            <span>{movie.imdb_id}</span>
          </div>
        </div>
      </section>
    </main>
  );
}
