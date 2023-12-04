import Header from "../elements/Header";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

const RewardsPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Smacky's | Rewards</title>
      </Helmet>
      <main>
        <Header title={"Rewards"} addClass={"page-header"} />
      </main>
    </>
  );
};

export default RewardsPage;
