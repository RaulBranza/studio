"use client";

import { useRef, useEffect, useState, ReactNode } from 'react';
import { cn } from '@/lib/utils';

type AnimationType = 'slide-in-left' | 'slide-in-up' | 'fade-in';

type ScrollAnimationWrapperProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
  animation?: AnimationType;
}

export function ScrollAnimationWrapper({ children, className, delay = 0, once = true, animation = 'fade-in' }: ScrollAnimationWrapperProps) {
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

  const animationClasses = {
    'slide-in-left': {
      hidden: 'opacity-0 -translate-x-10',
      visible: 'opacity-100 translate-x-0',
    },
    'slide-in-up': {
      hidden: 'opacity-0 translate-y-10',
      visible: 'opacity-100 translate-y-0',
    },
    'fade-in': {
      hidden: 'opacity-0',
      visible: 'opacity-100',
    }
  };

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all ease-out duration-700',
        isVisible ? animationClasses[animation].visible : animationClasses[animation].hidden,
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
