/* eslint-disable no-lone-blocks */
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './styles.css';

// eslint-disable-next-line import/no-anonymous-default-export
export default ({black}) => {
    const [search, setSearch] = React.useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if( !search ) return;
        navigate(`/search?q=${search}`);
        setSearch('');
    }

    return (
        <header className={black ? 'black' : ''}>
            <div className="header__container">
                <div>
                    <Link to="/">
                        <h1 className="header--logo">Movies</h1>
                    </Link>
                </div>
            </div>
            <form className="search-bar" onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Busque por um filme"
                    className="search-input"
                    onChange={e => setSearch(e.target.value)}
                    value={search}
                />
            </form>
            <div className="header--user">    
                    <input type="checkbox" id="active"/>
                        <label for="active" class="menu-btn"><span></span></label>
                        <label for="active" class="close"></label>
                        <div class="wrapper">
                            <ul>
                                <li><a href="https://josafa.com.br/" target="_blank" rel="noreferrer">Portfolio</a></li>
                                <li><a href="https://github.com/josafamarengo" target="_blank" rel="noreferrer">Github</a></li>
                                <li><a href="https://linkedin.com/in/josafamarengo" target="_blank" rel="noreferrer">Linkedin</a></li>
                                <li><a href="https://blog.josafa.com.br" target="_blank" rel="noreferrer">Blog</a></li>
                            </ul>
                        </div>
            </div>
        </header>
    );
}