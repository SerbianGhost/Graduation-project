export default function AccordionBody({children}:{children?:React.ReactNode}){
    return(
        <div className="accordion-collapse">
          <div className="accordion-body">
            {children}
          </div>
        </div>
    )
}