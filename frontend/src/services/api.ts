import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3333", // your AdonisJS backend URL

});
console.log(API)
console.log(API.get("/posts"))

export const getPosts = () => API.get("/posts");
export const getPost = (id: number) => API.get(`/posts/${id}`);
export const createPost = (data: any) => API.post("/posts", data);
export const updatePost = (id: number, data: any) =>
  API.put(`/posts/${id}`, data);
export const deletePost = (id: number) => API.delete(`/posts/${id}`);
