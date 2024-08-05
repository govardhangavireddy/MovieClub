import React, { useEffect } from "react";
import { useState } from "react";
import genres from "../Utility/genre";

function Watchlist({ watchList, setWatchlist, handleRemoveFromWatchlist }) {
  const [search, setSearch] = useState("");

  const [genreList, setGenreList] = useState(["All Genres"]);

  const [curGenre, setCurGenre] = useState("All Genre");
  
  let handleSearch = (e) => {
    setSearch(e.target.value);
  };

  let handleFilter = (genre) => {
    setCurGenre(genre);
  };

  let sortInc = () => {
    watchList.sort((a, b) => {
      return a.vote_average - b.vote_average;
    });
    setWatchlist([...watchList]);
  };

  let sortDec = () => {
    watchList.sort((a, b) => {
      return b.vote_average - a.vote_average;
    });
    setWatchlist([...watchList]);
  };

  useEffect(() => {
    let temp = watchList.map((movie) => {
      return genres[movie.genre_ids[0]];
    });
    setGenreList(["All Genre", ...new Set(temp)]);
    console.log(temp);
  }, [watchList]);

  return (
    <>
      <div className="flex flex-wrap justify-center m-4">
        {genreList.map((genre) => {
          return (
            <div
              onClick={() => handleFilter(genre)}
              className={
                curGenre == genre
                  ? "flex justify-center items-center m-3 text-xl bg-blue-400 h-[3rem] w-[9rem] rounded-xl text-white"
                  : "flex justify-center items-center m-3 text-xl bg-gray-400 h-[3rem] w-[9rem] rounded-xl text-white"
              }
            >
              {genre}
            </div>
          );
        })}
      </div>
      <div className="flex justify-center my-4">
        <input
          onChange={handleSearch}
          value={search}
          className="h-[3rem] w-[18rem] bg-gray-200 p-4 text-black"
          type="text"
          placeholder="Search movie"
        />
      </div>
      <div className="overflow-hidden m-8">
        <table className="w-full text-center">
          <thead className="border border-black">
            <tr>
              <th></th>
              <th>Name</th>
              <th className="flex justify-center items-center gap-2">
                <div onClick={sortInc}>
                  <i class="fa-solid fa-arrow-up"></i>
                </div>
                <div>Rating</div>
                <div onClick={sortDec}>
                  <i class="fa-solid fa-arrow-down"></i>
                </div>
              </th>
              <th>Popularity</th>
              <th>Genre</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {watchList
              .filter((movie) => {
                if (curGenre == "All Genre") {
                  return true
                } else {
                  return genres[movie.genre_ids[0]] == curGenre
                }
              })
              .filter((movie) => {
                return movie.original_title
                  .toLowerCase()
                  .includes(search.toLowerCase());
              })
              .map((movie) => {
                return (
                  <tr className="border border-black">
                    <td className="w-[15vh] px-2 py-2">
                      <img
                        className="h-[17vh] w-[17vh]"
                        //   style={{ height: "20vh", width: "15vh" }}
                        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                      ></img>
                    </td>
                    <td>{movie.original_title}</td>
                    <td>{movie.vote_average}</td>
                    <td>{movie.popularity}</td>
                    <td>{genres[movie.genre_ids[0]]}</td>
                    <td
                      onClick={() => {
                        handleRemoveFromWatchlist(movie);
                      }}
                      className="text-red-700 hover:scale:110 cursor-pointer"
                    >
                      Delete
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Watchlist;
