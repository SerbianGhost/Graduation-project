import Container from '../../NextBootstrap/Container/Container';
import { Accordion, AccordionItem, AccordionHeader, AccordionBody} from '../../NextBootstrap/Accordion/utils/accordionConfig'
import SocialMedias from '../../common/SocialMedias/SocialMedias';
import { accordionKeys, comissionListKeys } from "./utils/informationKeys";
import { Locale } from "@/src/utils/i18n.config";
import { getDictionary } from "@/src/api/dictionary";

export default async function Information({ lang }: {lang:Locale}) {
  const { Information, specialities } = await getDictionary(lang);
  const keys = accordionKeys;
  const listsKeys = comissionListKeys
  
  return (
    <div className="information">
      <Container>
    {Object.values<string>(Information.text).map((value: string, index:number)=>(
        <p key={index} className={`text-center mt-${index === 1 ? 4:5}`}>{ value }</p>
    ))}
      <Accordion className="mt-5">
        {keys.map((key:string,index:number)=>(

            <AccordionItem key={index}>
                <AccordionHeader>
                { Information.accordion[key].title }
                </AccordionHeader>
            <AccordionBody>
            { Information.accordion[key]["text-1"]}

           { key!== 'discount' && (
            <ul className={`${index === 4 ? 'information__comission-':'information__'}list`}>
            {listsKeys[index].map((value:string)=>(

                <li key={value}>

                {index === 2 ? specialities.courses[value] :
                 index === 4 ? Information.accordion.commission.list[value] :
                 specialities.speciality[value]?.title}
              
              </li>

            ))}

            {key === 'commission' &&(
                <li> <SocialMedias/> </li>
            )}

        </ul>
           )}

            { Information.accordion[key]["text-2"]}

            </AccordionBody>
        </AccordionItem>
        ))}
      </Accordion>
    </Container>
    </div>
  );
}
