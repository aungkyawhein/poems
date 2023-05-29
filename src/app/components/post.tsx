import { renderMarkdownToHTML } from "../utils";

export default function Post({
  title,
  content
}: {
  title: string,
  content: string
}) {

  return (
    <div className="mt-7 group rounded-lg border border-transparent px-5 py-5 transition-colors border-gray-300 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800/30">
      <h2 className={`inline-block py-5 text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500`}>
        {title}
      </h2>
      <div className={`mt-3 max-w-[30ch] text-sm opacity-50 leading-6`}
        dangerouslySetInnerHTML={renderMarkdownToHTML(content)}
      >
      </div>
    </div>
  );
}
