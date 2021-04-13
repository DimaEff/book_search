import React from 'react';
import {useForm} from "react-hook-form";
import {connect} from "react-redux";

import {searchBook} from "../../Redux/book_reducer";


const SearchBar = (props) => {
    const {register, handleSubmit} = useForm({
        mode: "onBlur",
    })

    const search = (data) => {
        props.searchBook(data.searchBar)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(search)}>
                <input type="text" {...register('searchBar')}/>
                <button type={'submit'}>Search</button>
            </form>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        books: state.books.foundBooks,
        inSearch: state.books.inSearch,
    }
}

export default connect(mapStateToProps, {searchBook})(SearchBar);
