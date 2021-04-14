import React from 'react';
import {connect} from "react-redux";

import * as styles from './AppStyles';
import SearchBar from "./Components/SearchBar/SearchBar";
import SearchList from "./Components/SearchList/SearchList";
import ModalWindow from "./Components/ModalWindow/ModalWindow";
import {getDisplayBook, getFoundBooks, isShowModal} from "./selectors/book_selectors";
import {showModalWindow, hideModalWindow} from "./Redux/book_reducer";


function App(props) {
    const showModalWindow = (bookId) => {
        props.showModalWindow(bookId);
    }

    const hideModalWindow = () => {
        props.hideModalWindow();
    }

    return (
        <styles.App>
            <styles.Content>
                <div>Search</div>
                <SearchBar/>
                {props.books.length > 0 &&
                <SearchList books={props.books} showModalWindow={showModalWindow}/>}
                {props.isShowModal && <ModalWindow displayBook={props.displayBook}
                                                   hideModalWindow={hideModalWindow}/>
                }
            </styles.Content>

        </styles.App>
    );
}

const mapStateToProps = (state) => {
    return {
        books: getFoundBooks(state),
        isShowModal: isShowModal(state),
        displayBook: getDisplayBook(state),
    }
}

export default connect(mapStateToProps, {showModalWindow, hideModalWindow})(App);