import Background from "./components/background";
import Header from "./components/header";
import Posts from "./components/posts";

export default function Home() {

  const containerClass = [
    'min-h-screen',
    'relative'
  ].join(' ');

  const mainClass = [
    'fixed',
    'overflow-scroll',
    'w-full',
    'h-full',
  ].join(' ');

  return (
    <main className={mainClass}>
      <Background />
      <div className={containerClass}>
        <Header />

        {/**
         * https://github.com/vercel/next.js/issues/42292
         */}
        {/* @ts-expect-error Server Component */}
        <Posts />
      </div>
    </main>
  )
}
