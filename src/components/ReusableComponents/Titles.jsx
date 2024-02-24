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
    <h2 className={`text-purple font-mono text-xl ${classes}`}>{text}</h2>
    )
}