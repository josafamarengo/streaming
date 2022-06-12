import React from 'react';
import './Header.css';

// eslint-disable-next-line import/no-anonymous-default-export
export default ({black}) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://www.freepnglogos.com/uploads/red-netflix-logo-text-png-3.png" alt="Netflix" />
                </a>
            </div>
            <div className="nav-bar">
                    <ul className="nav-list">
                        <li>Filmes</li>
                        <li>Séries</li>
                        <li>Documentários</li>
                        <li>Minha Lista</li>
                    </ul>
                </div>
            <div className="header--user">    
                    <input type="checkbox" id="active"/>
                        <label for="active" class="menu-btn"><span></span></label>
                        <label for="active" class="close"></label>
                        <div class="wrapper">
                            <ul>
                                <li><a href="https://josafa.netlify.app/">Portfolio</a></li>
                                <li><a href="https://github.com/josafamarengo">Github</a></li>
                                <li><a href="https://linkedin.com/in/josafamarengo">Linkedin</a></li>
                                <li><a href="https://josafa.hashnode.dev">Blog</a></li>
                                <li><a href="mailto:josafabmarengo@gmail.com">Contact</a></li>
                            </ul>
                        </div>
            </div>
        </header>
    );
}