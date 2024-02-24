import { text } from "stream/consumers"

const inputStyles = "w-[100%] lg:w-[95%] mb-5 px-2 py-3 text-lg rounded-md text-purple bg-background border-2 border-gradient-to-r from-purple to-white"
const labelStyles = "font-mono text-lightGray text-labelClamp"

export const FancyInput = ({inputProps, label =''}) =>{
    return (
        <>
        <label className={labelStyles}>{text}</label>
        <div class="w-[100%] lg:w-[95%] mb-5 p-1 text-lg rounded-lg text-purple  bg-gradient-to-r from-purple via-rose-400 to-purple">
    
        <input {...inputProps} class="p-3 w-full rounded-lg bg-background focus:outline-none" />
      </div>
      </>
    )
}