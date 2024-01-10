import React from 'react'
import { Link } from 'react-router-dom';
import  hero_image  from '../assets/hero_image.png'
import  hand_icon  from '../assets/hand_icon.png'
import  arrow_icon  from '../assets/arrow.png'
const Hero = () => {
    return (
        <div className='flex flex-row justify-around p-4 bg-gradient-to-b  from-pink-300 to-pink-100 sm:justify-between'>
            
            <div className='flex flex-col items-center justify-center w-[60vw] sm:w-[40vw]'>
                <h2 className='text-[12px] font-semibold sm:text-[20px]'>New Arrivals Only</h2>
                <div className=''>
                    <div className='flex flex-row '>
                        <p className='text-lg font-bold mt-3 sm:text-2xl sm:mt-7 md:text-3xl' >new</p>
                        <img className='h-10 w-10 sm:h-16 sm:w-16' src={hand_icon} alt="" />
                    </div>
                        <p className='text-lg font-bold sm:text-2xl md:text-3xl'> collections</p>
                    <p className=' text-lg font-bold sm:text-2xl md:text-3xl'>for everone</p>
                </div>
                <Link to='/products' className=' flex flex-row bg-red-500 text-white p-2 rounded-full sm:mt-5 '>
                    <div className='text-[9px] md:text-sm '>lastest Colections</div>
                    <img className='ml-3 h-3 w-3 md:mt-2' src={arrow_icon} alt=""></img>
                </Link>
            </div>
            <div className='w-[40vw] sm:w-[60vw] md:p-12'>
                <img src={hero_image} className='h-[40vh] w-[40vw] sm:w-[60vw] sm:h-[60vh] ' alt=''></img>
            </div>
        </div>
    )
}

export default Hero