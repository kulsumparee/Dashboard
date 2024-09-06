import React, { useState } from 'react'
import SideNav from '../components/SideNav'
import { Delete, Edit, Search } from '@mui/icons-material'
import Button from '../components/Button'
import { Pagination } from 'antd';


const orders = [
  { id: '#1923', product: 'Lenovo IdeaPad 3 15.6” Laptop - Sand', sku: "AB123456789-1", payment: 'Paid', status: 'Delivered',   Price: '$56.00', date: 'Aug 15, 2020', },
  { id: '#1923', product: 'Lenovo IdeaPad 3 15.6” Laptop - Sand', sku: "AB123456789-1", payment: 'Paid', status: 'Cancel',      Price: '$56.00', date: 'Aug 15, 2020', },
  { id: '#1923', product: 'Lenovo IdeaPad 3 15.6” Laptop - Sand', sku: "AB123456789-1", payment: 'Paid', status: 'In Progress', Price: '$56.00', date: 'Aug 15, 2020', },
  { id: '#1923', product: 'Lenovo IdeaPad 3 15.6” Laptop - Sand', sku: "AB123456789-1", payment: 'Paid', status: 'Delivered',  Price: '$56.00', date: 'Aug 15, 2020', },
  { id: '#1923', product: 'Lenovo IdeaPad 3 15.6” Laptop - Sand', sku: "AB123456789-1", payment: 'Paid', status: 'In Progress', Price: '$56.00', date: 'Aug 15, 2020', },
  { id: '#1923', product: 'Lenovo IdeaPad 3 15.6” Laptop - Sand', sku: "AB123456789-1", payment: 'Paid', status: 'Delivered',  Price: '$56.00', date: 'Aug 15, 2020', },
  { id: '#1923', product: 'Lenovo IdeaPad 3 15.6” Laptop - Sand', sku: "AB123456789-1", payment: 'Paid', status: 'Cancel',      Price: '$56.00', date: 'Aug 15, 2020', },
  { id: '#1923', product: 'Lenovo IdeaPad 3 15.6” Laptop - Sand', sku: "AB123456789-1", payment: 'Paid', status: 'In Progress', Price: '$56.00', date: 'Aug 15, 2020', },

];

const getStatusColors = (status) => {
  switch (status) {
    case 'Delivered':
      return 'bg-blue-100 text-blue-500';
    case 'Cancel':
      return 'bg-red-100 text-red-500';
    case 'In Progress':
      return 'bg-orange-100 text-orange-500';
    default:
      return '';
  }
};


const Order = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(8);

  const indexOfLastOrder = currentPage * pageSize;
  const indexOfFirstOrder = indexOfLastOrder - pageSize;
  const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <div>
      <div className='grid grid-cols-12 mt-8 w-full h-full px-5'>
        <div className='w-full col-span-0 md:col-span-2 mt-20 hidden md:block'>
          <SideNav />
        </div>

        <div className='w-full col-span-12 md:col-span-10 bg-slate-100 px-5 py-20 rounded-md'>
          <div>
            <h1 className='text-3xl font-semibold mb-3'>Orders</h1>
            <p className='text-lg'>Lorem ipsum dolor sit amet, consectetur.</p>
          </div>

          <div className='bg-white py-5 rounded-md mt-10 w-full px-5'>
            <div className=' md:flex items-center gap-10 justify-between w-full'>
              <div className='flex gap-5 w-full mb-5 md:mb-0'>

                <div className='relative flex w-full items-center'>
                  <input
                    type="search"
                    className='border border-gray-500 rounded-md pl-3 w-full py-3'
                    placeholder='Search'
                  />
                  <div className='absolute right-3'>
                    <Search className="w-5 h-5 text-gray-500" />
                  </div>
                </div>

                <div className='w-full'>
                  <select className='border border-gray-500 rounded-md pl-3 w-full py-3'>
                    <option value="status">Status</option>
                    <option value="active">Active</option>
                    <option value="passive">Passive</option>
                  </select>
                </div>
              </div>

              <div className='flex w-full gap-4'>
                <Button text="Export" className="bg-slate-100" />
                <Button text="New Order"  />
              </div>
            </div>

            <div className=''>
              <div>
               
                <div className=' mt-3 overflow-auto'>
                  <table className=' min-w-max w-full '>
                    <thead>
                      <tr className=' bg-gray-200 rounded-lg'>
                        <th className=' px-4 py-4 border-b '>ID</th>
                        <th className=' px-4 py-4 border-b '>Product</th>
                        <th className=' px-4 py-4 border-b '>Date</th>
                        <th className=' px-4 py-4 border-b '>Payment</th>
                        <th className=' px-4 py-4 border-b '>Status</th>
                        <th className=' px-4 py-4 border-b '>Price</th>
                        <th className=' px-4 py-4 border-b '>Action</th>
                      </tr>
                    </thead>

                    <tbody>
                      {currentOrders.map((data, index) => (
                        <tr key={index}>
                          <td className='px-4 py-4 border-b'> {data.id} </td>
                          <td className='px-4 py-4 border-b'> {data.product} </td>
                          <td className='px-4 py-4 border-b'> {data.date} </td>
                          <td className='px-4 py-4 border-b'> {data.payment} </td>
                          
                          <td className='px-4 py-4 border-b'>
                            <span className={`py-1 px-2 rounded-md ${getStatusColors(data.status)}`}>{data.status}</span>
                          </td>
                          <td className='px-4 py-4 border-b '> {data.Price} </td>
                         
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
    </div>
  )
}

export default Order;
