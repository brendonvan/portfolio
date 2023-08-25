import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import AboutMe from './components/AboutMe/AboutMe';
import Project from './components/Project/Project';
import Footer from './components/Footer/Footer';

function App() {
  
  return (
    <div className="App" id='home'>
      <Header />
      <main className='main'>
        <Hero/>
        <AboutMe/>
        <Project/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
