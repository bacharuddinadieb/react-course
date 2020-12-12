import BaseService from './baseService';
import API from '../config/rest';

const getProduk = (namaProduk, offsetProduk) => {
  return BaseService.get(API.PRODUK, {
    params: {
      limit: 10,
      offset: offsetProduk,
      search: namaProduk,
    },
  });
};

export default { getProduk };
