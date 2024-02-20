import Container from "./NextBootstrap/Container/Container";
import Accordion from "./NextBootstrap/Accordion/Accordion";
import AccordionItem from "./NextBootstrap/Accordion/AccordionItem";
import AccordionHeader from "./NextBootstrap/Accordion/AccordionHeader";
import AccordionBody from "./NextBootstrap/Accordion/AccordionBody";
import SocialMedias from "./SocialMedias/SocialMedias";
import { Locale } from "@/src/i18n.config";
import { getDictionary } from "@/src/api/dictionary";





export default async function Information({ lang }: {lang:Locale}) {
  const { Information, specialities } = await getDictionary(lang);

 

  return (
    <Container>
      <p className="text-center mt-5">{Information.text["text-1"]}</p>
      <p className="text-center mt-4">{Information.text["text-2"]}</p>

      <Accordion className="mt-5">
        <AccordionItem>
            <AccordionHeader>
               { Information.accordion.applicants.title }
            </AccordionHeader>
            <AccordionBody>
                { Information.accordion.applicants["text-1"] }
                <ul className="information__list">
                    <li> { specialities.speciality.Upbringing.title } </li>
                    <li> { specialities.speciality.Pedagogy.title } </li>
                     <li> { specialities.speciality.Sowtware.title } </li> 
                    <li> { specialities.speciality.ComputerEngineering.title } </li>
                    <li> { specialities.speciality.Seamstress.title } </li>
                    <li> { specialities.speciality.Tourism.title } </li>
                   <li> { specialities.speciality.Hairdresser.title } </li>
                </ul>
                { Information.accordion.applicants["text-2"] }
            </AccordionBody>
        </AccordionItem>
        <AccordionItem>
            <AccordionHeader>
               { Information.accordion.diploma.title }
            </AccordionHeader>
            <AccordionBody>
                { Information.accordion.diploma["text-1"] }
                <ul className="information__list">
                    <li> { specialities.speciality.Hairdresser.title } </li>
                    <li> { specialities.speciality.Seamstress.title } </li>
                    <li> { specialities.speciality.ComputerEngineering.title } </li>
                </ul>
                { Information.accordion.diploma["text-2"] }
            </AccordionBody>
        </AccordionItem>
        <AccordionItem>
            <AccordionHeader>
               { Information.accordion.courses.title }
            </AccordionHeader>
            <AccordionBody>
                { Information.accordion.courses["text-1"] }
                <ul className="information__list">
                    <li> { specialities.courses.masterHairdresser } </li>
                    <li> { specialities.courses.visagiste } </li>
                    <li> { specialities.courses.manicurist } </li>
                    <li> { specialities.courses.seamstress } </li>
                </ul>
                { Information.accordion.courses["text-2"] }
            </AccordionBody>
        </AccordionItem>
        <AccordionItem>
            <AccordionHeader>
               { Information.accordion.discount.title }
            </AccordionHeader>
            <AccordionBody>
                { Information.accordion.discount["text-1"] }
                <br />
                { Information.accordion.discount["text-2"] }
            </AccordionBody>
        </AccordionItem>
        <AccordionItem>
            <AccordionHeader>
               { Information.accordion.commission.title }
            </AccordionHeader>
            <AccordionBody>
                <ul className="information__comission-list">
                    <li> { Information.accordion.commission.list["item-1"] } </li>
                    <li> { Information.accordion.commission.list["item-2"] } </li>
                    <li> { Information.accordion.commission.list["item-3"] } </li>
                    <li> { Information.accordion.commission.list["item-4"] } </li>
                    <li> { Information.accordion.commission.list["item-5"] } </li>
                    <li> { Information.accordion.commission.list["item-6"] } </li>
                    <li> <SocialMedias/> </li>
                    
                </ul>
            </AccordionBody>
        </AccordionItem>
      </Accordion>
    </Container>
  );
}
