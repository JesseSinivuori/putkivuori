import { Link } from "../link";
import { buttonVariants } from "../ui/button";
import { MobileMenu } from "./mobile-menu";
import { navLinks } from "./nav-links";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 bg-background w-full py-2 border-b border-muted z-50">
      <div className="max-w-[1400px] m-auto">
        <div className="flex px-2">
          <div className="flex w-full">
            <Link
              href="/"
              className="flex gap-2 group"
              aria-label="Mene etusivulle"
            >
              Putkivuori
              <img
                src="/logo.png"
                alt=""
                loading="eager"
                width={32}
                height={32}
                className="object-contain w-8 flex group-[:hover]:opacity-50 duration-200"
              />
            </Link>
          </div>
          <div className="flex flex-1">
            <ul className="hidden sm:flex">
              {navLinks.map(({ name, href }) => {
                return (
                  <li key={href}>
                    <Link href={href} className="whitespace-nowrap">
                      {name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="sm:hidden flex">
            <MobileMenu />
          </div>
          <div className="hidden sm:flex">
            <a
              href="/#ota-yhteytta"
              className={`${buttonVariants({ variant: "default", size: "sm" })} flex items-center justify-center h-full`}
            >
              Ota Yhteyttä
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
