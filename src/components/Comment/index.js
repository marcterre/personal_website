export default function Comment({ name, commentText }) {
  return (
    <section>
      <h2>{name}</h2>
      <p>{commentText}</p>
    </section>
  );
}
