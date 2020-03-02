


import React, { createContext, useReducer } from 'react';

import { bookReducer } from '../reducers/bookReducer';

export const BookContext = createContext();



const BookContextProvider = props => {

    const [ books, dispatch ] = useReducer( bookReducer, [] );

    // note the fucking dot before Provider.
    // we need this dot but it sucks. 
    return (
        <BookContext.Provider value={{ books, dispatch }}>
            { props.children }
        </BookContext.Provider>
    );

} 



export default BookContextProvider;


