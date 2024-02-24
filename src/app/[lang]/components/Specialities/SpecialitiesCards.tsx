import Container from "../NextBootstrap/Container/Container";
import Row from "../NextBootstrap/Container/Row";
import Col from "../NextBootstrap/Container/Col";
import { Locale } from "@/src/utils/i18n.config";
import { getDictionary } from "@/src/api/dictionary";
import { getPublic } from "@/src/api/getPublic"; 
import sortObject from "@/src/utils/sortObjects";


export default async function SpecialitiesCards({lang}:{lang:Locale}){
    const { specialities } = await getDictionary(lang);
    const { spec } = await getPublic('specialities');
    const specialitiesObj = sortObject(specialities.speciality);
    
    return(
       <Container>

        <Row>

      {Object.keys(specialitiesObj).map((key, index)=>(
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