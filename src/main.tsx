import { render } from "preact";
import { App } from "./app.tsx";

const container = document.createElement("div");
container.id = "my-widget-container";

const shadowRoot = container.attachShadow({ mode: "open" });

render(<App />, shadowRoot);
document.body.appendChild(container);
