import { H2 } from "@/components/h2";
import { P, pStyle } from "@/components/p";
import { Section } from "@/components/section";

export const Services = () => {
  return (
    <Section id="palvelut">
      <div className="py-8 gap-4 flex flex-col">
        <H2>Palvelut</H2>
        <P>
          Kaikki LVI huolto- ja asennustyöt varmalla otteella ja
          kilpailukykyisellä hinnalla.
        </P>
        <ul className="list-disc px-4">
          <li className={pStyle}>Vesikalusteiden asennus ja huolto</li>
          <li className={pStyle}>Hanojen ja WC-istuinten asennus</li>
          <li className={pStyle}>Käyttövesiputkien uusiminen</li>
          <li className={pStyle}>Pattereiden asennus ja huolto</li>
          <li className={pStyle}>Eristys työt</li>
        </ul>
      </div>
    </Section>
  );
};
