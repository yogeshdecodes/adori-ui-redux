import axios from 'axios';

const url = 'https://api.jsonbin.io/b/612b26502aa8003612719f46';

export const fetchPost = () => axios.get(url);
