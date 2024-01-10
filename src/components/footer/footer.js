import React from 'react'
import footer_logo from '../assets/logo_big.png'
import instagram_icon from "../assets/instagram_icon.png"
import pintester_icon from "../assets/pintester_icon.png"
import whatsapp_icon from "../assets/whatsapp_icon.png"
const Footer = () => {
    return (
        <div className='flex flex-col justify-center items-center mt-12'>
            <div className='flex flex-row justify-center items-center'>
                <img className='h-[70px] md:h-[120px]' src={footer_logo} alt="" />
                <p className='ml-3 font-bold mt-3 md:text-2xl'>Shopping</p>
            </div>
            <ul className='flex flex-col justify-center items-center md:flex-row md:mt-8'>
                <li className='mt-2 md:ml-4'>Company</li>
                <li className='mt-2 md:ml-4'>Products</li>
                <li className='mt-2 md:ml-4'>Offices</li>
                <li className='mt-2 md:ml-4'>About</li>
                <li className='mt-2 md:ml-4'>Contact</li>
            </ul>
            <div className='flex flex-row justify-center items-center mt-2 mb-2 md:mt-8 md:mb-7'>
                <div className='ml-3 '>
                    <img className='h-4 w-4 md:w-5 md:h-5' src={instagram_icon} alt="" />
                </div>
                <div  className='ml-3'>
                    <img className='h-4 w-4 md:w-5 md:h-5' src={pintester_icon} alt="" />
                </div>
                <div  className='ml-3'>
                    <img className='h-4 w-4 md:w-5 md:h-5' src={whatsapp_icon} alt="" />
                </div>
            </div>
            <div className='mt-2'>
                <hr className='w-[80vw] bg-black'/>
                <p className='text-[10px] sm:text-sm text-center'>CopyRight &copy; 2023-all rights reserved</p>
            </div>
        </div>
    )
}

export default Footer