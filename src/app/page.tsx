"use client";

import Image from 'next/image';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { format } from "date-fns";
import { CalendarIcon, Scissors } from 'lucide-react';

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

const heroImage = PlaceHolderImages.find(p => p.id === 'hero-image');
const galleryImages = PlaceHolderImages.filter(p => p.id.startsWith('gallery-'));

const services = [
  {
    icon: Scissors,
    title: 'Classic Haircut',
    description: 'A timeless cut, tailored to your style. Includes a wash and style.',
    price: '$45',
  },
  {
    icon: StraightRazorIcon,
    title: 'Beard Trim & Shape',
    description: 'Expert shaping and trimming to keep your beard looking sharp.',
    price: '$30',
  },
  {
    icon: CombIcon,
    title: 'Hair Styling',
    description: 'Get the perfect look for any occasion, from casual to formal.',
    price: '$25',
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
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <section id="home" className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center text-center text-white">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            data-ai-hint={heroImage.imageHint}
            fill
            className="object-cover -z-10 brightness-[.6]"
          />
        )}
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto space-y-4">
            <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              ClipCut Barbershop
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90">
              Classic Cuts, Modern Style. Your neighborhood barbershop for a sharp look and a great experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="accent">
                <a href="#book">Book Now</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-black/20 border-white/50 hover:bg-white/10 text-white">
                 <a href="#services">Our Services</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl">Our Services</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                From a quick trim to a full grooming session, we've got you covered.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-sm items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3 mt-12">
            {services.map((service) => (
              <Card key={service.title} className="text-center transition-transform transform hover:scale-105 hover:shadow-xl">
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
            ))}
          </div>
        </div>
      </section>
      
      <section id="gallery" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl">Our Gallery</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                A showcase of our craft and the happy clients who trust us with their style.
              </p>
            </div>
          </div>
          <div className="mt-12">
            <Carousel opts={{ loop: true }} className="w-full max-w-4xl mx-auto">
              <CarouselContent>
                {galleryImages.map((image) => (
                  <CarouselItem key={image.id} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <Card className="overflow-hidden">
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
        </div>
      </section>

      <section id="book" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl">Book an Appointment</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Ready for a fresh look? Schedule your visit with one of our expert barbers.
              </p>
            </div>
          </div>
          <div className="mx-auto w-full max-w-3xl mt-12">
            <Card>
              <CardContent className="p-6 md:p-8">
                <BookingForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
