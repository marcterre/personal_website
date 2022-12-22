// import styled from "styled-components";
const animalEmojis = [
  "🐶",
  "🐱",
  "🐭",
  "🐹",
  "🐰",
  "🦊",
  "🐻",
  "🐼",
  "🐨",
  "🐯",
  "🦁",
  "🐮",
  "🐷",
  "🐸",
  "🐵",
  "🐔",
  "🐧",
  "🐦",
  "🐤",
  "🐣",
  "🐥",
  "🦆",
  "🦅",
  "🦉",
  "🦇",
  "🐺",
  "🐗",
  "🐴",
  "🦄",
  "🐝",
  "🪱",
  "🐛",
  "🦋",
  "🐌",
  "🐞",
  "🐜",
  "🪰",
  "🪲",
  "🪳",
  "🐢",
  "🐍",
  "🦎",
  "🦖",
  "🦕",
  "🐙",
  "🦑",
  "🦐",
  "🦞",
  "🦀",
  "🐡",
  "🐠",
  "🐟",
  "🐬",
  "🐳",
  "🐋",
  "🦈",
  "🐊",
  "🐅",
  "🐆",
  "🦓",
  "🦍",
  "🦧",
  "🦣",
  "🦛",
  "🐘",
  "🦏",
  "🐪",
  "🐫",
  "🦒",
  "🦘",
  "🦙",
  "🦥",
  "🦨",
  "🦡",
  "🦦",
  "🦔",
  "🐻‍❄️",
];

export default function Form({ onSubmit }) {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    console.log(data);
    onSubmit(data);

    event.target.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Write me</legend>
        <FormInput labelFor="name" type="text" placeholder="Peppa">
          First name:
        </FormInput>
        <label htmlFor="textarea">Comment: </label>
        <textarea
          name="textarea"
          type="text"
          placeholder="Like your projects!"
        ></textarea>
        <label htmlFor="animals">Whats your favorite animal?</label>
        <select name="animals">
          {animalEmojis.map((animalEmoji) => (
            <option key={animalEmoji} value={animalEmoji} />
          ))}
        </select>
        <fieldset>
          <legend>Did you watch "Spider-Man: A new universe"?</legend>
          <input name="checkbox" type="radio" id="movieNo"></input>
          <label htmlFor="movieNo">No</label>
          <input name="checkbox" type="radio" id="movieYes"></input>
          <label htmlFor="movieYes">Yes</label>
        </fieldset>
        <button type="submit">Send</button>
      </fieldset>
    </form>
  );
}

function FormInput({ labelFor, children, type, placeholder }) {
  return (
    <>
      <label htmlFor={labelFor}>{children}</label>
      <input
        name={labelFor}
        id={crypto.randomUUID()}
        type={type}
        placeholder={placeholder}
        required
      ></input>
    </>
  );
}

// function FormSelectOptions({ value, children }) {
//   return <option value={value}>{children}</option>;
// }
