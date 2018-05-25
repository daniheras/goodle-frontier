import axios from 'axios';
import { $api_URL } from "./constants";

export default axios.create({
    baseURL: $api_URL,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': "bearer " + JSON.parse(sessionStorage.getItem('user')).token,
    }
  });