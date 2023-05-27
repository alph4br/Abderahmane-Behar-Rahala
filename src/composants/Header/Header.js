import React from 'react';
import './style.scss';

const Header = () => {
    return (
        <div className='header'>
            <h1><span>Abderahmane</span> | Développeur web</h1>
            <nav>
                <ul>
                    <a href="#projects"><li>Mes projets</li></a>
                    <li>|</li>
                    <a href="#contact"><li>Me contacter</li></a>
                </ul>
            </nav>
        </div>
    );
};

export default Header;