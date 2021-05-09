import "../styles/globals.css";
import { APIProvider } from "../context/apiContext";

function MyApp({ Component, pageProps }) {
  return (
    <APIProvider>
      <Component {...pageProps} />
    </APIProvider>
  );
}

export default MyApp;
