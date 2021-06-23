import React from 'react';
import './HomeScreen.css';
import Nav from './components/Nav';
import Banner from './components/Banner';
import requests from './Requests';
import Row from './components/Row';

function HomeScreen() {
  return (
    <div className='homeScreen'>
      {/* Navbar */}
      <Nav />

      {/* Banner */}
      <Banner />

      {/* Row */}
      <Row
        title='NETFLIX ORIGINALS'
        fetchURL={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row
        title='COMEDIES'
        fetchURL={requests.fetchComedyMovies}
      />
      <Row
        title='TOP-RATED MOVIES'
        fetchURL={requests.fetchTopRated}
      />
      <Row
        title='ROMANTIC MOVIES'
        fetchURL={requests.fetchRomanceMovies}
      />
      <Row
        title='DOCUMENTARIES'
        fetchURL={requests.fetchDocumentaries}
      />
      <Row
        title='NETFLIX ORIGINALS'
        fetchURL={requests.fetchNetflixOriginals}
        isLargeRow
      />

    </div>
  )
}

export default HomeScreen
