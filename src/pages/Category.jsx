import React from 'react'
import SideNav from '../components/SideNav'
import { Delete, Edit, Search } from '@mui/icons-material'
import Button from '../components/Button'
import Categories from '../components/CategoriesData'
import BasicPagination from '../components/Pagination'


const Category = () => {
    return (
        <div className='grid grid-cols-12 mt-8 w-full h-full px-5'>
            <div className='w-full col-span-0 md:col-span-2 mt-20 hidden md:block'>
                <SideNav />
            </div>
            <div className="w-full col-span-12 md:col-span-10 bg-slate-100 px-5 py-20 rounded-md">
                <div>
                    <h1 className='text-3xl font-semibold mb-3'>Categories</h1>
                    <p className='text-lg'>Lorem ipsum dolor sit amet, consectetur.</p>
                </div>

                <div className="bg-white py-5 rounded-md mt-10 w-full px-5">
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
                            <Button text="Add New" className="px-5" />
                        </div>
                    </div>

                    <div className='w-full mt-10 overflow-auto'>
                        <table className='w-full min-w-max  '>
                            <thead className='bg-gray-200'>
                                <tr className='border-b'>
                                    <th className="px-4 py-4">Category name</th>
                                    <th className="px-4 py-4">Category URL</th>
                                    <th className="px-4 py-4">Created at</th>
                                    <th className="px-4 py-4">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Categories.map((data) => (
                                    <tr key={data.id} className='border-b relative lg:left-10'>
                                        <td className='py-4 px-4'> {data.name}</td>
                                        <td className='py-4 px-4'> {data.url}</td>
                                        <td className='py-4 px-4'> {data.date}</td>
                                        <td className="px-4 py-4 text-center">
                                            <div className="flex justify-center gap-2 relative lg:right-8">
                                                <button className='bg-slate-200 px-2 py-1 rounded-md flex items-center'>
                                                    <Edit />
                                                </button>
                                                <button className='bg-slate-200 px-2 py-1 rounded-md flex items-center'>
                                                    <Delete />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <div className=' my-10  flex flex-col items-center gap-y-4'>
                            <BasicPagination />
                            <h1>1 – 20 of 300+ properties found</h1>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Category
