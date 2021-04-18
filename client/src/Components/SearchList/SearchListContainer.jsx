import React from 'react';
import {connect} from "react-redux";

import SearchList from "./SearchList";
import {getFoundBooks} from "../../selectors/book_selectors";
import {showModalWindow} from "../../Redux/book_reducer";


const SearchListContainer = (props) => {
    return <SearchList {...props}/>;
};

const mapStateToProps = (state) => {
    return {
        books: getFoundBooks(state),
    }
}

export default connect(mapStateToProps, {showModalWindow})(SearchListContainer);
