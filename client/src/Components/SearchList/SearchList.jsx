import React from 'react';

import * as styles from './SearchListStyles';
import SearchListItem from "./SearchListItem";


const SearchList = (props) => {
    const books = props.books.map((book, index) => {
        return (
            <div key={index}>
                <SearchListItem coverId={book.cover_i} title={book.title} showModalWindow={props.showModalWindow}/>
            </div>
        )
    })

    return (
        <styles.SearchList>
            {books}
        </styles.SearchList>
    );
};

export default SearchList;
