import React, { useState } from 'react'
import AsideBar from './Assest'
import imgs1 from "../assets/imgs/house.svg"
import imgs2 from "../assets/imgs/product.svg"
import imgs3 from "../assets/imgs/order.svg"
import imgs4 from "../assets/imgs/categories.svg"
import imgs5 from "../assets/imgs/customer.svg"
import imgs6 from "../assets/imgs/settings.svg"
import imgs7 from "../assets/imgs/exit.svg"
import { Link, useNavigate } from 'react-router-dom';
import Products from '../pages/Product'

const SideNav = () => {


    return (
        <div>
            <Link to="/" className=' w-full  cursor-pointer flex gap-4 hover:bg-yellow-400 py-3 pl-10 md:pl-2 lg:pl-5 rounded-md '>
                <img src={imgs1} alt="dashboard" />
                <h1 className=' text-xl md:text-lg lg:text-xl font-semibold'>Dashboard</h1>
            </Link>
            <Link to="/Products" className=' w-full  cursor-pointer flex gap-4 hover:bg-yellow-400 py-3 pl-10 md:pl-2 lg:pl-5 rounded-md  '>
                <img src={imgs2} alt="dashboard" />
                <h1 className=' text-xl md:text-lg lg:text-xl font-semibold'>Products</h1>
            </Link>
            <Link to="/Order" className=' w-full  cursor-pointer flex gap-4 hover:bg-yellow-400 py-3 pl-10 md:pl-2 lg:pl-5 rounded-md '>
                <img src={imgs3} alt="dashboard" />
                <h1 className=' text-xl md:text-lg lg:text-xl font-semibold'>Order</h1>
            </Link>
            <Link to="/customer" className=' w-full  cursor-pointer flex gap-4 hover:bg-yellow-400 py-3 pl-10 md:pl-2 lg:pl-5 rounded-md '>
                <img src={imgs5} alt="dashboard" />
                <h1 className=' text-xl md:text-lg lg:text-xl font-semibold'>Customer</h1>
            </Link>
            <Link to="/Categories" className=' w-full  cursor-pointer flex gap-4 hover:bg-yellow-400 py-3 pl-10 md:pl-2 lg:pl-5 rounded-md '>
                <img src={imgs4} alt="dashboard" />
                <h1 className=' text-xl md:text-lg lg:text-xl font-semibold'>Categories</h1>
            </Link>
            <Link to="/Settings" className=' w-full  cursor-pointer flex gap-4 hover:bg-yellow-400 py-3 pl-10 md:pl-2 lg:pl-5 rounded-md '>
                <img src={imgs6} alt="dashboard" />
                <h1 className=' text-xl md:text-lg lg:text-xl font-semibold'>Settings</h1>
            </Link>
            <div className=' w-full  cursor-pointer flex gap-4 hover:bg-yellow-400 py-3 pl-10 md:pl-2 lg:pl-5 rounded-md '>
                <img src={imgs7} alt="dashboard" />
                <h1 className=' text-xl md:text-lg lg:text-xl font-semibold'>Logout</h1>
            </div>

        </div>
    )
}

export default SideNav
