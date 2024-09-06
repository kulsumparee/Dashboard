import React from 'react'
import { Menu, Search } from '@mui/icons-material'
import NavLogo from "../assets/NavLogo.svg"
import img1 from "../assets/exit.svg"
import img2 from "../assets/mail.svg"
import img3 from "../assets/bell.svg"
import img4 from "../assets/user.svg"
import DrawerComp from './Drawer'


const NavBar = () => {
  return (
    <div className=' flex  w-full mt-5 justify-between  sm:px-10'>
      <div className=' flex items-center gap-20 md:gap-28'>
        <div className=' flex gap-2 md:gap-10 items-center'>
          <div className=' hidden md:flex'><Menu /></div>
          <div className=' md:hidden'><DrawerComp/></div>
          
          <img src={NavLogo} />
       </div>

        <div className=' flex  items-center'>
          <input type="search" className=' border border-gray-500 rounded-md pl-3 py-1 sm:py-2 sm:px-20  lg:px-4 ' placeholder=' Search Somthing' />
          <div className=' relative right-10 '>
            <Search />
          </div>
        </div>
      </div>

      <div className=' md:flex gap-1 items-center hidden '>
        <div className=' hover:bg-slate-200 rounded-md py-2 px-3 cursor-pointer'><img src={img1} width={25} alt="image1" /></div>
        <div className=' hover:bg-slate-200 rounded-md py-2 px-3 cursor-pointer'><img src={img2} width={25} alt="image2" /></div>
        <div className=' hover:bg-slate-200 rounded-md py-2 px-3 cursor-pointer'> <img src={img3} width={25} alt="image3" /></div>
        <div className=' cursor-pointer' ><img src={img4} width={40} alt="image4" /></div>
        
      </div>
      
    </div>

  )
}

export default NavBar
