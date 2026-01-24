'use client';

import { cn } from '@/lib/utils';
import React from 'react';

const TEXTS = [
    // Row 1
    { text: 'ClipCut', className: 'text-4xl top-[5%] left-[5%] animate-drift', style: { animationDelay: '0s', animationDuration: '25s' } },
    { text: 'ClipCut', className: 'text-2xl top-[8%] left-[25%] animate-drift', style: { animationDelay: '3s', animationDuration: '30s' } },
    { text: 'ClipCut', className: 'text-5xl top-[5%] left-[50%] animate-drift', style: { animationDelay: '1s', animationDuration: '22s' } },
    { text: 'ClipCut', className: 'text-3xl top-[10%] left-[75%] animate-drift', style: { animationDelay: '4s', animationDuration: '28s' } },
    { text: 'ClipCut', className: 'text-4xl top-[8%] left-[90%] animate-drift', style: { animationDelay: '2s', animationDuration: '26s' } },

    // Row 2
    { text: 'ClipCut', className: 'text-3xl top-[20%] left-[15%] animate-drift', style: { animationDelay: '5s', animationDuration: '24s' } },
    { text: 'ClipCut', className: 'text-5xl top-[25%] left-[35%] animate-drift', style: { animationDelay: '7s', animationDuration: '32s' } },
    { text: 'ClipCut', className: 'text-2xl top-[22%] left-[60%] animate-drift', style: { animationDelay: '6s', animationDuration: '20s' } },
    { text: 'ClipCut', className: 'text-4xl top-[20%] left-[85%] animate-drift', style: { animationDelay: '8s', animationDuration: '29s' } },

    // Row 3
    { text: 'ClipCut', className: 'text-5xl top-[40%] left-[5%] animate-drift', style: { animationDelay: '9s', animationDuration: '27s' } },
    { text: 'ClipCut', className: 'text-3xl top-[45%] left-[25%] animate-drift', style: { animationDelay: '11s', animationDuration: '21s' } },
    { text: 'ClipCut', className: 'text-2xl top-[42%] left-[50%] animate-drift', style: { animationDelay: '10s', animationDuration: '31s' } },
    { text: 'ClipCut', className: 'text-5xl top-[40%] left-[70%] animate-drift', style: { animationDelay: '12s', animationDuration: '23s' } },
    { text: 'ClipCut', className: 'text-3xl top-[45%] left-[90%] animate-drift', style: { animationDelay: '13s', animationDuration: '25s' } },

    // Row 4
    { text: 'ClipCut', className: 'text-2xl top-[60%] left-[10%] animate-drift', style: { animationDelay: '14s', animationDuration: '29s' } },
    { text: 'ClipCut', className: 'text-4xl top-[65%] left-[30%] animate-drift', style: { animationDelay: '16s', animationDuration: '24s' } },
    { text: 'ClipCut', className: 'text-3xl top-[62%] left-[55%] animate-drift', style: { animationDelay: '15s', animationDuration: '28s' } },
    { text: 'ClipCut', className: 'text-5xl top-[60%] left-[80%] animate-drift', style: { animationDelay: '17s', animationDuration: '22s' } },
    
    // Row 5
    { text: 'ClipCut', className: 'text-4xl top-[80%] left-[5%] animate-drift', style: { animationDelay: '18s', animationDuration: '26s' } },
    { text: 'ClipCut', className: 'text-2xl top-[85%] left-[25%] animate-drift', style: { animationDelay: '20s', animationDuration: '30s' } },
    { text: 'ClipCut', className: 'text-5xl top-[82%] left-[45%] animate-drift', style: { animationDelay: '19s', animationDuration: '21s' } },
    { text: 'ClipCut', className: 'text-3xl top-[80%] left-[70%] animate-drift', style: { animationDelay: '21s', animationDuration: '27s' } },
    { text: 'ClipCut', className: 'text-4xl top-[85%] left-[90%] animate-drift', style: { animationDelay: '22s', animationDuration: '23s' } },
    
    // Fill gaps
    { text: 'ClipCut', className: 'text-xl top-[30%] left-[80%] animate-drift', style: { animationDelay: '23s', animationDuration: '35s' } },
    { text: 'ClipCut', className: 'text-lg top-[70%] left-[40%] animate-drift', style: { animationDelay: '24s', animationDuration: '33s' } },
    { text: 'ClipCut', className: 'text-xl top-[95%] left-[60%] animate-drift', style: { animationDelay: '25s', animationDuration: '20s' } },
    { text: 'ClipCut', className: 'text-lg top-[15%] left-[40%] animate-drift', style: { animationDelay: '26s', animationDuration: '25s' } },
    { text: 'ClipCut', className: 'text-xl top-[50%] left-[85%] animate-drift', style: { animationDelay: '27s', animationDuration: '30s' } },
    { text: 'ClipCut', className: 'text-lg top-[90%] left-[10%] animate-drift', style: { animationDelay: '28s', animationDuration: '24s' } },
    { text: 'ClipCut', className: 'text-xl top-[75%] left-[75%] animate-drift', style: { animationDelay: '29s', animationDuration: '28s' } },
];


export function BackgroundShapes() {
  return (
    <div className="fixed top-0 left-0 w-full h-screen -z-10 overflow-hidden">
        <div className="relative w-full h-full">
            {TEXTS.map((text, i) => (
                <div
                    key={i}
                    className={cn(
                        'absolute font-headline font-bold text-foreground/20 mix-blend-multiply filter blur-sm',
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
