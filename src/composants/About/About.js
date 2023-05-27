import React from 'react';
import './style.scss';

const About = () => {
    return (
        <div className='about'>
            <p><span>Hi</span>, je suis Abderahmane.</p>
            <p>Le code est un pouvoir</p>
            <p>Je suis né en France, à Marseille. J'ai grandi en ayant adopté en moi, un esprit de perfection dans tout ce que je fais. J'aime le sport, le développement web, la stratégie et le gaming. Et enfin, sachez, qu' il n'y en a pas deux comme moi.</p>
            <div className='socials'>
                <a href="https://github.com/alph4br" target='_blank'><i className="fa-brands fa-github"></i></a>
                <a href="https://www.linkedin.com/in/abderahmanebeharrahala/" target='_blank'><i className="fa-brands fa-linkedin"></i></a>
                <a href="mailto:a.beharrahala@gmail.com"><i className="fa-regular fa-envelope"></i></a>
            </div>
        </div>
    );
};

export default About;