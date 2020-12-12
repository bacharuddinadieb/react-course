import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import { authService, produk } from '../../services';
import Cards from '../../components/cards/index';
import { imageNotfound, image } from '../../assets';
import './style.css';

const Produk = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [paginationCounter, setPaginationCounter] = useState(0);
  const [searchProduk, setSearchProduk] = useState('');
  const [dataProduk, setDataProduk] = useState([]);

  const textCutter = (text) => {
    let textFinal = text;
    if (textFinal.length >= 35) {
      textFinal = text.replace(/^(.{35}[^\s]*).*/, '$1') + ' .....';
    }
    return textFinal;
  };

  const getProduk = () => {
    produk
      .getProduk('bango', paginationCounter)
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
    produk
      .getProduk(searchProduk, paginationCounter)
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
      <div className="cari-produk-wrapper">
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
        <div className="pagination-wrapper">
          <button
            type="button"
            onClick={() => {
              setPaginationCounter(paginationCounter - 1);
              onSearchProduk();
            }}
            disabled={paginationCounter === 0 || isLoading}
          >
            {'<'}
          </button>
          <input
            value={paginationCounter}
            type="number"
            onChange={(e) => {
              if (e.target.value >= 0) {
                setPaginationCounter(e.target.value);
                onSearchProduk();
              }
            }}
            disabled={isLoading}
          />
          <button
            type="button"
            onClick={() => {
              setPaginationCounter(paginationCounter + 1);
              onSearchProduk();
            }}
            disabled={isLoading}
          >
            {'>'}
          </button>
        </div>
      </div>
      <div
        className="produk-wrapper"
        style={{ display: !isLoading ? 'none' : '' }}
      >
        {Array.from(Array(10), (e, i) => {
          return (
            <Cards style={{ fontSize: 18, lineHeight: 1.5 }} key={i}>
              <img style={{ width: '100%' }} src={image} alt="gambar" />
              <h1>
                <Skeleton />
              </h1>
              <p>
                <Skeleton />
              </p>
              <Skeleton count={4} />
            </Cards>
          );
        })}
      </div>
      <div className="produk-wrapper">
        {dataProduk.map((produk) => {
          return (
            <Cards
              style={{ fontSize: 18, lineHeight: 1.5 }}
              key={[produk.id]}
              dataProduk={produk}
            >
              {/* {
              if(produk.variants[0].images[0].product_url){
                return(<img src={}>)
              }
              } */}
              {produk.variants[0].images[0].product_url ? (
                <img
                  src={produk.variants[0].images[0].product_url}
                  alt="gambar"
                />
              ) : (
                <img src={imageNotfound} alt="gambar" />
              )}
              <h2 className="produk__header">
                {textCutter(produk.description)}
              </h2>
              {/* <h2 className="produk__header">{produk.description}</h2> */}
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
