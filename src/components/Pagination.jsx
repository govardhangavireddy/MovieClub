import React from "react";

function Pagination({nextpageNum,prevpageNum,pageNo}) {
  return (
    <div className="flex justify-center items-center gap-8 bg-gray-600 text-white w-full h-[5vh] mt-5 p-4">
        <div className="text-2xl m-3 hover:scale-110 duration-500"><button onClick={prevpageNum}><i class="fa-solid fa-arrow-left"></i></button></div>
        <div className="font-bold">{pageNo}</div>
        <div className="text-2xl m-3 hover:scale-110 duration-500"><button onClick={nextpageNum}><i class="fa-solid fa-arrow-right"></i></button></div>
    </div>
  );
}

export default Pagination;

