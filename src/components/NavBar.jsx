import React from "react";
import Logo from "../MovieLogo.jpeg";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="bg-black flex borderxs justify-center items-center ">
      <img className="w-[50px]" src={Logo} alt="Movie Logo" />
      <div className="w-[100vw] flex space-x-40 justify-center items-center">
        <Link className="text-white text-3xl" to="/">
          Home
        </Link>
        {/* <Link className="text-white text-3xl" to="/movies">Movies</Link> */}
        <Link className="text-white text-3xl" to="/watchlist">WatchList</Link>
      </div>
    </div>
  );
}

export default NavBar;
