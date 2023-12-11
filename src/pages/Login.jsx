import Header from "../elements/Header";

import { useEffect } from "react";
import Login from "../components/login/Login";

const LoginPage = () => {
  useEffect(() => {
    document.title = "Smacky's | Login";
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);
  return (
    <>
      <main className="container-xxl">
        <Header title={"Login"} addClass={"page-header"} />
        <Login />
      </main>
    </>
  );
};

export default LoginPage;
