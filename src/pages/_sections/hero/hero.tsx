import { buttonVariants } from "@/components/ui/button";
import { OperationAreas } from "./operation-areas";
import { Section } from "@/components/section";

export const Hero = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-full relative">
      {children}
      <Section
        className={`max-w-[1400px] m-auto py-32 sm:py-44 w-full flex flex-col h-full justify-center items-center px-4 sm:px-16`}
      >
        <div className="relative flex flex-col w-full">
          <div className="flex flex-col w-full gap-2">
            <div className="flex sm:flex-row flex-wrap-reverse items-center gap-4 sm:gap-8">
              <h1 className="sm:text-7xl text-5xl font-extrabold -indent-1">
                Putkivuori
              </h1>
              <img
                src="/logo.png"
                alt=""
                loading="eager"
                className="object-contain w-12 sm:w-[4.5rem]"
                width={72}
                height={72}
              />
            </div>
            <p className="text-xl">LVI-huolto ja asennukset</p>
            <div className="flex gap-2 flex-wrap">
              <a
                className={buttonVariants({ variant: "hero" })}
                href="#palvelut"
              >
                Palvelut
              </a>
              <a
                className={buttonVariants({ variant: "hero" })}
                href="#hinnasto"
              >
                Hinnasto
              </a>
              <a
                className={buttonVariants({ variant: "hero" })}
                href="#ota-yhteytta"
              >
                Ota Yhteyttä
              </a>
            </div>
          </div>
          <div className="pt-16">
            <OperationAreas />
          </div>
        </div>
      </Section>
    </div>
  );
};
