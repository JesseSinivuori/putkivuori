import { cn } from "@/lib/utils";

export const Section = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"section">) => {
  return (
    <section
      className={cn(
        "px-4 max-w-[600px] w-full py-16 flex flex-col gap-8",
        className,
      )}
      {...props}
    />
  );
};
