import React from 'react';
import {connect} from "react-redux";

import * as styles from './AppStyles';
import SearchBar from "./Components/SearchBar/SearchBar";
import SearchList from "./Components/SearchList/SearchList";
import Cover from "./Components/SearchList/Cover";


function App(props) {

    return (
        <styles.App>
            <div>Search</div>
            <SearchBar/>
            {props.books.length > 0 && <SearchList books={props.books} />}
        </styles.App>
    );
}

const mapStateToProps = (state) => {
    return {
        books: state.books.foundBooks,
        coverId: state.books.coverId,
    }
}

export default connect(mapStateToProps, {})(App);