"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from '@/hooks/use-toast';
import { judete, localitati } from '@/lib/romanian-data';

const joinFormSchema = z.object({
  name: z.string().min(2, { message: "Numele trebuie să aibă cel puțin 2 caractere." }),
  email: z.string().email({ message: "Te rugăm să introduci un email valid." }),
  phone: z.string().min(10, { message: "Te rugăm să introduci un număr de telefon valid." }),
  shopLocation: z.string().min(5, { message: "Te rugăm să introduci adresa frizeriei." }),
  town: z.string({ required_error: "Te rugăm să selectezi un oraș." }),
  county: z.string({ required_error: "Te rugăm să selectezi un județ." }),
});

type JoinFormValues = z.infer<typeof joinFormSchema>;

function JoinForm() {
  const { toast } = useToast();
  const form = useForm<JoinFormValues>({
    resolver: zodResolver(joinFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      shopLocation: "",
    },
  });

  function onSubmit(data: JoinFormValues) {
    toast({
      title: "Aplicație Trimisă!",
      description: `Mulțumim, ${data.name}! Am primit aplicația ta pentru a te alătura ClipCut. Te vom contacta în curând.`,
    });
    form.reset();
  }

  return (
     <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nume Complet</FormLabel>
                <FormControl>
                  <Input placeholder="Popescu Ion" {...field} />
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
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="ion.popescu@exemplu.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Număr de Telefon</FormLabel>
                <FormControl>
                  <Input placeholder="07xxxxxxxx" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="shopLocation"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Locația Frizeriei</FormLabel>
                <FormControl>
                  <Input placeholder="Str. Exemplu nr. 10" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="town"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Oraș</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Selectează orașul" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {localitati.map(town => <SelectItem key={town} value={town}>{town}</SelectItem>)}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
           <FormField
            control={form.control}
            name="county"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Județ</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Selectează județul" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {judete.map(county => <SelectItem key={county} value={county}>{county}</SelectItem>)}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" className="w-full md:w-auto" variant="accent">Trimite Aplicația</Button>
      </form>
    </Form>
  )
}

export default function JoinPage() {
    return (
        <section id="book" className="w-full py-12 md:py-24 lg:py-32 bg-transparent animate-page-transition">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                    <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl text-chrome">Devino Partener ClipCut</h2>
                    <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-chrome">
                    Devino partenerul nostru.
                    </p>
                </div>
                </div>
                <div className="mx-auto w-full max-w-3xl mt-12">
                <Card className="bg-card/80 backdrop-blur-sm">
                    <CardContent className="p-6 md:p-8">
                    <JoinForm />
                    </CardContent>
                </Card>
                </div>
            </div>
        </section>
    );
}
