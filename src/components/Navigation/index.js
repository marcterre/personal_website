import NavgationListItem from "./NavigationListItem";

export default function Navgation({ navigationLink, children }) {
  return (
    <ul>
      <NavgationListItem navigationLink={""}>About me</NavgationListItem>
      <NavgationListItem navigationLink={""}>My Projects</NavgationListItem>
      <NavgationListItem navigationLink={""}>Contact</NavgationListItem>
    </ul>
  );
}
