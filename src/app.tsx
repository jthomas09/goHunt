import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import Router from './router'
import './app.css';
import Layout from './layout';

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