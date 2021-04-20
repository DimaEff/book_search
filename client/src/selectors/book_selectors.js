import {createSelector} from "reselect";

export const getFoundBooks = state => state.books.foundBooks;

export const isShowModal = state => state.books.isShowModal;
export const isShowBooks = state => state.books.isShowBooks;
export const inSearch = state => state.books.inSearch;

const getDisplayBookId = state => state.books.displayBookId;
const getDisplayBookInfo = (state) => {
    const displayBookId = getDisplayBookId(state);

    return state.books.foundBooks[displayBookId];
}

export const getDisplayBook = createSelector(getDisplayBookId, getDisplayBookInfo, (__, displayBook) => {
    const notValue = ('-'.repeat(5));

    return displayBook && {
        coverId: displayBook.cover_i,
        title: displayBook.title,
        author: displayBook.author_name || notValue,
        publicDate: displayBook.first_publish_year,
        publisher: displayBook.publisher[0],
        ISBN: displayBook.isbn?.[0] || notValue,
    }
});

