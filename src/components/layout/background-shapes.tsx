'use client';

import { cn } from '@/lib/utils';
import React from 'react';
import { LogoCircle } from '@/components/logo';

const SHAPES = [
  {
    className: 'bg-primary rounded-full w-32 h-32 top-1/4 left-1/4 animate-blob',
    style: { animationDelay: '0s' },
  },
  {
    className: 'bg-accent rounded-xl w-48 h-48 top-1/2 right-1/4 animate-blob',
    style: { animationDelay: '2s' },
  },
  {
    className: 'bg-primary/50 rounded-full w-24 h-24 bottom-1/4 right-1/3 animate-blob',
    style: { animationDelay: '4s' },
  },
  {
    className: 'bg-accent/50 rounded-3xl w-40 h-40 bottom-1/2 left-1/3 animate-blob',
    style: { animationDelay: '6s' },
  },
   {
    className: 'bg-primary/30 rounded-full w-16 h-16 top-1/3 right-1/2 animate-blob',
    style: { animationDelay: '8s' },
  },
];

export function BackgroundShapes() {
  return (
    <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-[20vw] font-bold text-foreground/5 select-none font-headline tracking-widest">
                CLIPCUT
            </h1>
        </div>
        <div className="relative w-full h-full">
            {SHAPES.map((shape, i) => (
                <div
                    key={i}
                    className={cn('absolute opacity-30 mix-blend-multiply filter blur-2xl', shape.className)}
                    style={shape.style}
                />
            ))}
            <div
                className="absolute opacity-20 mix-blend-multiply filter blur-lg animate-blob w-72 h-72"
                style={{ top: '30%', left: '40%', animationDelay: '5s', animationDuration: '20s' }}
            >
                <LogoCircle />
            </div>
        </div>
    </div>
  );
}
