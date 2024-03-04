import { cn } from "@/lib/utils";

export const H2 = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"h2">) => {
  return (
    <h2
      className={cn("font-bold text-4xl text-foreground flex", className)}
      {...props}
    />
  );
};
