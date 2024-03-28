import React from 'react'
import ReactDOM from 'react-dom/client'
import Main from './pages/Main.tsx'
import './app/index.scss'

import {Layout} from "@app/layout/Layout.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Layout>
      <Main />
    </Layout>
  </React.StrictMode>,
);
