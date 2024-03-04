import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { buttonVariants } from "../ui/button";
import { navLinks } from "./nav-links";
import { useState } from "react";

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen}>
      <SheetTrigger
        aria-label="Avaa navigointi valikko"
        className={buttonVariants({ variant: "link" })}
        onClick={() => setIsOpen(true)}
      >
        <Menu />
      </SheetTrigger>
      <SheetContent
        onClose={() => setIsOpen(false)}
        aria-label="Sulje navigointi valikko"
      >
        <div className="flex flex-col px-8">
          <ul>
            {navLinks.map((link) => {
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`${buttonVariants({ variant: "ghost" })} flex w-full`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>
          <a
            href="/#ota-yhteytta"
            className={`${buttonVariants({ variant: "default" })} flex w-full`}
            onClick={() => setIsOpen(false)}
          >
            Ota Yhteyttä
          </a>
        </div>
      </SheetContent>
    </Sheet>
  );
};
