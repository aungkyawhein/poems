import Post from "../components/post";
import { fetchPost } from "../services";

export default async function Page({ params }: { params: { slug: string } }) {
  const post = await fetchPost(params.slug);

  return (
    <div className="grid gap-y-7 px-7 pb-7 pt-[100px] relative w-full max-w-max mx-auto place-items-center">
      <Post
        title={post.title}
        content={post.content}
        date={post.date}
        slug={post.slug}
        isDetailPage={true}
      />
    </div>
  );
}
