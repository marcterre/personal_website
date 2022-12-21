export default function AboutArticle({
  aboutTopHeading,
  aboutHeading,
  aboutTextContent,
}) {
  return (
    <article>
      <h2>{aboutTopHeading}</h2>
      <h3>{aboutHeading}</h3>
      <p>{aboutTextContent}</p>
    </article>
  );
}
