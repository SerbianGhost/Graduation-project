import Container from "./NextBootstrap/Container/Container";
import Accordion from "./NextBootstrap/Accordion/Accordion";
import AccordionItem from "./NextBootstrap/Accordion/AccordionItem";
import AccordionHeader from "./NextBootstrap/Accordion/AccordionHeader";
import AccordionBody from "./NextBootstrap/Accordion/AccordionBody";
import SocialMedias from "./SocialMedias/SocialMedias";
import { Locale } from "@/src/i18n.config";
import { getDictionary } from "@/src/lib/dictionary";



interface AccordionData {
  title: string;
  "text-1": string;
  "text-2": string;
}

interface InformationData {
  applicants: AccordionData;
  diploma: AccordionData;
  courses: AccordionData;
  discount: AccordionData;
  commission: AccordionData;
}

interface InformationProps {
  lang: Locale;
}

export default async function Information({ lang }: InformationProps) {
  const { Information, specialities, professionalСourses, comissionList } = await getDictionary(lang);

  const accordionProps: (keyof InformationData)[] = [
    "applicants",
    "diploma",
    "courses",
    "discount",
    "commission",
  ];

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
                    <li> { specialities.upbringing.title } </li>
                    <li> { specialities.pedagogy.title } </li>
                    <li> { specialities.software.title } </li>
                    <li> { specialities.ComputerEngineering.title } </li>
                    <li> { specialities.seamstress.title } </li>
                    <li> { specialities.Tourism.title } </li>
                   <li> { specialities.hairdresser.title } </li>
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
                    <li> { specialities.hairdresser.title } </li>
                    <li> { specialities.seamstress.title } </li>
                    <li> { specialities.ComputerEngineering.title } </li>
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
                    <li> { professionalСourses.masterHairdresser.title } </li>
                    <li> { professionalСourses.visagiste.title } </li>
                    <li> { professionalСourses.manicurist.title } </li>
                    <li> { professionalСourses.seamstress.title } </li>
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
                    <li> { comissionList["item-1"].title } </li>
                    <li> { comissionList["item-2"].title } </li>
                    <li> { comissionList["item-3"].title } </li>
                    <li> { comissionList["item-4"].title } </li>
                    <li> { comissionList["item-5"].title } </li>
                    <li> { comissionList["item-6"].title } </li>
                    <li> <SocialMedias/> </li>
                    
                </ul>
            </AccordionBody>
        </AccordionItem>
      </Accordion>
    </Container>
  );
}
