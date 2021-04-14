import React from 'react';

import * as styles from './ModalWindowStyles';
import Cover from "../Cover/Cover";


const ModalWindow = (props) => {
    return (
        <styles.ModalWrapper onClick={props.hideModalWindow}>
            <styles.ModalWindow onClick={e => e.stopPropagation()}>
                <Cover coverId={props.coverId}/>
                <styles.BookInfo>
                    <styles.InfoString>
                        {props.title}
                    </styles.InfoString>
                    <styles.InfoString>
                        <div>
                            {props.author}
                        </div>
                        <div>
                            {props.publicDate}
                        </div>
                    </styles.InfoString>
                    <styles.InfoString>
                        <div>
                            {props.publisher}
                        </div>
                        <div>
                            {props.ISBN}
                        </div>
                    </styles.InfoString>
                </styles.BookInfo>
            </styles.ModalWindow>
        </styles.ModalWrapper>
    );
};

export default ModalWindow;
