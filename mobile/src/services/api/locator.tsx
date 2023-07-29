import axios from 'axios';

const locator = axios.create({
    baseURL: 'http://maps.googleapis.com/maps/api'
});

export default locator;