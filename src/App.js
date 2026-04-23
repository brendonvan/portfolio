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
    if (inView) {
      entry.target.children[0].classList.remove("hidden");
    }
  };

  return (
    <div className={theme.isDarkMode ? "App dark-mode" : "App"} id="home">
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <Header />
      <main id="main-content">
        <InView threshold={0.2} onChange={handleIntersection}>
          {({ ref }) => (
            <div ref={ref}>
              <Hero />
            </div>
          )}
        </InView>
        <InView threshold={0.2} onChange={handleIntersection}>
          {({ ref }) => (
            <div ref={ref}>
              <AboutMe />
            </div>
          )}
        </InView>
        <InView threshold={0.1} onChange={handleIntersection}>
          {({ ref }) => (
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
