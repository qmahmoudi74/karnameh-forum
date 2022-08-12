import "index.css";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Router from "Router";
import store, { persistor } from "store";

const container = document.getElementById("root");
if (!container) throw new Error("#root does not exist!");
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Router />
    </PersistGate>
  </Provider>
);
