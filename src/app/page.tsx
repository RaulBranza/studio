"use client";

import Image from 'next/image';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { format } from "date-fns";
import { CalendarIcon, Scissors, TrendingUp, BadgePercent, Zap, Clock, Users, ShieldCheck } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';
import { CombIcon, StraightRazorIcon } from '@/components/icons';
import { useToast } from '@/hooks/use-toast';
import { ScrollAnimationWrapper } from '@/components/scroll-animation-wrapper';

const galleryImages = PlaceHolderImages.filter(p => p.id.startsWith('gallery-'));

const services = [
  {
    icon: Scissors,
    title: 'Classic Haircut',
    description: 'A timeless cut, tailored to your style. Includes a wash and style.',
    price: 'Included',
  },
  {
    icon: StraightRazorIcon,
    title: 'Beard Trim & Shape',
    description: 'Expert shaping and trimming to keep your beard looking sharp.',
    price: 'Included',
  },
  {
    icon: CombIcon,
    title: 'Hair Styling',
    description: 'Get the perfect look for any occasion, from casual to formal.',
    price: 'Included',
  },
];

const bookingFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  service: z.string({ required_error: "Please select a service." }),
  date: z.date({ required_error: "A date for your appointment is required." }),
});

type BookingFormValues = z.infer<typeof bookingFormSchema>;

