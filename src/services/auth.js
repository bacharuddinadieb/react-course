import BaseService from './baseService';
import API from '../config/rest';

const login = (username, password) => {
  return BaseService.post(API.LOGIN, { username, password });
};

const getProduk = (namaProduk, offsetProduk) => {
  return BaseService.get(API.PRODUK, {
    params: {
      limit: 10,
      offset: offsetProduk,
      search: namaProduk,
    },
  });
};

export default { login, getProduk };
