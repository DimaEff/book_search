import React from 'react';
import {useForm} from "react-hook-form";
import {connect} from "react-redux";

import {searchBook} from "../../Redux/book_reducer";
import * as styles from './SearchBarStyles';
import useSearchOnChange from "../../custom_hooks/book_hooks";
import searchIcon from "../../assets/img/searchIcon.svg";


const SearchBar = (props) => {
    const {register, handleSubmit, control} = useForm({
        mode: "onBlur",
    });

    useSearchOnChange('searchBar', control, props.searchBook, handleSubmit)

    const onSubmit = (data) => {
        props.searchBook()
    }

    return (
        <styles.SearchBar onSubmit={handleSubmit(onSubmit)}>
                <input type="text" autoComplete={'off'} {...register('searchBar')}/>
                <div/>
                <styles.SearchButton type={'submit'}>
                    <img src={searchIcon} alt=""/>
                </styles.SearchButton>
        </styles.SearchBar>
    );
};

const mapStateToProps = (state) => {
    return {
        books: state.books.foundBooks,
        inSearch: state.books.inSearch,
    }
}

export default connect(mapStateToProps, {searchBook})(SearchBar);
