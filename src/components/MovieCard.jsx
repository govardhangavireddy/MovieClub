import React from "react";

function MovieCard({
  movie,
  poster_path,
  original_title,
  handleAddtoWatchlist,
  handleRemoveWatchlist,
  watchList,
}) {
  function checkWatchlist(movie, watchList) {
    for (let i = 0; i < watchList.length; i++) {
      if (watchList[i].id == movie.id) {
        return true;
      }
    }
    return false;
  }

  return (
    <div
      className="h-[45vh] w-[30vh] m-2 bg-center bg-cover rounded-xl flex flex-col justify-between items-end hover:scale-110 cursor-pointer duration-500"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
      }}
    >
      {checkWatchlist(movie, watchList) ? 
        <div className="text-xl m-3 bg-red-700 text-white p-2 rounded-full">
          <button
            onClick={() => {
                handleRemoveWatchlist(movie);
            }}
            className="hover:scale-110"
          >
            <i class="fa-solid fa-minus"></i>
          </button>
        </div>
       : 
      <div
        onClick={() => handleAddtoWatchlist(movie)}
        className="text-xl m-3 bg-green-700 text-white p-2 rounded-full hover:scale-110"
      >
        <i class="fa-solid fa-plus"></i> 
      </div>
      }

      <div className="bg-gray-800/60 text-white text-xl w-full p-2 text-center rounded-xl">
        {original_title}
      </div>
    </div>
  );
}

export default MovieCard;
