import React, { useContext } from 'react'
import "./Navbar.css"
import { FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { useLocation } from 'react-router-dom';
import { ImCross } from "react-icons/im";
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
const Navbar = () => {
  const [click,setclick]=React.useState(false)
  const location=useLocation()
  useEffect(()=>{

  },[location])
  const {getCartValue}=useContext(ShopContext)
  const handlelogout=()=>{
    localStorage.removeItem("auth-token")
  }
  return (
    <>
      <div className='px-3 h-10 w-full py-2 bg-slate-100 font-extralight text-md '>Shopping</div>
      <div className={` w-full flex absolute flex-col z-2 bg-slate-500 text-xl ${click?"visible":"invisible"} md:visible md:absolute md:flex-row md:border-none md:bg-transparent md:z-2 md:justify-center md:top-0`}>
        <div className='text-center border border-black-100 md:border-none md:mx-3 md:mt-2 md:visible'><Link className={`${location.pathname==="/"?" text-red-500":""}`} to='/'>Shop</Link></div>
        <div className='text-center border border-black-100 md:border-none md:mx-3 md:mt-2 md:visible'><Link className={`${location.pathname==="/mens"?" text-red-500":""}`} to='/mens'>Mens</Link></div>
        <div className='text-center border border-black-100 md:border-none md:mx-3 md:mt-2 md-visible'><Link className={`${location.pathname==="/womens"?" text-red-500":""}`} to='/womens'>Women</Link></div>
        <div className='text-center border border-black-100 md:border-none md:mx-3 md:mt-2 md-visible'><Link className={`${location.pathname==="/kids"?" text-red-500":""}`} to='/kids'>Kids</Link></div>
      </div>
      {
        localStorage.getItem("auth-token")?
      <Link to='/login' className="text-sm absolute border h-5 rounded-full py-[0.5] px-2 border-black top-0 hover:bg-black hover:text-white right-[25%] my-2 ml-2 md:right-[2%] md:h-7 md:py-1" onClick={handlelogout}>Logout</Link>
      :
      <Link to='/login' className="text-sm absolute border h-5 rounded-full py-[0.5] px-2 border-black top-0 hover:bg-black hover:text-white right-[25%] my-2 ml-2 md:right-[2%] md:h-7 md:py-1">Login</Link>
      }
      <Link to="/cart">
      <FaShoppingCart className="text-md absolute  top-0 right-[15%] my-3 ml-2 md:right-[15%] "/>
      <div className='bg-red-500 text-white text-[10px] w-2 h-3 ml-2  p-[1px]  rounded-full absolute  top-[12px] right-[14.5%] md:right-[14.5%] '> {localStorage.getItem('auth-token')?getCartValue():0}</div>
      </Link>
      <div onClick={()=>setclick(!click)}>
        {
          click?
          <ImCross className="text-md absolute  top-0 right-[5%] my-3 ml-2 md:invisible" />
          :
          <GiHamburgerMenu className="text-md absolute  top-0 right-[5%] my-3 ml-2 md:invisible" />
        }
      </div>
    </>

  )
}

export default Navbar