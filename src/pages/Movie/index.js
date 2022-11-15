/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Header from '../../components/Header';
import MovieCard from "../../components/MovieCard";
import Cover from "../../components/Cover";

import { AiOutlineStar, AiOutlineClockCircle, AiOutlineCalendar } from "react-icons/ai";

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
        <div class="movie">
          <Cover movie={movie} className="movie-cover"/>

          <div class="movie-container">

            <MovieCard movie={movie} showLink={false} className="movie-card" />
            
            <div className="movie-info">
              <h2 class="movie-title">{movie.title}</h2>
              <div className="details">
                <div className="detail">
                  <AiOutlineStar className="icon" />
                  <p className="rating">{movie.vote_average.toFixed(1)}</p>
                </div>
                <div className="detail">
                  <AiOutlineClockCircle className="icon" />
                  <p className="runtime">{movie.runtime} min</p>
                </div>
                <div className="detail">
                  <AiOutlineCalendar className="icon" />
                  <p className="year">{movie.release_date.split('-')[0]}</p>
                </div>
              </div>
              <div className="genres">
                {movie.genres.map((genre) => (
                  <p className="genre">{genre.name}</p>
                ))}
              </div>
              <p className="overview">{movie.overview}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Movie;
