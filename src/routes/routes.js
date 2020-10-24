import Home from '../pages/Home';
import Detailkarya from '../pages/DetailKarya';

const routes = [
  {
    path: '/karya/:karyaId',
    component: Detailkarya,
  },
  {
    path: '/',
    component: Home,
  },
];

export default routes;
