import { H2 } from "@/components/h2";
import { Badge } from "@/components/ui/badge";

export const OperationAreas = () => {
  return (
    <div className="gap-4 flex flex-col">
      <H2>Toimialueet</H2>
      <div className="gap-2 flex flex-wrap">
        <Badge variant={"default"}>Helsinki</Badge>
        <Badge variant={"default"}>Vantaa</Badge>
        <Badge variant={"default"}>Espoo</Badge>
        <Badge variant={"default"}>Kerava</Badge>
        <Badge variant={"default"}>Tuusula</Badge>
      </div>
    </div>
  );
};
