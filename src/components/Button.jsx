import React from 'react'

const Button = ({ text, className }) => {
  return (
    <div className={` cursor-pointer px-4 w-full bg-[#F5C34B] py-3 flex justify-center flex-wrap rounded-md font-semibold ${className} `}>
      <button>{text}</button>
    </div>
  )
}

export default Button
