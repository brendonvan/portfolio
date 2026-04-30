import "./App.css";

// Redux
import { useSelector } from "react-redux";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import AboutMe from "./components/AboutMe/AboutMe";
import Footer from "./components/Footer/Footer";
import { InView } from "react-intersection-observer";
import { Carousel } from "./components/Carousel/Carousel";

const HERO_SLIDES = [
  { id: 1, image: './projects/tesla.png',   alt: 'tesla-project',   title: 'Tesla Reimagined',   subtitle: 'Tesla Clone with UI/UX inspired by Nickelfox & Kushanthi Hasinika. CRUD functionality for user authentication and car designs using Spring Boot.', cta: 'View Project', href: 'https://tesla-reimagined.vercel.app/' },
  { id: 2, image: './projects/netflix.png', alt: 'netflix-project', title: 'Netflix Reimagined', subtitle: 'Netflix Clone with UI/UX inspired by Jurre Houtkamp & Serge Strokov. CRUD functionality for user authentication and watchlists.',                  cta: 'View Project', href: 'https://neflix-reimagined.netlify.app/' },
  { id: 3, image: './projects/2048.png',    alt: '2048-project',    title: '2048 Clone',         subtitle: 'Slide numbered tiles on a grid to combine them and create the 2048 tile.',                                                                         cta: 'View Project', href: 'https://brendonvan.github.io/2048-clone/' },
  { id: 4, image: 'https://placehold.co/1200x675/111827/374151?text=Project+4', alt: 'project-4', title: 'Coming Soon', subtitle: 'Placeholder description for project 4. Replace with your real project details.' },
  { id: 5, image: 'https://placehold.co/1200x675/1a1a2e/2d2d5e?text=Project+5', alt: 'project-5', title: 'Coming Soon', subtitle: 'Placeholder description for project 5. Replace with your real project details.' },
  { id: 6, image: 'https://placehold.co/1200x675/0f172a/1e3a5f?text=Project+6', alt: 'project-6', title: 'Coming Soon', subtitle: 'Placeholder description for project 6. Replace with your real project details.' },
  { id: 7, image: 'https://placehold.co/1200x675/1c1c1c/3d3d3d?text=Project+7', alt: 'project-7', title: 'Coming Soon', subtitle: 'Placeholder description for project 7. Replace with your real project details.' },
  { id: 8, image: 'https://placehold.co/1200x675/0d1117/21262d?text=Project+8', alt: 'project-8', title: 'Coming Soon', subtitle: 'Placeholder description for project 8. Replace with your real project details.' },
];

const STRIP_SLIDES = [
  { id: 1, image: './projects/tesla.png',   alt: 'tesla-project',   label: 'Tesla Reimagined'   },
  { id: 2, image: './projects/netflix.png', alt: 'netflix-project', label: 'Netflix Reimagined' },
  { id: 3, image: './projects/2048.png',    alt: '2048-project',    label: '2048 Clone'         },
  { id: 4, image: 'https://placehold.co/1200x675/111827/374151?text=Project+4', alt: 'project-4', label: 'Coming Soon' },
  { id: 5, image: 'https://placehold.co/1200x675/1a1a2e/2d2d5e?text=Project+5', alt: 'project-5', label: 'Coming Soon' },
  { id: 6, image: 'https://placehold.co/1200x675/0f172a/1e3a5f?text=Project+6', alt: 'project-6', label: 'Coming Soon' },
  { id: 7, image: 'https://placehold.co/1200x675/1c1c1c/3d3d3d?text=Project+7', alt: 'project-7', label: 'Coming Soon' },
  { id: 8, image: 'https://placehold.co/1200x675/0d1117/21262d?text=Project+8', alt: 'project-8', label: 'Coming Soon' },
];

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
        <Carousel heroSlides={HERO_SLIDES} stripSlides={STRIP_SLIDES} autoplayDelay={7000} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
