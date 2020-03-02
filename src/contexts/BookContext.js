


import React, { createContext, useReducer, useEffect } from 'react';

import { bookReducer } from '../reducers/bookReducer';

export const BookContext = createContext();



const BookContextProvider = props => {

    const [ books, dispatch ] = useReducer( bookReducer, [], () => {
        const localData = localStorage.getItem( 'booklist_books' );
        return localData ? JSON.parse(localData) : [];
    });

    useEffect( 
        
        () => {
            localStorage.setItem( 'booklist_books', JSON.stringify( books ) );
        }, 

        [ books ]
    );

    // note the fucking dot before Provider.
    // we need this dot but it sucks. 
    return (
        <BookContext.Provider value={{ books, dispatch }}>
            { props.children }
        </BookContext.Provider>
    );

} 



export default BookContextProvider;


