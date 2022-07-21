import React from 'react';
import './styles.css';

// eslint-disable-next-line
export default ({item}) => {
    console.log(item);

    let largura = window.innerWidth 
    || document.documentElement.clientWidth
    || document.body.clientWidth;
    let capa = {}
    if(largura<800){
        capa = `w500${item.poster_path}`;
    }
    else{
        capa = `original${item.backdrop_path}`;
    }


    let firstDate = new Date(item.first_air_date);
    let genres = [];
    for(let i in item.genres) {
        genres.push( item.genres[i].name );
    }

    let description = item.overview;
    if(description.length > 200) {
        description = description.substring(0, 200)+'...'
    }

    return (
        <section className="featured" style={{
            backgroudSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center top',
            backgroundImage: `url(https://image.tmdb.org/t/p/${capa})`
        }}>
            <div className="featured--vertical">
                <div className="featured--horizontal">
                    <div className="featured--name">{item.name}</div>
                    <div className="featured--info">
                        <div className="featured--points">{item.vote_average}</div>
                        <div className="featured--year">{firstDate.getFullYear()}</div>
                        <div className="featured--seasons">{item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : ''}</div>
                    </div>
                    <div className="featured--description">{description}</div>
                    <div className="featured--buttons">
                        <a 
                            href={item.video} 
                            target="_blank" 
                            className="featured--watch" 
                            rel="noreferrer"
                        >
                            ► Trailer
                        </a>
                        <a href="/" className="featured--myList"><i class="fa fa-plus"/> Minha Lista</a>
                    </div>
                    <div className="featured--genres"><strong>Gêneros:</strong> {genres.join(', ') }</div>
                </div>
            </div>
        </section>
    );
}