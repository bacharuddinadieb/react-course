import React from 'react';
import Resume from '../assets/pdf/Bacharuddin Adieb Pratama_CV.pdf';

const navigation = (props) => {
  const { navigasi, sideNavigasi, sideKarya, sideTentangSaya } = props;

  return (
    <>
      <nav id="navigasi" ref={navigasi}>
        <a href="#navigasi">Beranda</a>
        <a href="#karya">Karya</a>
        <a href="#tentang-saya">Tentang Saya</a>
        <a href={Resume} target="_blank" rel="noopener noreferrer">
          Résumé
        </a>
      </nav>
      <div className="side-navigation">
        <a href="#navigasi">
          <div className={`side-navigation_item ${sideNavigasi ? 'selected' : ''}`} />
        </a>
        <a href="#karya">
          <div className={`side-navigation_item ${sideKarya ? 'selected' : ''}`} />
        </a>
        <a href="#tentang-saya">
          <div className={`side-navigation_item ${sideTentangSaya ? 'selected' : ''}`} />
        </a>
      </div>
    </>
  );
};

export default navigation;
