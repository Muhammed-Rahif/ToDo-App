import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

ReactDOM.render(
  <React.StrictMode>
    <div className="body-background pt-1 pb-1">
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorkerRegistration.unregister();
