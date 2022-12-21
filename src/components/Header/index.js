import Navgation from "../Navigation";

export default function Header({ title, heading }) {
  return (
    <header>
      <title>{title}</title>
      <h1>{heading}</h1>
      <Navgation></Navgation>
    </header>
  );
}
