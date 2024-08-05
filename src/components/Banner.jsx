import React from 'react';


function Banner() {
  return ( 
    <div className='h-[20vh] md:h-[75vh] bg-cover bg-center flex items-end' style={{backgroundImage : "url(https://i.pinimg.com/originals/29/7d/e0/297de0761b0c756266d74ca50d03cc1d.jpg)"}}>
        <div className='text-white text-2xl w-full p-4 text-center bg-neutral-800/60'>
            Avengers
        </div>
    </div>
  )
}

export default Banner