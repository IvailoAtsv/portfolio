
interface MainTitleProps{
    text:string;
    lightTheme?:boolean;
    classes?:string;
}

export const MainTitle:React.FC<MainTitleProps> = ({text, lightTheme = false, classes = ''}) =>{
    return (
        <h2 className={`${lightTheme? 'text-black': 'text-white'} ${classes} text-h1clamp font-bold leading-tight`}>{text}</h2>
    )
}
export const SecondaryTitle:React.FC<MainTitleProps> = ({text, lightTheme = false, classes = ''}) =>{
    return (
        <h2 className={`${lightTheme? 'text-black': 'text-white'} ${classes} font-semibold text-h2clamp leading-tight`}>{text}</h2>
    )
}
export const AccentTitle:React.FC<MainTitleProps> = ({text, classes = ''}) => {
    return (
    <h2 className={`text-purple m-0 font-semibold font-mono text-xl leading-tight ${classes}`}>{text}</h2>
    )
}