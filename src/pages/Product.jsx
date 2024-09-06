import React, { useState } from 'react';
import SideNav from '../components/SideNav';
import {  Delete, Edit, Search } from '@mui/icons-material';
import Button from '../components/Button';
import { Pagination } from 'antd';
import BasicPagination from '../components/Pagination';


const orders = [
  { id: '#1923', name: 'Lenovo IdeaPad 3 15.6” Laptop - Sand', sku: "AB123456789-1", payment: 'Paid', Stock: 'Stock', Price: '$250', date: 'Aug 15, 2020', },
  { id: '#1923', name: 'Lenovo IdeaPad 3 15.6” Laptop - Sand', sku: "AB123456789-1", payment: 'Paid', Stock: 'Out Stock', Price: '$250', date: 'Aug 15, 2020', },
  { id: '#1923', name: 'Lenovo IdeaPad 3 15.6” Laptop - Sand', sku: "AB123456789-1", payment: 'Paid', Stock: 'Stock', Price: '$250', date: 'Aug 15, 2020', },
  { id: '#1923', name: 'Lenovo IdeaPad 3 15.6” Laptop - Sand', sku: "AB123456789-1", payment: 'Paid', Stock: 'Out Stock', Price: '$250', date: 'Aug 15, 2020', },
  { id: '#1923', name: 'Lenovo IdeaPad 3 15.6” Laptop - Sand', sku: "AB123456789-1", payment: 'Paid', Stock: 'Stock', Price: '$250', date: 'Aug 15, 2020', },
  { id: '#1923', name: 'Lenovo IdeaPad 3 15.6” Laptop - Sand', sku: "AB123456789-1", payment: 'Paid', Stock: 'Out Stock', Price: '$250', date: 'Aug 15, 2020', },
  { id: '#1923', name: 'Lenovo IdeaPad 3 15.6” Laptop - Sand', sku: "AB123456789-1", payment: 'Paid', Stock: 'Stock', Price: '$250', date: 'Aug 15, 2020', },
  { id: '#1923', name: 'Lenovo IdeaPad 3 15.6” Laptop - Sand', sku: "AB123456789-1", payment: 'Paid', Stock: 'Out Stock', Price: '$250', date: 'Aug 15, 2020', },
  { id: '#1923', name: 'Lenovo IdeaPad 3 15.6” Laptop - Sand', sku: "AB123456789-1", payment: 'Paid', Stock: 'Out Stock', Price: '$250', date: 'Aug 15, 2020', },
  { id: '#1923', name: 'Lenovo IdeaPad 3 15.6” Laptop - Sand', sku: "AB123456789-1", payment: 'Paid', Stock: 'Stock', Price: '$250', date: 'Aug 15, 2020', },
  { id: '#1923', name: 'Lenovo IdeaPad 3 15.6” Laptop - Sand', sku: "AB123456789-1", payment: 'Paid', Stock: 'Out Stock', Price: '$250', date: 'Aug 15, 2020', },
  { id: '#1923', name: 'Lenovo IdeaPad 3 15.6” Laptop - Sand', sku: "AB123456789-1", payment: 'Paid', Stock: 'Stock', Price: '$250', date: 'Aug 15, 2020', },
  { id: '#1923', name: 'Lenovo IdeaPad 3 15.6” Laptop - Sand', sku: "AB123456789-1", payment: 'Paid', Stock: 'Out Stock', Price: '$250', date: 'Aug 15, 2020', },
  { id: '#1923', name: 'Lenovo IdeaPad 3 15.6” Laptop - Sand', sku: "AB123456789-1", payment: 'Paid', Stock: 'Stock', Price: '$250', date: 'Aug 15, 2020', },
  { id: '#1923', name: 'Lenovo IdeaPad 3 15.6” Laptop - Sand', sku: "AB123456789-1", payment: 'Paid', Stock: 'Out Stock', Price: '$250', date: 'Aug 15, 2020', },
];

const getStatusColors = (status) => {
  switch (status) {
    case 'Stock':
      return 'bg-green-100 text-green-500';
    case 'Out Stock':
      return 'bg-red-100 text-red-500';
    default:
      return '';
  }
};

