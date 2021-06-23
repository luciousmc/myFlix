import axios from '../axios';
import React, { useEffect, useState } from 'react';
import './Banner.css';
import requests from '../Requests';

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]
      )
      return request;
    }

    fetchData();

  }, [])

  console.log(movie)

  const truncate = (string, n) => {
    if(!string) return;

    if (string.length > n) {
      const newStr = string.substr(0, n - 1) + '...';
      return newStr;
    }
    return string;
  }



  return (
    <section
      className='banner'
      style={{
        backgorundSize: 'cover',
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: 'center top'
      }}
    >
      
      <div className="banner__contents">
        <h1 className="banner__title">{movie?.title || movie?.name || movie?.original_name}</h1>

        <div className="banner__buttons">
          <button className='banner__button'>Play</button>
          <button className='banner__button'>My List</button>
        </div>

        <h1 className="banner__description">
          {truncate(`${movie?.overview}`, 150)}
        </h1>

      </div>
      <div className="banner--fadeBottom" />

    </section>
  )
}

export default Banner;
