import React from 'react';
import Resume from '../assets/pdf/Bacharuddin Adieb Pratama_CV.pdf';

const navigation = (props) => {
  return (
    <>
      <nav id="navigasi" ref={props.navigasi}>
        <a href="#navigasi">Beranda</a>
        <a href="#karya">Karya</a>
        <a href="#tentang-saya">Tentang Saya</a>
        <a href={Resume} target="_blank" rel="noreferrer">
          Résumé
        </a>
      </nav>
      <div className="side-navigation">
        <a href="#navigasi">
          <div className={`side-navigation_item ${props.sideNavigasi ? 'selected' : ''}`} />
        </a>
        <a href="#karya">
          <div className={`side-navigation_item ${props.sideKarya ? 'selected' : ''}`} />
        </a>
        <a href="#tentang-saya">
          <div className={`side-navigation_item ${props.sideTentangSaya ? 'selected' : ''}`} />
        </a>
      </div>
    </>
  );
};

export default navigation;
