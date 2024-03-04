import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";

export const Link = ({
  href,
  className,
  ...props
}: React.ComponentProps<"a">) => {
  return (
    <a
      className={cn(buttonVariants({ variant: "link" }), className)}
      href={href}
      {...props}
    />
  );
};
