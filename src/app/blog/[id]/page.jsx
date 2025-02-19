export default async function Article({ params: { id } }) {
  const response = await fetch("http://localhost:3000/api/articles", {
    method: "POST",
    body: JSON.stringify({ id }),
  });

  const article = await response.json();

  return (
    <div>
      <h1 className="text-center text-4xl font-semibold">{article.title}</h1>
      <div className="text-center whitespace-pre-line">{article.content}</div>
    </div>
  );
}
