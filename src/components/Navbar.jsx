const liStyles = 'text-sm whitespace-nowrap block flex justify-center items-center hover:text-purple w-[25%] max-w-[150px] rounded'
const navBtnStyle = "hover:bg-purple hover:border-background hover:text-black  font-mono transition duration-300 bg-background, border-2 border-purple rounded-md p-1 w-[85%] md:w-[100%] text-purple"

export function Navbar() {

    return (

        <nav className="bg-background flex justify-center items-center static w-full z-20 top-0 start-0 border-b border-gray">
            <div className="max-w-[1600px] w-[100%] py-3">

                <ul className="flex w-[90%] mx-auto  md:justify-start md:gap-4 justify-evenly items-center rounded-lg ">

                    <li className={liStyles}>
                        <button className={navBtnStyle}>Home</button>
                    </li>

                    <li className={liStyles}>
                        <button className={navBtnStyle}>About</button>
                    </li>
                    <li className={liStyles}>
                        <button className={navBtnStyle}>Services</button>
                    </li>
                    <li className={liStyles}>
                        <button className={navBtnStyle}>Contacts</button>
                    </li>

                </ul>
            </div>
        </nav>

    );
}
