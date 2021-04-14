import React from 'react';

import * as styles from './ModalWindowStyles';
import Cover from "../Cover/Cover";


const ModalWindow = (props) => {
    return (
        <styles.ModalWrapper onClick={props.hideModalWindow}>
            <styles.ModalWindow onClick={e => e.stopPropagation()}>

                <styles.Title>
                    {props.displayBook.title}
                </styles.Title>
                <Cover coverId={props.displayBook.coverId}/>

                <styles.BookInfo>
                    <styles.BookInfoItem area={'author'}>
                        <div>Author:</div>
                        {props.displayBook.author}
                    </styles.BookInfoItem>
                    <styles.BookInfoItem area={'publicDate'}>
                        <div>Public date:</div>
                        {props.displayBook.publicDate}
                    </styles.BookInfoItem>
                    <styles.BookInfoItem area={'publisher'}>
                        <div>Publisher:</div>
                        {props.displayBook.publisher}
                    </styles.BookInfoItem>
                    <styles.BookInfoItem area={'isbn'}>
                        <div>ISBN:</div>
                        {props.displayBook.ISBN}
                    </styles.BookInfoItem>
                </styles.BookInfo>

            </styles.ModalWindow>
        </styles.ModalWrapper>
    );
};

export default ModalWindow;
