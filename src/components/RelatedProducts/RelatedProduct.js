import React from 'react'
import data_product from "../assets/data"
import Item from "../items/item"
const RelatedProduct = () => {
  return (
    <div className='md:pl-16'>
        <div className='mt-10 '>
        <h1 className='text-center text-lg sm:text-xl md:text-3xl'>Related Product</h1>
        <hr className='w-[40vw] h-1 flex  absolute right-[30%] sm:w-[30vw] md:right-[35%] bg-black'/>
        <div className='hi flex flex-row flex-wrap md:mt-3 ml-3 md:flex-nowrap md:overflow-scroll justify-center md:gap-[30px] md:justify-normal md:overflow-y-hidden'>
            {
                data_product.map((item,i)=>{
                    return <Item key={i} image={item.image} id={item.id} name={item.name} old_price={item.old_price} new_price={item.new_price} />
                })
            }
        </div>
        <hr />
    </div>
    </div>
  )
}

export default RelatedProduct