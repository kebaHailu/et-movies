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
  document.title = movie.title ? `${movie.title}` : "Et-movies";

  
  return (
    <main>
      <section className="flex justify-center flex-wrap py-5 ">
        <div className="max-w-sm mx-5">
          <img className="rounded-lg" src={image_url} alt={movie.title} />
        </div>
        <div className="max-w-md ml-5 dark:text-white">
          <h1 className="text-2xl font-bold py-3 text-center lg:text-left">
            {movie.title}
          </h1>
          <p>{movie.overview}</p>

          <div className="flex">
            {movie.genres &&
              movie.genres.map((genere) => (
                <div className="border rounded m-2 p-1 px-2">{genere.name}</div>
              ))}
          </div>
          <div className="m-3">
            <div className="flex items-center">
              <svg
                className="w-4 h-4 text-yellow-300 me-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <p className="ms-2 text-sm font-bold text-gray-900 dark:text-white">
                {movie.vote_average}
              </p>
              <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                {movie.vote_count} reviews
            </div>
          </div>
          <div>
            <span className="font-medium m-3"> Runtime:</span>
            <span>{movie.runtime} min.</span>
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
            <a  className="underline hover:no-underline" target="_blank" rel="noreferrer" href={`https://www.imdb.com/title/${movie.imdb_id}`}>{movie.imdb_id}</a>
          </div>
        </div>
      </section>
    </main>
  );
}
