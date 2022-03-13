import { NavLink, Link } from "react-router-dom";
export default function Menu({ visibility }) {
  return (
    <nav>
      <ul className="hidden lg:flex justify-center items-center gap-12">
        <NavLink
          to="MarketPlace_AisModa/cart"
          class="mx-8 text-base  text-gray-500 hover:text-red-900"
        >
          Cart{" "}
        </NavLink>
       <Item to="/"> 
          Home
       </Item>
       <Item to="#"> 
          Docs
       </Item>
       <Item to="#"> 
          Docs
       </Item>
       <Item to="#"> 
          Docs
       </Item>
      </ul>
      <ul className={`absolute w-screen z-10 ${visibility?'h-0':'h-64 border-gray-300 border-b-2 '} bg-white overflow-hidden flex flex-col justify-center items-center lg:hidden transition-[height] duration-500`}>
      <input id="search" className="flex lg:hidden 
            leading-none focus:outline-none 
            border-b-2 hover:border-b-3 border-red-800 
            w-4/6 my-3 mx-auto" type="text" placeholder=' Search..' />
      <NavLink
          to="MarketPlace_AisModa/cart"
          class="mx-8 text-base  text-gray-500 hover:text-red-900"
        >
          {" "}
          Cart{" "}
        </NavLink>
        <Item to="/"> 
          Home
       </Item>
       <Item to="#"> 
          Docs
       </Item>
       <Item to="#"> 
          Docs
       </Item>
       <Item to="#"> 
          Docs
       </Item>
      </ul>
    </nav>
  );
}

export const Item = ({children, to}) =>{
  return(
    <Link to={`/MarketPlace_AisModa${to}`} class=" text-lg  text-gray-500 hover:text-red-900">
      {children}
    </Link>
  );
}