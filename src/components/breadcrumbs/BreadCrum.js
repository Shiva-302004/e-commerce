import React from 'react'
import arrow_icon from "../assets/breadcrum_arrow.png"

const BreadCrum = (props) => {
    const {product}=props
  return (
    <div className='flex flex-row text-xs'>
        HOME <img className='h-3' src={arrow_icon} alt=''/>
        SHOP <img className='h-3' src={arrow_icon} alt="" />
        {product.category} <img className='h-3' src={arrow_icon} alt="" />
        <span >{product.name.length>5?product.name.substring(0,4):product.name}</span> <img className='h-3' src={arrow_icon} alt="" />
    </div>
  )
}

export default BreadCrum