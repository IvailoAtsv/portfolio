import { useEffect, useState } from "react"
import { FaExternalLinkAlt } from "react-icons/fa";

export const Popup = () =>{
    const [shown,setShown] = useState<boolean>(false)
    useEffect(() => {
        const bodyOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = bodyOverflow;
        };
    }, []);
    useEffect(()=>{
        setTimeout(() => {
            setShown(true)
        }, 3000);
    },[])
    return (
        <>
        {shown && <div className="transition duration-500 w-full p-8 flex justify-end items-end z-[99] absolute top-0 left-0 h-screen bg-background bg-opacity-70">
            <div className="flex flex-col justify-evenly items-start p-4 gap-4 rounded-xl h-auto w-[40%] bg-white">
                <h2 className="text-3xl font-semibold">This website uses analytics. No user data is being stored.</h2>
                <a target="_blank" href="https://vercel.com/analytics" className="text-purple cursor-pointer">Learn more <FaExternalLinkAlt size={12} className="inline"/></a>
                <button onClick={()=>setShown(false)} className="bg-white text-purple border-purple border-2 py-2 rounded-xl px-4 hover:text-white hover:bg-purple transition duration-300">Continue</button>
            </div>
        </div>}
        </>
    )
}