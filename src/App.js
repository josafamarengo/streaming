import React, { useEffect, useState } from 'react';
import './App.css';
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow';
import MainMovie from './components/MainMovie';
import Header from './components/Header';


// eslint-disable-next-line
export default () => {

  const [ movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);
 
  useEffect(()=>{
    const loadAll = async () => {
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      let originals = list.filter(i=>i.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      setFeaturedData(chosenInfo);
    }

    loadAll();
  }, []);

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
    <div className="page">

      <Header black={blackHeader} />
      
      {featuredData &&
      <MainMovie item={featuredData} />
      }

      <section className="lists">
        {movieList.map((item, key)=>(
           <MovieRow key={key} title={item.title} items={item.items} />
          ))}
      </section>

      <footer>
        <ul className="social">
          <h4>Follow me on   </h4>
          <li><a href="https://github.com/josafamarengo/" alt="Github" className="github"><i class="fa fa-github-alt"></i></a></li>
          <li><a href="https://linkedin.com/in/josafamarengo/"  alt="Linkedin" className="linkedin"><i class="fa fa-linkedin"></i></a></li>
          <li><a href="https://josafa.hashnode.dev/" alt="Blog"><i class="fa fa-stack"></i></a></li>
        </ul>
        Diretos de imagem para Netflix |
        Dados pegos do site Themoviedb.org
      </footer>
      
      {movieList.length <= 0 &&
      <div className="loading">
        <img src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif" alt="Carregando" />
      </div>
      }
    </div>
  );
}