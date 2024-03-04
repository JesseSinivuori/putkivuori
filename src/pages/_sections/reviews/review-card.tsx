import { P } from "@/components/p";

export const ReviewCard = ({ text }: { text: string }) => {
  return (
    <div className="border border-border p-4 rounded-md hover:scale-105 transition-all duration-300 group">
      <P className="group-[:hover]:text-foreground transition-all duration-300">
        {text}
      </P>
    </div>
  );
};
