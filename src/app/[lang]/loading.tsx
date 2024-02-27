'use client'

export default function Loading(){
    return(
        <div className="preloader-wrap">
            <div className="spinner-border text-danger" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
        </div>
    )
}