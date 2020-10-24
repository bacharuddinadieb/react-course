import React, { useRef, useEffect, useState } from 'react';

import './style/style.css';
import Navigation from './components/navigation';
import Hero from './components/hero';
import Karya from './components/karya';
import Footer from './components/footer';

function App() {
  // deklarasi variable untuk menampung side navigation
  const [sideNavigasi, setSideNavigasi] = useState(true);
  const [sideKarya, setSideKarya] = useState(false);
  const [sideTentangSaya, setSideTentangSaya] = useState(false);
  const navigasi = useRef();
  // deklarasi variable untuk menampung scroll pisition
  const karya = useRef();
  const tentangSaya = useRef();

  // fungsi scroll handler gawe ndeteksi posisi scroll
  const scrollHandler = () => {
    if (-navigasi.current.getBoundingClientRect().top <= 50) {
      setSideNavigasi(true);
      setSideKarya(false);
      setSideTentangSaya(false);
    }
    if (-navigasi.current.getBoundingClientRect().top >= karya.current.offsetTop - 350) {
      setSideNavigasi(false);
      setSideKarya(true);
      setSideTentangSaya(false);
    }
    if (-navigasi.current.getBoundingClientRect().top >= tentangSaya.current.offsetTop - 350) {
      setSideNavigasi(false);
      setSideKarya(false);
      setSideTentangSaya(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler, true);
    return () => {
      window.removeEventListener('scroll', scrollHandler, true);
    };
  });

  return (
    <div className="App">
      <Navigation
        navigasi={navigasi}
        sideNavigasi={sideNavigasi}
        sideKarya={sideKarya}
        sideTentangSaya={sideTentangSaya}
      />
      <Hero />
      <Karya karya={karya} />
      <Footer tentangSaya={tentangSaya} />
    </div>
  );
}

export default App;
