import { useEffect, useState } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  useLocation,
} from "react-router-dom";
import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";
import MenuPage from "./pages/Menu";
import "./styles/App.scss";
import DetailsPage from "./pages/Details";
import CustomizePage from "./pages/Customize";
import OrderPage from "./pages/Order";
import UserProvider from "./store/UserProvider";
import RewardsPage from "./pages/Rewards";
import { Helmet } from "react-helmet";
import CheckoutPage from "./pages/Checkout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    id: "home",
    children: [
      { index: true, element: <HomePage /> },
      { path: "menu", element: <MenuPage /> },
      { path: "details/:itemId", element: <DetailsPage /> },
      { path: "customize/:itemId", element: <CustomizePage /> },
      { path: "order", element: <OrderPage /> },
      { path: "rewards", element: <RewardsPage /> },
      { path: "checkout", element: <CheckoutPage /> },
    ],
  },
]);

function App() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Smacky's | Home</title>
      </Helmet>
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>{" "}
    </>
  );
}

export default App;
