import React from 'react'
import exclusive_image from "../assets/exclusive_image.png"
const Offer = () => {
  return (
    <div className='sm:flex sm:flex-col sm:justify-center sm:items-center mb-20 mt-20 '>
    <div className='h-[20vh] sm:w-[80vw] bg-gradient-to-b  from-pink-300 to-pink-100 flex flex-row justify-between p-3 items-center sm:h-[40vh] '>
        <div>
            <h1 className='font-bold text-sm sm:text-2xl md:text-4xl'>Exclusive</h1>
            <h1 className='font-bold text-sm  sm:text-2xl md:text-4xl '>Offers For You</h1>
            <p className='font-medium text-sm sm:text-xl   md:text-[30px'>Only on best sellers</p>
            <button className='bg-red-500 rounded-full text-white p-1 hover:bg-slate-500 hover:text-white text-sm sm:text-lg '>Check now</button>
        </div>
        <div>
            <img className='h-[20vh] sm:h-[40vh] ' src={exclusive_image} alt="" />
        </div>
        <hr />
    </div>
   
    </div>
  )
}

export default Offer