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
  const [serie, setSerie] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  const getSerie = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    setSerie(data);
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
    getSerie(`${moviesURL}tv/${id}?api_key=${apiKey}`);
  }, []);

  return (
    <div className="serie-page">
      <Header black={blackHeader} />
      {serie && (
        <>
          <MovieCard movie={serie} showLink={false} />
          
          <div className="serie-info">
            <h2>{serie.title}</h2>
            <p className="tagline">{serie.tagline}</p>
            <p className="overview">{serie.overview}</p>
            <p className="runtime">{serie.runtime} min</p>
            <p className="year"><span>Ano: </span>{serie.release_date.split('-')[0]}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Movie;
