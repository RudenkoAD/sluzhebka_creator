import { createRoot } from "react-dom/client";
import { App } from "./components/app/app";

import "bootstrap/scss/bootstrap.scss";

const root = createRoot(document.getElementById("app")!);
root.render(<App />);
