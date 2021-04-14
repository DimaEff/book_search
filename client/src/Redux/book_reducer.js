import {bookAPI} from "../api/book_api";


const SEARCH_BOOKS = 'SEARCH_BOOKS';
const DISPLAY_BOOK = 'DISPLAY_BOOK';

const initialState = {
    foundBooks: [],
    coverId: null,
    isShowModal: false,
    displayBookId: null,
    inSearch: false,
}

const bookReducer = (state=initialState, action) => {
    switch (action.type) {
        case SEARCH_BOOKS:
            return {
                ...state,
                foundBooks: [...action.books],
            }

        case DISPLAY_BOOK:
            return {
                ...state,
                isShowModal: action.isShowModal,
                displayBookId: action.bookId,
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

export const showModalWindow = (bookId) => (dispatch) => {
    dispatch(setDisplayBook(bookId, true));
}

export const hideModalWindow = () => (dispatch) => {
    dispatch(setDisplayBook(null, false));
}

const search = (books, cover) => ({type: SEARCH_BOOKS, books, cover});
const setDisplayBook = (bookId, isShowModal) => ({type: DISPLAY_BOOK, bookId, isShowModal});

export default bookReducer;