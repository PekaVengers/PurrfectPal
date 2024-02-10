import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain={import.meta.env.VITE_AUTH0_DOMAIN}
      clientId={import.meta.env.VITE_AUTH0_CLIENTID}
      useRefreshTokens
      cacheLocation="localstorage"
      authorizationParams={{
        redirect_uri: import.meta.env.VITE_REDIRECT_URI,
      }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
);