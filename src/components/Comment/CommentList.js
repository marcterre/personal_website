export default function CommentList({ comments }) {
  return (
    <section>
      <h2>Comments</h2>
      {comments.map((comment) => (
        <section key={crypto.randomUUID()}>
          <p>{comment.textarea}</p>
          <p>{`My favorite animal is the ${comment.animals}.`}</p>
          {console.log(comment.movieNo)}
          <h3>{`- ${comment.name}`}</h3>
        </section>
      ))}
    </section>
  );
}
