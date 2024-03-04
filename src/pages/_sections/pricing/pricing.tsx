import { Section } from "@/components/section";
import { PricingTable } from "../pricing/pricing-table";
import { P } from "@/components/p";
import { H2 } from "@/components/h2";

export const Pricing = () => {
  return (
    <Section id="hinnasto">
      <div className=" flex flex-col items-center gap-8">
        <H2>Hinnasto</H2>
        <PricingTable />
      </div>
      <P>
        Muista hakea{" "}
        <a
          href="https://www.vero.fi/henkiloasiakkaat/verokortti-ja-veroilmoitus/vahennykset/kotitalousvahennys/taulukko_kysytyimmista_kotitalousvahenn2/"
          className="underline text-foreground hover:text-blue-500"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Lue lisää kotitalousvehennyksestä vero.fi sivuilla"
        >
          kotitalousvähennystä.
        </a>
      </P>
      <P>
        Kotitalousvähennys on 40% työn osuudesta ja enintään 2250€ per henkilö
        asunnon perusparannus- ja kunnostustöiden, kuten LVI-asennus- ja
        huoltotöiden kuluista, ja puolisot voivat yhdessä saada enintään 4500€
        vähennyksen.
      </P>
    </Section>
  );
};
