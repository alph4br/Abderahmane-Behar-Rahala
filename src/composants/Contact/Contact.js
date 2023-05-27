import React, { useEffect, useState } from 'react';
import './style.scss';
import axios from 'axios';

const Contact = () => {

    // Variables d'initialisations
    const [succesVisible, setSuccesVisible] = useState(false);

    // Envoyer un message
    function sendMessage(event)
    {   
        // Annuler le rechargement
        event.preventDefault();

        // Récupérer les informations du formulaire
        const name = document.querySelector('.name').value;
        const email = document.querySelector('.email').value;
        const message = document.querySelector('.message').value

        // Envoyer le message
        axios.post(process.env.REACT_APP_MESSAGERIE, {
            name: name,
            email: email,
            message: message
        })

        // Afficher le succès
        setSuccesVisible(true)
    }

    return (
        <div className='contact' id='contact'>
            <p>Me contacter</p>
            <form>
                <div>
                    <input className='name' type="text" placeholder='Votre nom'/>
                    <input className='email' type="text" placeholder='Votre adresse électronique'/>
                </div>
                <textarea className='message' placeholder=' Votre message...' rows="6"></textarea>
                <div className='submitContainer'>
                    <button className='submit' onClick={sendMessage}>Envoyer</button>
                </div>
                {succesVisible ? (<p className='succes'>Le message a bien été envoyé.</p>) : ""}
            </form>
        </div>
    );
};

export default Contact;