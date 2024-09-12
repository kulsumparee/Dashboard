import React, { useState } from 'react'
import SideNav from '../components/SideNav'
import img1 from "../assets/Setting/images.svg"
import img2 from "../assets/Setting/upload.svg"
import img3 from "../assets/Setting/delete.svg"
import { Divider } from '@mui/material'
import Input from '../components/Input'
import Button from '../components/Button'


const Settings = () => {

    const [activeTab, setActiveTab] = useState('editProfile');
  return (
    <div>
          <div className='grid grid-cols-12 my-8 w-full h-full px-5  '>
              <div className='w-full col-span-0 md:col-span-2 mt-20 hidden md:block'>
                  <SideNav />
              </div>

              <div className='w-full col-span-12 md:col-span-10 bg-slate-100 px-5 py-20 rounded-md '>
                  <div>
                      <h1 className='text-3xl font-semibold mb-3'>Settings</h1>
                      <p className='text-lg'>Lorem ipsum dolor sit amet, consectetur.</p>
                  </div>

                  <div className='bg-white py-5 rounded-md mt-10 w-full px-5'>
                      <nav className='w-full'>
                          <ul className=' flex flex-wrap gap-5 cursor-pointer'>
                              <li className=' hover:text-black hover:underline border-black font-semibold text-gray-500'>Edit Profile</li>
                              <li className=' hover:text-black hover:underline border-black font-semibold text-gray-500'><a href="password">Password</a></li>
                              <li className=' hover:text-black hover:underline border-black font-semibold text-gray-500'>Social Profile</li>
                              <li className=' hover:text-black hover:underline border-black font-semibold text-gray-500'>Close Account</li>
                          </ul>
                      </nav>


                      <div className=' flex mt-10 gap-5'>
                          <img src={img1} alt="logo"  width={120} height={100} />
                          <div>
                              <h1 className=' md:text-xl font-semibold '>Your avatar</h1>
                              <p className=' my-1 md:text-lg'>PNG or JPG no bigger than 800px wide and tall.</p>
                              <div className='flex gap-5 mt-2'>
                                  <img src={img2} alt="logo22" width={47} height={47} className=' cursor-pointer' />
                                  <img src={img3} alt="logo49" width={47} height={47} className=' cursor-pointer' />
                              </div>
                          </div>
                      </div>
                      <Divider className=' pt-14' />

                      <form action="submit" className=' mt-10 w-full'>
                          <div className=' sm:flex w-full gap-10'>
                              <div className=' w-full'><Input title="Full Name" text="Enter your full name" /></div>
                              <div className=' w-full'><Input title="Last Name" text="Enter your last name" /></div>
                          </div>

                          <div className=' sm:flex w-full gap-10'>
                              <div className=' w-full'><Input title="Phone Number" text="Enter your phone number" /></div>
                              <div className=' w-full'><Input title="Email" text="Enter your email" /></div>
                          </div>

                          <div className="sm:flex w-full gap-10">
                              <div className=' w-full'>
                                  <label className=' font-semibold' htmlFor="country" id='country'>Country</label> <br />
                                  <select name="country" id="country"
                                      className='border-2 rounded-md py-3 w-full mt-2 pl-2'>
                                      <option value="">Pakistan</option>
                                      <option value="">Canada</option>
                                      <option value="">India</option>
                                      <option value="">UK</option>
                                  </select>
                              </div>
                              <div className=' w-full mt-4'>
                                  <label className=' font-semibold' htmlFor="country" id='country'>State</label> <br />
                                  <select name="country" id="country"
                                      className='border-2 rounded-md py-3 w-full mt-2 pl-2'
                                  >
                                      <option value="">Islamabad</option>
                                      <option value="">Gujarat</option>
                                      <option value="">Haryana</option>
                                      <option value="">Quebec</option>
                                      <option value="">Rhode Island</option>
                                      <option value="">Gilgit</option>
                                  </select>
                              </div>

                          </div>

                          <div className=' sm:flex w-full gap-10'>
                              <div className=' w-full'><Input title="Address Line 1" text="Enter your Address1" /></div>
                              <div className=' w-full'><Input title="Address Line 2" text="Enter your Adddress2" /></div>
                          </div>

                          <div>
                              <div className=' w-full'><Input title="profile" text="" className="pb-44"/></div>

                          </div>

                          <div className=' sm:flex gap-5 pt-5'>
                              <Button text="Update Profile" className="sm:w-40 sm:mb-0 mb-4" />
                              <Button text="Cancel" className="bg-transparent hover:bg-[#F5C34B] sm:w-40" />
                          </div>

                      </form>
                  </div>

                  <div  className='  bg-white py-5 rounded-md mt-10 w-full px-5'>
                      <nav className='w-full'>
                          <ul className=' flex flex-wrap gap-5 cursor-pointer'>
                              <li className=' hover:text-black hover:underline border-black font-semibold text-gray-500'>Edit Profile</li>
                              <li className=' hover:text-black hover:underline border-black font-semibold text-gray-500'>Password</li>
                              <li className=' hover:text-black hover:underline border-black font-semibold text-gray-500'>Social Profile</li>
                              <li className=' hover:text-black hover:underline border-black font-semibold text-gray-500'>Close Account</li>
                          </ul>
                      </nav>

                      <div className=' pt-10'>
                          <Input title="Current password" className="md:w-[50%]" />
                          <Input title="New password" className="md:w-[50%]" />
                          <Input title=" Confirm New password" className="md:w-[50%]" />
                          
                      </div>
                      <div className=' sm:flex gap-5 pt-5'>
                          <Button text="Update Password" className="sm:w-40 sm:mb-0 mb-4" />
                          <Button text="Cancel" className="bg-transparent hover:bg-[#F5C34B] sm:w-40" />
                      </div>

                      
                  </div>

                  <div className='bg-white py-5 rounded-md mt-10 w-full px-5'>
                      <nav className='w-full'>
                          <ul className=' flex flex-wrap gap-5 cursor-pointer'>
                              <li className=' hover:text-black hover:underline border-black font-semibold text-gray-500'>Edit Profile</li>
                              <li className=' hover:text-black hover:underline border-black font-semibold text-gray-500'>Password</li>
                              <li className=' hover:text-black hover:underline border-black font-semibold text-gray-500'>Social Profile</li>
                              <li className=' hover:text-black hover:underline border-black font-semibold text-gray-500'>Close Account</li>
                          </ul>
                      </nav>

                      <div className=' grid md:grid-cols-2 gap-x-10'>
                          <Input title="Facebook" />
                          <Input title="Twitter" />
                          <Input title="Intagram" />
                          <Input title="Linkedin" />
                      </div>
                      <div className=' sm:flex gap-5 pt-5'>
                          <Button text="Update Social Profile" className="sm:w-52 sm:mb-0 mb-4" />
                          <Button text="Cancel" className="bg-transparent hover:bg-[#F5C34B] sm:w-40" />
                      </div>
                  </div>


                  <div className='bg-white py-5 rounded-md mt-10 w-full px-5'>
                      <nav className='w-full'>
                          <ul className=' flex flex-wrap gap-5 cursor-pointer'>
                              <li className=' hover:text-black hover:underline border-black font-semibold text-gray-500'>Edit Profile</li>
                              <li className=' hover:text-black hover:underline border-black font-semibold text-gray-500'>Password</li>
                              <li className=' hover:text-black hover:underline border-black font-semibold text-gray-500'>Social Profile</li>
                              <li className=' hover:text-black hover:underline border-black font-semibold text-gray-500'>Close Account</li>
                          </ul>
                          </nav>

                      <div className=' mt-10'>
                          <h1 className=' text-xl font-semibold mb-2'>Close Account</h1>
                          <p>Warning: If you close your account, you will be unsubscribed from all your 5 courses, and will lose access forever.</p>
                          <div className="">
                              <Input title="Enter Password" className="md:w-[50%]" />
                          </div>

                          <div className=' sm:flex gap-5 pt-5'>
                              <Button text="Close Account" className="sm:w-40 sm:mb-0 mb-4" />
                              <Button text="Cancel" className="bg-transparent hover:bg-[#F5C34B] sm:w-40" />
                          </div>
                      </div>
                      
                  </div>

                 
                  </div>
          </div>
          
    </div>
  )
}

export default Settings
