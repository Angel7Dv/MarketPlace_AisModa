import React from "react";
import { Link } from "react-router-dom";
import Menu from "./Navbar/Menu";
import Utilities from './Navbar/Utilities'
import useVisibility from "../hooks/useVisibility";
const Navbar = () => {
  //me gusto la forma en que hiciste esta parte con el menu, pero nose si lo conoces en React existe una mejor forma de manejar las referencias a elementos con el hook useRef y asi evitas usar un getElement o un querySelector -> ver el video: https://www.youtube.com/watch?v=a7_S6ZeydeU
  //lo cambie por mi hook useVisibility por comodidad mas que todo xD
  const { visibility, changeVisibility } = useVisibility()
  return (
    <div className="w-screen border-b-2 shadow-md border-gray-100 pb-5 text-xl">
      <div className=" mx-auto my-5 px-4 sm:px-6">
        <div className="flex flex-wrap py-6 justify-evenly lg:justify-between gap-y-4">
          <input
            className="hidden lg:block leading-none outline-none border-b-2 hover:border-b-3 border-red-800 w-1/4"
            type="text"
            placeholder=" Search.."

          />
          <Title visibility={true}>AisModa.</Title>     
          <Utilities changeVisibility={changeVisibility} visibility={visibility}/>
          <Title visibility={false}>AisModa.</Title>
        </div>
      </div>
      <Menu visibility={visibility}/>
    </div>
  );
};

const Title = ({ children , visibility}) =>{
return(
  <div className={`${visibility?"hidden lg:flex":"lg:hidden"} justify-center `}>
      <Link to="MarketPlace_AisModa/">
        <span className="whitespace-nowrap text-4xl lg:text-5xl italic font-light text-red-700 hover:text-gray-900">
          { children }
        </span>
      </Link>
    </div>
);
}

export default Navbar;
