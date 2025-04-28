import PageNotFoundImage from "../assets/images/page_not_found.jpg";
import {Button} from "../components";  
import {Link} from "react-router-dom";
export const PageNotFound = () => {
  return (
    <main className="page-not-found ">
      <section className="flex flex-col justify-center px-2 dark:text-white ">
        <div className="flex flex-col items-center m-4">
          <h2 className="text-4xl font-bold py-4">404 - Oops!</h2>
          <img
            src={PageNotFoundImage}
            alt="page not found"
            className="rounded h-96"
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <Link to="/">
            <Button> Back to Et-movies </Button> 
          </Link>
        </div>
      </section>
    </main>
  );
}
