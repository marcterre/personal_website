import GlobalStyles from "../components/GlobalStyles";
import Navigation from "./navigation";
import "../styles/burger.css";
export default function App({ Component, pageProps }) {
  const HamburgerIcon = () => (
    <div className="p-1/2">
      <svg
        className="w-8 h-8 text-gray-500"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M4 6h16M4 12h16M4 18h16"></path>
      </svg>
    </div>
  );

  return (
    <>
      <GlobalStyles />
      <Navigation />
      <Component {...pageProps} />
    </>
  );
}
