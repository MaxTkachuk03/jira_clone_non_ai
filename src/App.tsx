import { RouterProvider } from "react-router-dom";
import "./App.css";
import { AppTheme } from "./theme/AppTheme";
import { router } from "./config/router";

function App() {
  return (
    <AppTheme>
      <RouterProvider router={router} />
    </AppTheme>
  );
}

export default App;
