import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

const basename = process.env.DEPLOY_TARGET === 'GH_PAGES'
  ? '/shravanvotarikari-portfolio/'
  : '/';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename={basename}>
    <App />
  </BrowserRouter>
);
