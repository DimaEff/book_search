import React, {useState} from 'react';
import {connect} from "react-redux";

import * as styles from './AppStyles';
import SearchBar from "./Components/SearchBar/SearchBar";
import SearchList from "./Components/SearchList/SearchList";
import ModalWindow from "./Components/ModalWindow/ModalWindow";


function App(props) {
    const [showModal, setShowModal] = useState(false)

    const showModalWindow = () => {
        setShowModal(true);
    }

    const hideModalWindow = (e) => {
        if (e) setShowModal(false)
    }

    return (
        <styles.App>
            <styles.Content>
                <div>Search</div>
                <SearchBar/>
                {props.books.length > 0 &&
                <SearchList books={props.books} showModalWindow={showModalWindow}/>}
                {showModal && <ModalWindow coverId={1329}
                                           title={'My book'}
                                           author={'Me'}
                                           publicDate={'today'}
                                           publisher={'MePub'}
                                           ISBN={'12345'}
                                           hideModalWindow={hideModalWindow}/>
                }
            </styles.Content>

        </styles.App>
    );
}

const mapStateToProps = (state) => {
    return {
        books: state.books.foundBooks,
        coverId: state.books.coverId,
    }
}

export default connect(mapStateToProps, {})(App);