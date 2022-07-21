/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Header from '../components/Header';
import MovieCard from "../components/MovieCard";

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
    const pathMovie = `movie/${id}?api_key=${apiKey}&language=pt-BR`;
    const pathSerie = `tv/${id}?api_key=${apiKey}&language=pt-BR`;
    const movieUrl = `${moviesURL}${movie.media_type === 'movie' ? pathMovie : pathSerie}`;
    console.log(movieUrl);
    getMovie(movieUrl);
  }, []);

  return (
    <div className="movie-page">
      <Header black={blackHeader} />
      {movie && (
        <>
          <MovieCard movie={movie} showLink={false} />
          
          <div className="movie-info">
            <h2>{movie.title}</h2>
            <p className="tagline">{movie.tagline}</p>
            <p className="overview">{movie.overview}</p>
            <p className="runtime">{movie.runtime} min</p>
            <p className="year"><span>Ano: </span>{movie.release_date.split('-')[0]}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Movie;
