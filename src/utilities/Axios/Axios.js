import axios from "axios";
import { Json } from "styled-icons/simple-icons";

export const Axios = axios.create({
    baseUrl:"https://talharic-url-shortener.herokuapp.com/",
    header:{
        "Content-Type": "application/json"
    }
})

export const AxiosPost = (path,body) => Axios.post(
    path,
    body
);
