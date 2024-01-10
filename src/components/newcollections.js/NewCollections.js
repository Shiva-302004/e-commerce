import React, { useState,useEffect } from 'react'
// import new_collections from"../assets/new_collections"
import Item from '../items/item'
import "../Navbar/Navbar.css"
const NewCollections = () => {
  const [data,setdata]=useState([])
  const fextchnewCollection=async()=>{
    let responsedata;
    await fetch("http://localhost:8000/newcollections",{
        method:"GET",
        headers:{
          Accept:"application/json",
          "Contant-Type":"application/json"
        }
    }).then((res)=>res.json()).then((data)=>responsedata=data).catch((err)=>console.log(err))
    setdata(responsedata)
  }
  useEffect(()=>{
    fextchnewCollection()
  },[])
  return (
    <div className='box-border'>
      <h1 className='text-center text-lg sm:text-xl md:text-3xl'>NEW COLLECTIONS</h1>
      <hr />
      <div className='hi flex flex-row flex-wrap md:mt-3 ml-3 md:flex-nowrap md:overflow-scroll justify-center md:gap-[30px] md:justify-normal md:overflow-y-hidden' >
          {
            data.map((item)=>{
              return <Item key={item.id} id={item.id} image={item.image} name={item.name} old_price={item.old_price} new_price={item.new_price} />
            })
          }
      </div>
    </div>
  )
}

export default NewCollections