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
import CheckoutPage from "./pages/Checkout";
import LoginPage from "./pages/Login";
import ErrorPage from "./pages/Error";
import SignUpPage from "./pages/SignUp";
import AboutPage from "./pages/About";
import LocationPage from "./pages/Location";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    id: "home",
    children: [
      { index: true, element: <HomePage /> },
      { path: "menu", element: <MenuPage /> },
      { path: "details/:itemId", element: <DetailsPage /> },
      { path: "customize/:itemId", element: <CustomizePage /> },
      { path: "order", element: <OrderPage /> },
      { path: "rewards", element: <RewardsPage /> },
      { path: "checkout", element: <CheckoutPage /> },
      { path: "login", element: <LoginPage /> },
      { path: "signup", element: <SignUpPage /> },
      { path: "about", element: <AboutPage /> },
      { path: "locations", element: <LocationPage /> },
    ],
  },
]);

function App() {
  return (
    <>
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </>
  );
}

export default App;
