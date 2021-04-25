
import { error } from '@pnotify/core';

function fetchImages(searchQuery, page) {
    const key = '21324053-9f61ed863564998c3c32e619e';
    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${page}&per_page=12&key=${key}`;

    return fetch(url)
    .then(response => response.json())
    .then(data => data.hits)
    .catch(err => error(err));
}

export default { fetchImages };