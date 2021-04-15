import React from 'react';
import {useForm} from "react-hook-form";
import {connect} from "react-redux";

import {searchBook} from "../../Redux/book_reducer";
import * as styles from './SearchBarStyles';
import useSearchOnChange from "../../custom_hooks/book_hooks";


const SearchBar = (props) => {
    const {register, handleSubmit, control} = useForm({
        mode: "onBlur",
    });

    useSearchOnChange('searchBar', control, props.searchBook, handleSubmit)

    return (
        <styles.SearchBar>
            <form>
                <input type="text" {...register('searchBar')}/>
                <button type={'submit'}>Search</button>
            </form>
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
