import React, { useState,useEffect } from 'react'
// import data_product from "../assets/data"
import Item from '../items/item'

const Popularmen = () => {
  const [data_product,setdata_product]=useState([])
  const fextchnewCollection=async()=>{
    let responsedata;
    await fetch("http://localhost:8000/popularinmencollections",{
        method:"GET",
        headers:{
          Accept:"application/json",
          "Contant-Type":"application/json"
        }
    }).then((res)=>res.json()).then((data)=>responsedata=data).catch((err)=>console.log(err))
    setdata_product(responsedata)
  }
  useEffect(()=>{
    fextchnewCollection()
  },[])
  return (
    <div className='mt-20 '>
        <h1 className='text-center text-lg sm:text-xl md:text-3xl'>Popular In Mens</h1>
        <hr />
        <div className='hi flex flex-row flex-wrap md:mt-3 ml-3 md:flex-nowrap md:overflow-scroll justify-center md:gap-[30px] md:justify-normal md:overflow-y-hidden'>
            {
                data_product.map((item)=>{
                    return <Item key={item.id} image={item.image} id={item.id} name={item.name} old_price={item.old_price} new_price={item.new_price} />
                })
            }
        </div>
        <hr />
    </div>
  )
}

export default Popularmen