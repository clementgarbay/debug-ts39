import * as React from "react";
import * as ReactDOM from "react-dom";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import App from "./App";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        hello: "Hello {{name}}!",
      },
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

ReactDOM.render(<App />, document.getElementById("root"));
