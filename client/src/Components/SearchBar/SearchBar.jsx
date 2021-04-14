import React, {useEffect, useState} from 'react';
import {useForm, useWatch} from "react-hook-form";
import {connect} from "react-redux";

import {searchBook} from "../../Redux/book_reducer";
import * as styles from './SearchBarStyles';


const SearchBar = (props) => {
    const [timerId, setTimerId] = useState(null);

    const {register, handleSubmit, control} = useForm({
        mode: "onBlur",
    })

    let test = (data) => {
        let searchId = setTimeout(() => props.searchBook(data.searchBar), 1000, data);
        setTimerId(searchId)
    };
    const testSetTimeout = (data) => {
        clearTimeout(timerId);
        test(data)
    }

    const searchBar = useWatch({ control, name: 'searchBar' })

    useEffect(() => {
        if(searchBar && searchBar.length > 0) {
            handleSubmit(data => testSetTimeout(data))()
        }
    }, [searchBar, handleSubmit])

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
