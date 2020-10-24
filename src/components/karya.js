import React from 'react';
import JuraganKost from '../assets/img/03-Home v3.png';
import JSCO from '../assets/img/1-Home.png';
import Clear from '../assets/img/Screenshot 2020-10-10 143907.png';
// eslint-disable-next-line max-len
import Chevalier from '../assets/img/screencapture-file-home-matohdev-Documents-Code-Soal-Cheva-client-index-html-2020-06-10-12_07_28 1.png';

const karya = (props) => {
  return (
    <section className="karya" id="karya" ref={props.karya}>
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
              <div className="card-text-wrapper">Chevalier Recruitment Test</div>
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
  );
};

export default karya;
