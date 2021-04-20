import React from 'react';
import {connect} from "react-redux";

import {searchBook} from "../../Redux/book_reducer";
import SearchBar from "./SearchBar";
import {getFoundBooks, inSearch} from "../../selectors/book_selectors";


const SearchBarContainer = (props) => {

    return <SearchBar {...props}/>;
};

const mapStateToProps = (state) => {
    return {
        books: getFoundBooks(state),
        inSearch: inSearch(state),
    }
}

export default connect(mapStateToProps, {searchBook})(SearchBarContainer);
