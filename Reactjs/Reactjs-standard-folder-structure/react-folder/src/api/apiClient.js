//interceptors

import axios from 'axios'
import { showToast } from '../components/common/Toast';

const apiClient = axios.create({
    baseURL: 'http://your-backend-api-url',
});

apiClient.interceptors.response.use(
    response => response,
    error => {
        showToast(error.message, 'error');
        return Promise.reject(error);
    }
);
export default apiClient;