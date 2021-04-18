import React from 'react';
import {connect} from "react-redux";

import ModalWindow from "./ModalWindow";
import {getDisplayBook} from "../../selectors/book_selectors";
import {hideModalWindow} from "../../Redux/book_reducer";


const ModalWindowContainer = (props) => {
    return <ModalWindow {...props}/>;
};

const mapStateToProps = (state) => {
    return {
        displayBook: getDisplayBook(state),
    }
}

export default connect(mapStateToProps, {hideModalWindow})(ModalWindowContainer);
