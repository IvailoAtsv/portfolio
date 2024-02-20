import React, { useState } from 'react';
import { IoMenu,IoClose } from "react-icons/io5";

export const Header = () => {

    let [open, setOpen] =useState(false);
    let Links =[
        {name:"HOME",link:"/"},
        {name:"MY PROJECTS",link:"/"},
        {name:"CONTACTS",link:"/"},
      ];

    return (
        <div className=' shadow-md w-[100%] sticky top-0 left-0'>
           <div className='md:flex items-center justify-between bg-lightGray py-4 md:px-10 px-7'>
            <div className='font-bold h-7 text-2xl cursor-pointer flex items-center gap-1'>
                <span></span>
            </div>
            <div onClick={()=>setOpen(!open)} className='absolute right-8 top-5 cursor-pointer flex items-center justify-center md:hidden w-7 h-7'>
                {
                    open ? <IoClose size={40}/>  :<IoMenu  size={40}/> 
                }
            </div>
            {/* linke items */}
            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-150 ease-out ${open ? 'top-12' : 'top-[-450px]'}`}>
                {
                    Links.map((link) => (
                    <li className='md:ml-8 md:my-0 my-7 font-semibold'>
                        <a href={link.link} className='text-gray-800 hover:text-purple duration-500'>{link.name}</a>
                    </li>))
                }
                <button className='btn bg-purple text-background md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static'>Download CV</button>
            </ul>


            {/* button */}
           </div>
        </div>
    );
};

