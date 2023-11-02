import "../styles/globals.css";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import "semantic-ui-css/semantic.min.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
