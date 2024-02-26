export default function AccordionItem({children}:{children?:React.ReactNode}){
    return(
        <div className="accordion-item">
            {children}
        </div>
    )
}