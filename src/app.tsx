import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import Router from './views/router'
import './app.css';
import Layout from './views/layout';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Router />
      </Layout>
    </BrowserRouter>
  );
}

export default App;