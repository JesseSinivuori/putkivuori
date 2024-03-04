import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import { Section } from "@/components/section";
import { H2 } from "@/components/h2";

const IS_DEV = import.meta.env.DEV;

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Nimen pitää olla enemmän kuin 2 merkkiä.",
  }),
  email: z
    .string()
    .email({ message: "Sähköpostin pitää olla oikeassa muodossa." }),
  description: z.string().min(4, {
    message: "Kuvauksen pitää olla enemmän kuin 4 merkkiä.",
  }),
});

export const ContactForm = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [canSubmit, setCanSubmit] = useState(true);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: IS_DEV ? "Nimi" : "",
      email: IS_DEV ? "nimi@gmail.com" : "",
      description: IS_DEV ? "Kuvaus..." : "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (!canSubmit) {
      return;
    }

    setCanSubmit(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (!data.message || !response.ok) {
        toast.error("Viestin lähetys epäonnistui.");
      }

      if (data.message) {
        toast.success(data.message);
      }
    } catch (error) {
      toast.error("Viestin lähetys epäonnistui.");
    }

    setTimeout(() => {
      setCanSubmit(true);
    }, 5000);
  }

  return (
    <Section id="ota-yhteytta">
      <H2 className="justify-center">Ota Yhteyttä</H2>
      {!isLoaded ? (
        <div className="flex justify-center items-center animate-pulse">
          Ladataan yhteydenotto lomaketta...
        </div>
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nimi</FormLabel>
                  <FormControl>
                    <Input placeholder="Nimi" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Sähköposti</FormLabel>
                  <FormControl>
                    <Input placeholder="nimi@sähköposti.fi" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Työn kuvaus</FormLabel>
                  <FormControl>
                    <Textarea className="resize-none" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              disabled={form.formState.isSubmitting || !canSubmit}
            >
              Lähetä
            </Button>
          </form>
        </Form>
      )}
    </Section>
  );
};
