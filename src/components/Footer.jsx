import React from 'react'

const Footer = () => {
  return (
    <div className=' lg:flex justify-between  my-7  mx-10 '>
          <div className=' lg:flex text-center justify-center gap-10 lg:ml-32 font-semibold'>
              <p>© 2022 Zenmart. All Rights Reserved</p>

              <nav className=''>
                  <ul className=' flex gap-5  justify-center mt-5 lg:mt-0'>
                      <li>Privacy</li>
                      <li>Terms</li>
                      <li>Sitemap</li>
                  </ul>
              </nav>
         </div>

          <div className=' flex gap-5 mt-5 lg:mt-0 justify-center'>
             
              <select className=' border py-2 px-3 rounded-md' name="" id="">
                  <option className='' value="">Currency USD</option>
                  <option className='' value="">Currency Dollar</option>
              </select>
              <select className=' border py-2 px-3 rounded-md' name="" id=""> 
                  language
                  <option className='' value=""><span className=' text-gray-400'>Language </span>English</option>
                  <option className='' value="">Urdu</option>
              </select>
          </div>
    </div>
  )
}

export default Footer
