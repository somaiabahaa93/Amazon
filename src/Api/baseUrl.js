import axios from "axios";
// const baseURL=axios.create({baseURL:"http://127.0.0.1:8000"})
// for production mode
const baseURL = axios.create({ baseURL: " https://node-ecomm24.vercel.app" });
// this is deploy of vercel
// https://node-eco24.vercel.app
// this is for heroku
// https://e-commerce-node-5e796e6e3b82.herokuapp.com
export default baseURL;
