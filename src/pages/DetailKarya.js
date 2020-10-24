import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import DataKarya from '../mock/DataKarya';
import arrowLeft from '../assets/icons/arrow-left.svg';

const kontainerGambar = (gambar) => {
  return (
    <div className="card-image detail-karya-image" key={gambar} style={{ marginTop: '1rem' }}>
      <img src={gambar} alt="" />
    </div>
  );
};

const kontainerTeks = (teks) => {
  return (
    <div className="detail-karya-teks" key={teks}>
      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {teks}
      </p>
    </div>
  );
};

const DetailKarya = () => {
  const params = useParams();
  const { karyaId } = params;
  const dataKarya = DataKarya.filter((karya) => {
    return karya.id === karyaId;
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <nav id="navigasi-detail-karya">
        <Link to="/">
          <img src={arrowLeft} alt="" />
        </Link>
      </nav>
      <section style={{ marginBottom: '10vh' }}>
        <h1 style={{ marginTop: 0 }}>{dataKarya[0].nama}</h1>
        <div>
          {dataKarya[0].detail_karya.map((karya) => {
            switch (karya.tipe) {
              case 'gambar':
                return kontainerGambar(karya.gambar);

              case 'teks':
                return kontainerTeks(karya.teks);

              default:
                return '';
            }
          })}
        </div>
      </section>
    </div>
  );
};

export default DetailKarya;
