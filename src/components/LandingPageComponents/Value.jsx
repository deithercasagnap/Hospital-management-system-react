import React from 'react'
import NavBar from './NavBar'


//imported icon from react-icons ====
import {AiFillInstagram} from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'
import {AiOutlineTwitter} from 'react-icons/ai'

//imported images from assets ====
import logo1 from '../../assets/logo1.jpg'

const Value = () => {
  return (

    <>

      <div id='ourteam' className='mb-[4rem] mt-[1rem] '>

        <h1 className='text-greenColor text-[30px] py-[2rem] pb-[10px] w-[400px] block ms-8'>
          OUR TEAM
        </h1>

        <p className='block text-[16px] text-textColor font-semibold ms-[2rem] me-[2rem] mt-3'>
          Meet the four diligent and driven students embarked on a remarkable journey to develop a groundbreaking hospital management system. Their unwavering determination and tireless efforts led them on a path of innovation and collaboration.
        </p>
        
        <div className='grid gap-2 grid-cols-4 items-center m-5 mt-10'>

          <div className='singleGrid text-center justify-center rounded-[10px] hover:bg-[#f7edf5] p-[5px] border-[1px] border-greenColor'>
          
            <div className='flex justify-center'> 
              <img src={logo1} alt="" className=' border-[1px] border-greenColor rounded-full items-center h-[150px] w-[150px]'/>
            </div>
            
            <h4 className='font-bold text-textColor text-[18px] mt-5'>
                CASAGNAP, DEITHER
            </h4>

            <span className='font-semibold text-textColor text-[16px] mt-5'>
              CEO-FOUNDER
            </span>

            <p className='block text-[13px] text-textColor py-[1rem] font-semibold '>
              Description Here: Things being made beautiful simple are at the heart of everything we do.
            </p>

            <div className='icons flex justify-center gap-4'>
              <AiFillInstagram className=' bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-blueColor'/>
              <BsFacebook className=' bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-blueColor'/>
              <AiOutlineTwitter className=' bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-blueColor'/>
          
            </div>

          </div>

          <div className='singleGrid text-center justify-center rounded-[10px] hover:bg-[#f7edf5] p-[5px] border-[1px] border-greenColor'>
          
          <div className='flex justify-center'> 
            <img src={logo1} alt="" className=' border-[1px] border-greenColor rounded-full items-center h-[150px] w-[150px]'/>
          </div>
          
          <h4 className='font-bold text-textColor text-[18px] mt-5'>
            JUARIO, CYD
          </h4>

          <span className='font-semibold text-textColor text-[16px] mt-5'>
            CEO-FOUNDER
          </span>

          <p className='block text-[13px] text-textColor py-[1rem] font-semibold '>
            Description Here: Things being made beautiful simple are at the heart of everything we do.
          </p>

          <div className='icons flex justify-center gap-4'>
            <AiFillInstagram className=' bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-blueColor'/>
            <BsFacebook className=' bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-blueColor'/>
            <AiOutlineTwitter className=' bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-blueColor'/>
        
          </div>

          </div>

          <div className='singleGrid text-center justify-center rounded-[10px] hover:bg-[#f7edf5] p-[5px] border-[1px] border-greenColor'>
          
            <div className='flex justify-center'> 
              <img src={logo1} alt="" className=' border-[1px] border-greenColor rounded-full items-center h-[150px] w-[150px]'/>
            </div>
            
            <h4 className='font-bold text-textColor text-[18px] mt-5'>
                TAUTOAN, JOY
            </h4>

            <span className='font-semibold text-textColor text-[16px] mt-5'>
              CEO-FOUNDER
            </span>

            <p className='block text-[13px] text-textColor py-[1rem] font-semibold '>
              Description Here: Things being made beautiful simple are at the heart of everything we do.
            </p>

            <div className='icons flex justify-center gap-4'>
              <AiFillInstagram className=' bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-blueColor'/>
              <BsFacebook className=' bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-blueColor'/>
              <AiOutlineTwitter className=' bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-blueColor'/>
          
            </div>

          </div>

          <div className='singleGrid text-center justify-center rounded-[10px] hover:bg-[#f7edf5] p-[5px] border-[1px] border-greenColor'>
          
            <div className='flex justify-center'> 
              <img src={logo1} alt="" className=' border-[1px] border-greenColor rounded-full items-center h-[150px] w-[150px]'/>
            </div>
            
            <h4 className='font-bold text-textColor text-[18px] mt-5'>
              EDOL, KYT
            </h4>

            <span className='font-semibold text-textColor text-[16px] mt-5'>
              CEO-FOUNDER
            </span>

            <p className='block text-[13px] text-textColor py-[1rem] font-semibold '>
              Description Here: Things being made beautiful simple are at the heart of everything we do.
            </p>

            <div className='icons flex justify-center gap-4'>
              <AiFillInstagram className=' bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-blueColor'/>
              <BsFacebook className=' bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-blueColor'/>
              <AiOutlineTwitter className=' bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-blueColor'/>
          
            </div>

          </div>

        </div>


      </div>
    </>
  )
}

export default Value