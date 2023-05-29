import { fetchPosts } from "../services";
import Post from "./post";

export default async function Posts() {

  const data = await fetchPosts('');

  return (
    <div className="grid">
      {
        data.posts.map((poem: any) => (
          <Post key={poem.ID} title={poem.title} content={poem.content} />
        ))
      }
    </div>
  );
}
