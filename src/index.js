import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { bgColors } from "./helpers/constants";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

ReactDOM.render(
  <React.StrictMode>
    <div
      style={{
        background: bgColors[Math.floor(Math.random() * bgColors.length)],
      }}
      className="body-background pt-1 pb-1"
    >
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorkerRegistration.unregister();
