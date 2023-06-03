import React from 'react'

function Footer() {
  return (
    <>
      <div className='flex flex-col bg-[#040335]'>
      <div className='bg-slate-600 h-[1px] mt-16 mb-16'></div>
        <div className='flex flex-row justify-evenly items-center  text-white'>
          <div className='w-1/2 flex flex-col gap-8 p-16'>
            <h1 className='uppercase font-bold text-3xl'>Saasify</h1>
            <p className='w-1/2 font-extralight text-slate-400'>
              Data visualization, and expense management for your business
            </p>
          </div>
          
          <div className='w-3/4 flex flex-row items-center justify-evenly gap-8'>
            <div className='flex flex-col gap-6'>
              <h1 className="text-white font-bold text-2xl">Product</h1>
              <div className='text-slate-400 flex flex-col gap-3 '>
                <h1 className='text-[15px] hover:underline'>Digital Invoice</h1>
                <h1 className='text-[15px] hover:underline'>Insights</h1>
                <h1 className='text-[15px] hover:underline'>Reimbursements</h1>
                <h1 className='text-[15px] hover:underline'>Virtual Assistant</h1>
                <h1 className='text-[15px] hover:underline'>Artificial Intelligence</h1>
              </div>
            </div>
            <div className='flex flex-col gap-6'>
              <h1 className="text-white font-bold text-2xl">Company</h1>
              <div className='text-slate-400 flex flex-col gap-3 '>
                <h1 className='text-[15px] hover:underline'>About Us</h1>
                <h1 className='text-[15px] hover:underline'>Newsletters</h1>
                <h1 className='text-[15px] hover:underline'>Our Partners</h1>
                <h1 className='text-[15px] hover:underline'>Career</h1>
                <h1 className='text-[15px] hover:underline'>Contact Us</h1>
              </div>
            </div>
            <div className='flex flex-col gap-6'>
              <h1 className="text-white font-bold text-2xl">Resources</h1>
              <div className='text-slate-400 flex flex-col gap-3 '>
                <h1 className='text-[15px] hover:underline'>Blog</h1>
                <h1 className='text-[15px] hover:underline'>Pricing</h1>
                <h1 className='text-[15px] hover:underline'>FAQs</h1>
                <h1 className='text-[15px] hover:underline'>events</h1>
                <h1 className='text-[15px] hover:underline'>E-book & Guide</h1>
              </div>
            </div>
            <div className='flex flex-col gap-6'>
              <h1 className="text-white font-bold text-2xl">Follow Us</h1>
              <div className='text-slate-400 flex flex-col gap-3 '>
                <h1 className='text-[15px] hover:underline'>LinkedIn</h1>
                <h1 className='text-[15px] hover:underline'>Twitter</h1>
                <h1 className='text-[15px] hover:underline'>Instagram</h1>
                <h1 className='text-[15px] hover:underline'>Facebook</h1>
                <h1 className='text-[15px] hover:underline'>YouTube</h1>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-slate-600 h-[1px] mt-16 mb-16'></div>
        <div className='flex flex-col items-center gap-8 mb-16'>
          <h1 className='flex items-center text-slate-500 text-[15px]'>Copyright @ Mercy Faith Nyambura Kariuki 2023. All Rights Reserved</h1>
        </div>
      </div>
    </>
  )
}

export default Footer