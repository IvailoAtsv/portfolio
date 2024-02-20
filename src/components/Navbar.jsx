import { useState } from "react";

import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

export function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(true);

    return (


        <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-2 px-3">

                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <button type="button" className="bg-white px-2 py-1 rounded-lg transition duration-300
             text-md border-purple border-[2px] text-purple font-semibold hover:bg-purple hover:border-white hover:text-white font-mono">Download CV</button>
                    <button onClick={() => setToggleMenu(!toggleMenu)} type="button" className="inline-flex items-center px-2 justify-center md:hidden">
                        {toggleMenu ? <IoMenu size={32} /> : <IoMdClose size={32} />}
                    </button>
                </div>
                <div className={`items-center justify-between ${toggleMenu ? 'hidden' : ' inline-block'} w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white border-purple">
                        <li>
                            <button className="block py-2 hover:text-purple px-3 bg-white rounded md:bg-transparent md:p-0" aria-current="page">Home</button>
                        </li>
                        <li>
                            <button className="block py-2 hover:text-purple px-3 bg-white rounded md:bg-transparent md:p-0">About</button>
                        </li>
                        <li>
                            <button className="block py-2 hover:text-purple px-3 bg-white rounded md:bg-transparent md:p-0">Services</button>
                        </li>
                        <li>
                            <button className="block py-2 hover:text-purple px-3 bg-white rounded md:bg-transparent md:p-0">Contact</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
}
