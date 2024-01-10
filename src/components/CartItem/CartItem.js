import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
// import remove_icon from "../assets/remove_icon"
// import { ImCross } from "react-icons/im"
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

const CartItem = () => {
    const { all_product, CartItems, Removefromcart, addtocart, getCarttotalValue } = useContext(ShopContext)
    console.log(getCarttotalValue())
    return (
<>
{
    localStorage.getItem('auth-token')?
        <div className='flex flex-row'>
            <div className='md:ml-3 border border-black mt-3 h-[50vh] sm:h-[60vh] md:h-[80vh] overflow-y-scroll w-[60vw] md:w-[65vw]' style={{ boxShadow: "2.5px 2.5px 2.5px black" }}>
                {
                    all_product.map((e, i) => {
                        if (CartItems[e.id] > 0) {
                            return <div key={i}>
                                <div className='flex flex-row w-[60vw] mt-2 mb-2 md:w-[65vw] px-2 md:px-10 md:mt-8' >
                                    <img className='h-[30px] max-h-[200px] max-w-[200px] sm:h-[70px] md:h-[130px]' src={e.image} alt="" />
                                    <div className='flex flex-col '>
                                        <span className='text-[5px] ml-2 sm:text-[12px] md:text-lg'>{e.name}</span>
                                        <div className='flex flex-row justify-between'>
                                            <div className='flex flex-row '>
                                                <p className='text-[4px] ml-1 sm:text-[12px] md:text-lg'>${e.new_price}</p>
                                                <p className='text-[4px] ml-1 text-cyan-800 sm:text-[12px] md:text-lg' style={{ textDecoration: "line-through" }}>${e.old_price}</p>
                                                <p className='text-[4px] ml-1 text-green-600 sm:text-[12px] md:text-lg'>${e.old_price - e.new_price} off</p>
                                            </div>
                                            <div>
                                                <p className='text-[4px] ml-1 sm:text-[12px] md:text-lg'><span className='text-[10px] sm:text-[25px]'>total:</span>{CartItems[e.id] * e.new_price}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex flex-row border ml-2 border-red-100 w-[60px] h-[2vh] mt-2 md:w-[100px] md:h-[4vh]'>
                                        <FaMinus className='h-2 md:h-5 md:ml-3' onClick={() => { Removefromcart(e.id) }}></FaMinus>
                                        <span className='h-3 px-1 text-[9px] pb-1 md:text-sm md:px-3'>{CartItems[e.id]}</span>
                                        <FaPlus className='h-2 md:h-5 md:mr-3' onClick={() => { addtocart(e.id) }}></FaPlus>
                                    </div>
                                </div>
                            </div>
                        }
                    })
                }
                <hr className='bg-black' />

                <div className='flex justify-end mr-3 '>
                    <button className='w-[30vw] bg-red-500 text-white mt-2 mb-1 text-[12px] h-6'> Continue</button>
                </div>


            </div>
            <div className='flex flex-col'>
                <div className=' mt-3 md:ml-5 h-fit'>
                    <div className='mt-2 p-2   w-[25vw] ' style={{ boxShadow: "2.5px 2.5px 2.5px black" }}>
                        <h3 className='text-[10px] sm:text-[25px] font-bold '>Price Details</h3>
                        <div className='flex flex-row justify-between mt-2'>
                            <p className='text-[10px] sm:text-[25px]'>Mrp:</p>
                            <p className='text-[10px] sm:text-[25px]'>${getCarttotalValue()}</p>
                        </div>
                        <div className='flex flex-row justify-between mt-2'>
                            <p className='text-[10px] sm:text-[25px]'>Shipping:</p>
                            <p className='text-[10px] sm:text-[25px]'>free</p>
                        </div>

                        <hr />
                        <div className='flex flex-row justify-between mt-2'>
                            <p className='text-[10px] sm:text-[25px]'> total:</p>
                            <p className='text-[10px] sm:text-[25px]'>${getCarttotalValue()}</p>
                        </div>
                    </div>

                </div>
                <div className='border border-black mt-3 md:ml-5 h-fit'>
                    <div className='mt-2 p-2 md:w-[25vw] ' style={{ boxShadow: "2.5px 2.5px 2.5px black" }}>
                        <h3 className='text-[10px] sm:text-[25px] font-bold '>Promo Code</h3>
                        <div className='flex flex-row justify-between mt-2'>
                            <input className='text-[10px] sm:text-[25px] w-[20vw] border border-black' placeholder='promocode' />
                            <button className='cursor-pointer bg-black text-white text-xs  p-1'>apply</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        :
        <div className='flex justify-center items-center h-[90vh]'>
            <div>please login to see</div>
        </div>
}
        </>
    )
}

export default CartItem