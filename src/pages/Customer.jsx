import React from 'react'
import SideNav from '../components/SideNav'
import { Search } from '@mui/icons-material'
import Button from '../components/Button'



const Customer = () => {
    return (
        <div>
            <div className='grid grid-cols-12 mt-8 w-full h-full px-5'>
                <div className='w-full col-span-0 md:col-span-2 mt-20 hidden md:block'>
                    <SideNav />
                </div>


                <div className='w-full col-span-12 md:col-span-10 bg-slate-100 px-5 py-20 rounded-md'>
                    <div>
                        <h1 className='text-3xl font-semibold mb-3'>Customer</h1>
                        <p className='text-lg'>Lorem ipsum dolor sit amet, consectetur.</p>
                    </div>

                    <div className="max-w-[1470px] bg-white rounded-md py-5 px-5 mt-10">
                        <div className="sm:flex  justify-between">
                            <div className='relative flex items-center  mb-5 sm:mb-0'>
                                <input
                                    type="search"
                                    className='border border-gray-500 rounded-md pl-3 px-10 w-full py-3'
                                    placeholder='Search'
                                />
                                <div className='absolute right-3'>
                                    <Search className="w-5 h-5 text-gray-500" />
                                </div>
                            </div>

                            <div className='  '>
                                <Button text="Add Customer" className="px-5" />
                            </div>
                        </div>


                        <div >
                            <div className='w-full mt-7'>
                                <table className="min-w-max w-full">
                                    <thead>
                                        <tr className=' bg-gray-200 '>
                                            <th className='px-4 py-4 border-b'>ID</th>
                                            <th className='px-4 py-4 border-b'>Name</th>
                                            <th className='px-4 py-4 border-b'>Phone Number</th>
                                            <th className='px-4 py-4 border-b'>Balances</th>
                                            <th className='px-4 py-4 border-b'>Total orders</th>
                                            <th className='px-4 py-4 border-b'>Action</th>
                                        </tr>
                                    </thead>
                               </table>

                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>


    )
}

export default Customer
