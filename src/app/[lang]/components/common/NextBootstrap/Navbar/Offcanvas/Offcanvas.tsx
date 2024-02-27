'use client'
export default function Offcanvas({children}: {children?:React.ReactNode}){
    return(
        <div className="offcanvas offcanvas-end" id="offcanvasNavbar">
            {children}
        </div>
    )
}
