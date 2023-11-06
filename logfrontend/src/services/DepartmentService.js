// src/services/DepartmentService.js
import axios from 'axios';

const DepartmentService = {
    findAll: async () => {
        const backendUrl = 'http://localhost:4081';
        const response = await axios.get(`${backendUrl}/api/departments`);
        return response.data;
    }
};

export default DepartmentService;
