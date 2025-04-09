import { Link } from "react-router-dom";

export const Card = ({movie}) => {
  const { id, title, overview, backdrop_path} = movie; 
  const default_url = "https://www.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600nw-1037719192.jpg";
  const base_url = backdrop_path ? `https://image.tmdb.org/t/p/w500${backdrop_path}` :default_url;

  return (
    <>
      <div className="max-w-sm m-3 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <Link to="#">
          <img
            className="rounded-t-lg"
            src={base_url}
            alt=""
          />
        </Link>
        <div className="p-5">
          <Link to="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
          </Link>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {overview}
          </p>
        </div>
      </div>
    </>
  );
};
