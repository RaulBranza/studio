"use client";

import Image from 'next/image';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Scissors, TrendingUp, BadgePercent, Zap, Clock, Users, ShieldCheck, Phone, Instagram, MapPin } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CombIcon, StraightRazorIcon, WhatsAppIcon } from '@/components/icons';
import { useToast } from '@/hooks/use-toast';
import { ScrollAnimationWrapper } from '@/components/scroll-animation-wrapper';
import { judete, localitati } from '@/lib/romanian-data';

const galleryImages = PlaceHolderImages.filter(p => p.id.startsWith('gallery-'));

const services = [
  {
    icon: Scissors,
    title: 'Tuns Clasic',
    description: 'O tunsoare clasică, adaptată stilului tău. Include spălat și aranjat.',
    price: 'Inclus',
  },
  {
    icon: StraightRazorIcon,
    title: 'Tuns și Aranjat Barbă',
    description: 'Conturare și aranjare profesională pentru a-ți menține barba impecabilă.',
    price: 'Inclus',
  },
  {
    icon: CombIcon,
    title: 'Styling Păr',
    description: 'Obține look-ul perfect pentru orice ocazie, de la casual la formal.',
    price: 'Inclus',
  },
];

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


export default function Home() {

  const partnerBenefits = [
    {
      icon: TrendingUp,
      title: "Crește vizibilitatea clienților potențiali",
      description: <p className="text-chrome">Prin promovarea centralizată, salonul tău apare în fața unei audiențe mai mari decât dacă te promovezi singur. Mai multe vizibilizări = mai multe oportunități de programări.</p>
    },
    {
      icon: BadgePercent,
      title: "Reducerea costurilor de marketing individual",
      description: <p className="text-chrome">În loc să cheltui fiecare leu pe reclame sau promovare dispersată, CLIPCUT consolidează vizibilitatea într-un canal mai puternic, eficientizând investiția.</p>
    },
    {
      icon: Zap,
      title: "Creșterea ratei de conversie",
      description: <p className="text-chrome">O prezență solidă în CLIPCUT transmite profesionalism și legitimitate. Oamenii rezervă mai ușor la cine pare serios, nu doar ocupat.</p>
    },
    {
      icon: Clock,
      title: "Economisești timp = maximizare a veniturilor",
      description: (
        <>
          <p className="text-chrome">Promovarea individuală îți consumă timp (postări, strategii, texte, reels). Parteneriatul CLIPCUT preia o parte din expunere, astfel:</p>
          <ul className="list-disc list-inside text-left mt-2 space-y-1 text-chrome">
            <li>tu te concentrezi pe clienți</li>
            <li>economisești timp = mai multe programări rentabile</li>
          </ul>
          <p className="mt-2 font-medium text-chrome">Timp economisit - bani câștigați.</p>
        </>
      )
    },
    {
      icon: Users,
      title: "Acces la colaborări și recomandări",
      description: (
         <>
          <p className="text-chrome">Fiind parte dintr-o comunitate selectivă, îți crești șansele:</p>
          <ul className="list-disc list-inside text-left mt-2 space-y-1 text-chrome">
            <li>să fii recomandat de alți membri</li>
            <li>prețuri mai bune de la distribuitori</li>
            <li>să fii invitat la evenimente sau campanii</li>
          </ul>
          <p className="mt-2 text-chrome">Toate acestea pot aduce client nou fără cost direct.</p>
        </>
      )
    },
    {
      icon: ShieldCheck,
      title: "Efect de „proof of quality”",
      description: (
        <>
          <p className="text-chrome">Accesul selectiv CLIPCUT funcționează ca o validare externă, reducând ezitarea clientului și susținând o decizie mai rapidă și mai sigură. Această validare nu promite rezultate, dar reduce fricțiunea deciziei: clientul caută mai puțin, compară mai puțin, se îndoiește mai puțin.</p>
          <p className="font-semibold mt-4 text-chrome">În practică, asta poate însemna:</p>
          <ul className="list-disc list-inside text-left mt-2 space-y-1 text-chrome">
            <li>decizie mai rapidă de programare,</li>
            <li>mai puține întrebări legate de preț,</li>
            <li>mai multă deschidere către servicii complete,</li>
            <li>o percepție generală de profesionalism ridicat.</li>
          </ul>
          <p className="mt-4 italic text-chrome">„Proof of quality” nu este despre a spune că ești cel mai bun, ci despre a nu fi nevoit să demonstrezi constant.</p>
        </>
      )
    }
  ];

  const contactDetails = {
    phone: '0733357222',
    instagram: 'https://www.instagram.com/_clipcut_?igsh=NTRmNWlvbmthenho',
    address: 'Strada Carpatilor nr 93 500423 Brasov Romania',
  };
  const whatsappPhoneNumber = `40${contactDetails.phone.substring(1)}`;
  const whatsappUrl = `https://wa.me/${whatsappPhoneNumber}`;
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactDetails.address)}`;

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <section id="home" className="relative w-full h-auto min-h-[600px] flex items-center justify-center text-center bg-transparent py-20">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto space-y-4">
            <ScrollAnimationWrapper once={false}>
              <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-chrome">
                ClipCut
              </h1>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper delay={100} once={false}>
              <h2 className="text-xl md:text-2xl font-medium tracking-wider uppercase text-chrome">
                one brand thousands of chairs
              </h2>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper delay={200} once={false}>
              <p className="text-lg md:text-xl text-chrome max-w-2xl mx-auto">
                conectează profesioniști independenți sub o promovare comună, fără a le schimba stilul, regulile sau prețurile. Independența rămâne. Percepția se amplifică.
              </p>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper delay={300} once={false}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="accent">
                  <a href="#book">Devino Partener</a>
                </Button>
                <Button asChild size="lg" variant="outline">
                   <a href="#services">Serviciile Noastre</a>
                </Button>
              </div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper delay={400} once={false}>
              <div className="mt-8 flex flex-wrap justify-center gap-10 md:gap-16">
                <a href={`tel:${contactDetails.phone}`} className="group flex flex-col items-center gap-2 transition-all duration-300 hover:scale-110">
                    <Phone className="h-10 w-10 drop-shadow-md transition-all duration-300 group-hover:drop-shadow-xl group-hover:-translate-y-1 group-active:translate-y-0 text-primary" />
                    <span className="text-sm font-medium text-chrome">Sună-ne</span>
                </a>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-2 transition-all duration-300 hover:scale-110">
                    <WhatsAppIcon className="h-10 w-10 drop-shadow-md transition-all duration-300 group-hover:drop-shadow-xl group-hover:-translate-y-1 group-active:translate-y-0 text-primary" />
                    <span className="text-sm font-medium text-chrome">WhatsApp</span>
                </a>
                <a href={contactDetails.instagram} target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-2 transition-all duration-300 hover:scale-110">
                    <Instagram className="h-10 w-10 drop-shadow-md transition-all duration-300 group-hover:drop-shadow-xl group-hover:-translate-y-1 group-active:translate-y-0 text-primary" />
                    <span className="text-sm font-medium text-chrome">Instagram</span>
                </a>
                <a href={mapUrl} target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-2 transition-all duration-300 hover:scale-110">
                    <MapPin className="h-10 w-10 drop-shadow-md transition-all duration-300 group-hover:drop-shadow-xl group-hover:-translate-y-1 group-active:translate-y-0 text-primary" />
                    <span className="text-sm font-medium text-chrome">Găsește-ne</span>
                </a>
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
                <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl text-chrome">Avantajele Membrilor</h2>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-chrome">
                  Abonamentul tău include o gamă largă de servicii în oricare dintre locațiile partenere.
                </p>
              </div>
            </div>
          </ScrollAnimationWrapper>
          <div className="mx-auto grid max-w-sm items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3 mt-12">
            {services.map((service, index) => (
              <ScrollAnimationWrapper key={service.title} delay={index * 100} once={false}>
                <Card className="text-center bg-card/80 backdrop-blur-sm">
                  <CardHeader>
                    <div className="mx-auto bg-primary/10 rounded-full p-4 w-fit">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="font-headline mt-4 text-chrome">{service.title}</CardTitle>
                    <CardDescription className="pt-2 text-chrome">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold text-chrome">{service.price}</p>
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
                <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl text-chrome">ONE BRAND. THOUSANDS OF CHAIRS.</h2>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-chrome">
                  CLIPCUT conectează profesioniști independenți sub o promovare comună, fără a le schimba stilul, regulile sau prețurile. Independența rămâne. Percepția se amplifică.
                </p>
                <h3 className="text-xl font-bold font-headline tracking-tighter sm:text-3xl pt-8 !mt-8 text-chrome">
                  ACCESUL ESTE SELECTIV
                </h3>
              </div>
            </div>
          </ScrollAnimationWrapper>
          <div className="mx-auto grid max-w-sm items-stretch gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3 mt-12">
            {partnerBenefits.map((benefit, index) => (
              <ScrollAnimationWrapper key={benefit.title} delay={index * 100} once={false}>
                <Card className="text-center bg-card/80 backdrop-blur-sm h-full flex flex-col">
                  <CardHeader className="items-center">
                    <div className="mx-auto bg-primary/10 rounded-full p-4 w-fit">
                      <benefit.icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="font-headline mt-4 text-xl text-chrome">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow text-sm text-left">
                    <div>{benefit.description}</div>
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
                <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl text-chrome">Stiluri din Rețeaua Noastră</h2>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-chrome">
                  Vezi lucrările incredibile de la cei mai buni frizeri din rețeaua ClipCut.
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
                <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl text-chrome">Alătură-te ClipCut</h2>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-chrome">
                  Devino partenerul nostru.
                </p>
              </div>
            </div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper delay={200} once={false}>
            <div className="mx-auto w-full max-w-3xl mt-12">
              <Card className="bg-card/80 backdrop-blur-sm">
                <CardContent className="p-6 md:p-8">
                  <JoinForm />
                </CardContent>
              </Card>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </section>
    </div>
  );
}
