import React from 'react';

import * as styles from './SearchListStyles';
import Cover from "../Cover/Cover";


const SearchListItem = (props) => {
    return (
        <styles.SearchListItem onClick={() => props.showModalWindow(props.bookId)}>
            <div>
                <Cover coverId={props.coverId}/>
            </div>
            <div>{props.title}</div>
        </styles.SearchListItem>
    );
};

export default SearchListItem;