const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(8);

  const indexOfLastOrder = currentPage * pageSize;
  const indexOfFirstOrder = indexOfLastOrder - pageSize;
  const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className='grid grid-cols-12 mt-8 w-full h-full px-5 '>
      <div className='w-full col-span-0 md:col-span-2 mt-20 hidden md:block'>
        <SideNav />
      </div>

      <div className='w-full col-span-12 md:col-span-10 bg-slate-100 px-5 py-10 md:py-20 rounded-md'>
        <div>
          <h1 className='text-3xl font-semibold mb-3'>Products</h1>
          <p className='text-lg'>Lorem ipsum dolor sit amet, consectetur.</p>
        </div>

        <div className='bg-white shadow-md rounded-md px-5 mt-10'>
          <div className='grid grid-cols-12 w-full gap-3'>
            <div className=' col col-span-12 md:col-span-9'>
              <div className='flex gap-4 items-center mt-5 w-full'>
                <div className='relative flex w-full items-center'>
                  <input
                    type="search"
                    className='border border-gray-500 rounded-md pl-3 w-full py-3'
                    placeholder='Search '
                  />
                  <div className='absolute right-3'>
                    <Search className="w-5 h-5 text-gray-500" />
                  </div>
                </div>
                <div className='relative flex w-full items-center'>
                  <select className='border border-gray-500 rounded-md pl-3 w-full py-3'>
                    <option value="status">Select Category</option>
                  </select>
                </div>
                <div className='relative flex w-full items-center'>
                  <select className='border border-gray-500 rounded-md pl-3 w-full py-3'>
                    <option value="status">Status</option>
                    <option value="active">Active</option>
                    <option value="passive">Passive</option>
                  </select>
                </div>
              </div>
            </div>
            <div className=' col-span-12 md:col-span-3 w-full mt-5'>
             
              <Button text="Add New Products" />
            </div>
          </div>

          <div className='p-5'>
            <div>
              <h1 className=' text-lg font-semibold pb-3'>Recent Orders</h1>
              <div className=' mt-3 overflow-auto'>
                <table className=' min-w-max w-full '>
                  <thead>
                    <tr className=' bg-gray-200 rounded-lg'>
                      <th className=' px-4 py-4 border-b '>ID</th>
                      <th className=' px-4 py-4 border-b '>Name</th>
                      <th className=' px-4 py-4 border-b '>SKU</th>
                      <th className=' px-4 py-4 border-b '>Stock</th>
                      <th className=' px-4 py-4 border-b '>Price</th>
                      <th className=' px-4 py-4 border-b '>Categories</th>
                      <th className=' px-4 py-4 border-b '>Date</th>
                      <th className=' px-4 py-4 border-b '>Action</th>
                    </tr>
                  </thead>

                  <tbody>
                    {currentOrders.map((data, index) => (
                      <tr key={index}>
                        <td className='px-4 py-4 border-b'> {data.id} </td>
                        <td className='px-4 py-4 border-b'> {data.name} </td>
                        <td className='px-4 py-4 border-b'> {data.sku} </td>
                        <td className='px-4 py-4 border-b'> {data.payment} </td>
                        <td className='px-4 py-4 border-b'>
                          <span className={`py-1 px-2 rounded-md ${getStatusColors(data.Stock)}`}>{data.Stock}</span>
                        </td>
                        <td className='px-4 py-4 border-b '> {data.Price} </td>
                        <td className='px-4 py-4 border-b'> {data.date} </td>
                        <td className="px-4 py-4 border-b text-center justify-center items-center">
                          <button className="gap-2 flex items-center px-2 rounded-lg pb-1">
                            <span className='bg-slate-200 px-1 py-1 rounded-md'> <Edit /></span>
                            <span className='bg-slate-200 px-1 py-1 rounded-md'> <Delete /></span>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div className='flex justify-center my-10'>
                  <Pagination
                    current={currentPage}
                    pageSize={pageSize}
                    total={orders.length}
                    onChange={handlePageChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
