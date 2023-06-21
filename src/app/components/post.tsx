import { renderHTML } from "../utils";

export default function Post({
  title,
  content,
  date,
}: {
  title: string,
  content: string,
  date: string
}) {

  const dateStringFormat = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-SG');
  };

  return (
    <div className="mt-7 p-5 lg:p-7 group rounded-lg border border-transparent transition-colors border-gray-300 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800/30">
      <h2 className={`inline-block py-5 text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500`}>
        {title}
      </h2>
      <div className={`mt-3 max-w-[30ch] text-sm opacity-50 leading-6`}
        dangerouslySetInnerHTML={renderHTML(content)}
      >
      </div>
      <div className="mt-5">
        <span className="mr-2 opacity-75">🗓️</span>
        <span className="text-xs opacity-75 font-mono text-amber-700">{dateStringFormat(date)}</span>
      </div>
    </div>
  );
}
