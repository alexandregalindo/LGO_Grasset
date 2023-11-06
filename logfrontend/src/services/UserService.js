// src/services/UserService.js
import axios from 'axios';

const UserService = {
    findAll: async () => {
        const backendUrl = 'http://localhost:4081';
        const response = await axios.get(`${backendUrl}/api/user`);
        return response.data;
    }
};

export default UserService;
