export const MainTitle = ({text, lightTheme = false, classes = ''}) =>{
    return (
        <h2 className={`${lightTheme? 'text-black': 'text-white'} ${classes} text-h1clamp font-bold `}>{text}</h2>
    )
}
export const SecondaryTitle = ({text, lightTheme = false, classes = ''}) =>{
    return (
        <h2 className={`${lightTheme? 'text-black': 'text-white'} ${classes} font-semibold text-h2clamp`}>{text}</h2>
    )
}
export const AccentTitle = ({text, classes = ''}) => {
    return (
    <h2 className={`text-purple m-0 font-semibold font-mono text-xl ${classes}`}>{text}</h2>
    )
}
export const IconTitlePair = ({text, icon, lightTheme = false,classes =''}) => {
    return (
        <div className={`flex mr-auto justify-start items-center gap-2 ${classes}`}>
            {icon}
            <SecondaryTitle lightTheme={lightTheme} text={text}/>
</div>
    )
}