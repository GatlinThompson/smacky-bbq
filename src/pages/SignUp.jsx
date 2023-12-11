import Header from "../elements/Header";

import { useEffect } from "react";
import SignUp from "../components/login/Signup";

const SignUpPage = () => {
  useEffect(() => {
    document.title = "Smacky's | Signup";
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);
  return (
    <>
      <main className="container-xxl">
        <Header title={"SignUp"} addClass={"page-header"} />
        <SignUp />
      </main>
    </>
  );
};

export default SignUpPage;
