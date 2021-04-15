import {useEffect, useState} from "react";
import {useWatch} from "react-hook-form";


const useSearchOnChange = (inputName, control, handleSearch, handleFormSubmit) => {
    const [timerId, setTimerId] = useState(null);
    const inputWatch = useWatch({ control, name: inputName });

    const setTimeoutSearch = (data) => {
        clearTimeout(timerId);
        let searchId = setTimeout(() => handleSearch(data.searchBar), 1000, data);
        setTimerId(searchId);
    }

    useEffect(() => {
        if(inputWatch && inputWatch.length > 0) {
            handleFormSubmit(data => setTimeoutSearch(data))()
        }
    }, [inputWatch, handleFormSubmit]);
}

export default useSearchOnChange;