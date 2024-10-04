import React from 'react';
import './Home.scss';
import Gallery from '../../components/Gallery';

function Home() {
  return (
    <div className="home">
      <div className="title1">
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
      <Gallery />
    </div>
  )
}

export default Home;

