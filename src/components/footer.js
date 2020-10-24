import React from 'react';

const footer = (props) => {
  return (
    <section className="tentang-saya" id="tentang-saya" ref={props.tentangSaya}>
      <h1>Katakan Haloo...</h1>
      <div className="tentang-wrapper">
        <div className="image-wrapper hidden-desktop" />
        <div className="information-wrapper">
          <h1>hello@adieb.id</h1>
          <div className="line" />
          <p className="text-deskripsi">
            Saya gemar sekali mendesain, mengembangkan website, mempelajari teknologi terbaru
            mengenai website, serta mengajar. Sekarang ini saya masih belajar di Universitas Telkom
            di bidang Informatika.
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
  );
};

export default footer;
