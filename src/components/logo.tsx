import * as React from 'react';

export const LogoIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M10.15 15.68c-1.3-1.3-1.3-3.06 0-4.36" />
    <path d="M13.85 8.32c1.3 1.3 1.3 3.06 0 4.36" />
    <path d="M10.15 8.32c3.43-1.8 7.21-1.8 10.64 0" />
    <path d="M13.85 15.68c-3.43 1.8-7.21 1.8-10.64 0" />
  </svg>
);

export const LogoCircle = (props: React.HTMLAttributes<HTMLDivElement>) => (
    <div
        className="w-full h-full rounded-full bg-black/50 flex flex-col items-center justify-center text-white p-4"
        {...props}
    >
        <LogoIcon className="w-1/2 h-1/2" />
        <span className="font-headline text-lg md:text-xl tracking-[0.2em] mt-2">CLIPCUT</span>
        <div className="w-1/2 h-px bg-white/50 mt-1" />
    </div>
);
