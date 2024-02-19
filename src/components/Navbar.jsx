import React, { useState } from 'react';
import { IoMenu,IoClose } from "react-icons/io5";

export const Header = () => {
    let Links =[
        {name:"HOME",link:"/"},
        {name:"SERVICE",link:"/"},
        {name:"ABOUT",link:"/"},
        {name:"CONTACT",link:"/"},
      ];
      let [open, setOpen] =useState(false);

    return (
        <div className='z-50 shadow-md w-full sticky top-0 left-0'>
           <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
            <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
                <span>Portfolio</span>
            </div>
            <div onClick={()=>setOpen(!open)} className='absolute right-8 top-5 cursor-pointer flex items-center justify-center md:hidden w-7 h-7'>
                {
                    open ? <IoClose size={28}/>  :<IoMenu  size={28}/> 
                }
            </div>
            {/* linke items */}
            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
                {
                    Links.map((link) => (
                    <li className='md:ml-8 md:my-0 my-7 font-semibold'>
                        <a href={link.link} className='text-gray-800 hover:text-purple duration-500'>{link.name}</a>
                    </li>))
                }
                <button className='btn bg-purple text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static'>Get Started</button>
            </ul>
            {/* button */}
           </div>
        </div>
    );
};

