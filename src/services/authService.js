import api from './api';

export default {
    async register(userData) {
        const response = await api.post('/Auth/register', userData);
        return response.data;
    },

    async login(credentials) {
        const response = await api.post('/Auth/login', credentials);
        return response.data;
    }
};