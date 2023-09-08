// Generated by ReScript, PLEASE EDIT WITH CARE

import * as App from "./App.bs.mjs";
import * as React from "react";
import * as Button from "./components/Button.bs.mjs";
import * as Client from "react-dom/client";
import * as JsxRuntime from "react/jsx-runtime";

import './index.css'
;

require("tailwindcss/tailwind.css")
;

var domElement = document.querySelector("#root");

if (!(domElement == null)) {
  Client.createRoot(domElement).render(JsxRuntime.jsx(React.StrictMode, {
            children: JsxRuntime.jsx(App.make, {})
          }));
}

var Button$1 = Button.make;

export {
  Button$1 as Button,
}
/*  Not a pure module */
