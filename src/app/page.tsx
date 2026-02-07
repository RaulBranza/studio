"use client";

import { Button } from '@/components/ui/button';
import { Phone, Instagram, MapPin, TrendingUp, BadgePercent, Zap, Clock, Users, ShieldCheck } from 'lucide-react';
import { WhatsAppIcon } from '@/components/icons';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollAnimationWrapper } from '@/components/scroll-animation-wrapper';

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
    <div>
      <section id="home" className="relative w-full flex-1 flex items-center justify-center text-center bg-transparent py-20">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto space-y-4">
            <ScrollAnimationWrapper animation="slide-in-left" delay={100}>
              <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-chrome">
                ClipCut
              </h1>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper animation="slide-in-up" delay={200}>
              <h2 className="text-xl md:text-2xl font-medium tracking-wider uppercase text-chrome">
                one brand thousands of chairs
              </h2>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper animation="slide-in-up" delay={300}>
              <p className="text-lg md:text-xl text-chrome max-w-2xl mx-auto">
                conectează frizeri profesioniști sub o promovare comună, fără a le schimba stilul, regulile sau prețurile. Independența rămâne. Percepția se amplifică.
              </p>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper animation="slide-in-up" delay={400}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="accent">
                  <a href="/join">Devino Partener</a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href="/services">Serviciile Noastre</a>
                </Button>
              </div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper animation="fade-in" delay={500}>
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
      <section id="for-partners" className="w-full py-12 md:py-24 lg:py-32 bg-transparent">
        <div className="container px-4 md:px-6">
          <ScrollAnimationWrapper animation="slide-in-up">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl text-chrome">ONE BRAND. THOUSANDS OF CHAIRS.</h2>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-chrome">
                  conectează frizeri profesioniști sub o promovare comună, fără a le schimba stilul, regulile sau prețurile. Independența rămâne. Percepția se amplifică.
                </p>
                <h3 className="text-xl font-bold font-headline tracking-tighter sm:text-3xl pt-8 !mt-8 text-chrome">
                  ACCESUL ESTE SELECTIV
                </h3>
              </div>
            </div>
          </ScrollAnimationWrapper>
          <div className="mx-auto grid max-w-sm items-stretch gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3 mt-12">
            {partnerBenefits.map((benefit, index) => (
              <ScrollAnimationWrapper key={benefit.title} animation="fade-in" delay={100 * (index + 1)}>
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
    </div>
  );
}
