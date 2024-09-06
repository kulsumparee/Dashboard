import React from 'react'

const orders = [
    { id: '#1923', product: 'Lenovo IdeaPad 3 15.6” Laptop - Sand', date: 'Aug 15, 2020', payment: 'Paid', status: 'Delivered', total: '$56.00' },
    { id: '#1923', product: 'Lenovo IdeaPad 3 15.6” Laptop - Sand', date: 'Aug 15, 2020', payment: 'Paid', status: 'Cancel', total: '$56.00' },
    { id: '#1923', product: 'Lenovo IdeaPad 3 15.6” Laptop - Sand', date: 'Aug 15, 2020', payment: 'Paid', status: 'InProgress', total: '$56.00' },
    { id: '#1923', product: 'Lenovo IdeaPad 3 15.6” Laptop - Sand', date: 'Aug 15, 2020', payment: 'Paid', status: 'Delivered', total: '$56.00' },
    { id: '#1923', product: 'Lenovo IdeaPad 3 15.6” Laptop - Sand', date: 'Aug 15, 2020', payment: 'Paid', status: 'Cancel', total: '$56.00' },
    { id: '#1923', product: 'Lenovo IdeaPad 3 15.6” Laptop - Sand', date: 'Aug 15, 2020', payment: 'Paid', status: 'InProgress', total: '$56.00' },


];


const getStatusColors = (status) => {
    switch (status) {
        case 'Delivered':
            return 'bg-blue-100 text-blue-500';
        case 'Cancel':
            return 'bg-pink-100 text-pink-500';
        case 'InProgress':
            return 'bg-yellow-100 text-yellow-500';
        default:
            return '';
    }
}


const RecentOrders = () => {
  return (
      <div className=' bg-white shadow-md rounded-md p-5 '>
          <div>
              <h1 className=' text-lg font-semibold  pb-3'>Recent Orders</h1>
              <div className=' mt-3 overflow-auto'>
                  <table className=' min-w-max w-full '>
                      <thead >
                          <tr className=' bg-gray-200  rounded-lg'>
                              <th className=' px-4 py-4 border-b  '>ID</th>
                              <th className=' px-4 py-4 border-b  '>Product</th>
                              <th className=' px-4 py-4 border-b  '>Date</th>
                              <th className=' px-4 py-4 border-b  '>Payment</th>
                              <th className=' px-4 py-4 border-b  '>Status</th>
                              <th className=' px-4 py-4 border-b  '>Total</th>
                              <th className=' px-4 py-4 border-b  '>Action</th>
                          </tr>
                      </thead>

                      <tbody className=''>
                          {
                              orders.map((data, index) => (
                                  <tr key={index}>
                                      <td className='px-4 py-4 border-b'> {data.id} </td>
                                      <td className='px-4 py-4 border-b'> {data.product} </td>
                                      <td className='px-4 py-4 border-b'> {data.date} </td>
                                      <td className='px-4 py-4 border-b'> {data.payment} </td>
                                      <td className='px-4 py-4 border-b'>
                                          <span className={` py-1 px-2 rounded-md ${getStatusColors(data.status)}`}>{data.status}</span>
                                      </td>
                                      <td className='px-4 py-4 border-b '> {data.total} </td>
                                      <td className="px-4 py-4 border-b text-center justify-center items-center">
                                          <button className="bg-gray-200 flex  items-center px-2 rounded-lg pb-1 ">
                                              ...
                                          </button>
                                      </td>
                                      


                                     
                                  </tr>
                              ))
                          }
                      </tbody>
                  </table>
              </div>
      </div>
    </div>
  )
}

export default RecentOrders
