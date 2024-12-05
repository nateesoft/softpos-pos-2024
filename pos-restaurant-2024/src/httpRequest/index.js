import axios from 'axios'

const apiClient = axios.create({
    headers: {
        'Content-Type': 'application/json',
    },
});

console.log('apiClient:', apiClient)

export default apiClient;
