import React from 'react'
import Carddata from '../components/CardData'
import RecentOrders from '../components/Recentorders'
import RecentActivity from '../components/RecentActivity'
import EarningStatistics from '../components/Progress'
import ProgressChat from '../components/Progress'
import EarningsChart from '../components/Graph'

const Dashboard = () => {
  return (
      <div className='w-full'>
          <div>
              <h1 className=' text-3xl font-semibold mb-3'> Dashboard </h1>
              <p className=' text-lg'>Lorem ipsum dolor sit amet, consectetur.</p>
          </div>

          <div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full mt-10 '>
              {
                  Carddata.map(data =>
                      <div key={data.id} className=' rounded-md bg-white py-4 px-2 w-full'>
                          <p className=' text-lg'>{data.para1} </p>
                          <div className=' flex  justify-between  items-center py-2'>
                              <h1 className=' text-2xl font-semibold'>{data.text1}</h1>
                              {data.text2 && <p className={` ${data.class ? data.class : "bg-green-500"}  py-1 px-2 text-white rounded-md`} >{data.text2} </p>}
                             
                              <div className=' bg-gray-200 py-1 px-1 rounded-md'><img src={data.icon} width={25} alt="money image" /></div>

                          </div>
                          <p className='text-lg'>{data.para2} </p>

                      </div>
                  )
              }

              

          </div>

          <div className='w-full h-auto grid grid-cols-12 gap-4 mt-5 '>
              <div className=' col-span-12 lg:col-span-8 bg-white rounded-md '>
                  <ProgressChat />
              </div>
              <div className=' col-span-12 lg:col-span-4 bg-white rounded-md '>
                  <EarningsChart/>
              </div>

          </div>
          <div className='w-full h-auto grid grid-cols-12 gap-4 mt-5'>
              <div className='col-span-12 lg:col-span-8 '>
                  <RecentOrders />
              </div>
              <div className='col-span-12 lg:col-span-4 bg-white rounded-md '>
                  <RecentActivity/>
              </div>

          </div>
      </div>
      
  )
}

export default Dashboard
