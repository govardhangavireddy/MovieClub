import React, { useEffect } from "react";
import NavBar from "./components/NavBar";
import Movies from "./components/Movies";
import Watchlist from "./components/Watchlist";
import Home from "./components/Home";
import Banner from "./components/Banner";
import { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  let [watchList,setWatchlist] = useState([])

  let handleAddtoWatchlist = (movie) => {
    let newWatchList = [...watchList,movie]
    localStorage.setItem('watchlist',JSON.stringify(newWatchList))
    setWatchlist(newWatchList)
    console.log(newWatchList)
    
  }

  let handleRemoveFromWatchlist = (movie) => {
    let newRemoveWatchlist = watchList.filter((item)=>{
      return item.id!==movie.id
    })
    localStorage.setItem('watchlist',JSON.stringify(newRemoveWatchlist))
    setWatchlist(newRemoveWatchlist)
    console.log(newRemoveWatchlist)
  }

  useEffect(()=>{
    let data = localStorage.getItem('watchlist')
    if(data){
      setWatchlist(JSON.parse(data))
    }
  },[])

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner /> <Home handleAddtoWatchlist={handleAddtoWatchlist} handleRemoveWatchlist={handleRemoveFromWatchlist} watchList={watchList}/>
              </>
            }
          />
          {/* <Route path="/movies" element={<Movies />} /> */}

          <Route path="/watchlist" element={<Watchlist watchList={watchList} setWatchlist={setWatchlist} handleRemoveFromWatchlist={handleRemoveFromWatchlist}/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
