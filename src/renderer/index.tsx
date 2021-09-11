import './tailwind.css';
import '../i18n';

import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

import { App } from './app/App';

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('root')
);
