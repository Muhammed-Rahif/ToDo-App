import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { bgColors } from "./helpers/constants";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

const background = bgColors[Math.floor(Math.random() * bgColors.length)];

ReactDOM.render(
  <React.StrictMode>
    <div
      style={{
        background: background,
      }}
      className="body-background pt-1 pb-1"
    >
      <App background={background} />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorkerRegistration.register();
