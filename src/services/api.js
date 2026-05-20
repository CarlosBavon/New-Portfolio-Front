import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'https://new-portfolio-back-m948.onrender.com/api';

const api = axios.create({
    baseURL: API_URL,
    headers: { 'Content-Type': 'application/json' }
});

export const fetchProjects = () => api.get('/projects');
export const incrementProjectClick = (id) => api.put(`/projects/${id}/click`);
export const sendMessage = (data) => api.post('/messages', data);
export const fetchStats = () => api.get('/stats');
export const incrementVisitor = () => api.post('/visitor/increment');

export default api;