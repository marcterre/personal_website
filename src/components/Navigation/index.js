export default function Navgation() {
  return (
    <ul>
      <NavgationListItem navigationLink={"../About/index.js"}>
        About me
      </NavgationListItem>
      <NavgationListItem navigationLink={"../Projects/index.js"}>
        My Projects
      </NavgationListItem>
      <NavgationListItem navigationLink={""}>Contact</NavgationListItem>
    </ul>
  );
}

function NavgationListItem({ navigationLink, children }) {
  return (
    <li>
      <a href={navigationLink}>
        <button>{children}</button>
      </a>
    </li>
  );
}
