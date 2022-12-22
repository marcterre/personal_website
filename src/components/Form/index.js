// import styled from "styled-components";
import { uuid } from "uuidv4";

export default function Form({ onSubmit, labelAnimals }) {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    console.log(data);
    onSubmit(data);

    event.target.reset();
    event.target.elements.name.focus();
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Write me</legend>
        <FormInput labelFor="nameInput" type="text" placeholder="Peppa">
          First name:{" "}
        </FormInput>
        <label htmlFor="textarea">Comment: </label>
        <textarea
          name="textarea"
          type="text"
          placeholder="Like your projects!"
        ></textarea>
        <label htmlFor="animals">{labelAnimals}</label>
        <select name="animals">
          <FormSelectOptions value="dog">🐶</FormSelectOptions>
          <FormSelectOptions value="cat">🐱</FormSelectOptions>
          <FormSelectOptions value="mouse">🐭</FormSelectOptions>
          <FormSelectOptions value="hamster">🐹</FormSelectOptions>
          <FormSelectOptions value="rabbit">🐰</FormSelectOptions>
          <FormSelectOptions value="cow">🐮</FormSelectOptions>
          <FormSelectOptions value="pig">🐷</FormSelectOptions>
        </select>
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
        id={labelFor}
        type={type}
        placeholder={placeholder}
        required
      ></input>
    </>
  );
}

function FormSelectOptions({ value, children }) {
  return (
    <option value={value} id={value}>
      {children}
    </option>
  );
}
