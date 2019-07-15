import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

function createContainerElement(): HTMLElement {
  const oldContainerElement = document.querySelector("todoapp");
  if (oldContainerElement) {
    document.removeChild(oldContainerElement);
  }
  const containerElement = document.createElement("section");
  containerElement.className = "todoapp";
  document.body.appendChild(containerElement);
  return containerElement;
}

function renderApp() {
  const appContainerElement = createContainerElement();
  const appElement = React.createElement(App);
  ReactDOM.render(appElement, appContainerElement);
}

renderApp();
