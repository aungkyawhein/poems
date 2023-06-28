export default function Header() {

  const titleClass = [
    "fixed",
    "left-0",
    "top-0",
    "flex",
    "w-full",
    "justify-center",
    "bg-gradient-to-b",
    "from-zinc-200",
    "pb-6",
    "pt-8",
    "backdrop-blur-2xl",
    "dark:bg-zinc-800/30",
    "dark:from-inherit",
    "lg:static",
    "lg:w-auto",
    "lg:rounded-xl",
    "lg:bg-gray-200",
    "lg:p-4",
    "lg:dark:bg-zinc-800/30"
  ].join(' ');

  return (
    <div className="z-10 w-full items-center justify-between font-mono text-sm lg:flex">
      <h1 className={titleClass}>
        <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">Poems</span>
        &nbsp;
        <code className="font-mono text-slate-400">Aung Kyaw Hein</code>
      </h1>
    </div>
  );
}
