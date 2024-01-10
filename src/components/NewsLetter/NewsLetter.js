import React from 'react'

const NewsLetter = () => {
  return (
    <div className='sm-flex sm:justify-center sm:items-center mt-12 sm:p-10 md:p-20'>
    <div className=' bg-gradient-to-b  from-pink-300 to-pink-100 h-[15vh] flex justify-center sm:h-[200px] sm:p-20'>
        <div className='flex flex-col justify-center items-center'>
            <h1 className='text-[14px] font-bold sm:text-xl md:text-2xl sm:mt-2'>Get Exclusive Offers On Your Email</h1>
              <p className='text-[10px] font-semibold sm:text-[15px] md:text-lg sm:mt-2'>Subscribe to our NewsLetter and stay updated</p>
            <div className=''>
                <input  className="border border-black w-[60vw] h-5 sm:w-[350px] text-xs sm:mt-2" type="email" name="email" id="email" placeholder='email' />
                <button className='bg-black text-white w-[10vw] h-5 pt-1 text-[10px] sm:w-[70px] sm:mt-2'>click</button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default NewsLetter