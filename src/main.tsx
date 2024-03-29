import React from 'react';
import ReactDOM from 'react-dom/client';
import MainPage from './pages/MainPage/MainPage.tsx';
import '@app/index.scss';

import { Layout } from '@app/layout/Layout.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Layout>
      <MainPage />
    </Layout>
  </React.StrictMode>
);
