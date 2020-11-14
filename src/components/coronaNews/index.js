import React, { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import app from '../../services/firebase';
import Cards from '../cards';
import 'firebase/database';
import './style.css';

const convertTanggalKeLocale = (tanggal) => {
  const tanggalLokal = new Date(tanggal).toLocaleString('id-ID', {
    dateStyle: 'full',
  });
  return tanggalLokal;
};

const CoronaNews = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const db = app.database().ref('news');
    db.on('value', (snapshot) => {
      const firebaseNews = snapshot.val();
      setNews(firebaseNews.data);
      setIsLoading(false);
    });
  }, []);
  return (
    <div>
      <h2>data corona</h2>
      <div className="corona__news-wrapper">
        <div
          className={`corona__news-skeleton-wrapper ${
            isLoading ? '' : 'hidden'
          }`}
        >
          {[...Array(8)].map(() => {
            const panjangNews = Math.floor(Math.random() * (5 - 2) + 2);
            return (
              <div>
                <h1 style={{ marginTop: '2em', maxWidth: '40%' }}>
                  <Skeleton />
                </h1>
                <div className="news-wrapper">
                  {[...Array(panjangNews)].map(() => {
                    return (
                      <Cards style={{ fontSize: 18, lineHeight: 1.5 }}>
                        <h1>
                          <Skeleton />
                        </h1>
                        <Skeleton count={5} />
                      </Cards>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        {news.map((newsItem) => {
          return (
            <div>
              <h1 style={{ marginTop: '2em' }}>
                {convertTanggalKeLocale(newsItem.date)}
              </h1>
              <div className="news-wrapper">
                {newsItem.activity.map((activityItem) => {
                  return (
                    <a href={activityItem.url} target="_blank" rel="noreferrer">
                      <Cards>
                        <h2 className="news-title">{activityItem.title}</h2>
                        <p className="news-description">{activityItem.desc}</p>
                      </Cards>
                    </a>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CoronaNews;
