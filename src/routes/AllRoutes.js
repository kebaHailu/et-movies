import {Routes, Route} from "react-router-dom";
import {MovieList, MovieDetail, Search, PageNotFound} from "../pages"

export default function AllRoutes() {
  return (
    <>
        <Routes>
            <Route path="" element={<MovieList/>} /> 
        </Routes>
    </>
  )
}
