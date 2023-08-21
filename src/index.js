import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/default";

import App from "/src/components/app/app";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
  rootElement
);
