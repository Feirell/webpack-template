import React from "react";
import {createRoot} from "react-dom/client";
import {Entry} from "./components/entry";

function initialize() {
  addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("react-root")!;
    const root = createRoot(container);
    root.render(React.createElement(Entry));
  });
}

initialize();
