import React from 'react';
import {connect} from "react-redux";

import * as styles from './AppStyles';
import {getFoundBooks, isShowModal} from "./selectors/book_selectors";
import {showModalWindow, hideModalWindow} from "./Redux/book_reducer";
import Logo from "./Components/Logo/Logo";
import SearchBarContainer from "./Components/SearchBar/SearchBarContainer";
import SearchListContainer from "./Components/SearchList/SearchListContainer";
import ModalWindowContainer from "./Components/ModalWindow/ModalWindowContainer";


function App(props) {
    return (
        <styles.App>
            <styles.Content>
                <Logo />
                <SearchBarContainer />
                {props.books.length > 0 && <SearchListContainer />}
                {props.isShowModal && <ModalWindowContainer />}
            </styles.Content>
        </styles.App>
    );
}

const mapStateToProps = (state) => {
    return {
        books: getFoundBooks(state),
        isShowModal: isShowModal(state),
    }
}

export default connect(mapStateToProps, {showModalWindow, hideModalWindow})(App);