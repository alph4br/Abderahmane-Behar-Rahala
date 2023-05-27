import React, { useEffect, useState } from 'react';
import './style.scss';
import axios from 'axios';

const Projects = () => {

    // Variables d'initialisation
    const [projects, setProjects] = useState([]);

    // Récupérer les projets et le enregistrer
    useEffect(() => {
        axios.get("https://portfolio-beharrahala-default-rtdb.europe-west1.firebasedatabase.app/projects.json")
            .then((projects) => setProjects(projects.data))
            .catch((err) => console.log(err))
    });

    return (
        <div className='projects' id='projects'>
            <p>Mes projets</p>
            <div className='allProjects'>
                {projects.map((project) => (
                    <a href={project.url} target='_blank' key={project.id}>
                        <div className='project'>
                            <img src={project.image} alt="" />
                            <div className='description'>
                                <p>{project.title}</p>
                            </div> 
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Projects;