'use client';

export default function Button({ link = '', next = '' }) {

  const getNextPosts = () => {
    const nextPageApi = link + next;
    console.log('hello')
  };

  return (
    <button
      onClick={getNextPosts}
      className="border transition-colors border-gray-300 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800/30 rounded-lg border border-transparent px-5 py-3"
    >
      Next
    </button>
  );
}
