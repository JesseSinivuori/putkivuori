import { cn } from "@/lib/utils";

export const pStyle = "text-base text-foreground/75";

export const P = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"p">) => {
  return <p className={cn(pStyle, className)} {...props} />;
};
