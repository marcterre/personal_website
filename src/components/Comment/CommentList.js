export default function CommentList({ comments }) {
  return (
    <section>
      <h2>Comments</h2>
      {comments.map((comment) => (
        <article key={comment.id}>
          <h3>{comment.name}</h3>
          <p>{comment.textarea}</p>
        </article>
      ))}
    </section>
  );
}
