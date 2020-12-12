import BaseService from './baseService';
import API from '../config/rest';

const login = (username, password) => {
  return BaseService.post(API.LOGIN, { username, password });
};

const getProduk = (namaProduk) => {
  return BaseService.get(API.PRODUK, {
    params: {
      limit: 10,
      offset: 0,
      search: namaProduk,
    },
  });
};

export default { login, getProduk };
