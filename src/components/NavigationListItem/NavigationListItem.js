export default function NavgationListItem({ navigationLink, children }) {
  return (
    <li>
      <a href={navigationLink}>
        <button>{children}</button>
      </a>
    </li>
  );
}
