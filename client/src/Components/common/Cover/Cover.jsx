import React from 'react';

import * as styles from './CoverStyles';
import defaultBookCover from '../../../assets/img/book.svg';


const Cover = (props) => {
    return (
        <styles.Cover>
            <img
                src={props.coverId ? `http://covers.openlibrary.org/b/id/${props.coverId}-${props.size || 'M'}.jpg`: defaultBookCover}
                alt={props.title}
            />
        </styles.Cover>
    );
};

export default Cover;
