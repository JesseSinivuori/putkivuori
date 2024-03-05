import { H2 } from "@/components/h2";
import { P } from "@/components/p";
import { Section } from "@/components/section";
import heroImage from "@/public/logo.png";

export const ContactInfo = () => {
  return (
    <Section id="yhteystiedot" className="flex-row flex-wrap">
      <div className="flex flex-col w-full flex-1">
        <H2 className="text-xl">Yhteystiedot</H2>
        <P>{import.meta.env.PUBLIC_OUR_EMAIL}</P>
        <P>Y-Tunnus: 3371743-8</P>
      </div>
      <div className="flex">
        <img
          src="/logo.png"
          alt=""
          loading="lazy"
          className="object-contain"
          width={72}
          height={72}
        />
      </div>
    </Section>
  );
};
