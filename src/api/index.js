import axios from "axios";

const URL = "https://memories-mern-app-backened.onrender.com/posts";

export const fetchPosts = () => axios.get(URL);

export const createPost = (newPost) => axios.post(URL, newPost);

export const updatePost = (id, updatedPost) =>
  axios.patch(`${URL}/${id}`, updatedPost);

export const deletePost = (id) => axios.delete(`${URL}/${id}`);

export const likePost = (id) => axios.patch(`${URL}/${id}/likePost`);
