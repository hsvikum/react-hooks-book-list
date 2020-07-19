import {v1 as uuidV1} from 'uuid';

export const bookReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_BOOK': 
            return [...state, {
                title: action.book.title,
                author: action.book.author,
                id: uuidV1()
            }];
        case 'REMOVE_BOOK': 
            return state.filter(book => book.id !== action.id);
        default:
            return state;
    }
}