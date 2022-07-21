import React from 'react';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '../components/Header';
//import MovieCard from '../components/MovieCard';
import './Search.css';

const Search = () => {
  const [searchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const query = searchParams.get('q');
  const searchURL = `https://api.themoviedb.org/3/search/movie`;
  const apiKey = 'f4a6dcbf58552f9f7766293b247a8a38';

  const getSearchedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setMovies(data.results);
  };

  useEffect(() => {
    const searchWithQueryURL = `${searchURL}?api_key=${apiKey}&query=${query}&language=pt-BR`;
    getSearchedMovies(searchWithQueryURL);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  console.log(movies);

  return (
    <>
      <Header />
      <div className="results">
        <h1>Resultados para: {query}</h1>
        <div className="movies">
          nada
        </div>
      </div>
    </>
  )
}

export default Search