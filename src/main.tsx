import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Root from "@pages/root.tsx";
import About from "@pages/about.tsx";
import { Route, Router } from "@routes/Router.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <Route path="/" component={<Root />} />
      <Route path="/about" component={<About />} />
    </Router>
  </React.StrictMode>
);
