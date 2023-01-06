import GlobalStyles from "../components/GlobalStyles";
import Navigation from "./navigation";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Navigation />
      <Component {...pageProps} />
    </>
  );
}
