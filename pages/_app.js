import "../styles/globals.css";
import "semantic-ui-css/semantic.min.css";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { store } from "../redux/store";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
