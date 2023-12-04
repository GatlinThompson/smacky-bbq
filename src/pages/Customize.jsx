import { useEffect } from "react";
import Details from "../components/details/Details";
import { useParams } from "react-router";
import { Helmet } from "react-helmet";

const CustomizePage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);
  let { itemId } = useParams();
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Smacky's | Customize</title>
      </Helmet>
      <main className="container-xxl">
        <Details itemId={itemId} customize={true} />
      </main>
    </>
  );
};

export default CustomizePage;
