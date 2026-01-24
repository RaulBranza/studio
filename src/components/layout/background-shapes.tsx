'use client';

import { cn } from '@/lib/utils';
import React from 'react';

const TEXTS = [
  {
    text: 'ClipCut',
    className: 'text-8xl top-1/4 left-1/4 animate-blob',
    style: { animationDelay: '0s' },
  },
  {
    text: 'ClipCut',
    className: 'text-6xl top-1/2 right-1/4 animate-blob',
    style: { animationDelay: '2s' },
  },
  {
    text: 'ClipCut',
    className: 'text-9xl bottom-1/4 right-1/3 animate-blob',
    style: { animationDelay: '4s' },
  },
  {
    text: 'ClipCut',
    className: 'text-5xl bottom-1/2 left-1/3 animate-blob',
    style: { animationDelay: '6s' },
  },
   {
    text: 'ClipCut',
    className: 'text-7xl top-1/3 right-1/2 animate-blob',
    style: { animationDelay: '8s' },
  },
  {
    text: 'ClipCut',
    className: 'text-4xl bottom-1/3 left-1/2 animate-blob',
    style: { animationDelay: '10s', animationDuration: '20s' },
  },
    {
    text: 'ClipCut',
    className: 'text-8xl top-1/3 right-1/4 animate-blob',
    style: { animationDelay: '12s', animationDuration: '25s' },
  },
];

export function BackgroundShapes() {
  return (
    <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <div className="relative w-full h-full">
            {TEXTS.map((text, i) => (
                <div
                    key={i}
                    className={cn(
                        'absolute font-headline font-bold text-foreground/5 opacity-30 mix-blend-multiply filter blur-sm',
                        text.className
                    )}
                    style={text.style}
                >
                    {text.text}
                </div>
            ))}
        </div>
    </div>
  );
}
