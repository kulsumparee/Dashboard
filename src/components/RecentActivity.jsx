import React from 'react'
import Img1 from "../assets/laptop.svg"
import img2 from "../assets/lcd.svg"

const Activity = [
  { id: 1, time: "08:42", title: " Purchase by Ali Price", text: "Product noise evolve smartwatch", color: "border-purple-900" },
  { id: 2, time: "10:00", title: " Added new style collection", text: "By TFN Technologies", imgs: Img1, img: img2, color:"border-cyan-400" },
  { id: 3, time: "14:37", title: " Make deposit USD 700 to TFN", color: "border-red-500" },
  { id: 4, time: "16:50", title: " Natasha Carey liked products", text: "Allow users to like products in your WooCommerce store.", color: "border-blue-500" },
  { id: 5, time: "21:03", title: " Favoried Product", text: "Esther James have favorited product.", color: "border-orange-500" },
  { id: 6, time: "23:07", title: " Today offers by Digitech Galaxy", text: "Offer is valid on orders of Rs.500 Or above for selected products.", color: "border-purple-500" },



]

const RecentActivity = () => {
  return (
    <div className='  w-full p-3 rounded-md bg-white'>
      <h1 className='  text-lg font-semibold  pb-3'>Recent Activity</h1>

      <div className='overflow-auto'>
        {Activity.map((data) => (
          <div>
            <div className=' flex gap-3 text-center items-center  mt-3'>
              <h1 className='  font-semibold'>{data.time}</h1>
              <div><div className={`${data.color} w-5 h-5 border-[4px]   rounded-full`}></div> </div>
              
              <p className=' text-sm font-semibold min-w-max '>{data.title} </p>
            </div>
            <div className='flex ml-20 gap-5'>
              <div className=' '><p className=' text-sm '>{data.text} </p></div>
             
            </div>
            <div className="flex gap-5 mt-1 ml-20" >
            {data.imgs && <img src={data.imgs} alt="laptop" className=' border  px-1' />}
              {data.img && <img src={data.img} alt="LCD" className=' border  px-1' /> }    
            </div>
           
          </div>
          
          
        ))}
      </div>
    </div>
  )
}

export default RecentActivity

