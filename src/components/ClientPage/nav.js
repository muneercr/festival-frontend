"use client"
// import { HiMenuAlt4 } from "react-icons/hi";
// import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

// import logo from "../images/logo.png";
import Link from "next/link";

const NavBarItem = ({ title , classProps }) => (
  
  <Link href={`${title === "Home" ? "/" : null} `}>
  <li className={`mx-4 cursor-pointer ${classProps}`}>{title}</li></Link>
);
 const Nav = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const user =  JSON.parse(localStorage.getItem('user'));

     
    return (
        <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img src={"logo"} alt="logo" className="w-32 cursor-pointer" />
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {["Home","Contact"].map((item, index) => (
          <NavBarItem key={item + index} title={item} />
        ))}
       {!user ? 
        <Link href={"/login"}>
        <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
          Login
        </li>
        </Link> :
        <Link href={"/login"}>
        <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
          {user?.name}
        </li>
        </Link> 
        }
      </ul>
      <div className="flex relative">
        {/* {!toggleMenu && (
        //   <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
        //   <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
        )} */}
        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            {/* <li className="text-xl w-full my-2"><AiOutlineClose onClick={() => setToggleMenu(false)} /></li> */}
            {["Home","Contact"].map(
              (item, index) => <NavBarItem key={item + index} title={item} classProps="my-2 text-lg" />,
            )}
          </ul>
        )}
      </div>
    </nav>
    );
}

export default Nav;
