import {bookAPI} from "../api/book_api";


const SET_BOOKS = 'SET_BOOKS';
const DISPLAY_MODAL_BOOK = 'DISPLAY_MODAL_BOOK';

const initialState = {
    foundBooks: [],
    coverId: null,
    isShowModal: false,
    displayBookId: null,
    inSearch: false,
}

const bookReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_BOOKS:
            return {
                ...state,
                foundBooks: [...action.books],
                inSearch: action.inSearch,
            }

        case DISPLAY_MODAL_BOOK:
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
    const splitTitle = title.split(' ');
    if (splitTitle.join('').length === 0) return

    dispatch(setBooks());

    const searchTitle = splitTitle.join('+');

    bookAPI.searchBook(searchTitle).then(data => {
        if (data.length === 0) {
            dispatch(setBooks(false));
            return
        }

        const books = data.slice(0, 5);
        const cover = books[0].cover_i;
        dispatch(setBooks(false, books, cover));
    })
}

export const showModalWindow = (bookId) => (dispatch) => {
    dispatch(setDisplayBook(bookId, true));
}

export const hideModalWindow = () => (dispatch) => {
    dispatch(setDisplayBook(null, false));
}

const setBooks = (inSearch = true, books = [], cover = null,) => ({type: SET_BOOKS, books, cover, inSearch});
const setDisplayBook = (bookId, isShowModal) => ({type: DISPLAY_MODAL_BOOK, bookId, isShowModal});

export default bookReducer;