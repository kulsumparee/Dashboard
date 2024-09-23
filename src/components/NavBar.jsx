import React from 'react'
import { Menu, Search } from '@mui/icons-material'
import NavLogo from "../assets/pakdeal.jpg"
import img1 from "../assets/exit.svg"
import img2 from "../assets/mail.svg"
import img3 from "../assets/bell.svg"
import img4 from "../assets/user.svg"
import DrawerComp from './Drawer'


const NavBar = () => {
  return (
    <div className=' flex  w-full mt-5 justify-between  sm:px-10'>
      <div className=' sm:flex items-center gap-20 md:gap-28'>
        <div className=' flex gap-2 md:gap-10 items-center'>
          <div className=' hidden md:flex'><Menu /></div>
          <div className=' md:hidden'><DrawerComp /></div>

          <img src={NavLogo} width={153} height={51} />
        </div>

        <div className=' flex w-full left-14 items-center sm:top-0 top-5 relative'>
          <input type="search" className=' border border-gray-500 rounded-md py-2 px-2 w-full ' placeholder=' Search Somthing' />
          <div className=' absolute right-0 '>
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
