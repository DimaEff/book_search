import * as axios from 'axios';

// const instance = axios.create({
//     baseURL: 'http://openlibrary.org/',
// });

export const bookAPI = {
    searchBook(title) {
        return axios.get(`https://openlibrary.org/search.json?title=${title}`)
            .then(response => response.data.docs);
    },
}