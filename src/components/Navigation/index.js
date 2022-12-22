export default function Navgation() {
  return (
    <ul>
      <NavgationListItem navigationLink={""}>About me</NavgationListItem>
      <NavgationListItem navigationLink={""}>My Projects</NavgationListItem>
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
