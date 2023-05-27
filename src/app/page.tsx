async function getData(wpAPI: string) {
  const res = await fetch(wpAPI);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Home() {
  const numberOfPosts = 2;
  const myDomain = 'aungkyawhein.wordpress.com';
  const wpAPI = `https://public-api.wordpress.com/rest/v1.1/sites/${myDomain}/posts?number=${numberOfPosts}&pretty=true`;
  const data = await getData(wpAPI);

  const renderMarkdownToHTML = function (htmldata: any) {
    return { __html: htmldata };
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12 lg:p-24 before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">

      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <h1 className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">Poems</span>
          &nbsp;
          <code className="font-mono opacity-50">Aung Kyaw Hein</code>
        </h1>
      </div>

      <div className="relative pt-12 w-full place-items-center">
        <div className="grid">
          {
            data.posts.map((poem: any) => (
              <div key={poem.ID} className="mt-7 group rounded-lg border border-transparent px-5 py-5 transition-colors border-gray-300 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800/30">
                <h2 className={`py-5 text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500`}>
                  {poem.title}
                </h2>
                <div className={`mt-3 max-w-[30ch] text-sm opacity-50 leading-6`}
                  dangerouslySetInnerHTML={renderMarkdownToHTML(poem.content)}
                >
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </main>
  )
}
