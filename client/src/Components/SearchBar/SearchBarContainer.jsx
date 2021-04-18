import React from 'react';
import {connect} from "react-redux";

import {searchBook} from "../../Redux/book_reducer";
import SearchBar from "./SearchBar";


const SearchBarContainer = (props) => {

    return <SearchBar {...props}/>;
};

const mapStateToProps = (state) => {
    return {
        books: state.books.foundBooks,
        inSearch: state.books.inSearch,
    }
}

export default connect(mapStateToProps, {searchBook})(SearchBarContainer);
