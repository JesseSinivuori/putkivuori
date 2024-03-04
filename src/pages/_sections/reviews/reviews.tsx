import { Section } from "@/components/section";
import { ReviewCard } from "./review-card";
import { H2 } from "@/components/h2";

const reviews = [
  {
    text: `"Teki mitä luvattiin ja enemmänkin. Kiinteä hinta oli hyvä asia ja osien hintakin vähintäänkin kohtuullinen. Suosittelen"`,
  },
  {
    text: `"Kaikki toimi sovitusti: hinta, aikataulut ja työn laatu. Suosittelen lämpimästi."`,
  },
  {
    text: `"Sain parempaa palvelua kuin olin tilannut. Työn jälki oli moitteetonta, tekijä ammattitaitoinen, kiva ja joustava, ja loppuun semmoisetkin asiat, joista ei ollut sovittu. Kiitos!"`,
  },
];

export const Reviews = () => {
  return (
    <Section>
      <H2 className="flex justify-center">Arvioinnit</H2>
      <div className="flex flex-col gap-4">
        {reviews.map((review) => {
          return <ReviewCard key={review.text} text={review.text} />;
        })}
      </div>
    </Section>
  );
};
