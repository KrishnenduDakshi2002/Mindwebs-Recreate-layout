import React from 'react'
import '../dist/css/Navbar.css'
import SearchBar from './SearchBar'
import {GiHamburgerMenu} from 'react-icons/gi';
import Logo from '../assets/Logo.png'
import { CiDark } from 'react-icons/ci';
import { IoIosArrowDown } from 'react-icons/io';
import UserProfileLogo from '../assets/UserProfileLogo.png';
function Navbar({toggleSidebar}:{toggleSidebar:()=>void;}) {
  return (
    <div className='navbar'>
        {/* Logo and search bar */}
        <div>
            {/* logo */}
            <div>
                <button className='sidebar__toggle__btn' onClick={()=>toggleSidebar()}>
                <GiHamburgerMenu size={25}/>
                </button>
                <img src={Logo}/>
            </div>
            {/* seachbar */}
            <div>
                <SearchBar/>
            </div>
        </div>
        {/* settings and options */}
        <div>
          <div>
            <CiDark size={23}/>
          </div>
          <div>
              <p>EN</p>
              <IoIosArrowDown size={20}/>
          </div>
          <div>
             {/* right most user profile */}
              <div>
                27.29 DEL
              </div>
              <div>
              dxlfqz...7ruk
              </div>
              <div>
                <img src={UserProfileLogo}/>
              </div>
          </div>
        </div>
    </div>
  )
}


export default Navbar