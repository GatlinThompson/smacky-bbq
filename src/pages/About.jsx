import { useEffect } from "react";
import Header from "../elements/Header";
import History from "../components/about/History";
import Contact from "../components/about/Contact";

const AboutPage = () => {
  useEffect(() => {
    document.title = "Smacky's | About Us";
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  return (
    <main className="container-xxl">
      <Header title={"About Us"} addClass={"page-header"} />
      <History />
      <Contact />
    </main>
  );
};

export default AboutPage;
