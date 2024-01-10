import React, { useContext } from 'react'
import star_icon from "../assets/star_icon.png"
import star_dull_icon from "../assets/star_dull_icon.png"
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {
    const {product}=props
    const {addtocart}=useContext(ShopContext)
  return (
    <div className='md:flex md:flex-row md:pt-16 md:pl-10'>
        <div className='md:flex md:flex-row md:h-[45vw] md:w-[50vw]'>
            <div className='flex flex-row mb-1 md:flex-col'>
                <img className='h-[10vh] sm:h-[20vh] w-[22vw] ml-[1vw] md:w-[10vw] md:ml-[1vw] md:mb-2 md:h-[15vh] md:mt-4' src={product.image} alt="" />
                <img className='h-[10vh] sm:h-[20vh] w-[23vw] ml-[3vw] md:w-[10vw] md:ml-[1vw] md:mb-2 md:h-[15vh]' src={product.image} alt="" />
                <img className='h-[10vh] sm:h-[20vh] w-[23vw] ml-[3vw] md:w-[10vw] md:ml-[1vw] md:mb-2 md:h-[15vh]' src={product.image} alt="" />
                <img className='h-[10vh] sm:h-[20vh] w-[22vw] ml-[3vw] md:w-[10vw] md:ml-[1vw] mr-1 md:mr-0 md:mb-2 md:h-[15vh]' src={product.image} alt="" />
            </div>
            <div>
                <img className='w-[100vw] md:w-[35vw] md:h-[65vh] md:m-4' src={product.image} alt="" />
            </div>
        </div>
        <div className='flex flex-col mt-2 mb-2 md:w-[50vw] md:h-[65vh] md:ml-4 md:mr-4'>
            <h1 className='text-[22px] text-center font-bold'>{product.name}</h1>
            <div className='flex flex-row mt-3 '>
                <img className='ml-2 w-4 h-4 cursor-pointer' src={star_icon} alt="" />
                <img className='ml-2 w-4 h-4 cursor-pointer' src={star_icon} alt="" />
                <img className='ml-2 w-4 h-4 cursor-pointer' src={star_dull_icon} alt="" />
                <img className='ml-2 w-4 h-4 cursor-pointer' src={star_dull_icon} alt="" />
                <img className='ml-2 w-4 h-4 cursor-pointer' src={star_dull_icon} alt="" />
                <p className=''>(122)</p>
            </div>
            
            <div className='flex mt-3 '>
                <div className='ml-3 text-emerald-300' style={{textDecoration:"line-through"}}>${product.old_price}</div>
                <div className='ml-3'>${product.new_price}</div>
            </div>
            <div className=''>
                <p className='text-xs mb-2 mt-2 ml-3'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nemo incidunt veritatis cupiditate sint eius culpa tempore explicabo obcaecati nam deleniti fugit repudiandae excepturi sit, possimus doloremque ab quia, corrupti quisquam autem quibusdam! Maiores.
                </p>
            </div>
            <div className=''>
                <h1 className='text-lg font-bold ml-3'>Select Size :</h1>
                <div className='flex flex-row'>
                    <div className='text-sm ml-2  bg-slate-600 text-white w-6 h-6 text-center '>S</div>
                    <div className='text-sm ml-2  bg-slate-600 text-white w-6 h-6 text-center'>M</div>
                    <div className='text-sm ml-2  bg-slate-600 text-white w-6 h-6 text-center'>L</div>
                    <div className='text-sm ml-2  bg-slate-600 text-white w-6 h-6 text-center'>Xl</div>
                    <div className='text-sm ml-2  bg-slate-600 text-white w-6 h-6 text-center'>XXl</div>
                </div>
            <button className='text-lg font-bold mt-2 bg-red-500 text-black text-center px-2 ml-3 cursor-pointer' onClick={()=>addtocart(product.id)}>Add To Cart</button>
            <p className='text-xs mt-2 ml-3'><span className='font-bold'>Category :</span>Women ,T-Shirt ,Crop Top</p>
            <p className='text-xs mt-2 ml-3'><span className='font-bold'>Tags :</span>Modern ,Latest</p>
            </div>
        </div>
    </div>
  )
}

export default ProductDisplay