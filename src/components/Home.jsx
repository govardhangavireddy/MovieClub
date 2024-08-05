import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import Pagination from "./Pagination";

// https://api.themoviedb.org/3/movie/popular?api_key=1a50c000c003de0ff824fe917e249c7c&language=en-US&page=1

function Home({ handleAddtoWatchlist, handleRemoveWatchlist,watchList}) {
  const [movies, setMovies] = useState([]);
  const [pageNum, setPageNum] = useState(1);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=1a50c000c003de0ff824fe917e249c7c&language=en-US&page=${pageNum}`
      )
      .then((response) => {
        setMovies(response.data.results);
        // console.log(response.data.results);
      });
  });

  function nextpageNum() {
    setPageNum(pageNum + 1);
  }

  function prevpageNum() {
    if (pageNum > 1) {
      setPageNum(pageNum - 1);
    }
  }

  return (
    <div className="p-5 bg-blue-200">
      <div className="text-2xl m-5 font-bold text-center ">Trending Movies</div>
      <div className="flex flex-row flex-wrap justify-around">
        {movies.map((movie) => {
          return(
            <MovieCard
              key={movie.id}
              movie={movie}
              poster_path={movie.poster_path}
              original_title={movie.original_title}
              handleAddtoWatchlist={handleAddtoWatchlist}
              handleRemoveWatchlist={handleRemoveWatchlist}
              watchList={watchList}
            />
         );
        }
      )}
      </div>
      <Pagination
        pageNo={pageNum}
        nextpageNum={nextpageNum}
        prevpageNum={prevpageNum}
      />
    </div>
  );
}

export default Home;
