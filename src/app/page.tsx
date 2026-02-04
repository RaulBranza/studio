"use client";

import { Button } from '@/components/ui/button';
import { Phone, Instagram, MapPin } from 'lucide-react';
import { WhatsAppIcon } from '@/components/icons';
import { ScrollAnimationWrapper } from '@/components/scroll-animation-wrapper';

export default function Home() {

  const contactDetails = {
    phone: '0733357222',
    instagram: 'https://www.instagram.com/_clipcut_?igsh=NTRmNWlvbmthenho',
    address: 'Strada Carpatilor nr 93 500423 Brasov Romania',
  };
  const whatsappPhoneNumber = `40${contactDetails.phone.substring(1)}`;
  const whatsappUrl = `https://wa.me/${whatsappPhoneNumber}`;
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactDetails.address)}`;

  return (
    <section id="home" className="relative w-full flex-1 flex items-center justify-center text-center bg-transparent py-20">
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
                <a href="/join">Devino Partener</a>
              </Button>
              <Button asChild size="lg" variant="outline">
                 <a href="/services">Serviciile Noastre</a>
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
  );
}
