import React, { useRef, useEffect, useState } from 'react';

import './style/style.css';
import JuraganKost from './assets/img/03-Home v3.png';
import JSCO from './assets/img/1-Home.png';
import Clear from './assets/img/Screenshot 2020-10-10 143907.png';
// eslint-disable-next-line max-len
import Chevalier from './assets/img/screencapture-file-home-matohdev-Documents-Code-Soal-Cheva-client-index-html-2020-06-10-12_07_28 1.png';
import Resume from './assets/pdf/Bacharuddin Adieb Pratama_CV.pdf';

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
    if (
      -navigasi.current.getBoundingClientRect().top >=
      karya.current.offsetTop - 350
    ) {
      setSideNavigasi(false);
      setSideKarya(true);
      setSideTentangSaya(false);
    }
    if (
      -navigasi.current.getBoundingClientRect().top >=
      tentangSaya.current.offsetTop - 350
    ) {
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
      <nav id="navigasi" ref={navigasi}>
        <a href="#navigasi">Beranda</a>
        <a href="#karya">Karya</a>
        <a href="#tentang-saya">Tentang Saya</a>
        <a href={Resume} target="_blank" rel="noreferrer">
          Résumé
        </a>
      </nav>
      <div className="side-navigation">
        <a href="#navigasi">
          <div
            className={`side-navigation_item ${sideNavigasi ? 'selected' : ''}`}
          />
        </a>
        <a href="#karya">
          <div
            className={`side-navigation_item ${sideKarya ? 'selected' : ''}`}
          />
        </a>
        <a href="#tentang-saya">
          <div
            className={`side-navigation_item ${
              sideTentangSaya ? 'selected' : ''
            }`}
          />
        </a>
      </div>
      <header>
        <div className="header_text-wrapper">
          <h1>
            Halo, nama saya
            <br />
            Bacharuddin <span>Adieb</span> Pratama
            <br />& saya seorang
            <span>Front End Developper.</span>
          </h1>
        </div>
        <div className="header_scroll-wrapper" id="scroll-wrapper">
          <a href="#karya">
            <span>Gulir ke bawah</span>
            <div className="scroll-line" />
          </a>
        </div>
      </header>
      <section className="karya" id="karya" ref={karya}>
        <h1>Karya</h1>
        <div className="card-wrapper">
          <a href="">
            <div className="card-item">
              <div className="card-image">
                <img src={Clear} alt="" />
              </div>
              <div className="card-text">
                <div className="card-text-wrapper">Clear</div>
                <div className="card-tag-wrapper">
                  <div className="card-tag-item">
                    <span>Website Design</span>
                  </div>
                </div>
              </div>
            </div>
          </a>
          <a href="">
            <div className="card-item">
              <div className="card-image">
                <img src={Chevalier} alt="" />
              </div>
              <div className="card-text">
                <div className="card-text-wrapper">
                  Chevalier Recruitment Test
                </div>
                <div className="card-tag-wrapper">
                  <div className="card-tag-item">
                    <span>Website Design</span>
                  </div>
                </div>
              </div>
            </div>
          </a>
          <a href="">
            <div className="card-item">
              <div className="card-image">
                <img src={JuraganKost} alt="" />
              </div>
              <div className="card-text">
                <div className="card-text-wrapper">Juragan Kost</div>
                <div className="card-tag-wrapper">
                  <div className="card-tag-item">
                    <span>Website Design</span>
                  </div>
                </div>
              </div>
            </div>
          </a>
          <a href="">
            <div className="card-item">
              <div className="card-image">
                <img src={JSCO} alt="" />
              </div>
              <div className="card-text">
                <div className="card-text-wrapper">JSCO</div>
                <div className="card-tag-wrapper">
                  <div className="card-tag-item">
                    <span>Website Design</span>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </section>
      <section className="tentang-saya" id="tentang-saya" ref={tentangSaya}>
        <h1>Katakan Haloo...</h1>
        <div className="tentang-wrapper">
          <div className="image-wrapper hidden-desktop" />
          <div className="information-wrapper">
            <h1>hello@adieb.id</h1>
            <div className="line" />
            <p className="text-deskripsi">
              Saya gemar sekali mendesain, mengembangkan website, mempelajari
              teknologi terbaru mengenai website, serta mengajar. Sekarang ini
              saya masih belajar di Universitas Telkom di bidang Informatika.
              <br />
              Jangan sungkan untuk menghubungi saya
            </p>
            <p className="text-nama">
              Bacharuddin Adieb Pratama
              <br />
              <span className="text-tempat">Tuban, Indonesia</span>
            </p>
            <div className="logo-wrapper">
              <a href="mailto:hello@adieb.id">
                <span className="icons icons-mail" />
              </a>
              <a href="https://github.com/bacharuddinadieb/">
                <span className="icons icons-github" />
              </a>
              <a href="https://wa.me/082234380491">
                <span className="icons icons-whatsapp" />
              </a>
            </div>
          </div>
          <div className="image-wrapper show-desktop" />
        </div>
      </section>
    </div>
  );
}

export default App;
