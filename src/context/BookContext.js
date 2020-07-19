import React, { createContext, useEffect, useReducer } from 'react';
import { bookReducer } from '../reducers/bookReducer';
export const BookContext = createContext();

const BookContextProvider = (props) => {

    const [books, dispatch] = useReducer(bookReducer, [], () => {
        const localData = localStorage.getItem('books');
        return localData ? JSON.parse(localData) : [];
    });

    useEffect(() => {
        localStorage.setItem('books', JSON.stringify(books));
    }, [books]);

    // const [books, setBooks] = useState([
    //     {title: 'book 1', author: 'auth 1', id: 1},
    //     {title: 'book 2', author: 'auth 2', id: 2},
    // ]);
    // const addBook = (title, author) => {
    //     setBooks([...books, {title, author, id: uuidV1()}]);
    // }
    // const removeBook = (id) => {
    //     setBooks(books.filter(book => book.id !== id));
    // }

    return (
        <BookContext.Provider value={{books, dispatch}}>
            { props.children }
        </BookContext.Provider>
    );
}
 
export default BookContextProvider;