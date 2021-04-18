import React from 'react';
import {useForm} from "react-hook-form";

import * as styles from './SearchBarStyles';
import useSearchOnChange from "../../custom_hooks/book_hooks";
import searchIcon from "../../assets/img/searchIcon.svg";


const SearchBar = (props) => {
    const {register, handleSubmit, control} = useForm({
        mode: "onBlur",
    });

    useSearchOnChange('searchBar', control, props.searchBook, handleSubmit)

    const onSubmit = (data) => {
        props.searchBook(data.searchBar)
    }

    return (
        <styles.SearchBar inSearch={props.inSearch} onSubmit={handleSubmit(onSubmit)}>
                <input type="text" autoComplete={'off'} {...register('searchBar')}/>
                <div/>
                <styles.SearchButton type={'submit'}>
                    <img src={searchIcon} alt=""/>
                </styles.SearchButton>
        </styles.SearchBar>
    );
};

export default SearchBar;
