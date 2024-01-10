import React, { createContext, useEffect, useState } from "react"
// import all_product from "../components/assets/all_product"
export const ShopContext=createContext()
const getDefaultcart=()=>{
    let cart={}
    for(let i=0;i<301;i++){
        cart[i]=0;
    }
    return cart
}
const ShopContextProvider=(props)=>{
    const [CartItems,setCartItems]=useState(getDefaultcart())
    // console.log(CartItems)
    const [all_product,setall_product]=useState([])
    const fetchallproducts=async()=>{
        await fetch("http://localhost:8000/allproducts",{
            method:"GET",
            headers:{
                Accept:"application/json",
                "Contant-Type":"application/json"
            }
        }).then((res)=>res.json()).then((data)=>setall_product(data))
    }
    const fetchcartdetails=async()=>{
        await fetch('http://localhost:8000/getcart',{
            method:"GET",
                headers:{
                    Accept:"application/json",
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    "Content-Type":"application/json"
                }
        }).then((res)=>res.json()).then((data)=>setCartItems(data))
    }
    useEffect(()=>{
        fetchallproducts()
        fetchcartdetails()
        
    },[])
    const addtocart=async (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        if(localStorage.getItem("auth-token")){
             await fetch('http://localhost:8000/addtocart',{
                method:"POST",
                headers:{
                    Accept:"application/form-data",
                    "auth-token":`${localStorage.getItem("auth-token")}`,
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({"itemId":itemId})
            }).then((res)=>res.json()).then((data)=>console.log(data))
        }
    }
    const Removefromcart=async(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
        if(localStorage.getItem('auth-token')){
            await fetch('http://localhost:8000/removefromcart',{
                method:"POST",
                headers:{
                    Accept:"application/form-data",
                    "auth-token":`${localStorage.getItem("auth-token")}`,
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({"itemId":itemId})
            }).then((res)=>res.json()).then((data)=>console.log(data))
        }
    }
    const getCarttotalValue=()=>{
        let total=0;
        for(const item in CartItems){
            if(CartItems[item]>=1){
                let iteminfo=all_product.find((p)=>p.id===Number(item))
                total=total+(iteminfo.new_price*CartItems[item])
            }
        }
        return total;
    }
    const getCartValue=()=>{
        let total=0;
       
        for(const item in CartItems){
            if(CartItems[item]>=1){
                // let iteminfo=all_product.find((p)=>p.id===Number(item))
                total=total+CartItems[item]
            }
        }
        return total;
        
    }
    const contextvalue={all_product,CartItems,setCartItems,addtocart,Removefromcart,getCarttotalValue,getCartValue}
    
    return(
        <ShopContext.Provider value={contextvalue }>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider