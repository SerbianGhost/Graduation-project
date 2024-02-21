import Instagram from "./instagram"
import Youtube from "./youtube"
import Facebook from "./facebook"


export default function SocialMedias(){
    return(
        <ul className="social-medias d-flex align-items-center">
           <Instagram/>
           <Youtube/>
           <Facebook/>
        </ul>
    )
}