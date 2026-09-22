import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { AppTheme } from "./theme/AppTheme.tsx";

const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    <AppTheme>
      <App />
    </AppTheme>,
  );
} else {
  console.log("No root element!!!");
}
