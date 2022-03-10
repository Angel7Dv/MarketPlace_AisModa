import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Register = () => {
  return (
    <div className="flex justify-center items-center">

      <div className='flex flex-col items-center justify-center my-20  pt-16  
      lg:mx-48 sm:2/3 md:w-2/4 lg:1/4 h-full border rounded-3xl  '>
        <div className="flex justify-center ">
          <div className="flex justify-center items-center">
            <span className=" pt-1 mx-3 whitespace-nowrap text-4xl italic font-light text-red-700 hover:text-gray-900">AisModa.</span>
          </div>
        </div>
        <form action="" className='px-20 pt-12 w-full flex-col space-y-6'>

          <div className='flex flex-col '>
            <label htmlFor="name" className='text-left text-red-800'>First Name*</label>
            <input type="text" name="name" id="name"
              className="leading-none focus:outline-none border-b-2 hover:border-b-3 border-red-700" />
          </div>
          <div className='flex flex-col '>
            <label htmlFor="Last" className='text-left text-red-800'>Last Name*</label>
            <input type="text" name="Last" id="Last"
              className="leading-none focus:outline-none border-b-2 hover:border-b-3 border-red-700" />
          </div>
          <div className='flex flex-col '>
            <label htmlFor="input_email" className='text-left text-red-800'>Email*</label>
            <input type="email" name="email" id="input_email"
              className="leading-none focus:outline-none border-b-2 hover:border-b-3 border-red-700" />
          </div>
          <div className='flex  flex-col  '>
            <label htmlFor="password" className='text-left text-red-800'>Password*</label>
            <input type={"password"} name="email" id="password"
              className="leading-none focus:outline-none border-b-2 hover:border-b-3 border-red-700" />
          </div>
          <div className='flex  flex-col  '>
            <label htmlFor="password" className='text-left text-red-800'>Password*</label>
            <input type={"password"} name="email" id="password"
              className="leading-none focus:outline-none border-b-2 hover:border-b-3 border-red-700" />
          </div>



          <div className='mt-16 pt-16 flex justify-center'>
            <input type="submit" value="Login"
              className='px-20 p-3 border border-red-500'
            />
          </div>
        </form>
        <h6 className="mb-16 mt-4"> Already have acount?
          <Link to="/MarketPlace_AisModa/login/" className="text-blue-500 font-bold" >
            Login
          </Link>

        </h6>
      </div>
    </div>
  )
}

export default Register