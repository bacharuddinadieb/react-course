import React from 'react';

const hero = () => {
  return (
    <header>
      <div className="header_text-wrapper">
        <h1>
          Halo, nama saya
          <br />
          Bacharuddin
          <span> Adieb </span>
          Pratama
          <br />
          &amp; saya seorang
          <span> Front End Developper.</span>
        </h1>
      </div>
      <div className="header_scroll-wrapper" id="scroll-wrapper">
        <a href="#karya">
          <span>Gulir ke bawah</span>
          <div className="scroll-line" />
        </a>
      </div>
    </header>
  );
};

export default hero;
