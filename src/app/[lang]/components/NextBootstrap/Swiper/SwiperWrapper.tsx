export default function SwiperWrapper({children}:{children?:React.ReactNode}){
    return(
        <div className='swiper__wrapper'>
            {children}
        </div>
    )
}