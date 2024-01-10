import React, { useContext } from 'react'
// import Item from "../components/items/item"
import { ShopContext } from "../Context/ShopContext"
import dropdown_icon from "../components/assets/dropdown_icon.png"
import Item from '../components/items/item'
const ShopCategory = (props) => {

  const { all_product } = useContext(ShopContext)
  return (
    <div className=''>
      <img className=' h-[20vh] w-full sm:w-[90vw] sm:h-[50vh] sm:pl-[10vw]' src={props.banner} alt="" />
      <div className='sm:flex sm:flex-row '>
        <p className='text-red-200 text-xs mt-4 mb-4 sm:text-center'>
          <span className='text-black'>Showing 1-12</span> out of 36 products
        </p>
        <span className='flex flex-row border mt-4 mb-4 border-black w-[80px] h-4 sm:ml-5'>
          <span className='text-xs'>sort by</span> <img className='h-2 w-2 ml-2 mt-1 ' src={dropdown_icon} alt=''></img>
        </span>
      </div>
      <div className='flex flex-row flex-wrap sm:flex-row sm:flex-wrap md:flex-none md:grid-flow-col '>
        {
          all_product.map((item)=>{
            if(props.category===item.category){
              return <Item key={item.id} id={item.id} image={item.image} name={item.name} old_price={item.old_price} new_price={item.new_price}/>
            }
          })
        }
      </div>
      <div className='flex justify-center'>
      <div className='bg-red-500 text-white w-[40vw] text-[13px]  rounded-full  mb-3 text-center md:w-[350px] md:h-7 md:text-lg '>Explore More</div>
      </div>
     
    </div>
  )
}

export default ShopCategory