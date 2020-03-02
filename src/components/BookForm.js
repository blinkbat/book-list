


import React, { useContext, useState } from 'react';

import { BookContext } from '../contexts/BookContext';


const BookForm = () => {

    const { dispatch } = useContext( BookContext );

    const [ title, setTitle ] = useState( '' );
    const [ author, setAuthor ] = useState( '' );
    const [ error, setError ] = useState( '' );

    const handleSubmit = e => {

        e.preventDefault();

        if( title && author ) {

            dispatch({ type:'ADD_BOOK', book: { title, author } });

            setTitle( '' );
            setAuthor( '' );
            setError( '' );

        } else {
            setError( 'Provide both author and title.' );
        }
    }

    return (
        <form>

            <input 
                type="text" 
                placeholder="A great book..." 
                value={ title }
                onChange={ e => setTitle( e.target.value ) }
                required
            />

            <input 
                type="text" 
                placeholder="Written by..." 
                value={ author }
                onChange={ e => setAuthor( e.target.value ) }
                required
            />

            <input type="submit" value="Add da Book!" onClick={ handleSubmit } />

            <div style={{ color: 'red', textAlign: 'center' }}>{ error }</div>

        </form>
    );

}



export default BookForm;