import "../styles/globals.css";
import { AudioPlayer, Player } from "./components/Audio-Player/custom-payer";

function MyApp({ Component, pageProps }) {
  return (
    // <AudioPlayer>
     <Component {...pageProps} />
    //{/* </AudioPlayer> */}
  );
}

export default MyApp;
