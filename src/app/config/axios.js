import axios from 'axios';
import { $api_URL } from "./constants";

var token = sessionStorage.getItem('user') ? JSON.parse(sessionStorage.getItem('user')).token : null;
let headers = {'Content-Type': 'application/json'};
if (token) {
    headers.Authorization = "bearer " + token;
}

export default axios.create({
    baseURL: $api_URL,
    headers

  });