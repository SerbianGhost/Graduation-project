export default function Accordion({children , className}:{children?:React.ReactNode, className?:string}){
    return(
        <div className={`accordion accordion-flush ${className}`} id="accordionFlushExample">
            {children}
        </div>
    )
}