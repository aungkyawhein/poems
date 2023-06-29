import Githubicon from "./github-icon";
import Wordpressicon from "./wordpress-icon";

export default function Header() {

  const headerClass = [
    "z-10",
    "w-full",
    "fixed",
    "left-0",
    "top-0",
    "bg-gradient-to-b",
    "font-mono",
    "text-sm",
    "backdrop-blur-2xl",
    "dark:bg-zinc-800/30",
    "dark:from-inherit",
    "lg:bg-gray-200",
    "lg:dark:bg-zinc-800/30"
  ].join(' ');

  const navClass = [
    "w-full",
    "px-7",
    "py-4",
    "flex",
    "justify-between",
  ].join(' ');

  const titleClass = [
    "from-zinc-200",
  ].join(' ');

  const navLinks = [
    {
      title: 'Original Wordpress blog',
      url: 'https://aungkyawhein.wordpress.com',
      icon: <Wordpressicon />
    },
    {
      title: 'Source code on Github',
      url: 'https://github.com/aungkyawhein/poems',
      icon: <Githubicon />
    }
  ];

  return (
    <header className={headerClass}>
      <nav className={navClass}>
        <h1 className={titleClass}>
          <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">Poems</span>
          &nbsp;
          <code className="font-mono text-slate-400">Aung Kyaw Hein</code>
        </h1>
        <ul className="flex flex-row gap-2">
          {
            navLinks.map((navLink) => {
              return (
                <li>
                  <a href={navLink.url} className="text-slate-400 hover:text-slate-600 transition-colors" target="_blank">
                    <span className="sr-only">{navLink.title}</span>
                    {navLink.icon}
                  </a>
                </li>
              )
            })
          }
        </ul>
      </nav>
    </header>
  );
}
