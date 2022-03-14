import React from 'react'
import { NavLink, Link } from "react-router-dom";
import SocialMedia,{Svg} from "./SocialMedia";
const Utilities = ({changeVisibility, visibility}) => {
  return (
    <div className="flex w-full lg:w-fit justify-between lg:justify-space-around items-center">
    <SocialMedia/>
    <div className="flex">
      <Link
        to="MarketPlace_AisModa/cart"
        className=" mx-4 whitespace-nowrap text-[18px] sm:text-lg  text-red-800 hover:text-gray-900 "
      >
        Cart ( 0 )
      </Link>
      <div className="-mr-2 -my-2 lg:hidden">
        <button
          type="button"
          onClick={() => changeVisibility()}
          className={`bg-white rounded-md p-2 inline-flex items-center justify-center ${visibility?'text-gray-900':'text-gray-500'} hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500`}
          aria-expanded="false"
        >
          <span className="sr-only">Open menu</span>
          {/* <!-- Heroicon name: outline/menu --> */}
          <Svg whitStroke={true}>
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </Svg>
        </button>
      </div>
    </div>
    <Link
      to="MarketPlace_AisModa/register"
      className=" whitespace-nowrap text-[18px] sm:text-lg  text-gray-500 hover:text-gray-900 hidden lg:block"
    >
      <img
        className="m-1 inline-block h-5 w-5 rounded-full ring-2 ring-white"
        src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
        alt=""
      />
      <span className=" whitespace-nowrap">Sign in</span>
    </Link>

    {/* <a href="#" className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-[18px] font-medium text-white bg-indigo-600 hover:bg-indigo-700"> Login</a> */}
  </div>
  )
}

export default Utilities