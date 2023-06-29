import { fetchPosts } from "../services";
import Post from "./post";

export default async function Posts() {

  const data = await fetchPosts('');

  return (
    <div className="grid gap-y-7 px-7 pb-7 pt-[100px] relative w-full max-w-max mx-auto place-items-center">
      {
        data.posts.map((poem: any) => (
          <Post key={poem.ID} title={poem.title} content={poem.content} date={poem.date} />
        ))
      }
    </div>
  );
}
