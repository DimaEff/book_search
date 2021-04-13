import React from 'react';

import * as styles from './SearchListStyles';
import Cover from "./Cover";


const SearchListItem = (props) => {
    return (
        <styles.SearchListItem>
            <div>
                <Cover id={props.coverId}/>
            </div>
            <div>{props.title}</div>
        </styles.SearchListItem>
    );
};

export default SearchListItem;
