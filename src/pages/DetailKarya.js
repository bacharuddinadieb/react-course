import React from 'react';
import { useParams } from 'react-router-dom';

const DetailKarya = () => {
  const params = useParams();
  const { karyaId } = params;
  return (
    <div>
      <h1>Detail Karya</h1>
      <div>
        <span>{`hello ${karyaId}`}</span>
      </div>
    </div>
  );
};

export default DetailKarya;
