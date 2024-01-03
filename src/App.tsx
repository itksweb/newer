import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import { Repo } from "./models/types";

function shrinkData(repp: Repo[]): Repo[] {
  const newData: Repo[] = repp
    .filter((repo) => repo.homepage)
    .map((rep) => {
      const { id, name, description, homepage, html_url, default_branch } = rep;
      return { id, name, description, homepage, html_url, default_branch };
    });
  return newData;
}

const App = () => {
  const [gitData, setGitData] = useState<Repo[]>([]);

  useEffect(() => {
    const getIt = () => {
      fetch("https://api.github.com/users/itksweb/repos")
        .then((res) => res.json())
        .then((data) => setGitData(shrinkData(data)))
        .catch((e) => console.log(e.message));
    };
    getIt();
  }, []);

  return (
    <>
      <Hero />
      <About />
      <Projects gitData={gitData} />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
