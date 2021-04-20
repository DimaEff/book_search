import React from 'react';

import * as styles from './SearchListStyles';
import Cover from "../common/Cover/Cover";


const SearchListItem = (props) => {
    if (!props.title) return (
        <styles.SearchListItem>
            <styles.NotFoundMessage>
                <div>book not found</div>
            </styles.NotFoundMessage>
        </styles.SearchListItem>
    )

    return (
        <styles.SearchListItem onClick={() => props.showModalWindow(props.bookId)}>
            <span/>
            <div>
                <Cover coverId={props.coverId}/>
            </div>
            <styles.BookInfo>
                {props.title}
                <div>{props.author}</div>
            </styles.BookInfo>
        </styles.SearchListItem>
    );
};

export default SearchListItem;
