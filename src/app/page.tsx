import Header from "./components/header";
import Posts from "./components/posts";

export default function Home() {
  const backgroundClassNames = [
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
  ];

  const alignmentClassNames = [
    'flex',
    'flex-col',
    'items-center',
    'justify-between'
  ];

  const sizeClassNames = [
    'max-w-max',
    'min-h-screen'
  ];

  const spacingClassNames = [
    'mx-auto',
    'p-7',
    'lg:p-24'
  ];

  const allClassNames = [
    ...alignmentClassNames,
    ...sizeClassNames,
    ...spacingClassNames
  ];

  let fullClassName = allClassNames.join(' ');

  const mainClass = [
    'fixed',
    'overflow-scroll',
    'w-full',
    'h-full',
    ...backgroundClassNames,
  ].join(' ');

  return (
    <main className={mainClass}>

      <div className={fullClassName}>
        <Header />

        <div className="relative pt-12 w-full place-items-center">
          {/**
         * https://github.com/vercel/next.js/issues/42292
         */}
          {/* @ts-expect-error Server Component */}
          <Posts />
        </div>
      </div>
    </main>
  )
}
