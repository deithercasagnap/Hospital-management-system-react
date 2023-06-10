import React from 'react'
import "./LoginDoctorStyle.css"
import { Link } from 'react-router-dom';

// imported icons from react-icons ===>
import {AiOutlineUser} from 'react-icons/ai'
import {AiFillUnlock} from 'react-icons/ai'

const LoginDoctorDiv = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

  return (

    <React.Fragment>
        <div className='searchDiv grid rounded-[10px] justify-center'>
            <div className='rounded-[10px] p-[3rem] w-[100%]'>
                <form action="border-[1px] border-blueColor ">

                    <div className='firstDiv rounded-[8px] bg-white p-5 shadow-lg shadow-greyIsh-700 border-[1px] border-greenColor'>


                        <h6 className="text-center mt-5 font-bold">Hi, Doc! Let's go treat some patients.</h6>

                        <div className='flex gap-2 items-center m-4'>
                            <AiOutlineUser className='text-[25px] text-textColor icon'/>
                            <input type="text" className='bg-transparent text-textColor focus:outline-none w-[100%] border-[1px] border-greenColor p-[10px] rounded-[10px]' placeholder='Doctor Number'/>
                        </div>
                        
                        <div className='flex gap-2 items-center m-4'>
                        
                            <AiFillUnlock className='text-[25px] text-textColor icon'/>
                            <input type="password" className='bg-transparent text-textColor focus:outline-none w-[100%] border-[1px] border-greenColor p-[10px] rounded-[10px]' placeholder='Password'/>
                        
                        </div>

                        <div className="m-3">
                            <p className="text-[12px]">By logging in, you agree to the <span id="span">Terms of Conditions</span> <br /> and <span id="span">Privacy Policy</span>  of <a href="#">USTP-HMS</a>.</p>
                        </div>

                        <div className='flex justify-center'>
                            <button className="justify-center bg-blueColor h-full w-[50%] mt-5 mb-5 pt-3 pb-3 rounded-[10px] text-white cursor-pointer hover:bg-blue-300" onClick={handleClose}><Link to={"/homedoctor"}>LOGIN</Link></button>
                        </div>

                    </div>

                    

                    <div class="m-3">
                        <h6 className="text-textColor text-[12px]">Powered by: <span id="span">Digital Transformation Office</span> | <span id="span">Terms of Conditions</span> | <br /><span id="span">Privacy Policy</span> | <span id="span">V-build: 1.0.0</span></h6>
                        <h6 className="text-textColor text-[12px]">Copyright © 2023 USTP-HMS. All rights reserved.</h6>
                    </div>  

                </form>
            </div>
            
        </div>
    </React.Fragment>
  )
}

export default LoginDoctorDiv