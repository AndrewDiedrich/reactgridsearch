import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID c61dfab06dfa2dcd281863932bce1a53e0d894ef77d34907a5d10597a7b44953'
    }
});