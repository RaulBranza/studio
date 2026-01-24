'use client';

import { cn } from '@/lib/utils';
import React from 'react';

const TEXTS = [
  {
    text: 'ClipCut',
    className: 'text-5xl top-1/4 left-1/4 animate-pulse-slow',
    style: { animationDelay: '0s' },
  },
  {
    text: 'ClipCut',
    className: 'text-3xl top-1/2 right-1/4 animate-pulse-slow',
    style: { animationDelay: '2s' },
  },
  {
    text: 'ClipCut',
    className: 'text-6xl bottom-1/4 right-1/3 animate-pulse-slow',
    style: { animationDelay: '4s' },
  },
  {
    text: 'ClipCut',
    className: 'text-2xl bottom-1/2 left-1/3 animate-pulse-slow',
    style: { animationDelay: '6s' },
  },
   {
    text: 'ClipCut',
    className: 'text-4xl top-1/3 right-1/2 animate-pulse-slow',
    style: { animationDelay: '8s' },
  },
  {
    text: 'ClipCut',
    className: 'text-xl bottom-1/3 left-1/2 animate-pulse-slow',
    style: { animationDelay: '10s', animationDuration: '20s' },
  },
    {
    text: 'ClipCut',
    className: 'text-5xl top-1/3 right-1/4 animate-pulse-slow',
    style: { animationDelay: '12s', animationDuration: '25s' },
  },
  {
    text: 'ClipCut',
    className: 'text-3xl top-[10%] left-[5%] animate-pulse-slow',
    style: { animationDelay: '1s', animationDuration: '18s' },
  },
  {
    text: 'ClipCut',
    className: 'text-4xl top-[80%] left-[80%] animate-pulse-slow',
    style: { animationDelay: '3s', animationDuration: '22s' },
  },
    {
    text: 'ClipCut',
    className: 'text-2xl top-[5%] right-[10%] animate-pulse-slow',
    style: { animationDelay: '5s', animationDuration: '17s' },
  },
    {
    text: 'ClipCut',
    className: 'text-5xl bottom-[5%] left-[20%] animate-pulse-slow',
    style: { animationDelay: '7s', animationDuration: '23s' },
  },
      {
    text: 'ClipCut',
    className: 'text-3xl top-[60%] left-[60%] animate-pulse-slow',
    style: { animationDelay: '9s', animationDuration: '19s' },
  },
      {
    text: 'ClipCut',
    className: 'text-4xl bottom-[15%] right-[5%] animate-pulse-slow',
    style: { animationDelay: '11s', animationDuration: '21s' },
  },
  {
    text: 'ClipCut',
    className: 'text-lg top-[15%] left-[85%] animate-pulse-slow',
    style: { animationDelay: '0.5s', animationDuration: '20s' },
  },
  {
      text: 'ClipCut',
      className: 'text-2xl top-[70%] left-[10%] animate-pulse-slow',
      style: { animationDelay: '1.5s', animationDuration: '24s' },
  },
  {
      text: 'ClipCut',
      className: 'text-4xl top-[40%] right-[40%] animate-pulse-slow',
      style: { animationDelay: '2.5s', animationDuration: '18s' },
  },
  {
      text: 'ClipCut',
      className: 'text-6xl bottom-[20%] left-[50%] animate-pulse-slow',
      style: { animationDelay: '3.5s', animationDuration: '28s' },
  },
  {
      text: 'ClipCut',
      className: 'text-xl top-[90%] right-[5%] animate-pulse-slow',
      style: { animationDelay: '4.5s', animationDuration: '16s' },
  },
  {
      text: 'ClipCut',
      className: 'text-3xl bottom-[80%] left-[30%] animate-pulse-slow',
      style: { animationDelay: '5.5s', animationDuration: '21s' },
  },
  {
      text: 'ClipCut',
      className: 'text-5xl top-[25%] right-[70%] animate-pulse-slow',
      style: { animationDelay: '6.5s', animationDuration: '25s' },
  },
  {
      text: 'ClipCut',
      className: 'text-2xl bottom-[40%] left-[75%] animate-pulse-slow',
      style: { animationDelay: '7.5s', animationDuration: '19s' },
  },
  {
      text: 'ClipCut',
      className: 'text-4xl top-[5%] left-[50%] animate-pulse-slow',
      style: { animationDelay: '8.5s', animationDuration: '23s' },
  },
  {
      text: 'ClipCut',
      className: 'text-lg top-[95%] left-[25%] animate-pulse-slow',
      style: { animationDelay: '9.5s', animationDuration: '27s' },
  },
  {
      text: 'ClipCut',
      className: 'text-3xl bottom-[10%] right-[30%] animate-pulse-slow',
      style: { animationDelay: '10.5s', animationDuration: '15s' },
  },
  {
      text: 'ClipCut',
      className: 'text-6xl top-[50%] left-[15%] animate-pulse-slow',
      style: { animationDelay: '11.5s', animationDuration: '29s' },
  },
  {
      text: 'ClipCut',
      className: 'text-xl bottom-[60%] right-[15%] animate-pulse-slow',
      style: { animationDelay: '12.5s', animationDuration: '17s' },
  },
  {
      text: 'ClipCut',
      className: 'text-4xl top-[75%] left-[45%] animate-pulse-slow',
      style: { animationDelay: '13.5s', animationDuration: '26s' },
  },
  {
      text: 'ClipCut',
      className: 'text-2xl bottom-[5%] right-[50%] animate-pulse-slow',
      style: { animationDelay: '14.5s', animationDuration: '20s' },
  }
];

export function BackgroundShapes() {
  return (
    <div className="fixed top-0 left-0 w-full h-screen -z-10 overflow-hidden">
        <div className="relative w-full h-full">
            {TEXTS.map((text, i) => (
                <div
                    key={i}
                    className={cn(
                        'absolute font-headline font-bold text-foreground/15 mix-blend-multiply filter blur-sm',
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
