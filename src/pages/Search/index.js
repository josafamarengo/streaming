import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '../../components/Header';
//import MovieCard from '../components/MovieCard';
import './Search.css';

const Search = () => {
  const [searchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [blackHeader, setBlackHeader] = useState(false);
  const query = searchParams.get('q');
  const searchURL = `https://api.themoviedb.org/3/search/movie`;
  const apiKey = 'f4a6dcbf58552f9f7766293b247a8a38';

  const getSearchedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setMovies(data.results);
  };

  useEffect(() => {
    const searchWithQueryURL = `${searchURL}?api_key=${apiKey}&query=${query}&language=pt-BR&sort_by=vote_average.desc`;
    getSearchedMovies(searchWithQueryURL);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

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

  return (
    <>
      <Header black={blackHeader} />
      <div className="results">
        <h1>Resultados para: {query}</h1>
        <div className="movies">
          {movies.map((movie) => (
            <Link to={`/movie/${movie.id}`}>
              <div key={movie.id} className="movie">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                <div className="movie-info">
                  <h2>{movie.title}</h2>
                  <div className="details">
                    <p className="rating">{movie.vote_average.toFixed(1)}</p>
                    <p className="year">{movie.release_date.split('-')[0]}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

export default Search