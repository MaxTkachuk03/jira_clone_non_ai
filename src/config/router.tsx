import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ProfilePage from "../pages/Profile";
import SettingsPage from "../pages/Settings/Index";
import MainPage from "../pages/Main";

export const router = createBrowserRouter([
  {
    // Головний маршрут, який використовує Layout
    path: "/",
    element: <MainLayout />,
    // Усі дочірні маршрути (children) будуть рендеритися всередині MainLayout
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: "profile",
        element: <ProfilePage />,
      },
      {
        path: "settings",
        element: <SettingsPage />,
      },
    ],
  },
  // Маршрути, які не використовують MainLayout (наприклад, сторінка логіну)
  // {
  //   path: "/login",
  //   element: <LoginPage />,
  // },
]);
