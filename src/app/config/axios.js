import axios from 'axios';
import { $api_URL } from "./constants";

var token = sessionStorage.getItem('token') ? JSON.parse(sessionStorage.getItem('token')).token : null;
let headers = {'Content-Type': 'application/json'};

if (token) {
    headers.Authorization = "bearer " + token;
}

export default axios.create({
    baseURL: $api_URL,
    headers: headers

  });