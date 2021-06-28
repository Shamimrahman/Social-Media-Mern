import axios from "axios";
const url = "http://localhost:5000/post";
export const createPost = (newPost) => axios.post(url, newPost);
export const fetchPosts = () => axios.get(url);
export const updatePost = (id, update) => axios.patch(`${url}/${id}`, update);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
