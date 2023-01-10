import Link from "next/link";
import HamburgerMenu, { Links } from "../../components/HambugerMenu";

export default function Navigation() {
  return (
    <div className="max-w-full h-12 flex justify-start items-center bg-black mb-4 text-white rounded-md ">
      <div className="flex md:hidden">
        <HamburgerMenu />
      </div>
      <div className="hidden md:flex">
        <Links />
      </div>
    </div>
  );
  // return (
  //   <header>
  //     <h1>Welcome to my universe </h1>
  //     <ul>
  //       <li>
  //         <Link href="../about-me">About me</Link>
  //       </li>
  //       <li>
  //         <Link href="../projects">My Projects</Link>
  //       </li>
  //       <li>
  //         <Link href="../Contact">Contact</Link>
  //       </li>
  //     </ul>
  //   </header>
  // );
}
