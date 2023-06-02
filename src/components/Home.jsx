import React from 'react'


import Header from './Header'
import Footer from './Footer'

import { AiOutlineMail } from 'react-icons/ai'
import { BsArrowRight } from 'react-icons/bs'

import './index.css'

import Dashboard from '../images/Dashboard.png'
import slack from '../images/slack.png'
import airbnb from '../images/airbnb.png'
import amazon from '../images/amazon.png'
import google from '../images/google.png'
import netflix from '../images/netflix.png'
import triangle from '../images/triangle.png'
import circle from '../images/circle.png'
import square from '../images/square.png'
import graph from '../images/graph.png'
import person from '../images/person.png'
import video from '../images/video.png'

function Home() {
  return (
    <>
        <div className='head relative h-[200vh] text-white  to-[#0D03C3] w-full items-center'>
            <Header/>
            <div className='flex flex-col items-center mt-32 gap-12'>
                <h1 className='font-bold text-7xl text-center w-3/4'>
                    The Fastest way For Startups To Do Any Analysis
                </h1>
                <p className='text-xl font-extralight text-center w-1/2'>
                    Equals is the only spreadsheet with built-in connections to any database, versioning, and collaboration.
                </p>
                <div className='relative'>
                    <input type="email" className='bg-white px-4 py-2 w-[500px] rounded-[30px]' placeholder='Enter your email'/>
                    {/* <div className='absolute top-0 text-black/50 text-3xl'>
                        <AiOutlineMail className=''/>
                    </div> */}
                    <div className='absolute top-0 right-0'>
                        <button className=' bg-gradient-to-r from-[#2272FF] to-[#0D03C3] px-5 py-2 rounded-[30px] text-white font-semibold'>
                            Start for free
                        </button>

                    </div>

                </div>
            </div>
            <div className='absolute items-center justify-center bottom-[-10%] left-[15%]'>
                <img src={Dashboard} alt="" className='w-[90%] items-center justify-center' />
            </div>
        </div>
        <div className='flex flex-row items-center justify-between mt-48 ml-16 mr-16 mb-24'>
            <div className='flex  flex-col items-center'>
                <img src={slack} alt="" />
            </div>
            <div className='flex  flex-col items-center'>
                <img src={airbnb} alt="" />
            </div>
            <div className='flex  flex-col items-center'>
                <img src={amazon} alt="" />
            </div>
            <div className='flex  flex-col items-center'>
                <img src={google} alt="" />
            </div>
            <div className='flex  flex-col items-center'>
                <img src={netflix} alt="" />
            </div>
        </div>
        <div className='flex flex-col'>
            <h1 className='m-16 font-bold text-7xl text-center items-center'>
                Our Services Made For You?
            </h1>
            <div className='flex flex-row  justify-between gap-8 ml-16 mr-16' >
                <div className='bg-white px-12 py-12 shadow-xl flex flex-col gap-8 items-center justify-center'>
                    <button className='flex items-center px-2 py-2 bg-[#E3E2FD] text-[#0F0BC7]'>
                        <img src={triangle} alt="" />
                    </button>
                    <div className='flex flex-col gap-8 items-center'>
                        <h1 className='font-bold text-2xl'>Task Management</h1>
                        <p className='opacity-50'>
                        The process of managing a task through its life cycle. It involves planning, testing, tracking.
                        </p>
                        <button className='bg-transparent items-center text-[#0F0BC7] flex flex-row gap-3'>Read More <BsArrowRight className='font-bold text-xl'/></button>
                    </div>
                </div>

                <div className='bg-white px-12 py-12 shadow-xl flex flex-col gap-8 items-center'>
                    <button className='px-2 py-2 bg-[#E3E2FD] text-[#0F0BC7]'>
                        <img src={circle} alt="" />
                    </button>
                    <div className='flex flex-col gap-8 items-center'>
                        <h1 className='font-bold text-2xl'>Design System</h1>
                        <p className='opacity-50'>
                            The technology by which a process or procedure is performed with minimal human assistance.
                        </p>
                        <button className='bg-transparent items-center text-[#0F0BC7] flex flex-row gap-3'>Read More <BsArrowRight className='font-bold text-xl'/></button>
                    </div>
                </div>

                <div className='bg-white px-12 py-12 shadow-xl flex flex-col gap-8 items-center'>
                    <button className='px-2 py-2 bg-[#E3E2FD] text-[#0F0BC7]'>
                        <img src={square} alt="" />
                    </button>
                    <div className='flex flex-col gap-8 items-center'>
                        <h1 className='font-bold text-2xl'>Best Practices</h1>
                        <p className='opacity-50'>
                            Creating plan to spend your money, This spending planer is called a budgeting tool for business.
                        </p>
                        <button className='bg-transparent items-center text-[#0F0BC7] flex flex-row gap-3'>Read More <BsArrowRight className='font-bold text-xl'/></button>
                    </div>
                </div>
            </div>
        </div>

        <div className='flex flex-row justify-between mt-28 ml-16 mr-16'>
            <div className='flex flex-col gap-8 w-1/2'>
                <h1 className='font-bold text-7xl'>
                    Powerful and easy to Saas platform
                </h1>
                <p className='font-extralight'>
                    Use marketing automation to identify hot leads and email your sales team telling them to follow up. Nurture and contact leads at the opportune time to maximize.
                </p>
                <button className='w-1/4 bg-gradient-to-r from-[#2272FF] to-[#0D03C3] px-3 py-2 rounded-[30px] text-white uppercase'>
                    Get Started
                </button>
            </div>

            <div className='flex flex-row justify-center'>
                <div className='relative rounded-[30px] bg-gradient-to-l from-[#2272FF] to-[#0D03C3] w-[600px] h-[500px]'>
                    <img src={person} alt="" className='absolute bottom-0'/>
                    <img src={graph} alt="" className='absolute right-[35%] top-[45%]'/>
                    {/* <div className='absolute left-6'>
                    </div>     */}
                </div>
            </div>
        </div>

        <div className='bg-gradient-to-r from-[#2272FF] to-[#0D03C3] text-white'>
            <div className='flex flex-row justify-between'>
                <h1 className='font-bold text-6xl'>
                    Work smarter with easy access for user
                </h1>
                <button className='text-[#0F0BC7] font-bold px-4 py-2 rounded-[30px]'>
                    Get Started Now
                </button>
            </div>
            <div>
                <div>

                </div>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default Home