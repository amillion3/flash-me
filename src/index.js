import ReactDOM from 'react-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import './index.scss';

import { makeMainRoutes } from './routes';

const routes = makeMainRoutes();

ReactDOM.render(
  routes,
  document.getElementById('root')
);
