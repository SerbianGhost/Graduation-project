import MainLogo from "./MainLogo"
export default async function MainTitle(){
    return(
        <section className="main__title">
            <MainLogo></MainLogo>
            <h2 className="main__title-text">Это</h2>
        </section>
    )
}