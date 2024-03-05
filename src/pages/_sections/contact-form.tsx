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
import { formSchema } from "@/schema/contact-form.schema";

const IS_DEV = import.meta.env.DEV;

const ERROR_MESSAGE =
  "Viestin lähetys epäonnistui. Ole hyvä ja yritä uudelleen.";

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

  async function sendEmail(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (!data.message || !response.ok) {
        throw Error();
      }

      return data;
    } catch (error: any) {
      throw Error(ERROR_MESSAGE);
    }
  }

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setCanSubmit(false);

    const sendEmailPromise = sendEmail(values);

    toast.promise(sendEmailPromise, {
      loading: "Lähetetään viestiä...",
      success: (data) => {
        setTimeout(() => {
          setCanSubmit(true);
        }, 5000);
        return data.message;
      },
      error: (error) => {
        setTimeout(() => {
          setCanSubmit(true);
        }, 1000);
        return error.message;
      },
    });
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
                    <Input placeholder="Nimi" type="text" {...field} />
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
                    <Input
                      placeholder="nimi@sähköposti.fi"
                      type="email"
                      {...field}
                    />
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
