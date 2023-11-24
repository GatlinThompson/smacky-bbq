import { Outlet } from "react-router-dom";
import NavBar from "../components/navbar/Navbar";

const RootLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default RootLayout;
