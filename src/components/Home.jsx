import React, { useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from 'swiper' 
import 'swiper/css'
import 'swiper/css/free-mode'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

import Header from './Header'
import Footer from './Footer'

import { AiFillCheckCircle, AiFillPlayCircle, AiOutlineMail } from 'react-icons/ai'
import { BsArrowRight, BsFillPlayFill, BsStarFill } from 'react-icons/bs'

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
import arrow from '../images/monthlyannualy.png'
import person1 from '../images/person1.png'
import person2 from '../images/person2.png'
import person3 from '../images/person3.png'


function Home() {
    const [changeColor, setChangeColor] = useState(false)
    const [changeColor1, setChangeColor1] = useState(false)
    const [changeColor2, setChangeColor2] = useState(false)

    const handleClick = () => {
        setChangeColor(!changeColor)
    }
    const handleClick1 = () => {
        setChangeColor1(!changeColor1)
    }
    const handleClick2 = () => {
        setChangeColor2(!changeColor2)
    }
  return (
    <>
        <div className='head relative h-[200vh] text-white  to-[#0D03C3] w-full items-center scrollbar-hide'>
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

        <div className='bg-gradient-to-r from-[#2272FF] to-[#0D03C3] text-white mb-16'>
            <div className='flex flex-row justify-between m-16 items-center '>
                <h1 className='w-1/2 font-bold text-6xl mt-24 mr-16 ml-16'>
                    Work smarter with easy access for user
                </h1>
                <button className='flex items-center bg-white text-[#0F0BC7] font-bold px-4 py-2 rounded-[30px]'>
                    Get Started Now!
                </button>
            </div>
            <div className='flex flex-row m-16 justify-between'>
                <div className='flex flex-col gap-8 items-center justify-center w-1/2'>
                    <div className='flex flex-row justify-between gap-8'>
                        <button disabled="disabled" className='text-[#0F0BC7] bg-white rounded-full px-8 py-4 text-3xl font-bold'>1</button>
                        <div className='flex flex-col gap-1'>
                            <h1 className='font-bold text-2xl'>Create Account</h1>
                            <p className='font-extralight'>
                                After learning about your customer service needs, we will get you up
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-row justify-between gap-8'>
                        <button disabled="disabled" className='text-[#0F0BC7] bg-white rounded-full px-8 py-4 text-3xl font-bold'>2</button>
                        <div className='flex flex-col gap-1'>
                            <h1 className='font-bold text-2xl'>Install tracking code</h1>
                            <p className='font-extralight'>
                                After learning about your customer service needs, we will get you up
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-row justify-between gap-8'>
                        <button disabled="disabled" className='text-[#0F0BC7] bg-white rounded-full px-8 py-4 text-3xl font-bold'>3</button>
                        <div className='flex flex-col gap-1'>
                            <h1 className='font-bold text-2xl'>Track Analytics</h1>
                            <p className='font-extralight'>
                                After learning about your customer service needs, we will get you up
                            </p>
                        </div>
                    </div>
                </div>
                <div className='relative w-1/2 m-16'>
                    <img src={video} alt="" />
                    <div className='absolute top-[40%] left-[40%]'>
                        <button className='bg-white px-4 py-4 rounded-full'>
                            <BsFillPlayFill className='text-[#0F0BC7] text-5xl'/>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div className='flex flex-col gap-8'>
            <div className='flex flex-col items-center gap-12'>
                <h1 className='font-bold text-5xl mt-24 '>Get results first. Pick a plan later</h1>
                <div className='relative flex flex-row'>
                    <div className='flex flex-row gap-3 bg-white/50 rounded-lg'>
                        <button className='bg-gradient-to-r from-[#2272FF] to-[#0D03C3] px-6 py-2 text-white rounded-lg'>Monthly</button>
                        <button className='bg-transparent px-4 py-2 text-black rounded-lg'>Annually</button>
                    </div>
                    <div className='absolute right-[-50%] top-[-80%]'>
                        <img src={arrow} alt="" />
                    </div>
                </div>
            </div>
            <div className='flex flex-row justify-evenly m-16'>
                <div 
                    onClick={handleClick}
                    className={`flex flex-col justify-evenly shadow-xl shadow-white/50 rounded-lg px-12 py-6 ${(changeColor === true)? 'bg-gradient-to-r from-[#2272FF] to-[#0D03C3] text-white' : 'bg-white text-black'}`}>
                    <div className='flex flex-col gap-4'>
                        <h1 
                            onClick={handleClick}
                            className={`font-bold text-3xl ${(changeColor === true) ? 'text-white':'text-black'}`}>
                                Pro
                        </h1>

                        <h1 
                            onClick={handleClick}
                            className={`text-sm ${(changeColor === true) ? 'text-white':'text-slate-500'}`}>
                                <span 
                                    onClick={handleClick}
                                    className={`font-bold text-6xl  ${(changeColor === true) ? 'text-white':'text-[#0F0BC7]'}`}>$30</span>/month</h1>
                        <h1 
                            onClick={handleClick}
                            className={`text-extralight text-xl ${(changeColor === true) ? 'text-white':'text-black'}`}>For Small Business</h1>
                    </div>
                    <div  onClick={handleClick} className={` h-[1px] mt-8 mb-8 items-center ${(changeColor === true) ? 'bg-white':'bg-slate-800'}`}></div>
                    <div 
                        onClick={handleClick}
                        className={`flex flex-col gap-6 ${(changeColor === true) ? 'text-white':'text-[#0F0BC7]'}`}>
                        <div className='flex flex-row gap-4'>
                            <AiFillCheckCircle className=' text-3xl'/>
                            <h1 className='text-[18px] font-extralight'>3 Social profiles</h1>
                        </div>
                        <div className='flex flex-row gap-4'>
                            <AiFillCheckCircle className=' text-3xl'/>
                            <h1 className='text-[18px] font-extralight'>12 Team members</h1>
                        </div>
                        <div className='flex flex-row gap-4'>
                            <AiFillCheckCircle className=' text-3xl'/>
                            <h1 className='text-[18px] font-extralight'>5 Competitors per profile</h1>
                        </div>
                    </div>
                    <button 
                        onClick={handleClick}
                        className={`outline-none border-none focus:ring-0 focus:border-none px-4 py-2 ${(changeColor === true)? 'bg-white text-[#0F0BC7]' : 'bg-gradient-to-r from-[#2272FF] to-[#0D03C3] text-white'}`}>
                        Get Started
                    </button>
                </div>

                <div 
                    onClick={handleClick1}
                    className={`flex flex-col justify-evenly shadow-xl shadow-white/50 rounded-lg px-12 py-6 ${(changeColor1 === true)? 'bg-gradient-to-r from-[#2272FF] to-[#0D03C3] text-white' : 'bg-white text-black'}`}>
                    <div className='flex flex-col gap-4'>
                        <h1 
                            onClick={handleClick1}
                            className={`font-bold text-3xl ${(changeColor1 === true) ? 'text-white':'text-black'}`}>
                                Popular
                        </h1>

                        <h1 
                            onClick={handleClick1}
                            className={`text-sm ${(changeColor1 === true) ? 'text-white':'text-slate-500'}`}>
                                <span 
                                    onClick={handleClick1}
                                    className={`font-bold text-6xl  ${(changeColor1 === true) ? 'text-white':'text-[#0F0BC7]'}`}>$60</span>/month</h1>
                        <h1 
                            onClick={handleClick1}
                            className={`text-extralight text-xl ${(changeColor1 === true) ? 'text-white':'text-black'}`}>For Medium Business</h1>
                    </div>
                    <div  onClick={handleClick1} className={` h-[1px] mt-8 mb-8 items-center ${(changeColor1 === true) ? 'bg-white':'bg-slate-800'}`}></div>
                    <div 
                        onClick={handleClick1}
                        className={`flex flex-col gap-6 ${(changeColor1 === true) ? 'text-white':'text-[#0F0BC7]'}`}>
                        <div className='flex flex-row gap-4'>
                            <AiFillCheckCircle className=' text-3xl'/>
                            <h1 className='text-[18px] font-extralight'>3 Social profiles</h1>
                        </div>
                        <div className='flex flex-row gap-4'>
                            <AiFillCheckCircle className=' text-3xl'/>
                            <h1 className='text-[18px] font-extralight'>12 Team members</h1>
                        </div>
                        <div className='flex flex-row gap-4'>
                            <AiFillCheckCircle className=' text-3xl'/>
                            <h1 className='text-[18px] font-extralight'>5 Competitors per profile</h1>
                        </div>
                        <div className='flex flex-row gap-4'>
                            <AiFillCheckCircle className=' text-3xl'/>
                            <h1 className='text-[18px] font-extralight'>Hashtags per profile</h1>
                        </div>
                    </div>
                    <button 
                        onClick={handleClick1}
                        className={`outline-none border-none focus:ring-0 focus:border-none px-4 py-2 ${(changeColor1 === true)? 'bg-white text-[#0F0BC7]' : 'bg-gradient-to-r from-[#2272FF] to-[#0D03C3] text-white'}`}>
                        Get Started
                    </button>
                </div>

                <div 
                    onClick={handleClick2}
                    className={`flex flex-col justify-evenly shadow-xl shadow-white/50 rounded-lg px-12 py-6 ${(changeColor2 === true)? 'bg-gradient-to-r from-[#2272FF] to-[#0D03C3] text-white' : 'bg-white text-black'}`}>
                    <div className='flex flex-col gap-4'>
                        <h1 
                            onClick={handleClick2}
                            className={`font-bold text-3xl ${(changeColor2 === true) ? 'text-white':'text-black'}`}>
                                Advanced
                        </h1>

                        <h1 
                            onClick={handleClick2}
                            className={`text-sm ${(changeColor2 === true) ? 'text-white':'text-slate-500'}`}>
                                <span 
                                    onClick={handleClick2}
                                    className={`font-bold text-6xl  ${(changeColor2 === true) ? 'text-white':'text-[#0F0BC7]'}`}>$100</span>/month</h1>
                        <h1 
                            onClick={handleClick2}
                            className={`text-extralight text-xl ${(changeColor2 === true) ? 'text-white':'text-black'}`}>For Large Enterprises</h1>
                    </div>
                    <div  onClick={handleClick2} className={` h-[1px] mt-8 mb-8 items-center ${(changeColor2 === true) ? 'bg-white':'bg-slate-800'}`}></div>
                    <div 
                        onClick={handleClick2}
                        className={`flex flex-col gap-6 ${(changeColor2 === true) ? 'text-white':'text-[#0F0BC7]'}`}>
                        <div className='flex flex-row gap-4'>
                            <AiFillCheckCircle className=' text-3xl'/>
                            <h1 className='text-[18px] font-extralight'>3 Social profiles</h1>
                        </div>
                        <div className='flex flex-row gap-4'>
                            <AiFillCheckCircle className=' text-3xl'/>
                            <h1 className='text-[18px] font-extralight'>12 Team members</h1>
                        </div>
                        <div className='flex flex-row gap-4'>
                            <AiFillCheckCircle className=' text-3xl'/>
                            <h1 className='text-[18px] font-extralight'>5 Competitors per profile</h1>
                        </div>
                        <div className='flex flex-row gap-4'>
                            <AiFillCheckCircle className=' text-3xl'/>
                            <h1 className='text-[18px] font-extralight'>Hashtags per profile</h1>
                        </div>
                        <div className='flex flex-row gap-4'>
                            <AiFillCheckCircle className=' text-3xl'/>
                            <h1 className='text-[18px] font-extralight'>3 Social profiles</h1>
                        </div>
                        <div className='flex flex-row gap-4'>
                            <AiFillCheckCircle className=' text-3xl'/>
                            <h1 className='text-[18px] font-extralight'>12 Team members</h1>
                        </div>
                    </div>
                    <button 
                        onClick={handleClick2}
                        className={`outline-none border-none focus:ring-0 focus:border-none px-4 py-2 ${(changeColor2 === true)? 'bg-white text-[#0F0BC7]' : 'bg-gradient-to-r from-[#2272FF] to-[#0D03C3] text-white'}`}>
                        Get Started
                    </button>
                </div>
            </div>
        </div>

        <div className='relative text-black py-12 mt-16'>
            <div className='flex flex-col gap-8 items-center'>
                <h4 className='font-bold text-5xl mb-16'>What people are saying about us</h4>
            </div>
                <Swiper 
                    freeMode={true}
                    grabCursor={true}
                    modules={FreeMode}
                    slidesPerView={3}
                    spaceBetween={60}
                    className='mySwiper text-black flex flex-row items-center justify-start overflow-x-scroll overflow-y-hidden m-16 scrollbar-hide'
                    >
                    <SwiperSlide>
                        <div className='flex flex-col px-14 py-14 gap-8 bg-white shadow-xl shadow-slate-500'>
                            <div className='flex flex-row gap-2'>
                                <BsStarFill className='text-[#0F0BC7]'/>
                                <BsStarFill className='text-[#0F0BC7]'/>
                                <BsStarFill className='text-[#0F0BC7]'/>
                                <BsStarFill className='text-[#0F0BC7]'/>
                                <BsStarFill className='text-[#0F0BC7]'/>
                            </div>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                                Necessitatibus, maxime expedita veniam totam quidem, aut repellendus ipsam aspernatur, vitae minus sed unde illo. 
                                Ab soluta cupiditate eveniet labore quidem laboriosam.
                            </p>
                            <div className='flex flex-row gap-2 items-center'>
                                <img src={person1} alt="" />
                                <div className='flex flex-col'>
                                    <h1 className='text-xl'>Joey Joe</h1>
                                    <h1 className='text-sm opacity-70'>London, United Kingdom</h1>
                                </div>         
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex flex-col px-14 py-14 gap-8 bg-white shadow-xl shadow-slate-500'>
                            <div className='flex flex-row gap-2'>
                                <BsStarFill className='text-[#0F0BC7]'/>
                                <BsStarFill className='text-[#0F0BC7]'/>
                                <BsStarFill className='text-[#0F0BC7]'/>
                                <BsStarFill className='text-[#0F0BC7]'/>
                                <BsStarFill className='text-[#0F0BC7]'/>
                            </div>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                                Necessitatibus, maxime expedita veniam totam quidem, aut repellendus ipsam aspernatur, vitae minus sed unde illo. 
                                Ab soluta cupiditate eveniet labore quidem laboriosam.
                            </p>
                            <div className='flex flex-row gap-2 items-center'>
                                <img src={person2} alt="" />
                                <div className='flex flex-col '>
                                    <h1 className='text-xl'>Collins John</h1>
                                    <h1 className='text-sm opacity-70'>Bern, Switzerland</h1>
                                </div>         
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex flex-col px-14 py-14 gap-8 bg-white shadow-xl shadow-slate-500'>
                            <div className='flex flex-row gap-2'>
                                <BsStarFill className='text-[#0F0BC7]'/>
                                <BsStarFill className='text-[#0F0BC7]'/>
                                <BsStarFill className='text-[#0F0BC7]'/>
                                <BsStarFill className='text-[#0F0BC7]'/>
                                <BsStarFill className='text-[#0F0BC7]'/>
                            </div>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                                Necessitatibus, maxime expedita veniam totam quidem, aut repellendus ipsam aspernatur, vitae minus sed unde illo. 
                                Ab soluta cupiditate eveniet labore quidem laboriosam.
                            </p>
                            <div className='flex flex-row gap-2 items-center'>
                                <img src={person3} alt="" />
                                <div className='flex flex-col '>
                                    <h1 className='text-xl'>Makamu Mwanga</h1>
                                    <h1 className='text-sm opacity-70'>Nairobi, Kenya</h1>
                                </div>         
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex flex-col px-14 py-14 gap-8 bg-white shadow-xl shadow-slate-500'>
                            <div className='flex flex-row gap-2'>
                                <BsStarFill className='text-[#0F0BC7]'/>
                                <BsStarFill className='text-[#0F0BC7]'/>
                                <BsStarFill className='text-[#0F0BC7]'/>
                                <BsStarFill className='text-[#0F0BC7]'/>
                                <BsStarFill className='text-[#0F0BC7]'/>
                            </div>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                                Necessitatibus, maxime expedita veniam totam quidem, aut repellendus ipsam aspernatur, vitae minus sed unde illo. 
                                Ab soluta cupiditate eveniet labore quidem laboriosam.
                            </p>
                            <div className='flex flex-row gap-2 items-center'>
                                <img src={person1} alt="" />
                                <div className='flex flex-col '>
                                    <h1 className='text-xl'>James Musk</h1>
                                    <h1 className='text-sm opacity-70'>California, United States</h1>
                                </div>         
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex flex-col px-14 py-14 gap-8 bg-white shadow-xl shadow-slate-500'>
                            <div className='flex flex-row gap-2'>
                                <BsStarFill className='text-[#0F0BC7]'/>
                                <BsStarFill className='text-[#0F0BC7]'/>
                                <BsStarFill className='text-[#0F0BC7]'/>
                                <BsStarFill className='text-[#0F0BC7]'/>
                                <BsStarFill className='text-[#0F0BC7]'/>
                            </div>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                                Necessitatibus, maxime expedita veniam totam quidem, aut repellendus ipsam aspernatur, vitae minus sed unde illo. 
                                Ab soluta cupiditate eveniet labore quidem laboriosam.
                            </p>
                            <div className='flex flex-row gap-2 items-center'>
                                <img src={person2} alt="" />
                                <div className='flex flex-col '>
                                    <h1 className='text-xl'>Bond Jude</h1>
                                    <h1 className='text-sm opacity-70'>Florida, United States</h1>
                                </div>         
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex flex-col px-14 py-14 gap-8 bg-white shadow-xl shadow-slate-500'>
                            <div className='flex flex-row gap-2'>
                                <BsStarFill className='text-[#0F0BC7]'/>
                                <BsStarFill className='text-[#0F0BC7]'/>
                                <BsStarFill className='text-[#0F0BC7]'/>
                                <BsStarFill className='text-[#0F0BC7]'/>
                                <BsStarFill className='text-[#0F0BC7]'/>
                            </div>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                                Necessitatibus, maxime expedita veniam totam quidem, aut repellendus ipsam aspernatur, vitae minus sed unde illo. 
                                Ab soluta cupiditate eveniet labore quidem laboriosam.
                            </p>
                            <div className='flex flex-row gap-2 items-center'>
                                <img src={person3} alt="" />
                                <div className='flex flex-col '>
                                    <h1 className='text-xl'>Utred Ragnerson</h1>
                                    <h1 className='text-sm opacity-70'>Oslo, Norway</h1>
                                </div>         
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex flex-col px-14 py-14 gap-8 bg-white shadow-xl shadow-slate-500'>
                            <div className='flex flex-row gap-2'>
                                <BsStarFill className='text-[#0F0BC7]'/>
                                <BsStarFill className='text-[#0F0BC7]'/>
                                <BsStarFill className='text-[#0F0BC7]'/>
                                <BsStarFill className='text-[#0F0BC7]'/>
                                <BsStarFill className='text-[#0F0BC7]'/>
                            </div>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                                Necessitatibus, maxime expedita veniam totam quidem, aut repellendus ipsam aspernatur, vitae minus sed unde illo. 
                                Ab soluta cupiditate eveniet labore quidem laboriosam.
                            </p>
                            <div className='flex flex-row gap-2 items-center'>
                                <img src={person1} alt="" />
                                <div className='flex flex-col '>
                                    <h1 className='text-xl'>Saxon Danes</h1>
                                    <h1 className='text-sm opacity-70'>Berlin, Germany</h1>
                                </div>         
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div> 

            <div className='bg-[#040335] p-16 flex  flex-col gap-8 items-center justify-center'>
                <h1 className='text-center font-bold text-white text-7xl'>
                    We are here to help you grow your business
                </h1>
                <button className='items-center font-bold bg-white rounded-[30px] text-[#0F0BC7] px-5 py-2'>Get Started Now</button>
            </div>
        <Footer/>
    </>
  )
}

export default Home