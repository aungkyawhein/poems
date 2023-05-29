export async function getData() {
  const numberOfPosts = 2;
  const myDomain = 'aungkyawhein.wordpress.com';
  const wpAPI = `https://public-api.wordpress.com/rest/v1.1/sites/${myDomain}/`;
  const apiPostsAll = wpAPI + `posts`;
  const apiPosts = wpAPI + `posts?number=${numberOfPosts}&pretty=true`;
  const res = await fetch(apiPostsAll);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
