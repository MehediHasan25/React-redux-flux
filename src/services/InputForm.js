import axios from 'axios';

export const inputFormApi = async (data) => {
    let res = await axios.post(`https://jsonplaceholder.typicode.com/posts`, data);
    return res;
}

export const showDataApi = async () => {
    let res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return res;
}