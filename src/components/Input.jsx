import React from 'react'

const Input = ({ title, text, className }) => {
  return (
      <form>
          <div className=' w-full my-4'>
              <label className=' font-semibold' htmlFor="name">{title} </label> <br />
              <input  type="text" className={`border-2 rounded-md py-3 w-full mt-2 pl-2 ${className}`} placeholder={text} />
          </div>
    </form>
  )
}

export default Input