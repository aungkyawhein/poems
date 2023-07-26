'use client';

import { useEffect } from "react";

export default function Background() {

  const backgroundClassNames = [
    'w-full',
    'h-full',
    'absolute',
    'before:fixed',
    'before:h-1/2',
    'before:w-1/2',
    'before:rounded-full',
    'before:bg-gradient-radial',
    'before:from-pink-500',
    'before:to-violet-500',
    'before:blur-2xl',
    "before:content-['']",
    'before:opacity-10',
    'after:fixed',
    'after:bottom-0',
    'after:right-0',
    'after:-z-20',
    'after:h-1/2',
    'after:w-1/2',
    'after:translate-x-1/3',
    'after:bg-gradient-conic',
    'after:from-sky-200',
    'after:via-blue-200',
    'after:blur-2xl',
    "after:content-['']",
    'after:dark:from-sky-900',
    'after:dark:via-[#0141ff]',
    'after:opacity-20'
  ].join(' ');

  useEffect(() => {
    const handleScroll = () => {
      console.log('scrolling')
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={backgroundClassNames}>
      {/**
       * Empty component
       * just for background animation
       */}
    </div>
  );
}
