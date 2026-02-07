"use client";

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ScrollAnimationWrapper } from '@/components/scroll-animation-wrapper';

const galleryImages = PlaceHolderImages.filter(p => p.id.startsWith('gallery-'));

export default function GalleryPage() {
  return (
    <section id="gallery" className="w-full py-12 md:py-24 lg:py-32 bg-transparent">
      <div className="container px-4 md:px-6">
        <ScrollAnimationWrapper animation="slide-in-up">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl text-chrome">Stiluri din Rețeaua Noastră</h2>
              <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-chrome">
                Vezi lucrările incredibile de la cei mai buni frizeri din rețeaua ClipCut.
              </p>
            </div>
          </div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper animation="fade-in" delay={200}>
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
              <CarouselPrevious className="left-4 sm:-left-12" />
              <CarouselNext className="right-4 sm:-right-12" />
            </Carousel>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
}
