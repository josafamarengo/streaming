/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Header from '../../components/Header';
import MovieCard from "../../components/MovieCard";

import "./Movie.css";

const moviesURL = "https://api.themoviedb.org/3/";
const apiKey = 'f4a6dcbf58552f9f7766293b247a8a38';

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  const getMovie = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    setMovie(data);
  };

  useEffect(()=>{
    const scrollListener = () => {
      if(window.scrollY > 10){
        setBlackHeader(true);
      } else {
        setBlackHeader(false);  
      }
    }

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, []);

  useEffect(() => {
    getMovie(`${moviesURL}movie/${id}?api_key=${apiKey}&language=pt-BR`);
  }, []);

  return (
    <div className="movie-page">
      <Header black={blackHeader} />
      {movie && (
        <>
          <MovieCard movie={movie} showLink={false} className="movie-card" />
          
          <div className="movie-info">
            <h2>{movie.title}</h2>
            <div className="details">
              <p className="rating">{movie.vote_average.toFixed(1)}</p>
              <p className="runtime">{movie.runtime} min</p>
              <p className="year">{movie.release_date.split('-')[0]}</p>
            </div>
            <p className="tagline">{movie.tagline}</p>
            <p className="overview">{movie.overview}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Movie;
