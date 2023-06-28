export async function fetchPosts(next_page: string) {
  const numberOfPosts = 10;
  const myDomain = 'aungkyawhein.wordpress.com';
  const base = `https://public-api.wordpress.com/rest/v1.1/sites/${myDomain}`;
  const params = `/posts?number=${numberOfPosts}&pretty=true&page_handle=${next_page}`;
  const api = base + params;

  const res = await fetch(api);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
