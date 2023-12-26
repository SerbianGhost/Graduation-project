export default function OffcanvasHeader({children}: {children?:React.ReactNode}){
    return(
        <div className="offcanvas-header">
            {children}
        </div>
    )
}