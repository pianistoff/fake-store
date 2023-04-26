import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import store from "./common/storeConfiguration";
import App from "./App";

import "./index.css";

const rootElement = document.getElementById("root");

if (rootElement !== null) {
  const root = createRoot(rootElement);
  root.render(
    <Provider store={store}>
      <App />
    </Provider>,
  );
} else {
  throw new Error("Couldn't find root element");
}
