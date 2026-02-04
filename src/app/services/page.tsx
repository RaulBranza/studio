"use client";

import { Scissors } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ScrollAnimationWrapper } from '@/components/scroll-animation-wrapper';
import { CombIcon, StraightRazorIcon } from '@/components/icons';

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

export default function ServicesPage() {
  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-transparent">
      <div className="container px-4 md:px-6">
        <ScrollAnimationWrapper once={false}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl text-chrome">Avantajele Membrilor</h2>
              <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-chrome">
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
  );
}
