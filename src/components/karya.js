import React from 'react';
import { Link } from 'react-router-dom';
import dataKarya from '../mock/DataKarya';

const Karya = (props) => {
  const { karya } = props;

  return (
    <section className="karya" id="karya" ref={karya}>
      <h1>Karya</h1>
      <div className="card-wrapper">
        {dataKarya.map((dataKaryaItem) => {
          return (
            <Link to={`/karya/${dataKaryaItem.id}`} key={dataKaryaItem.id}>
              <div className="card-item">
                <div className="card-image">
                  <img src={dataKaryaItem.header_image} alt="" />
                </div>
                <div className="card-text">
                  <div className="card-text-wrapper">{dataKaryaItem.nama}</div>
                  <div className="card-tag-wrapper">
                    <div className="card-tag-item">
                      {dataKaryaItem.tag.map((tagKarya) => {
                        return <span key={tagKarya}>{tagKarya}</span>;
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Karya;
