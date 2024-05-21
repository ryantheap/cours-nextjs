import Link from "next/link";

export default async function Posts() {
  const randNumber = Math.floor(Math.random() * 10) + 1;

  const response = await fetch(
    // "https://dummyjson.com/posts?limit=" + randNumber,
    "https://cours-nextjs-default-rtdb.europe-west1.firebasedatabase.app/articles.json",
    {
      next: {
        revalidate: 5,
      },
    }
  );

  const data = await response.json();
  let posts = [];
  for (const key in data) {
    posts.push({
      id: key,
      ...data[key],
    });
  }

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <Link href={`/blog/${post.id}`}>{post.title}</Link>
        </div>
      ))}
    </div>
  );
}
