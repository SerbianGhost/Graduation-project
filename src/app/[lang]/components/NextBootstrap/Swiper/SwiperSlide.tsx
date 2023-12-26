export default function SwiperSlide({children}:{children?:React.ReactNode}){
    return(
        <div className='swiper__slide transition'>
            {children}
        </div>
    )
}