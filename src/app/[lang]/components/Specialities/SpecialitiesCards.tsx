import Container from "../NextBootstrap/Container/Container";
import Row from "../NextBootstrap/Container/Row";
import Col from "../NextBootstrap/Container/Col";
import { Locale } from "@/src/i18n.config";
import { getDictionary } from "@/src/api/dictionary";
import { getPublic } from "@/src/api/getPublic"; 


export default async function SpecialitiesCards({lang}:{lang:Locale}){
    const { specialities } = await getDictionary(lang);
    const { spec } = await getPublic('specialities')
    
    return(
       <Container>

        <Row>

      {Object.keys(specialities.speciality).map((key, index)=>(
        <Col key={index}>
        <a href={`/${lang}/Specialities/${key}`} className="specialities__card">
          <img src={spec[key].image} alt={`${key}.image`} />
          <p className="specialities__card-title">{specialities.speciality[key].title}</p>
          <p className="specialities__card-link">
            {specialities.public.button}
          </p>
        </a>
      </Col>
      ))}
        </Row>

        </Container>
    )
}