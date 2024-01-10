import React from 'react'
import { Link } from 'react-router-dom'

const Item = (props) => {
  return (
    <Link to={`/product/${props.id}`} className='w-[40vw] mb-8 sm:w-[45vw] flex flex-col  ml-2 sm:ml-3  mt-3 justify-center items-center hover:scale-125  md:w-[30vw]'>
        <img className='h-[40vh]' onClick={window.scrollTo(0,0)} src={props.image}   alt="" />
        <p className='text-[12px] mx-[6px] '>{props.name.length>25?props.name.substring(0,24):props.name}</p>
        <div className='flex gap-[20px] justify-center'>
            <div className='text-[8px] sm:text-lg  text-[#374151] font-medium'>old:${props.new_price}</div>
            <div className='text-[8px] sm:text-lg font-semibold text-[#8c8c8c] decoration-line'style={{textDecoration:"line-through"}}>new:${props.old_price}</div>
        </div>
    </Link>
  )
}

export default Item