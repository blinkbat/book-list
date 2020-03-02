


import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';



const NavBar = () => {

    const { books } = useContext( BookContext );


    return (

        <div className="navbar">

            <h1><span aria-label="books" role="img">📚</span> Read More, Idiot.</h1>

            <p><small>You currently have { books.length } books to read. Get cracking.</small></p>

        </div>

    );

}

export default NavBar;