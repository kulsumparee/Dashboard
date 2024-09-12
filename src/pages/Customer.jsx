import React from 'react'
import SideNav from '../components/SideNav'
import { Delete, Edit, Search } from '@mui/icons-material'
import Button from '../components/Button'
import Customers from "../components/CustomersData"
import BasicPagination from '../components/Pagination'



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
                            <div className='w-full mt-7 overflow-auto'>
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

                                    <tbody>
                                        {
                                            Customers && Customers.map((data, index) => (
                                                <tr className=' w-full min-w-max border-b'>
                                                    <td className="px-4 py-4">{data.id}</td>
                                                    <td className=" text-left">
                                                        <div className="flex py-4 px-4 ">
                                                            <div className="mr-2 ">
                                                                <img
                                                                    className="w-10 h-10 rounded-full"
                                                                    src={`https://i.pravatar.cc/150?img=${index + 1}`}
                                                                    alt="avatar"
                                                                />
                                                            </div>
                                                            <div>
                                                                <h1 className=' text-lg font-semibold'>{data.name}</h1>
                                                                <h1 className=' text-lg'>{data.email}</h1>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className='px-4 py-4'>{data.phone} </td>
                                                    <td className="px-4 py-4 ">{data.balance} </td>
                                                    <td className=" pl-10">{data.orders} </td>
                                                    <td className="px-4 py-4 border-b text-center justify-center items-center">
                                                        <button className="gap-2 flex items-center px-2 rounded-lg pb-1">
                                                            <span className='bg-slate-200 px-1 py-1 rounded-md'> <Edit /></span>
                                                            <span className='bg-slate-200 px-1 py-1 rounded-md'> <Delete /></span>
                                                        </button>
                                                    </td>

                                                </tr>
                                            )


                                            )
                                        }

                                    </tbody>
                                </table>
                                <div className=' mt-10  flex flex-col items-center gap-y-4'>
                                    <BasicPagination />
                                    <h1>1 – 20 of 300+ properties found</h1>

                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>


    )
}

export default Customer
