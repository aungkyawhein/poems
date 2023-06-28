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

  const postClass = [
    "mt-7",
    "lg:min-w-[400px]",
    "group",
    "rounded-lg",
    "bg-gray-100",
    "dark:border-neutral-700",
    "dark:bg-neutral-800/30"
  ].join(' ');

  const headerClass = [
    "block",
    "sticky",
    "top-0",
    "backdrop-blur-2xl",
    "rounded-t-lg",
  ].join(' ');

  const titleClass = [
    "inline-block",
    "p-5",
    "lg:p-7",
    "text-2xl",
    "font-semibold",
    "bg-clip-text",
    "text-transparent",
    "bg-gradient-to-r",
    "from-pink-500",
    "to-violet-500"
  ].join(' ');

  const bodyClass = [
    "p-5",
    "lg:p-7",
    "pt-0",
    "lg:pt-0"
  ].join(' ');

  return (
    <div className={postClass}>
      <div className={headerClass}>
        <h2 className={titleClass}>{title}</h2>
      </div>
      <div className={bodyClass}>
        <div className={`mt-3 text-sm leading-6 text-neutral-400`}
          dangerouslySetInnerHTML={renderHTML(content)}
        >
        </div>
        <div className="mt-5">
          <span className="mr-2">🗓️</span>
          <span className="text-xs font-mono text-amber-700">{dateStringFormat(date)}</span>
        </div>
      </div>
    </div>
  );
}