function BookingForm() {
  const { toast } = useToast();
  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  function onSubmit(data: BookingFormValues) {
    toast({
      title: "Appointment Requested!",
      description: `Thanks, ${data.name}! We've received your request for a ${data.service.toLowerCase()} on ${format(data.date, 'PPP')}. We'll email you shortly to confirm.`,
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
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
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
                  <Input placeholder="john.doe@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="service"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Service</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {services.map(s => <SelectItem key={s.title} value={s.title}>{s.title}</SelectItem>)}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
           <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Preferred Date</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date < new Date() || date < new Date("1900-01-01")
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" className="w-full md:w-auto" variant="accent">Request Appointment</Button>
      </form>
    </Form>
  )
}


export default function Home() {

  const partnerBenefits = [
    {
      icon: TrendingUp,
      title: "Crește vizibilitatea clienților potențiali",
      description: <p>Prin promovarea centralizată, salonul tău apare în fața unei audiențe mai mari decât dacă te promovezi singur. Mai multe vizibilizări = mai multe oportunități de programări.</p>
    },
    {
      icon: BadgePercent,
      title: "Reducerea costurilor de marketing individual",
      description: <p>În loc să cheltui fiecare leu pe reclame sau promovare dispersată, CLIPCUT consolidează vizibilitatea într-un canal mai puternic, eficientizând investiția.</p>
    },
    {
      icon: Zap,
      title: "Creșterea ratei de conversie",
      description: <p>O prezență solidă în CLIPCUT transmite profesionalism și legitimitate. Oamenii rezervă mai ușor la cine pare serios, nu doar ocupat.</p>
    },
    {
      icon: Clock,
      title: "Economisești timp = maximizare a veniturilor",
      description: (
        <>
          <p>Promovarea individuală îți consumă timp (postări, strategii, texte, reels). Parteneriatul CLIPCUT preia o parte din expunere, astfel:</p>
          <ul className="list-disc list-inside text-left mt-2 space-y-1">
            <li>tu te concentrezi pe clienți</li>
            <li>economisești timp = mai multe programări rentabile</li>
          </ul>
          <p className="mt-2 font-medium">Timp economisit - bani câștigați.</p>
        </>
      )
    },
    {
      icon: Users,
      title: "Acces la colaborări și recomandări",
      description: (
         <>
          <p>Fiind parte dintr-o comunitate selectivă, îți crești șansele:</p>
          <ul className="list-disc list-inside text-left mt-2 space-y-1">
            <li>să fii recomandat de alți membri</li>
            <li>prețuri mai bune de la distribuitori</li>
            <li>să fii invitat la evenimente sau campanii</li>
          </ul>
          <p className="mt-2">Toate acestea pot aduce client nou fără cost direct.</p>
        </>
      )
    },
    {
      icon: ShieldCheck,
      title: "Efect de „proof of quality”",
      description: (
        <>
          <p>Accesul selectiv CLIPCUT funcționează ca o validare externă, reducând ezitarea clientului și susținând o decizie mai rapidă și mai sigură. Această validare nu promite rezultate, dar reduce fricțiunea deciziei: clientul caută mai puțin, compară mai puțin, se îndoiește mai puțin.</p>
          <p className="font-semibold mt-4">În practică, asta poate însemna:</p>
          <ul className="list-disc list-inside text-left mt-2 space-y-1">
            <li>decizie mai rapidă de programare,</li>
            <li>mai puține întrebări legate de preț,</li>
            <li>mai multă deschidere către servicii complete,</li>
            <li>o percepție generală de profesionalism ridicat.</li>
          </ul>
          <p className="mt-4 italic">„Proof of quality” nu este despre a spune că ești cel mai bun, ci despre a nu fi nevoit să demonstrezi constant.</p>
        </>
      )
    }
  ];

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <section id="home" className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center text-center text-white bg-transparent">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto space-y-4">
            <ScrollAnimationWrapper once={false}>
              <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                ClipCut
              </h1>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper delay={100} once={false}>
              <p className="text-lg md:text-xl text-foreground/90">
                one brand thousands of chairs CLIPCUT conectează profesioniști independenți sub o promovare comună, fără a le schimba stilul, regulile sau prețurile. Independența rămâne. Percepția se amplifică.
              </p>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper delay={200} once={false}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="accent">
                  <a href="#book">Become a Member</a>
                </Button>
                <Button asChild size="lg" variant="outline">
                   <a href="#services">Our Services</a>
                </Button>
              </div>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </section>

      <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-transparent">
        <div className="container px-4 md:px-6">
          <ScrollAnimationWrapper once={false}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl">Membership Perks</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Your membership includes a wide range of services at any of our partner locations.
                </p>
              </div>
            </div>
          </ScrollAnimationWrapper>
          <div className="mx-auto grid max-w-sm items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3 mt-12">
            {services.map((service, index) => (
              <ScrollAnimationWrapper key={service.title} delay={index * 100} once={false}>
                <Card className="text-center transition-transform transform hover:scale-105 hover:shadow-xl bg-card/80 backdrop-blur-sm">
                  <CardHeader>
                    <div className="mx-auto bg-primary/10 rounded-full p-4 w-fit">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="font-headline mt-4">{service.title}</CardTitle>
                    <CardDescription className="text-muted-foreground pt-2">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold text-primary">{service.price}</p>
                  </CardContent>
                </Card>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      <section id="for-partners" className="w-full py-12 md:py-24 lg:py-32 bg-transparent">
        <div className="container px-4 md:px-6">
          <ScrollAnimationWrapper once={false}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl">ONE BRAND. THOUSANDS OF CHAIRS.</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  CLIPCUT conectează profesioniști independenți sub o promovare comună, fără a le schimba stilul, regulile sau prețurile. Independența rămâne. Percepția se amplifică.
                </p>
                <h3 className="text-xl font-bold font-headline tracking-tighter sm:text-3xl pt-8 !mt-8">
                  ACCESUL ESTE SELECTIV
                </h3>
              </div>
            </div>
          </ScrollAnimationWrapper>
          <div className="mx-auto grid max-w-sm items-stretch gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3 mt-12">
            {partnerBenefits.map((benefit, index) => (
              <ScrollAnimationWrapper key={benefit.title} delay={index * 100} once={false}>
                <Card className="text-center transition-transform transform hover:scale-105 hover:shadow-xl bg-card/80 backdrop-blur-sm h-full flex flex-col">
                  <CardHeader className="items-center">
                    <div className="mx-auto bg-primary/10 rounded-full p-4 w-fit">
                      <benefit.icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="font-headline mt-4 text-xl">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow text-sm text-left">
                    <div className="text-muted-foreground">{benefit.description}</div>
                  </CardContent>
                </Card>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>
      </section>
      
      <section id="gallery" className="w-full py-12 md:py-24 lg:py-32 bg-transparent">
        <div className="container px-4 md:px-6">
          <ScrollAnimationWrapper once={false}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl">Styles from Our Network</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  See the incredible work from top barbers in the ClipCut network.
                </p>
              </div>
            </div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper delay={200} once={false}>
            <div className="mt-12">
              <Carousel opts={{ loop: true }} className="w-full max-w-4xl mx-auto">
                <CarouselContent>
                  {galleryImages.map((image) => (
                    <CarouselItem key={image.id} className="md:basis-1/2 lg:basis-1/3">
                      <div className="p-1">
                        <Card className="overflow-hidden bg-card/80 backdrop-blur-sm">
                          <CardContent className="p-0">
                             <Image
                              src={image.imageUrl}
                              alt={image.description}
                              data-ai-hint={image.imageHint}
                              width={400}
                              height={500}
                              className="aspect-[4/5] w-full object-cover"
                            />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="ml-12 sm:ml-0" />
                <CarouselNext className="mr-12 sm:mr-0"/>
              </Carousel>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </section>

      <section id="book" className="w-full py-12 md:py-24 lg:py-32 bg-transparent">
        <div className="container px-4 md:px-6">
          <ScrollAnimationWrapper once={false}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl">Find a Partner Barbershop</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Ready for a fresh look? Find a convenient partner location and book your next appointment seamlessly through our platform.
                </p>
              </div>
            </div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper delay={200} once={false}>
            <div className="mx-auto w-full max-w-3xl mt-12">
              <Card className="bg-card/80 backdrop-blur-sm">
                <CardContent className="p-6 md:p-8">
                  <BookingForm />
                </CardContent>
              </Card>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </section>
    </div>
  );
}
