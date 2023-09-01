import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import AboutMe from "./components/AboutMe/AboutMe";
import Project from "./components/Project/Project";
import Footer from "./components/Footer/Footer";
import { InView } from "react-intersection-observer";

// Redux
import { useSelector } from "react-redux";

function App() {
  const theme = useSelector((state) => state.theme);

  const handleIntersection = (inView, entry) => {
    // let sectionId = entry.target.children[0].id;

    if (inView) {
      // Section is in view
      entry.target.children[0].classList.remove("hidden");
      // console.log(
      //   `Utilizing Intersection Observer API for fading in: ${sectionId} section`
      // );
    } else {
      // Section is out of view
      // switch (sectionId) {
      //   case "hero":
      //     break;
      //   case "about-me":
      //     break;
      //   case "projects":
      //     break;
      //   default:
      //     break;
      // }
    }
  };

  return (
    <div className={theme.isDarkMode ? "App dark-mode" : "App"} id="home">
      <Header />
      <main>
        <InView threshold={0.2} onChange={handleIntersection}>
          {({ inView, ref }) => (
            <div ref={ref}>
              <Hero />
            </div>
          )}
        </InView>
        <InView threshold={0.2} onChange={handleIntersection}>
          {({ inView, ref }) => (
            <div ref={ref}>
              <AboutMe />
            </div>
          )}
        </InView>
        <InView threshold={0.1} onChange={handleIntersection}>
          {({ inView, ref }) => (
            <div ref={ref}>
              <Project />
            </div>
          )}
        </InView>
      </main>
      <Footer />
    </div>
  );
}

export default App;
