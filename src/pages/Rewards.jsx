import Header from "../elements/Header";
import { useEffect } from "react";

import Rewards from "../components/rewards/Rewards";

const RewardsPage = () => {
  useEffect(() => {
    document.title = "Smacky's | Rewards";
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);
  return (
    <>
      <main className="container-xxl">
        <Header title={"Rewards"} addClass={"page-header"} />
        <Rewards />
      </main>
    </>
  );
};

export default RewardsPage;
