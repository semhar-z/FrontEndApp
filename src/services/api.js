import axios from 'axios';

const api = axios.create({
  baseURL: 'https://mern-app-8dn1.onrender.com/api/items', 
});

export const getItems = () => api.get('/');
export const getItem = (id) => api.get(`/${id}`);
export const getItemByPostId = (postId) => api.get(`/postId/${postId}`);
export const createItem = (data) => api.post('/', data);
export const updateItemByPostId = (postId, data) => api.put(`/postId/${postId}`, data);
export const deleteItem = (id) => api.delete(`/${id}`);
