
import React from 'react'
import "./style/DropdownStyle.css"

import { Link } from 'react-router-dom';

//imported images from assets ====
import logo1 from '../../assets/logo1.jpg'


const NavBar = () => {

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

    
    
      <div className='navBar flex justify-between p-[10px] shadow-lg sticky top-0 bg-white'>

        <div className='flex items-center ms-10  bg-white'>
          <img src={logo1} alt="Company Logo" className='h-[80px] w-[100px]'/>
          <div className=' text-center'>
            <h1 className=" leading-none  align-text-top pe-0"><strong className="align-text-bottom text-center text-[35px] text-blueColor">HOSPITAL</strong></h1>
            <span className='leading-none align-text-top text-[20px] text-greenColor'>Management System</span>
          </div>
        </div>

        <div className="menu items-center flex gap-8 me-20  bg-white"> 
            <li className="menuList text-[#6f6f6f] hover:text-blueColor"><Link to={"/"}>Home</Link></li>
            <li className="menuList text-[#6f6f6f] hover:text-blueColor"><Link to={"/aboutus"}>About Us</Link></li>
            <li className="menuList text-[#6f6f6f] hover:text-blueColor"><Link to={"/value"}>Our Team</Link></li>
            <li className="menuList text-[#6f6f6f] hover:text-blueColor"><Link to={"/footer"}>Contact Us</Link></li>

            <div class="dropdown">
              <button class="dropbtn">Login</button>
                <div class="dropdown-content">
                  <a  onClick={handleClose}><Link to={"/logindoctordiv"}>Professional</Link></a>
                  <a  onClick={handleClose}><Link to={"/loginpatientdiv"}>Patient</Link></a>
                </div>
            </div>

        </div>
      </div>

    </React.Fragment>
  )
}

export default NavBar