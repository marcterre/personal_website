import Link from "next/link";

export default function Navigation() {
  return (
    <header>
      <h1>Welcome to my universe </h1>
      <ul>
        <li>
          <Link href="../about-me">About me</Link>
        </li>
        <li>
          <Link href="../projects">My Projects</Link>
        </li>
        <li>
          <Link href="../Contact">Contact</Link>
        </li>
      </ul>
    </header>
  );
}
