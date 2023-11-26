import { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";
import MenuPage from "./pages/Menu";
import UserProvider from "./store/UserProvider";
import "./styles/App.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    id: "home",
    children: [
      { index: true, element: <HomePage /> },
      { path: "menu", element: <MenuPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
