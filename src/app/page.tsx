import Header from "./components/header";
import Posts from "./components/posts";

export default function Home() {
  const backgroundClassNames = [
    'before:absolute',
    'before:h-[300px]',
    'before:w-[480px]',
    'before:-translate-x-1/2',
    'before:rounded-full',
    'before:bg-gradient-radial',
    'before:from-white',
    'before:to-transparent',
    'before:blur-2xl',
    "before:content-['']",
    'before:dark:bg-gradient-to-br',
    'before:dark:from-transparent',
    'before:dark:to-blue-700',
    'before:dark:opacity-10',
    'before:lg:h-[360px]',
    'after:absolute',
    'after:-z-20',
    'after:h-[180px]',
    'after:w-[240px]',
    'after:translate-x-1/3',
    'after:bg-gradient-conic',
    'after:from-sky-200',
    'after:via-blue-200',
    'after:blur-2xl',
    "after:content-['']",
    'after:dark:from-sky-900',
    'after:dark:via-[#0141ff]',
    'after:dark:opacity-40'
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
    ...backgroundClassNames,
    ...alignmentClassNames,
    ...sizeClassNames,
    ...spacingClassNames
  ];

  let fullClassName = allClassNames.join(' ');

  return (
    <main className={fullClassName}>

      <Header />

      <div className="relative pt-12 w-full place-items-center">
        {/**
         * https://github.com/vercel/next.js/issues/42292
         */}
        {/* @ts-expect-error Server Component */}
        <Posts />
      </div>
    </main>
  )
}
