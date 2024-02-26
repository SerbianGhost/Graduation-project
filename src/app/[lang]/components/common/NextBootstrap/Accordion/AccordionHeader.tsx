'use client'
import collapse from "./utils/accordionFunctions/collapse";

export default function AccordionHeader({children}:{children?:React.ReactNode}){
  
  
    return(
        <h2 className="accordion-header">
          <button onClick={collapse} className="accordion-button collapsed" type="button">
            {children}
          </button>
    </h2>
    )
}