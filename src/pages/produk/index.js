import React, { useState, useEffect } from 'react';
import { authService } from '../../services';
import Cards from '../../components/cards/index';
import './style.css';

const Produk = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [searchProduk, setSearchProduk] = useState('');
  const [dataProduk, setDataProduk] = useState([]);

  const textCutter = (text) => {
    let textFinal = text;
    if (textFinal.length >= 15) {
      textFinal = text.replace(/^(.{15}[^\s]*).*/, '$1') + ' .....';
    }
    return textFinal;
  };

  const getProduk = () => {
    authService
      .getProduk('bango')
      .then((res) => {
        console.log(res);
        setDataProduk(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const onSearchProduk = () => {
    setIsLoading(true);
    authService
      .getProduk(searchProduk)
      .then((res) => {
        console.log(res);
        setDataProduk(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getProduk();
  }, []);

  return (
    <div className="main-produk-wrapper">
      <h1>Halaman Produk</h1>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSearchProduk();
          }}
        >
          <label htmlFor="searchProduk">
            <input
              type="text"
              value={searchProduk}
              onChange={(e) => {
                setSearchProduk(e.target.value);
              }}
            />
          </label>
          <input type="submit" value="Cari Produk" disabled={isLoading} />
        </form>
      </div>
      <div className="produk-wrapper">
        {dataProduk.map((produk) => {
          return (
            <Cards style={{ fontSize: 18, lineHeight: 1.5 }} key={[produk.id]}>
              <h2>{textCutter(produk.description)}</h2>
              <div className="diskon-wrapper">
                <div className="diskon-wrapper__percentage">
                  {produk.display_promo_price_percentage}
                </div>
                <span className="harga-produk">
                  {produk.display_normal_price}
                </span>
              </div>
              <h3 className="harga-produk-terdiskon">{produk.display_price}</h3>
              <p>{produk.name}</p>
            </Cards>
          );
        })}
      </div>
    </div>
  );
};

export default Produk;
