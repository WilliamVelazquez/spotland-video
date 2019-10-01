import React from 'react';

import Header from '../components/Header';
import Search from '../components/Search';
import Footer from '../components/Footer';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import EllipsisLoader from '../components/EllipsisLoader';

import useInitialState from '../hooks/useInitialState';
import '../assets/styles/App.scss';

const API = 'http://localhost:3000/initialState/';

const App = () => {
  const initialState = useInitialState(API);
  // console.log(initialState);
  return initialState.length === 0 ? <div style={{ display: 'flex', justifyContent: 'center' }}><EllipsisLoader /></div> : (
    <>
      <Header />
      <Search />

      {
        initialState.myList.length > 0 &&
        (
          <Categories title='My list'>
            <Carousel>
              {
                initialState.myList.map(item => (
                  <CarouselItem key={item.id} {...item} />
                ))
              }
            </Carousel>
          </Categories>
        )
      }

      {
        initialState.trends.length > 0 &&
        (
          <Categories title='Trends'>
            <Carousel>
              {
                initialState.trends.map(item => (
                  <CarouselItem key={item.id} {...item} />
                ))
              }
            </Carousel>
          </Categories>
        )
      }

      {
        initialState.originals.length > 0 &&
        (
          <Categories title='Spotland Originals'>
            <Carousel>
              {
                initialState.originals.map(item => (
                  <CarouselItem key={item.id} {...item} />
                ))
              }
            </Carousel>
          </Categories>
        )
      }

      <Footer />
    </>
  );
};

export default App;
