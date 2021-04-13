import React from 'react';

import * as styles from './SearchListStyles';


const Cover = (props) => {
    return (
        <div>
            <styles.Cover src={`http://covers.openlibrary.org/b/id/${props.id}-${props.size || 'M'}.jpg`} alt={props.title}/>
        </div>
    );
};

export default Cover;
