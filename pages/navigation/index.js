import Link from "next/link";

const navBar = [{ name: "About me", link: "../about-me" }];

export default function Navigation() {
  return (
    <ul>
      {navBar.map((element) => {
        <li>
          <Link href={element.link}>{element.name}</Link>
        </li>;
      })}
    </ul>
  );
}
