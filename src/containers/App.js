import React from 'react';

import Header from '../components/Header';
import Search from '../components/Search';
import Footer from '../components/Footer';
import EllipsisLoader from '../components/EllipsisLoader';

import useInitialState from '../hooks/useInitialState';
import '../assets/styles/App.scss';

const API = 'http://localhost:3000/initialState/';

const App = () => {
  const initialState = useInitialState(API);
  return initialState.length === 0 ? <div style={{ display: 'flex', justifyContent: 'center' }}><EllipsisLoader /></div> : (
    <>
      <Header />
      <Search />
      <Footer />
    </>
  );
};

export default App;
