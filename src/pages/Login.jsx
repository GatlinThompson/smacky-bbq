import Header from "../elements/Header";
import { Helmet } from "react-helmet";
import { useEffect } from "react";
import Login from "../components/login/Login";

const LoginPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Smacky's | Login</title>
      </Helmet>
      <main className="container-xxl">
        <Header title={"Login"} addClass={"page-header"} />
        <Login />
      </main>
    </>
  );
};

export default LoginPage;
