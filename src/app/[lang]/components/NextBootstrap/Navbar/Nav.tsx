export default function Nav({children}: {children?:React.ReactNode}){
    return(
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            {children}
        </ul>
    )
}