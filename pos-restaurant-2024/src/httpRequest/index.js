import axios from 'axios'

const baseURL = process.env.REACT_APP_BASE_URL
const apiClient = axios.create({
    headers: {
        'Content-Type': 'application/json',
    },
    baseURL: baseURL
});

export default apiClient;
