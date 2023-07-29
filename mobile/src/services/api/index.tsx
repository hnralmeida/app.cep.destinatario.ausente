import axios from 'axios';

const api = axios.create({
    baseURL: 'https://overpass-api.de/api'
});

export default api;