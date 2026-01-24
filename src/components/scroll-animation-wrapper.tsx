"use client";

import { useRef, useEffect, useState, ReactNode } from 'react';
import { cn } from '@/lib/utils';

type ScrollAnimationWrapperProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
}

export function ScrollAnimationWrapper({ children, className, delay = 0, once = true }: ScrollAnimationWrapperProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if(once) {
              observer.unobserve(entry.target);
            }
          } else {
            if(!once) {
              setIsVisible(false);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [once]);

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all ease-out duration-1000',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10',
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
