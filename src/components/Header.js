import React from 'react';
import './Header.css';

export default ({black}) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://www.freepnglogos.com/uploads/red-netflix-logo-text-png-3.png" alt="Netflix" />
                </a>
            </div>
            <div className="header--user">
                <a href="">
                    
                    <input type="checkbox" id="active"/>
                        <label for="active" class="menu-btn"><span></span></label>
                        <label for="active" class="close"></label>
                        <div class="wrapper">
                            <ul>
                                <li><a href="#">Portfolio</a></li>
                                <li><a href="https://github.com/josafamarengo">Github</a></li>
                                <li><a href="https://linkedin.com/in/josafamarengo">Linkedin</a></li>
                                <li><a href="https://josafa.hashnode.dev">Blog</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                </a>
            </div>
        </header>
    );
}