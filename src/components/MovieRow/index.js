import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

//eslint-disable-next-line
export default ({title, items}) => {
    const [scrollX, setScrollX] = useState(0);
    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);
        if(x > 0) {
            x = 0;
        }
        setScrollX(x);
    }

    const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listW = items.results.length * 150
        if((window.innerWidth - listW) > x) {
            x = (window.innerWidth - listW) - 60;
        }
        setScrollX(x);
    }

    return (
        <div className="movieRow">
            <h2>{title}</h2>
            <div className="movieRow--left" onClick={handleLeftArrow}></div>
            <div className="movieRow--right" onClick={handleRightArrow}></div>
            <div className="movieRow--listarea">
                <div className="movieRow--list" style={{
                    marginLeft: scrollX,
                    width: items.results.length * 150
                }}>
                    {items.results.length > 0 && items.results.map((item, key)=> (
                        <div key={key} className="movieRow--item">
                            <Link to={`/movie/${item.id}`}>
                                <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} className="movieRow__poster"/>
                            </Link>
                        </div>
                    ))}
                </div>      
            </div>
        </div>
    );
}