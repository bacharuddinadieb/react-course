import React from 'react';
import { Link } from 'react-router-dom';
import dataKarya from '../mock/DataKarya';

const karya = (props) => {
  return (
    <section className="karya" id="karya" ref={props.karya}>
      <h1>Karya</h1>
      <div className="card-wrapper">
        {dataKarya.map((karya) => {
          return (
            <Link to={`/karya/${karya.id}`} key={karya.id}>
              <div className="card-item">
                <div className="card-image">
                  <img src={karya.header_image} alt="" />
                </div>
                <div className="card-text">
                  <div className="card-text-wrapper">{karya.nama}</div>
                  <div className="card-tag-wrapper">
                    <div className="card-tag-item">
                      {karya.tag.map((tagKarya) => {
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

export default karya;
