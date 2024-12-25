import { useEffect, useState } from 'react';
import Header from './Components/header/Header';
import Hero from './Components/hero/Hero';
import Main from './Components/main/Main';
import Contact from './Components/contact/Contact';
import Footer from './Components/footer/Footer';
import Skills from './Components/skills/Skills';

function App() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowscroll(true);
      } else {
        setShowscroll(false);
      }
    });
  }, []);

  const [showscroll, setShowscroll] = useState(false);

  return (
    <div id="up" className='container'>
      <Header />

      <Hero />
      <div className='divider' />




      {/* <div id="about">
        
     
      </div> */}

      <div id='skill'>
        <Skills />
      </div>
      <div className='divider' />
      <div id="projects">

        <Main />
      </div>

      <div id="contact">

        <Contact />
      </div>

      <div className='divider' />
      <Footer />

      <a style={{ opacity: showscroll ? 1 : 0, transition: "1s" }} href="#up">
        <button className='icon-keyboard_arrow_up scroll2Top'></button>
      </a>
    </div>
  );
}

export default App;
