const arrayTags = [
  "cats",
  "lasagne",
  "movies",
  "gaming",
  "fantasy",
  "cyberpunk",
  "gorillaz",
  "kakao",
  "kazoo",
  "shrek",
];

export default function AboutTags() {
  const listTags = arrayTags.map((element) => <li>{element}</li>);

  return (
    <section>
      <ul>{listTags}</ul>
    </section>
  );
}
