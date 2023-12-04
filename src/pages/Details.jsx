import { useParams } from "react-router";
import Details from "../components/details/Details";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

const DetailsPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  let { itemId } = useParams();
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Smacky's | Details</title>
      </Helmet>
      <main className="container-xxl">
        <Details itemId={itemId} />
      </main>
    </>
  );
};

export default DetailsPage;
