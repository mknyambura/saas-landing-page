import React from 'react'

function Header() {
  return (
    <div className='text-white items-center flex flex-row justify-between'>
        <h1 className='text-3xl font-bold mt-24 ml-16 mr-16'>Saasify</h1>
        <div className='flex flex-row gap-8 mt-24 ml-16 mr-16'>
            <h1 className='font-extralight text-[18px]'>Product</h1>
            <h1 className='font-extralight text-[18px]'>Solution</h1>
            <h1 className='font-extralight text-[18px]'>Customer</h1>
            <h1 className='font-extralight text-[18px]'>Pricing</h1>
            <h1 className='font-extralight text-[18px]'>About us</h1>
        </div>
        <button className='mt-24 ml-16 mr-16 font-semibold bg-white text-black px-4 py-2 rounded-[30px]'>Sign up</button>
    </div>
  )
}

export default Header