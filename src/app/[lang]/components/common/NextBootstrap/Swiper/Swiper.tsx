export default function Swiper({children, className}:{children?:React.ReactNode, className?:string}){
    return(
        <div className={`swiper${className ? " " + className : ''}`}>
            {children}
        </div>
    )
}
