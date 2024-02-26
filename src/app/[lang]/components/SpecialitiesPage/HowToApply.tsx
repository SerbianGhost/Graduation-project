import { getDictionary } from "@/src/api/dictionary"
import { Locale } from "@/src/utils/i18n.config"
import { Container,Row,Col } from '../common/NextBootstrap/Container/utils/containerConfig'
export default async function HowToApply({lang}:{lang:Locale}){
    const { Apply } = await getDictionary(lang)
    return(
        <div className="Apply">
            <h1 className="Apply__title text-center">
                {Apply.title}
            </h1>
            <section className="Apply__cards">
                <Container>
                    <Row>
                        {Object.values<string>(Apply.cards.departments).map((value:string,index:number)=>(
                            <Col key={index}>
                            <div className="Apply__card">
                        <h3 className="Apply__card-title">
                            {value}
                        </h3>
                        <p className="Apply__dates">
                            <span>{Apply.cards.dates.title}</span> <br />
                            {Apply.cards.dates.date}
                        </p>
                        <div className="Apply__list">
                            <p><span>{Apply.cards.lists.title}</span></p>
                            <ol>
                                {Object.values<string>(Apply.cards.lists.list).map((value:string,index:number)=>(
                                    <li key={index}>{value}</li>
                                ))}
                            </ol>
                        </div>
                    </div>
                            </Col>
                        ))}    
                    </Row>
                </Container>
            </section>
        </div>
    )
}