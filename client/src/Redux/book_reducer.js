import {bookAPI} from "../api/book_api";


const SEARCH_BOOKS = 'SEARCH_BOOKS';
const IN_SEARCH = 'IN_SEARCH';

const initialState = {
    foundBooks: [{title: 'My book', author: 'I`m'},],
    coverId: null,
    inSearch: false,
}

const bookReducer = (state=initialState, action) => {
    switch (action.type) {
        case SEARCH_BOOKS:
            return {
                ...state,
                foundBooks: [...action.books],
                coverId: action.cover,
            }

        case IN_SEARCH:
            return {
                ...state,
                inSearch: action.inSearch,
            }

        default:
            return state
    }
}

export const searchBook = (title) => (dispatch) => {
    const searchTitle = title.split(' ').join('+');
    bookAPI.searchBook(searchTitle).then(data => {
        const books = data.slice(0, 5);
        const cover = books[0].cover_i;
        dispatch(search(books, cover));
    })
}

const search = (books, cover) => ({type: SEARCH_BOOKS, books, cover});
const inSearch = (inSearch) => ({type: IN_SEARCH, inSearch});

export default bookReducer;