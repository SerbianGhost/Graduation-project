import Image from "next/image"
import logo from '@/public/Miras Logo.svg'
export default function MainLogo(){
    return(
        <div className="main__logo-wrap">
        <Image src={logo} alt='logo' layout="fill"/>
        </div>
    )
}