import React from 'react'
import SideNav from './SideNav'
import Dashboard from '../pages/Dashboard'


const HomePage = () => {
    return (
        <div className=' grid grid-cols-12 mt-8 w-full h-full px-5'>
            <div className='  w-full col-span-0  md:col-span-2 mt-20 hidden md:block'>
                
               <SideNav/>
            </div>
        
            <div className='  w-full col-span-12 md:col-span-10 bg-slate-100 px-5 py-10 md:py-20 rounded-md'>
                <Dashboard/>
                
            </div>

        </div>
    )
}

export default HomePage
