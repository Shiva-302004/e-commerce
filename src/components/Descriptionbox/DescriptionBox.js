import React from 'react'

const DescriptionBox = () => {
  return (
    <div className='md:px-16 md:pt-16 md:flex md:flex-col  md:justify-center'>
        <div className='flex flex-row '>
            <div className='ml-2 border border-black p-2'> Description</div>
            <div className=' border border-black p-2'>  Reviews (122)</div>
        </div>
        <div className='ml-2 border border-black mr-2 p-2 md:p-7'>
            <p className='text-xs md:text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt nobis omnis et, odit corporis nesciunt ut dolores est perspiciatis eos, blanditiis dicta exercitationem placeat itaque eveniet? Est nisi veritatis sint. Libero et, a eligendi unde sapiente cumque qui, aut consequuntur velit nisi sed molestiae harum, reiciendis soluta!</p>
            <p className='text-xs md:text-sm'>new Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus veniam laudantium odio minus ad recusandae impedit doloribus nisi iure ipsum repellendus, fugit quas sint ut harum nobis tempore! Saepe dolorum maxime obcaecati eos doloribus provident cum ullam commodi distinctio</p>
        </div>
    </div>
  )
}

export default DescriptionBox