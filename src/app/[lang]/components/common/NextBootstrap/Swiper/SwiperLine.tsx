export default function SwiperLine({children}:{children?:React.ReactNode}){
    return(
        <div className='swiper__line'>
            <div className="wall"></div>
            {children}
        </div>
    )
}