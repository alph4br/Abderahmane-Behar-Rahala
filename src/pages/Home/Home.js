import React from 'react';
import Header from '../../composants/Header/Header';
import About from '../../composants/About/About';
import Projects from '../../composants/Projects/Projects';
import Contact from '../../composants/Contact/Contact';
import Footer from '../../composants/Footer/Footer';

const Home = () => {
    return (
        <div className='home'>
            <Header />
            <About />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;