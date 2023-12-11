import { useEffect } from "react";
import Details from "../components/details/Details";
import { useParams } from "react-router";
import { Helmet } from "react-helmet";

const CustomizePage = () => {
  useEffect(() => {
    document.title = "Smacky's | Cutomize";
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);
  let { itemId } = useParams();
  return (
    <>
      <main className="container-xxl">
        <Details itemId={itemId} customize={true} />
      </main>
    </>
  );
};

export default CustomizePage;
