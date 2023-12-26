export default function Navbar({children}: {children?:React.ReactNode}){
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            {children}
        </nav>
    )
}